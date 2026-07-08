---
title: "Data Infrastructure"
description: "Public data-access and indexing plan for checkpoints, status snapshots, proof receipts, watcher evidence, telemetry exports, and privacy-safe analytics."
toc: true
---
# Data Infrastructure
> [!warning]
> **Docs route:** `/docs/network/data-infrastructure`
>
> **Target site route:** `/network/data-infrastructure`
>
> **Maturity:** `Target public surface + live telemetry crate`
>
> This page describes target or draft behavior. Avoid present-tense production claims unless implementation evidence is added.

## Page Brief

What
: Public data-access and indexing plan for checkpoints, status snapshots, proof receipts, watcher evidence, telemetry exports, and privacy-safe analytics.

When
: Used when builders, operators, or analysts need machine-readable network data without running a full internal stack.

Where
: Network, Developers API reference, Status Explorer, and Research benchmarks.

Who
: Indexers, analytics builders, operators, auditors, support teams, and public observers.

Why
: NEAR separates data APIs, public datasets, and indexer options; Z00Z needs the same clarity while preserving privacy boundaries.

How
: Specify supported datasets, privacy redaction rules, schema versions, provider lifecycle, deprecation notices, migration guidance, query examples, and warnings when data proves availability but not private wallet meaning.

## Reader Lenses

::: tabs

@tab:active Purpose
Public data-access and indexing plan for checkpoints, status snapshots, proof receipts, watcher evidence, telemetry exports, and privacy-safe analytics.

@tab Audience
Primary readers: Indexers, analytics builders, operators, auditors, support teams, and public observers.

@tab Delivery
Specify supported datasets, privacy redaction rules, schema versions, provider lifecycle, deprecation notices, migration guidance, query examples, and warnings when data proves availability but not private wallet meaning.

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
| [Watchers](/docs/network/watchers) | Previous page in the same section order. |
| [OnionNet](/docs/network/onionnet) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_telemetry/README.md, crates/z00z_runtime/watchers/src/lib.rs, crates/z00z_storage/README.md`
- Section: `Network`
- Section message: operator roles, publication layers, observation data, and settlement authority are separate layers.
+++
