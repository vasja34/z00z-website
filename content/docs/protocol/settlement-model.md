---
title: "Settlement Model"
description: "Defines checkpoint-bound settlement, SettlementStateRoot, SettlementPath, terminal leaves, and proof envelopes."
toc: true
---
# Settlement Model
> [!note]
> **Docs route:** `/docs/protocol/settlement-model`
>
> **Target site route:** `/protocol/settlement-model`
>
> **Maturity:** `Live core`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Defines checkpoint-bound settlement, SettlementStateRoot, SettlementPath, terminal leaves, and proof envelopes.

When
: Used whenever finality, replay safety, or state authority is discussed.

Where
: Protocol, Developers storage docs, and Network checkpoint docs.

Who
: Storage engineers, validators, auditors, wallet engineers, and protocol reviewers.

Why
: Prevents package admission, DA publication, or soft confirmation from being confused with final settlement.

How
: Explain live state terms, inclusion/deletion/non-existence proofs, checkpoint root continuity, and the public evidence boundary.

## Reader Lenses

::: tabs

@tab:active Purpose
Defines checkpoint-bound settlement, SettlementStateRoot, SettlementPath, terminal leaves, and proof envelopes.

@tab Audience
Primary readers: Storage engineers, validators, auditors, wallet engineers, and protocol reviewers.

@tab Delivery
Explain live state terms, inclusion/deletion/non-existence proofs, checkpoint root continuity, and the public evidence boundary.

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
| [Protocol Architecture](/docs/protocol/architecture) | Previous page in the same section order. |
| [Wallet-Local Possession](/docs/protocol/wallet-local-possession) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `docs/Z00Z-Main-Whitepaper.md, docs/tech-papers/done/Z00Z-HJMT-Design.md, crates/z00z_storage/README.md`
- Section: `Protocol`
- Section message: settlement authority, private possession, object semantics, checkpoints, and policy boundaries must stay distinct.
+++
