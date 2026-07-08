---
title: "Privacy Threat Model"
description: "Layered privacy model across ingress, internal movement, egress, wallet behavior, service disclosures, bridge edges, and fraud-triggered reveal."
toc: true
---
# Privacy Threat Model
> [!warning]
> **Docs route:** `/docs/protocol/privacy-threat-model`
>
> **Target site route:** `/protocol/privacy-threat-model`
>
> **Maturity:** `Live docs + target metrics`
>
> This page describes target or draft behavior. Avoid present-tense production claims unless implementation evidence is added.

## Page Brief

What
: Layered privacy model across ingress, internal movement, egress, wallet behavior, service disclosures, bridge edges, and fraud-triggered reveal.

When
: Used before any public privacy claim or wallet/network design decision.

Where
: Protocol and Security.

Who
: Security engineers, wallet designers, researchers, legal reviewers, and marketers.

Why
: Privacy can degrade outside cryptography; the site must not imply universal invisibility.

How
: Define privacy failure modes, anti-patterns, metrics, telemetry limits, selective disclosure, and operational guidance.

## Reader Lenses

::: tabs

@tab:active Purpose
Layered privacy model across ingress, internal movement, egress, wallet behavior, service disclosures, bridge edges, and fraud-triggered reveal.

@tab Audience
Primary readers: Security engineers, wallet designers, researchers, legal reviewers, and marketers.

@tab Delivery
Define privacy failure modes, anti-patterns, metrics, telemetry limits, selective disclosure, and operational guidance.

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
| [Linked Liability](/docs/protocol/linked-liability) | Previous page in the same section order. |
| [Cross-Chain Rights](/docs/protocol/cross-chain-rights) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `docs/Z00Z-Privacy-Threat-Model-Whitepaper.md`
- Section: `Protocol`
- Section message: settlement authority, private possession, object semantics, checkpoints, and policy boundaries must stay distinct.
+++
