#!/usr/bin/env bash

# pack_z00z_website_project.sh
#
# Purpose:
#   Build a portable archive for the website restore and pentest Docker replay
#   paths without copying runtime caches or generated tool payloads into the
#   archive.
#
# Default run mode:
#   ./pack_z00z_website_project.sh
#
#   Expected result:
#   - Creates ./z00z-website-<YYYY-MM-DD>.tar.gz in the project root.
#   - Prefixes archive members with the repository directory name.
#   - Adds a .portable-transfer/manifest.json contract file.
#   - Excludes heavy local tool payloads and generated runtime directories.
#
# Supported flags:
#   --output <path>
#     Write the archive to a custom path. Relative paths resolve from the
#     current working directory.
#
#   --without-git
#     Compatibility alias. Git history is always excluded.
#
#   --keep-tmp
#     Compatibility flag retained for parity with the upstream Z00Z pack flow.
#     This lightweight website packer does not create a persistent temp tree.
#
#   -h, --help
#     Print the short CLI usage summary and exit.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$SCRIPT_DIR"
PROJECT_NAME="$(basename "$PROJECT_ROOT")"
DEFAULT_ARCHIVE_DATE="$(date +%F)"
DEFAULT_OUTPUT_NAME="z00z-website-${DEFAULT_ARCHIVE_DATE}.tar.gz"

OUTPUT_PATH="$PROJECT_ROOT/$DEFAULT_OUTPUT_NAME"

usage() {
  cat <<EOF
Usage:
  ./pack_z00z_website_project.sh [--output <archive.tar.gz>] [--without-git] [--keep-tmp]

Creates a portable archive for website restore and archive-driven pentest Docker replay.

Options:
  --output <path>  Archive path. Default: ./$DEFAULT_OUTPUT_NAME
  --without-git    Compatibility alias. Git history is always excluded.
  --keep-tmp       Compatibility flag; no persistent temp tree is kept here.
  -h, --help       Show this help.
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --output)
      [[ -n "${2:-}" ]] || {
        echo "ERROR: --output requires a value" >&2
        exit 1
      }
      OUTPUT_PATH="$2"
      shift 2
      ;;
    --without-git|--keep-tmp)
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "ERROR: unknown argument: $1" >&2
      exit 1
      ;;
  esac
done

case "$OUTPUT_PATH" in
  /*) ;;
  *) OUTPUT_PATH="$PWD/$OUTPUT_PATH" ;;
esac

python3 - "$PROJECT_ROOT" "$OUTPUT_PATH" "$PROJECT_NAME" <<'PY'
from __future__ import annotations

import io
import json
import os
import sys
import tarfile
from datetime import datetime, timezone
from pathlib import Path

project_root = Path(sys.argv[1]).resolve()
output_path = Path(sys.argv[2]).resolve()
project_name = sys.argv[3]

excluded_exact_dirs = {
    ".git",
    ".next",
    "node_modules",
    "out",
    "build",
    "reports",
    ".temp",
    ".codex",
    "tools/formal_verification",
    "tools/penetration/cache",
    "tools/penetration/cargo",
    "tools/penetration/go",
    "tools/penetration/python/bin",
    "tools/penetration/python/pipx",
    "tools/penetration/python/uv-tools",
}
excluded_prefix_dirs = {
    "__pycache__",
}
excluded_exact_files = {
    output_path,
}


def rel_posix(path: Path) -> str:
    if path == project_root:
        return ""
    return path.relative_to(project_root).as_posix()


def is_excluded_dir(path: Path) -> bool:
    rel = rel_posix(path)
    if not rel:
        return False
    if rel in excluded_exact_dirs:
        return True
    return any(part in excluded_prefix_dirs for part in path.relative_to(project_root).parts)


def is_excluded_file(path: Path) -> bool:
    if path.resolve() in excluded_exact_files:
        return True
    return any(part in excluded_prefix_dirs for part in path.relative_to(project_root).parts)


output_path.parent.mkdir(parents=True, exist_ok=True)
if output_path.exists():
    output_path.unlink()

with tarfile.open(output_path, "w:gz") as archive:
    for root, dirs, files in os.walk(project_root, topdown=True, followlinks=False):
        root_path = Path(root)
        dirs[:] = [
            item
            for item in dirs
            if not is_excluded_dir(root_path / item)
        ]
        for file_name in files:
            file_path = root_path / file_name
            if is_excluded_file(file_path):
                continue
            rel = file_path.relative_to(project_root).as_posix()
            archive.add(
                file_path,
                arcname=f"{project_name}/{rel}",
                recursive=False,
            )

    manifest = {
        "version": 1,
        "created_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "project_root_name": project_name,
        "excluded_paths": {
            "exact_dirs": sorted(excluded_exact_dirs),
        },
    }
    manifest_bytes = (
        json.dumps(manifest, indent=2, sort_keys=True) + "\n"
    ).encode("utf-8")
    manifest_info = tarfile.TarInfo(
        f"{project_name}/.portable-transfer/manifest.json"
    )
    manifest_info.size = len(manifest_bytes)
    manifest_info.mode = 0o644
    archive.addfile(manifest_info, io.BytesIO(manifest_bytes))
PY

echo "archive_path=$OUTPUT_PATH"
