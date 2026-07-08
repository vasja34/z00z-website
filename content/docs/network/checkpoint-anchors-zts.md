---
title: "Checkpoint Anchors And ZTS"
description: "Optional proof-reference layer for checkpoint anchors, timestamp batches, anchor calendars, and external meta-anchors."
toc: true
---
# Checkpoint Anchors And ZTS
> [!warning]
> **Docs route:** `/docs/network/checkpoint-anchors-zts`
>
> **Target site route:** `/network/checkpoint-anchors-zts`
>
> **Maturity:** `Target service layer`
>
> This page describes target or draft behavior. Avoid present-tense production claims unless implementation evidence is added.

## Page Brief

What
: Optional proof-reference layer for checkpoint anchors, timestamp batches, anchor calendars, and external meta-anchors.

When
: Used for audit receipts, enterprise records, external proof references, and long-lived verification packages.

Where
: Network, Legal, and Enterprise support.

Who
: Auditors, enterprise integrators, service-layer builders, and operators.

Why
: Timestamp or anchor proofs should not be mistaken for truth about underlying business facts or settlement validity.

How
: Document anchor schema, ZTS proof flow, proof retention, meta-anchor scope, and verification questions by authority layer.

## Reader Lenses

::: tabs

@tab:active Purpose
Optional proof-reference layer for checkpoint anchors, timestamp batches, anchor calendars, and external meta-anchors.

@tab Audience
Primary readers: Auditors, enterprise integrators, service-layer builders, and operators.

@tab Delivery
Document anchor schema, ZTS proof flow, proof retention, meta-anchor scope, and verification questions by authority layer.

:::

## Section Lens

Source
: runtime service crates, rollup-node surfaces, OnionNet paper, multi-DA paper, watcher code, and telemetry docs.

Message
: operator roles, publication layers, observation data, and settlement authority are separate layers.

UX
: an operator-oriented control-plane guide with status cards, failure-state tables, and links to support runbooks.

Include
: role diagrams, health signals, config surfaces, provider lifecycle, alert semantics, and privacy-safe explorer rules.

Avoid
: implying observability equals consensus truth or exposing wallet/private meaning through explorer labels.

## Navigation Links

| Link | Why it matters |
| --- | --- |
| [Network](/docs/network) | Parent hub and primary context for this page. |
| [Data Availability](/docs/network/data-availability) | Previous page in the same section order. |
| [Node Operations](/docs/network/node-operations) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `docs/tech-papers/Z00Z-Multi-DA-and-Checkpoint-Architecture.md`
- Section: `Network`
- Section message: operator roles, publication layers, observation data, and settlement authority are separate layers.
+++
