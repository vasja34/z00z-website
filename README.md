# Z00Z Website

Next.js 16 website workspace for local UI development, verification, and portable archive restore.

This README is for two cases:

- you want to run the website locally as fast as possible;
- you want a copy-paste-safe command reference for verify, build, and restore flows.

## Quickstart

> [!IMPORTANT]
> Use Node.js `>= 20.9.0`. Node 22 is the safest default for this repository.

1. Install dependencies:

```bash
npm ci
```

2. Start the local development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

The local dev server was verified in this repository with `npm run dev`.

## Local Commands

### Install dependencies

```bash
npm ci
```

If you intentionally regenerate the lockfile:

```bash
npm install
```

### Run in development mode

```bash
npm run dev
```

Expected result:

- local app at `http://localhost:3000`
- hot reload enabled

### Run the project verification path

```bash
npm run verify
```

This runs:

- `npm run lint`
- `npm run build`

### Build for production

```bash
npm run build
```

### Start the built app locally

```bash
npm run build
npm run start
```

Use this when you want to test the production server instead of the dev server.

## Project Layout

- `src/app/` - App Router pages, layout, and global styles
- `public/` - static runtime assets
- `scripts/verify.sh` - repository verification script
- `pack_z00z_website_project.sh` - portable archive packer
- `unpack_z00z_website_project.sh` - portable archive restore script

## Portable Pack And Restore

Create a portable archive of the current checkout:

```bash
./pack_z00z_website_project.sh
```

Restore the archive on the host and verify the website:

```bash
./unpack_z00z_website_project.sh --archive ./z00z-website-YYYY-MM-DD.tar.gz --yes
```

Restore the archive inside Docker and export the restored project to a host directory:

```bash
./unpack_z00z_website_project.sh \
  --archive ./z00z-website-YYYY-MM-DD.tar.gz \
  --docker-sandbox \
  --sandbox-export-dir /tmp/z00z-website-restore
```

## Troubleshooting

- `npm ci` fails immediately:
  check your Node.js version first. This repo needs `>= 20.9.0`.
- `localhost:3000` is already busy:
  stop the other local server before running `npm run dev` or `npm run start`.
- `npm run start` fails:
  run `npm run build` first.
- `npm run verify` fails:
  fix the reported lint or build error before continuing.

## Current Assumptions

- No required environment variables are needed for the current website stub.
- The canonical local package manager in this repository is `npm`.
- The canonical local verification command is `npm run verify`.
