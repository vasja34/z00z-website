---
title: "WASM Wallet"
description: "Browser-compatible wallet build and integration docs."
toc: true
---
# WASM Wallet
> [!note]
> **Docs route:** `/docs/developers/wasm-wallet`
>
> **Target site route:** `/developers/wasm-wallet`
>
> **Maturity:** `Live + integration docs needed`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Browser-compatible wallet build and integration docs.

When
: Used by frontend teams building wallet UI or browser demos.

Where
: Developers and Wallet product pages.

Who
: Frontend developers, wallet teams, and QA.

Why
: The wallet crate explicitly supports WASM and browser transport lanes.

How
: Document wasm target setup, build scripts, worker surface, browser storage limitations, RPC clients, and security warnings.

## Reader Lenses

::: tabs

@tab:active Purpose
Browser-compatible wallet build and integration docs.

@tab Audience
Primary readers: Frontend developers, wallet teams, and QA.

@tab Delivery
Document wasm target setup, build scripts, worker surface, browser storage limitations, RPC clients, and security warnings.

:::

## Section Lens

Source
: Cargo workspace metadata, crate READMEs, crate root exports, examples, tests, scripts, and generated docs.

Message
: builders need exact module ownership, runnable commands, API boundaries, and verification steps.

UX
: a dense builder guide with command blocks, module maps, tabs for roles, and explicit source-file links.

Include
: setup commands, crate maps, stable-vs-internal API labels, examples, failure modes, and verification gates.

Avoid
: invented SDK behavior, snippets that do not map to code, or tutorial prose that hides safety boundaries.

## Navigation Links

| Link | Why it matters |
| --- | --- |
| [Developers](/docs/developers) | Parent hub and primary context for this page. |
| [Configuration And Genesis](/docs/developers/configuration-genesis) | Previous page in the same section order. |
| [Examples And Tutorials](/docs/developers/examples) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_wallets/README.md, crates/z00z_wallets/src/wasm, scripts/build_wasm.sh`
- Section: `Developers`
- Section message: builders need exact module ownership, runnable commands, API boundaries, and verification steps.
+++
