---
title: "Wallet-Local Possession"
description: "Explains why ownership meaning starts in wallet-held secrets, receiver material, scans, and portable packages rather than public account rows."
toc: true
---
# Wallet-Local Possession
> [!note]
> **Docs route:** `/docs/protocol/wallet-local-possession`
>
> **Target site route:** `/protocol/wallet-local-possession`
>
> **Maturity:** `Live core`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Explains why ownership meaning starts in wallet-held secrets, receiver material, scans, and portable packages rather than public account rows.

When
: Used before wallet SDK pages, offline payments, selective disclosure, and cross-chain rights.

Where
: Protocol and Wallet developer docs.

Who
: Wallet builders, UX teams, auditors, and partners.

Why
: The wallet model is one of Z00Z's main category differences from public account chains.

How
: Describe receiver cards, payment requests, stealth output recovery, inventory, backups, and the boundary between local possession and checkpoint truth.

## Reader Lenses

::: tabs

@tab:active Purpose
Explains why ownership meaning starts in wallet-held secrets, receiver material, scans, and portable packages rather than public account rows.

@tab Audience
Primary readers: Wallet builders, UX teams, auditors, and partners.

@tab Delivery
Describe receiver cards, payment requests, stealth output recovery, inventory, backups, and the boundary between local possession and checkpoint truth.

:::

## Section Lens

Source
: the main whitepaper, companion protocol papers, HJMT design notes, and core/storage/wallet crate surfaces.

Message
: settlement authority, private possession, object semantics, checkpoints, and policy boundaries must stay distinct.

UX
: a technical reference page with diagrams first, then invariants, then implementation links.

Include
: state diagrams, object lifecycle diagrams, invariants, non-goals, maturity labels, and cross-links to developer APIs.

Avoid
: turning target architecture into present-tense implementation or merging DA, anchors, support, and settlement truth.

## Navigation Links

| Link | Why it matters |
| --- | --- |
| [Protocol](/docs/protocol) | Parent hub and primary context for this page. |
| [Settlement Model](/docs/protocol/settlement-model) | Previous page in the same section order. |
| [Checkpoints And Public Evidence](/docs/protocol/checkpoints) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `docs/Z00Z-Main-Whitepaper.md, crates/z00z_wallets/README.md, crates/z00z_wallets/src/lib.rs`
- Section: `Protocol`
- Section message: settlement authority, private possession, object semantics, checkpoints, and policy boundaries must stay distinct.
+++
