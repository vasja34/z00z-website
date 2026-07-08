---
title: "Configuration And Genesis"
description: "Genesis, asset registry, rights-enabled YAML, runtime config, and reproducible bootstrap docs."
toc: true
---
# Configuration And Genesis
> [!note]
> **Docs route:** `/docs/developers/configuration-genesis`
>
> **Target site route:** `/developers/configuration-genesis`
>
> **Maturity:** `Live code`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Genesis, asset registry, rights-enabled YAML, runtime config, and reproducible bootstrap docs.

When
: Used before local networks, fixtures, devnet setup, or configuration changes.

Where
: Developers and Operators.

Who
: Core engineers, simulator authors, operators, and reviewers.

Why
: Bootstrap authority must stay canonical and not be confused with secondary registry fixtures.

How
: Document GenesisConfig authority, registry YAML role, embedded configs, validation rules, and environment knobs.

## Reader Lenses

::: tabs

@tab:active Purpose
Genesis, asset registry, rights-enabled YAML, runtime config, and reproducible bootstrap docs.

@tab Audience
Primary readers: Core engineers, simulator authors, operators, and reviewers.

@tab Delivery
Document GenesisConfig authority, registry YAML role, embedded configs, validation rules, and environment knobs.

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
| [Simulator](/docs/developers/simulator) | Previous page in the same section order. |
| [WASM Wallet](/docs/developers/wasm-wallet) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_core/README.md, config/z00z_blockchain_config.yaml, crates/z00z_core/src/genesis`
- Section: `Developers`
- Section message: builders need exact module ownership, runnable commands, API boundaries, and verification steps.
+++
