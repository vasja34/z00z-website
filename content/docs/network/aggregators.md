---
title: "Aggregators"
description: "Aggregator role docs for batch planning, ingress, ordering, placement, recovery, scheduling, shard execution, and service boundaries."
toc: true
---
# Aggregators
> [!tip]
> **Docs route:** `/docs/network/aggregators`
>
> **Target site route:** `/network/aggregators`
>
> **Maturity:** `In progress`
>
> This page mixes live evidence with in-progress work. Call out implemented surfaces separately from planned extensions.

## Page Brief

What
: Aggregator role docs for batch planning, ingress, ordering, placement, recovery, scheduling, shard execution, and service boundaries.

When
: Used by operators or engineers implementing admission and publication preparation.

Where
: Network and Developers runtime docs.

Who
: Aggregator operators, runtime engineers, and reviewers.

Why
: Aggregators coordinate work but must not become settlement authority.

How
: Document BatchPlanner, ShardRouteTable, IngressBoundary, OrderingBoundary, SchedulerBoundary, recovery records, and failure modes.

## Reader Lenses

::: tabs

@tab:active Purpose
Aggregator role docs for batch planning, ingress, ordering, placement, recovery, scheduling, shard execution, and service boundaries.

@tab Audience
Primary readers: Aggregator operators, runtime engineers, and reviewers.

@tab Delivery
Document BatchPlanner, ShardRouteTable, IngressBoundary, OrderingBoundary, SchedulerBoundary, recovery records, and failure modes.

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
| [Network Overview](/docs/network/overview) | Previous page in the same section order. |
| [Validators](/docs/network/validators) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_runtime/aggregators/src/lib.rs`
- Section: `Network`
- Section message: operator roles, publication layers, observation data, and settlement authority are separate layers.
+++
