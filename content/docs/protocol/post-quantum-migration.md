---
title: "Post-Quantum Migration"
description: "Honest migration plan: Z00Z is not end-to-end post-quantum secure today, but has PQ-friendly settlement and storage boundaries."
toc: true
---
# Post-Quantum Migration
> [!warning]
> **Docs route:** `/docs/protocol/post-quantum-migration`
>
> **Target site route:** `/protocol/post-quantum-migration`
>
> **Maturity:** `Migration target`
>
> This page describes target or draft behavior. Avoid present-tense production claims unless implementation evidence is added.

## Page Brief

What
: Honest migration plan: Z00Z is not end-to-end post-quantum secure today, but has PQ-friendly settlement and storage boundaries.

When
: Used when discussing cryptographic agility, suite migration, receiver protection, authorization, and amount-validity frontiers.

Where
: Protocol, Security, and Research.

Who
: Crypto engineers, researchers, auditors, and roadmap planners.

Why
: Prevents one-primitive-swap narratives and prioritizes migration firewall work.

How
: Explain legacy lanes, migration lanes, hybrid suites, rewrap, integrity firewall, and the confidential amount frontier.

## Reader Lenses

::: tabs

@tab:active Purpose
Honest migration plan: Z00Z is not end-to-end post-quantum secure today, but has PQ-friendly settlement and storage boundaries.

@tab Audience
Primary readers: Crypto engineers, researchers, auditors, and roadmap planners.

@tab Delivery
Explain legacy lanes, migration lanes, hybrid suites, rewrap, integrity firewall, and the confidential amount frontier.

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
| [Proof Of Useful Work](/docs/protocol/proof-of-useful-work) | Previous page in the same section order. |
| [Legal Architecture](/docs/protocol/legal-architecture) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `docs/Z00Z-PQ-Migration-Whitepaper.md, crates/z00z_crypto/README.md`
- Section: `Protocol`
- Section message: settlement authority, private possession, object semantics, checkpoints, and policy boundaries must stay distinct.
+++
