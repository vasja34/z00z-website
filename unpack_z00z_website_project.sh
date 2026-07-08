#!/usr/bin/env bash

# unpack_z00z_website_project.sh
#
# Purpose:
#   Restore a portable website archive on the host or inside a disposable
#   Docker sandbox, install application dependencies, and verify
#   that the restored checkout is runnable.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEFAULT_ARCHIVE_DATE="$(date +%F)"
DEFAULT_ARCHIVE_NAME="z00z-website-${DEFAULT_ARCHIVE_DATE}.tar.gz"
DEFAULT_DOCKER_IMAGE="z00z-website-unpack-sandbox:node22"
DEFAULT_SANDBOX_EXPORT_DIR="$SCRIPT_DIR/reports/z00z-website-docker-unpack-$(date +%Y%m%d-%H%M%S)"
DOCKERFILE_PATH="$SCRIPT_DIR/config/docker/unpack.Dockerfile"

ARCHIVE_PATH=""
DEST_PATH=""
AUTO_YES=0
SKIP_VERIFY=0
DOCKER_SANDBOX=0
DOCKER_IMAGE="$DEFAULT_DOCKER_IMAGE"
SANDBOX_EXPORT_DIR="$DEFAULT_SANDBOX_EXPORT_DIR"
KEEP_TMP=0
TMP_ROOT=""

usage() {
  cat <<EOF
Usage:
  ./unpack_z00z_website_project.sh [--archive <archive.tar.gz>] [--dest <project-dir>] [--yes] [--skip-verify] [--docker-sandbox] [--docker-image <image>] [--sandbox-export-dir <host-dir>] [--keep-tmp]

Restores a portable Z00Z website archive, installs project dependencies, and
verifies the restored checkout.

Options:
  --archive <path>       Archive path. Default: ./$DEFAULT_ARCHIVE_NAME
                         If missing, auto-detect the newest ./z00z-website-*.tar.gz in cwd.
  --dest <path>          Final restored project directory in host mode.
  --yes                  Non-interactive mode. Required when --dest is omitted.
  --skip-verify          Install app dependencies but skip npm run verify.
  --docker-sandbox       Run the restore inside a disposable Docker container.
  --docker-image <img>   Docker image for --docker-sandbox. Default: $DEFAULT_DOCKER_IMAGE
  --sandbox-export-dir   Final restored project directory written by the Docker sandbox.
                         Default: $DEFAULT_SANDBOX_EXPORT_DIR
  --keep-tmp             Keep the temporary extraction directory for debugging.
  -h, --help             Show this help.
EOF
}

log() {
  printf '[unpack-z00z-website] %s\n' "$1"
}

warn() {
  printf '[unpack-z00z-website] WARNING: %s\n' "$1" >&2
}

die() {
  printf '[unpack-z00z-website] ERROR: %s\n' "$1" >&2
  exit 1
}

have() {
  command -v "$1" >/dev/null 2>&1
}

cleanup() {
  if [[ "$KEEP_TMP" -eq 1 ]]; then
    if [[ -n "$TMP_ROOT" && -d "$TMP_ROOT" ]]; then
      log "Keeping temp directory: $TMP_ROOT"
    fi
    return 0
  fi

  if [[ -n "$TMP_ROOT" && -d "$TMP_ROOT" ]]; then
    case "$TMP_ROOT" in
      /tmp/z00z-website-unpack.*)
        rm -rf -- "$TMP_ROOT"
        ;;
      *)
        warn "Refusing to remove unexpected temp directory: $TMP_ROOT"
        ;;
    esac
  fi
}

trap cleanup EXIT

