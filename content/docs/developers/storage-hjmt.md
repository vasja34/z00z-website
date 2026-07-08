---
title: "Storage And HJMT"
description: "Developer docs for settlement storage, HJMT, checkpoints, serialization, snapshots, durable backend seams, and proof generation."
toc: true
---
# Storage And HJMT
> [!note]
> **Docs route:** `/docs/developers/storage-hjmt`
>
> **Target site route:** `/developers/storage-hjmt`
>
> **Maturity:** `Live code`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Developer docs for settlement storage, HJMT, checkpoints, serialization, snapshots, durable backend seams, and proof generation.

When
: Used before changing state, proofs, roots, recovery, or benchmarks.

Where
: Developers and Protocol settlement pages.

Who
: Storage engineers, validator authors, benchmarkers, and reviewers.

Why
: Storage is semantic authority for roots, paths, and replay-safe settlement evidence.

How
: Document SettlementStore, SettlementPath, proof blobs, checkpoint helpers, backend interfaces, fixture support, and performance caveats.

## Reader Lenses

::: tabs

@tab:active Purpose
Developer docs for settlement storage, HJMT, checkpoints, serialization, snapshots, durable backend seams, and proof generation.

@tab Audience
Primary readers: Storage engineers, validator authors, benchmarkers, and reviewers.

@tab Delivery
Document SettlementStore, SettlementPath, proof blobs, checkpoint helpers, backend interfaces, fixture support, and performance caveats.

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
| [Payment Requests And Receiver Intents](/docs/developers/payment-requests) | Previous page in the same section order. |
| [RPC Transport](/docs/developers/rpc) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_storage/README.md, docs/tech-papers/done/Z00Z-HJMT-Design.md`
- Section: `Developers`
- Section message: builders need exact module ownership, runnable commands, API boundaries, and verification steps.
+++
