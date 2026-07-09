---
title: "Troubleshooting"
description: "Step-by-step fixes for setup, lint, search, build, and verification failures in the current docs repository."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# Troubleshooting

> [!note]
> **Maturity:** `Live repo troubleshooting flow`
>
> **Use this page when:** A local docs or site command fails and you need the shortest path back to a reproducible state.

This page is intentionally narrow. It only documents commands and failure modes that the current repository can support directly. If a guide tells you to run a non-local runtime command that does not exist in `package.json`, treat that as stale or out of scope for this repo.

## Start From A Clean Baseline

Most local problems are easier to diagnose if you begin with the same known path:

```bash
npm ci
npm run lint
npm run verify
```

The last command matters because `npm run verify` is the canonical completion gate in this repo. It runs lint, search coverage, and a production build. If you skip it, you may miss a problem that only appears after a successful dev session.

## If Install Fails

The fastest checks are:

| Symptom | Likely cause | Next action |
| --- | --- | --- |
| `npm ci` fails immediately | Wrong Node version or broken dependency state | Check the Node requirement in `README.md`, then retry from a clean install |
| Lockfile mismatch errors | `package-lock.json` drifted from `package.json` | Reconcile the intended dependency change before continuing |
| Native package build issues | Local environment mismatch | Record the exact package name and platform before escalating |

If the failure is ordinary package installation trouble, do not paste secrets, tokens, or private environment files into an issue. The support path only needs the failing command, error essence, and platform details.

## If The Dev Server Does Not Start

Run:

```bash
npm run dev
```

If it fails, check for:

- another process already using the local port;
- a dependency install that never completed cleanly;
- an earlier content or config edit that broke startup before the page you were working on even loads.

If the local page loads in dev but later fails in `npm run verify`, the problem is usually build-only or search-coverage related rather than a generic startup problem.

## If Lint Fails

`npm run lint` is the fastest local quality signal. In this repo, lint failures commonly come from:

- malformed frontmatter;
- bad imports or dead code in site files;
- content edits that broke a local rule surface;
- accidental path or naming drift after moving docs content.

Fix lint before chasing deeper build problems. A large fraction of `npm run verify` failures are just delayed lint failures.

## If `npm run verify` Fails

This is the most important support case because it is also the completion gate.

| Verify step | What a failure usually means |
| --- | --- |
| Lint | Code or content issues must be fixed first |
| Search coverage | A page rename, title drift, or content regression broke discoverability assumptions |
| Build | Rendering, routing, or content integration failed under production settings |

Do not summarize a verify failure as "build broken" if you have not checked which phase failed. The next action depends on that distinction.

## If Search Coverage Fails

Search coverage failures usually mean a docs change stopped exposing the terms readers expect to find. Re-check:

- page title and description;
- nearby navigation entries;
- whether important terms disappeared from the page during a rewrite;
- whether a moved file still matches the current `_meta.yaml` layout.

This is one reason `npm run verify` is required even for pure content work. A page can read well and still become harder to discover.

## If A Markdown Page Renders Incorrectly

For content issues, check the simplest things first:

1. frontmatter delimiters are valid;
2. headings use normal Markdown structure;
3. internal links still point at live doc routes;
4. include fragments remain private when they live under underscored folders;
5. any evidence section still exists at the end of the page.

If the render issue came from a big rewrite, compare the new page against the local conventions shown across the other rewritten docs rather than guessing at a new pattern.

## What To Collect Before Escalating

When you need help, collect only the smallest useful bundle:

- the command you ran;
- the exact error line or short summary;
- the file path you edited;
- whether `npm run lint` and `npm run verify` both fail or only one does;
- your Node version if install or toolchain behavior looks suspicious.

That is enough for most docs-repo issues. It is also safe to share. Do **not** include secrets, private keys, or wallet recovery data in a support request.

## When To Leave Troubleshooting And Switch Paths

Switch to [Developer Support](/docs/support/developer-support) if the problem is really about reproduction, repo workflow, or a multi-file contributor issue. Switch to [Wallet Recovery And Safety](/docs/support/wallet-recovery-safety) if the user is under pressure to reveal secret material. Switch to [/docs/security](/docs/security) if the failure looks like a privacy leak, exploit path, or trusted-channel impersonation problem.

## Evidence and Further Reading

- `README.md` documents the supported local setup flow, including the Node requirement and the primary `npm` commands referenced here.
- `package.json` defines the live scripts for `dev`, `lint`, `verify:search`, and `verify`.
- `scripts/verify.sh` is the repo-local source of truth showing that `npm run verify` runs lint, search coverage, and a production build.
- `content/whitepapers/Main-Whitepaper.md` and `content/whitepapers/Privacy-Threat-Model.md` explain why narrow, reproducible evidence matters more than vague "it failed somehow" reporting in a privacy-focused project.
