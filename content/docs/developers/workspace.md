---
title: "Rust Workspace"
description: "Map of all active workspace crates and their ownership boundaries."
toc: true
---
# Rust Workspace
> [!note]
> **Docs route:** `/docs/developers/workspace`
>
> **Target site route:** `/developers/workspace`
>
> **Maturity:** `Live code docs`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Map of all active workspace crates and their ownership boundaries.

When
: Used before selecting a crate for implementation or review.

Where
: Developers hub.

Who
: Contributors, reviewers, maintainers, and integration teams.

Why
: Z00Z is a layered workspace, not one monolithic node binary.

How
: Render layer map: utils, crypto, core, storage, wallets, RPC, rollup node, runtime services, simulator, telemetry, extensions, and OnionNet.

## Reader Lenses

::: tabs

@tab:active Purpose
Map of all active workspace crates and their ownership boundaries.

@tab Audience
Primary readers: Contributors, reviewers, maintainers, and integration teams.

@tab Delivery
Render layer map: utils, crypto, core, storage, wallets, RPC, rollup node, runtime services, simulator, telemetry, extensions, and OnionNet.

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
| [Migration Guides](/docs/developers/migration-guides) | Previous page in the same section order. |
| [Core Protocol API](/docs/developers/core) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `Cargo.toml, crates/z00z-crates-overview.md`
- Section: `Developers`
- Section message: builders need exact module ownership, runnable commands, API boundaries, and verification steps.
+++
