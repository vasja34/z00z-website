#!/usr/bin/env bash
# gen_tree.sh
#
# Generate a hierarchical tree structure of a given directory.
# Uses classic connectors ├──, └──, │ plus folder/file icons 📁 / 📄.
#
# USAGE:
#   ./gen_tree.sh <directory> [output-file]
#   ./gen_tree.sh --all <directory> [output-file]
#
# EXAMPLES:
#   ./scripts/gen_tree.sh ./src
#   ./scripts/gen_tree.sh ./public public_tree.txt
#   ./scripts/gen_tree.sh ./src project_tree.txt
#
# OUTPUT:
#   - A hierarchical tree is written into the output file (default: TREE.txt).
#   - A flat list of all files/folders is written into TREE_FLAT.txt.
#   - By default, generated directories are skipped: .git, node_modules, .next,
#     .temp, coverage, dist, build. Use --all to include them.

set -e

SHOW_ALL=0

# Show help if requested
if [[ "${1:-}" == "-h" || "${1:-}" == "--help" ]]; then
  grep "^# " "$0" | sed 's/^# //'
  exit 0
fi

if [[ "${1:-}" == "--all" ]]; then
  SHOW_ALL=1
  shift
fi

DIR="${1:-.}"          # directory to scan (default: current directory)
OUT="${2:-TREE.txt}"   # output file (default: TREE.txt)

# Common generated directories are hidden by default so trees stay readable in
# this Next.js workspace.
should_skip() {
  local name="$1"

  if [[ "$SHOW_ALL" -eq 1 ]]; then
    return 1
  fi

  case "$name" in
    .git|node_modules|.next|.temp|coverage|dist|build)
      return 0
      ;;
  esac

  return 1
}

# Check if directory exists
if [ ! -d "$DIR" ]; then
  echo "Error: directory '$DIR' not found."
  exit 1
fi

# Recursive function to print directory tree
print_tree() {
  local path="$1"
  local prefix="$2"

  # Collect entries (dirs + files)
  local entries=()
  local d
  local name

  shopt -s dotglob nullglob
  for d in "$path"/*; do
    [ -e "$d" ] || continue
    name=$(basename "$d")
    [[ "$name" == "." || "$name" == ".." ]] && continue
    if should_skip "$name"; then
      continue
    fi
    entries+=("$d")
  done
  shopt -u dotglob nullglob

  local count=${#entries[@]}
  local i=0

  for e in "${entries[@]}"; do
    i=$((i+1))
    name=$(basename "$e")
    local connector="├──"
    local new_prefix="$prefix│   "
    if [ $i -eq $count ]; then
      connector="└──"
      new_prefix="$prefix    "
    fi

    if [ -d "$e" ]; then
      echo "${prefix}${connector} 📁 $name/"
      print_tree "$e" "$new_prefix"
    else
      echo "${prefix}${connector} 📄 $name"
    fi
  done
}

# Generate hierarchical tree into OUT
{
  echo "📁 $(basename "$DIR")/"
  print_tree "$DIR" ""
} > "$OUT"

# Generate flat list
FLAT="${OUT%.txt}_FLAT.txt"
if [[ "$SHOW_ALL" -eq 1 ]]; then
  find "$DIR" -type d -printf "📁 %P/\n" -o -type f -printf "📄 %P\n" > "$FLAT"
else
  find "$DIR" \
    \( -name .git -o -name node_modules -o -name .next -o -name .temp -o -name coverage -o -name dist -o -name build \) -prune \
    -o -type d -printf "📁 %P/\n" \
    -o -type f -printf "📄 %P\n" > "$FLAT"
fi

echo "Tree written to $OUT"
echo "Flat list written to $FLAT"
