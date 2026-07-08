---
title: "Payment Requests And Receiver Intents"
description: "Builder docs for signed receiver cards, payment requests, validation, one-time receiver material, and wallet-facing payment workflows."
toc: true
---
# Payment Requests And Receiver Intents
> [!warning]
> **Docs route:** `/docs/developers/payment-requests`
>
> **Target site route:** `/developers/payment-requests`
>
> **Maturity:** `Live wallet RPC + target tutorials`
>
> This page describes target or draft behavior. Avoid present-tense production claims unless implementation evidence is added.

## Page Brief

What
: Builder docs for signed receiver cards, payment requests, validation, one-time receiver material, and wallet-facing payment workflows.

When
: Used when integrating receive flows, QR payment requests, merchant requests, or app-level checkout with the Z00Z wallet.

Where
: Developers wallet docs, Wallet product pages, examples, and support troubleshooting.

Who
: Wallet developers, frontend teams, merchant-app builders, QA, and security reviewers.

Why
: NEAR and Sui both expose intent/payment flows as developer concepts; Z00Z has concrete wallet RPC around receiver cards and payment requests that deserves a focused page.

How
: Document `wallet.key.get_receiver_card`, `wallet.key.create_payment_request`, `wallet.key.validate_payment_request`, metadata limits, TOFU warnings, replay boundaries, UI states, and runnable examples.

## Reader Lenses

::: tabs

@tab:active Purpose
Builder docs for signed receiver cards, payment requests, validation, one-time receiver material, and wallet-facing payment workflows.

@tab Audience
Primary readers: Wallet developers, frontend teams, merchant-app builders, QA, and security reviewers.

@tab Delivery
Document `wallet.key.get_receiver_card`, `wallet.key.create_payment_request`, `wallet.key.validate_payment_request`, metadata limits, TOFU warnings, replay boundaries, UI states, and runnable examples.

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
| [Wallet SDK](/docs/developers/wallet) | Previous page in the same section order. |
| [Storage And HJMT](/docs/developers/storage-hjmt) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_wallets/src/adapters/rpc/methods/key.rs, crates/z00z_wallets/src/egui_views/ascii-mockups/wallet.receiver_card.md`
- Section: `Developers`
- Section message: builders need exact module ownership, runnable commands, API boundaries, and verification steps.
+++
