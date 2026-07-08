---
title: "Wallet SDK"
description: "Wallet API docs for receiver cards, payment requests, object inventory, backups, RPC namespace, WASM support, and service facades."
toc: true
---
# Wallet SDK
> [!note]
> **Docs route:** `/docs/developers/wallet`
>
> **Target site route:** `/developers/wallet`
>
> **Maturity:** `Live + partial service closures`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Wallet API docs for receiver cards, payment requests, object inventory, backups, RPC namespace, WASM support, and service facades.

When
: Used by wallet app builders, frontend integrators, and test authors.

Where
: Developers and Wallet product pages.

Who
: Wallet engineers, UI teams, integration developers, and auditors.

Why
: The wallet is the user-side operating surface for private possession.

How
: Document cash boundary, object RPC methods, backup/import, stealth scanning, security notes, and implementation status.

## Reader Lenses

::: tabs

@tab:active Purpose
Wallet API docs for receiver cards, payment requests, object inventory, backups, RPC namespace, WASM support, and service facades.

@tab Audience
Primary readers: Wallet engineers, UI teams, integration developers, and auditors.

@tab Delivery
Document cash boundary, object RPC methods, backup/import, stealth scanning, security notes, and implementation status.

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
| [Crypto Facade](/docs/developers/crypto) | Previous page in the same section order. |
| [Payment Requests And Receiver Intents](/docs/developers/payment-requests) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_wallets/README.md, crates/z00z_wallets/src/lib.rs`
- Section: `Developers`
- Section message: builders need exact module ownership, runnable commands, API boundaries, and verification steps.
+++
