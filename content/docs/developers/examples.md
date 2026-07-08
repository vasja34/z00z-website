---
title: "Examples And Tutorials"
description: "Practical walkthroughs for wallets, transfers, claim packages, storage proofs, local simulator, and runtime verification."
toc: true
---
# Examples And Tutorials
> [!note]
> **Docs route:** `/docs/developers/examples`
>
> **Target site route:** `/developers/examples`
>
> **Maturity:** `Live examples + site support`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Practical walkthroughs for wallets, transfers, claim packages, storage proofs, local simulator, and runtime verification.

When
: Used after quickstart when a builder wants concrete flows.

Where
: Developers, tutorials, and support.

Who
: New contributors, app developers, and test authors.

Why
: Sui and NEAR both emphasize example-first onboarding; Z00Z needs the same bridge from concept to code.

How
: Group examples by outcome, include runnable commands, point to source files, and mark maturity.

## Reader Lenses

::: tabs

@tab:active Purpose
Practical walkthroughs for wallets, transfers, claim packages, storage proofs, local simulator, and runtime verification.

@tab Audience
Primary readers: New contributors, app developers, and test authors.

@tab Delivery
Group examples by outcome, include runnable commands, point to source files, and mark maturity.

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
| [WASM Wallet](/docs/developers/wasm-wallet) | Previous page in the same section order. |
| [API Reference](/docs/developers/api-reference) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/*/examples, crates/*/tests, website/z00z_website-6.yaml`
- Section: `Developers`
- Section message: builders need exact module ownership, runnable commands, API boundaries, and verification steps.
+++
