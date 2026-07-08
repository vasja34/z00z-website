# Scripts

This directory contains the operator-facing helpers for the website.

## Current website scripts

- `verify.sh` - Runs the current website verification path: `npm run lint`, `npm run verify:search`, and `npm run build`.
- `verify-search-coverage.mjs` - Confirms every file-backed content page is reachable from the search index by its own title query.
- `play_tone.sh` - Plays the completion sound. Prefers `public/assets/sounds/` and falls back to `scripts/sounds/`.
- `gen_tree.sh` - Generates a readable directory tree. By default it skips generated directories such as `.git`, `node_modules`, `.next`, and `.temp`.
- `run_pentest_tools.sh` - Canonical pentest entrypoint. It dispatches into `scripts/penetration/` and writes run output under `reports/`.
- `../pack_z00z_website_project.sh` - Packs the website checkout into a portable archive.
- `../unpack_z00z_website_project.sh` - Restores the website checkout on host or in Docker, then runs `npm ci` and `npm run verify`.

## Active pentest surfaces

The pentest source and orchestration logic live under `scripts/penetration/`:

- `scripts/penetration/`
- `scripts/penetration/install_pentest_tools.sh`
- `scripts/penetration/check_pentest_tools.sh`
- `scripts/penetration/scope.yaml`

Installed payloads, wrappers, caches, Docker replay assets, and manifests stay
under `tools/penetration/`. Reports from actual runs go to
`reports/z00z-pentests-report-*`.

## Legacy archive

`scripts/legacy/` keeps copied Z00Z-era material that is not part of the
current website workflow:

- `scripts/legacy/build_wasm.sh`
- `scripts/legacy/remove_target.sh`
- `scripts/legacy/z00z_cleanup.sh`
- `scripts/legacy/wasm-readme.md`
