---
title: "Protocol Architecture"
description: "High-level architecture of wallet-local possession, package preparation, publication, checkpoint verification, and authoritative settlement."
toc: true
---
# Protocol Architecture
> [!warning]
> **Docs route:** `/docs/protocol/architecture`
>
> **Target site route:** `/protocol/architecture`
>
> **Maturity:** `Live core + target extensions`
>
> This page describes target or draft behavior. Avoid present-tense production claims unless implementation evidence is added.

## Page Brief

What
: High-level architecture of wallet-local possession, package preparation, publication, checkpoint verification, and authoritative settlement.

When
: Used before deep pages on storage, wallets, runtime, cross-chain, or network layers.

Where
: Protocol hub and Developers workspace overview.

Who
: Engineers, researchers, integrators, and technical reviewers.

Why
: Gives Z00Z its system map instead of scattering the model across whitepapers.

How
: Show the actor flow: wallet, package, aggregator, publication, validators or watchers, storage, checkpoint, and settlement state.

## Reader Lenses

::: tabs

@tab:active Purpose
High-level architecture of wallet-local possession, package preparation, publication, checkpoint verification, and authoritative settlement.

@tab Audience
Primary readers: Engineers, researchers, integrators, and technical reviewers.

@tab Delivery
Show the actor flow: wallet, package, aggregator, publication, validators or watchers, storage, checkpoint, and settlement state.

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
| [Settlement Model](/docs/protocol/settlement-model) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `docs/Z00Z-Main-Whitepaper.md, crates/z00z-crates-overview.md`
- Section: `Protocol`
- Section message: settlement authority, private possession, object semantics, checkpoints, and policy boundaries must stay distinct.
+++
