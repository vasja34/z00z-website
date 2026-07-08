---
title: "Smart Cash"
description: "Explains bounded smart-cash semantics without presenting Z00Z as a universal hidden smart-contract VM."
toc: true
---
# Smart Cash
> [!warning]
> **Docs route:** `/docs/protocol/smart-cash`
>
> **Target site route:** `/protocol/smart-cash`
>
> **Maturity:** `Target architecture with live object pieces`
>
> This page describes target or draft behavior. Avoid present-tense production claims unless implementation evidence is added.

## Page Brief

What
: Explains bounded smart-cash semantics without presenting Z00Z as a universal hidden smart-contract VM.

When
: Used when a reader asks how policies, vouchers, refunds, expiries, and bounded actions fit the cash model.

Where
: Protocol and Use Cases.

Who
: Application designers, product teams, issuer teams, and protocol reviewers.

Why
: Gives programmability a disciplined home without weakening cash-like final-value semantics.

How
: Describe clean cash policy, voucher policy, right policy, action pools, fee envelopes, and non-goals.

## Reader Lenses

::: tabs

@tab:active Purpose
Explains bounded smart-cash semantics without presenting Z00Z as a universal hidden smart-contract VM.

@tab Audience
Primary readers: Application designers, product teams, issuer teams, and protocol reviewers.

@tab Delivery
Describe clean cash policy, voucher policy, right policy, action pools, fee envelopes, and non-goals.

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
| [Assets, Vouchers, And Rights](/docs/protocol/assets-vouchers-rights) | Previous page in the same section order. |
| [Linked Liability](/docs/protocol/linked-liability) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `docs/Z00Z-Smart-Cash-Whitepaper.md, docs/Z00Z-Assets-Rights-Vauchers-Whitepaper.md`
- Section: `Protocol`
- Section message: settlement authority, private possession, object semantics, checkpoints, and policy boundaries must stay distinct.
+++
