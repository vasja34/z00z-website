#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd -- "$SCRIPT_DIR/.." && pwd)"

cd "$REPO_ROOT"

echo "==> Lint"
npm run lint

echo
echo "==> Search Coverage"
npm run verify:search

echo
echo "==> Build"
npm run build