resolve_any_path() {
  local raw_path="$1"
  if [[ "$raw_path" = /* ]]; then
    printf '%s\n' "$raw_path"
    return
  fi
  printf '%s\n' "$PWD/$raw_path"
}

select_archive_path() {
  local newest=""

  if [[ -n "$ARCHIVE_PATH" ]]; then
    ARCHIVE_PATH="$(resolve_any_path "$ARCHIVE_PATH")"
    [[ -f "$ARCHIVE_PATH" ]] || die "archive not found: $ARCHIVE_PATH"
    return 0
  fi

  if [[ -f "$PWD/$DEFAULT_ARCHIVE_NAME" ]]; then
    ARCHIVE_PATH="$PWD/$DEFAULT_ARCHIVE_NAME"
    return 0
  fi

  newest="$(find "$PWD" -maxdepth 1 -type f -name 'z00z-website-*.tar.gz' -printf '%T@ %p\n' 2>/dev/null | sort -nr | head -n 1 | awk '{print $2}')"
  [[ -n "$newest" ]] || die "no archive provided and no z00z-website-*.tar.gz archive found in $PWD"
  ARCHIVE_PATH="$newest"
}

ensure_final_dest_ready() {
  local target="$1"
  local parent_dir

  parent_dir="$(dirname "$target")"
  mkdir -p "$parent_dir"

  if [[ -e "$target" ]]; then
    if [[ -d "$target" ]]; then
      if find "$target" -mindepth 1 -print -quit | grep -q .; then
        die "destination already exists and is not empty: $target"
      fi
      rmdir "$target"
      return 0
    fi
    die "destination already exists and is not a directory: $target"
  fi
}

extract_archive_root() {
  local archive_path="$1"
  local extracted_root=""
  TMP_ROOT="$(mktemp -d /tmp/z00z-website-unpack.XXXXXX)"
  tar -xzf "$archive_path" -C "$TMP_ROOT"
  extracted_root="$(find "$TMP_ROOT" -mindepth 1 -maxdepth 1 -type d | head -n 1 || true)"
  [[ -n "$extracted_root" ]] || die "archive did not contain a top-level project directory"
  if [[ "$(find "$TMP_ROOT" -mindepth 1 -maxdepth 1 -type d | wc -l | tr -d ' ')" != "1" ]]; then
    die "archive must contain exactly one top-level project directory"
  fi
  printf '%s\n' "$extracted_root"
}

install_node_dependencies() {
  if [[ -f package-lock.json ]]; then
    npm ci --no-audit --no-fund
    return 0
  fi
  npm install --no-audit --no-fund
}

run_restore_flow() {
  local extracted_root="$1"
  local project_dir="$2"

  ensure_final_dest_ready "$project_dir"
  mv "$extracted_root" "$project_dir"

  cd "$project_dir"
  [[ -f package.json ]] || die "restored project is missing package.json: $project_dir"
  [[ -x ./scripts/verify.sh ]] || die "missing verify.sh in restored project"

  log "Installing website dependencies with npm"
  install_node_dependencies

  if [[ "$SKIP_VERIFY" -eq 0 ]]; then
    log "Running website verification"
    npm run verify
  else
    log "Skipping npm run verify as requested"
  fi
}

build_default_docker_image_if_needed() {
  [[ "$DOCKER_IMAGE" == "$DEFAULT_DOCKER_IMAGE" ]] || return 0
  [[ -f "$DOCKERFILE_PATH" ]] || die "missing Dockerfile for website unpack sandbox: $DOCKERFILE_PATH"
  log "Building Docker image $DEFAULT_DOCKER_IMAGE from config/docker/unpack.Dockerfile"
  docker build -t "$DEFAULT_DOCKER_IMAGE" -f "$DOCKERFILE_PATH" "$SCRIPT_DIR" >/dev/null
}

run_docker_sandbox_restore() {
  local export_dir_parent=""
  local export_dir_name=""
  local bootstrap_args=()
  local quoted_args=()
  local arg

  have docker || die "docker is required for --docker-sandbox"
  [[ -z "$DEST_PATH" ]] || die "--dest is not supported with --docker-sandbox; use --sandbox-export-dir instead"

  SANDBOX_EXPORT_DIR="$(resolve_any_path "$SANDBOX_EXPORT_DIR")"
  ensure_final_dest_ready "$SANDBOX_EXPORT_DIR"

  build_default_docker_image_if_needed

  export_dir_parent="$(dirname "$SANDBOX_EXPORT_DIR")"
  export_dir_name="$(basename "$SANDBOX_EXPORT_DIR")"
  mkdir -p "$export_dir_parent"

  bootstrap_args=(
    --archive /input/archive.tar.gz
    --dest "/host-output/$export_dir_name"
    --yes
  )
  if [[ "$SKIP_VERIFY" -eq 1 ]]; then
    bootstrap_args+=(--skip-verify)
  fi
  if [[ "$KEEP_TMP" -eq 1 ]]; then
    bootstrap_args+=(--keep-tmp)
  fi

  for arg in "${bootstrap_args[@]}"; do
    quoted_args+=("$(printf '%q' "$arg")")
  done

  docker run --rm -i \
    --user "$(id -u):$(id -g)" \
    -e HOME=/tmp/z00z-home \
    -v "$ARCHIVE_PATH:/input/archive.tar.gz:ro" \
    -v "$export_dir_parent:/host-output:rw" \
    "$DOCKER_IMAGE" \
    bash -lc "
      set -euo pipefail
      mkdir -p \"\$HOME\" /tmp/bootstrap
      tar -xzf /input/archive.tar.gz -C /tmp/bootstrap
      bootstrap_dir=\$(find /tmp/bootstrap -mindepth 1 -maxdepth 1 -type d | head -n 1)
      cd \"\$bootstrap_dir\"
      bash ./unpack_z00z_website_project.sh ${quoted_args[*]}
    "

  echo "sandbox_project_dir=$SANDBOX_EXPORT_DIR"
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --archive)
      [[ -n "${2:-}" ]] || die "--archive requires a value"
      ARCHIVE_PATH="$2"
      shift 2
      ;;
    --dest)
      [[ -n "${2:-}" ]] || die "--dest requires a value"
      DEST_PATH="$2"
      shift 2
      ;;
    --yes)
      AUTO_YES=1
      shift
      ;;
    --skip-verify)
      SKIP_VERIFY=1
      shift
      ;;
    --docker-sandbox)
      DOCKER_SANDBOX=1
      shift
      ;;
    --docker-image)
      [[ -n "${2:-}" ]] || die "--docker-image requires a value"
      DOCKER_IMAGE="$2"
      shift 2
      ;;
    --sandbox-export-dir)
      [[ -n "${2:-}" ]] || die "--sandbox-export-dir requires a value"
      SANDBOX_EXPORT_DIR="$2"
      shift 2
      ;;
    --keep-tmp)
      KEEP_TMP=1
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      die "unknown argument: $1"
      ;;
  esac
done

select_archive_path

if [[ "$DOCKER_SANDBOX" -eq 1 ]]; then
  run_docker_sandbox_restore
  exit 0
fi

if [[ -z "$DEST_PATH" ]]; then
  if [[ "$AUTO_YES" -eq 1 ]]; then
    DEST_PATH="$PWD/z00z-website"
  else
    die "--dest is required unless --yes is used"
  fi
fi

DEST_PATH="$(resolve_any_path "$DEST_PATH")"
EXTRACTED_ROOT="$(extract_archive_root "$ARCHIVE_PATH")"
run_restore_flow "$EXTRACTED_ROOT" "$DEST_PATH"

echo "project_dir=$DEST_PATH"
