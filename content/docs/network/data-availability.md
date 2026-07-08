---
title: "Data Availability"
description: "Publication and recovery layer for batch bytes, provider receipts, watcher evidence, and DA adapter seams."
toc: true
---
# Data Availability
> [!tip]
> **Docs route:** `/docs/network/data-availability`
>
> **Target site route:** `/network/data-availability`
>
> **Maturity:** `In progress + future multi-DA`
>
> This page mixes live evidence with in-progress work. Call out implemented surfaces separately from planned extensions.

## Page Brief

What
: Publication and recovery layer for batch bytes, provider receipts, watcher evidence, and DA adapter seams.

When
: Used when choosing or integrating publication providers.

Where
: Network, Developers rollup node, and Operators.

Who
: DA providers, node developers, operators, and auditors.

Why
: DA evidence supports availability and recovery but never replaces checkpoint validity.

How
: Document DA adapter contract, commitments, provider identity, blob references, retry state, recovery records, and multi-provider roadmap.

## Reader Lenses

::: tabs

@tab:active Purpose
Publication and recovery layer for batch bytes, provider receipts, watcher evidence, and DA adapter seams.

@tab Audience
Primary readers: DA providers, node developers, operators, and auditors.

@tab Delivery
Document DA adapter contract, commitments, provider identity, blob references, retry state, recovery records, and multi-provider roadmap.

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
| [OnionNet](/docs/network/onionnet) | Previous page in the same section order. |
| [Checkpoint Anchors And ZTS](/docs/network/checkpoint-anchors-zts) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `docs/tech-papers/Z00Z-Multi-DA-and-Checkpoint-Architecture.md, crates/z00z_rollup_node/src/lib.rs`
- Section: `Network`
- Section message: operator roles, publication layers, observation data, and settlement authority are separate layers.
+++
