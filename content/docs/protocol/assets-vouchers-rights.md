---
title: "Assets, Vouchers, And Rights"
description: "Defines the clean split between final-value assets, conditional-value vouchers, and authority-bearing rights."
toc: true
---
# Assets, Vouchers, And Rights
> [!warning]
> **Docs route:** `/docs/protocol/assets-vouchers-rights`
>
> **Target site route:** `/protocol/assets-vouchers-rights`
>
> **Maturity:** `Live core + target voucher lane`
>
> This page describes target or draft behavior. Avoid present-tense production claims unless implementation evidence is added.

## Page Brief

What
: Defines the clean split between final-value assets, conditional-value vouchers, and authority-bearing rights.

When
: Used before smart-cash, use-case, wallet inventory, and genesis configuration pages.

Where
: Protocol hub and Developers core API.

Who
: Protocol designers, wallet engineers, issuer teams, and reviewers.

Why
: Prevents native cash from becoming arbitrary hidden code and prevents rights from silently carrying value.

How
: Show object definitions, current maturity, live HJMT SettlementLeaf variants, and target voucher semantics.

## Reader Lenses

::: tabs

@tab:active Purpose
Defines the clean split between final-value assets, conditional-value vouchers, and authority-bearing rights.

@tab Audience
Primary readers: Protocol designers, wallet engineers, issuer teams, and reviewers.

@tab Delivery
Show object definitions, current maturity, live HJMT SettlementLeaf variants, and target voucher semantics.

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
| [Checkpoints And Public Evidence](/docs/protocol/checkpoints) | Previous page in the same section order. |
| [Smart Cash](/docs/protocol/smart-cash) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `docs/Z00Z-Assets-Rights-Vauchers-Whitepaper.md, crates/z00z_core/README.md`
- Section: `Protocol`
- Section message: settlement authority, private possession, object semantics, checkpoints, and policy boundaries must stay distinct.
+++
