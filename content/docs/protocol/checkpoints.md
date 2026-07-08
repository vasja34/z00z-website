---
title: "Checkpoints And Public Evidence"
description: "Documents checkpoint validation, DA commitments, anchors, ZTS, and optional external witnesses as separate proof layers."
toc: true
---
# Checkpoints And Public Evidence
> [!tip]
> **Docs route:** `/docs/protocol/checkpoints`
>
> **Target site route:** `/protocol/checkpoints`
>
> **Maturity:** `Live core + in progress publication layer`
>
> This page mixes live evidence with in-progress work. Call out implemented surfaces separately from planned extensions.

## Page Brief

What
: Documents checkpoint validation, DA commitments, anchors, ZTS, and optional external witnesses as separate proof layers.

When
: Used when explaining settlement, audit receipts, data availability, and long-lived proof references.

Where
: Protocol, Network, Operators, and Research.

Who
: Validators, operators, auditors, enterprise integrators, and protocol reviewers.

Why
: Keeps settlement authority distinct from publication and timestamp evidence.

How
: Use a five-layer model: checkpoint settlement, DA publication, checkpoint anchors, ZTS timestamp service, and meta-anchors.

## Reader Lenses

::: tabs

@tab:active Purpose
Documents checkpoint validation, DA commitments, anchors, ZTS, and optional external witnesses as separate proof layers.

@tab Audience
Primary readers: Validators, operators, auditors, enterprise integrators, and protocol reviewers.

@tab Delivery
Use a five-layer model: checkpoint settlement, DA publication, checkpoint anchors, ZTS timestamp service, and meta-anchors.

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
| [Wallet-Local Possession](/docs/protocol/wallet-local-possession) | Previous page in the same section order. |
| [Assets, Vouchers, And Rights](/docs/protocol/assets-vouchers-rights) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `docs/tech-papers/Z00Z-Multi-DA-and-Checkpoint-Architecture.md, crates/z00z_storage/src/lib.rs`
- Section: `Protocol`
- Section message: settlement authority, private possession, object semantics, checkpoints, and policy boundaries must stay distinct.
+++
