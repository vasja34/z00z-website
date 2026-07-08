---
title: "Crypto Facade"
description: "Approved cryptographic API over Tari-backed primitives and Z00Z-owned domain, hash, KDF, AEAD, commitment, and proof surfaces."
toc: true
---
# Crypto Facade
> [!note]
> **Docs route:** `/docs/developers/crypto`
>
> **Target site route:** `/developers/crypto`
>
> **Maturity:** `Live code`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Approved cryptographic API over Tari-backed primitives and Z00Z-owned domain, hash, KDF, AEAD, commitment, and proof surfaces.

When
: Used before calling cryptographic functions from any workspace crate.

Where
: Developers and Security.

Who
: Rust contributors, auditors, protocol engineers, wallet engineers, and reviewers.

Why
: Keeps vendor code isolated and prevents direct dependency on internal Tari subpaths.

How
: Document public facade, expert lane, test-only AEAD boundaries, safety checklist, and verification commands.

## Reader Lenses

::: tabs

@tab:active Purpose
Approved cryptographic API over Tari-backed primitives and Z00Z-owned domain, hash, KDF, AEAD, commitment, and proof surfaces.

@tab Audience
Primary readers: Rust contributors, auditors, protocol engineers, wallet engineers, and reviewers.

@tab Delivery
Document public facade, expert lane, test-only AEAD boundaries, safety checklist, and verification commands.

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
| [Core Protocol API](/docs/developers/core) | Previous page in the same section order. |
| [Wallet SDK](/docs/developers/wallet) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_crypto/README.md, crates/z00z_crypto/src/lib.rs`
- Section: `Developers`
- Section message: builders need exact module ownership, runnable commands, API boundaries, and verification steps.
+++
