---
title: "Network Overview"
description: "Explains the live and target network roles around the settlement core."
toc: true
---
# Network Overview
> [!tip]
> **Docs route:** `/docs/network/overview`
>
> **Target site route:** `/network/overview`
>
> **Maturity:** `In progress`
>
> This page mixes live evidence with in-progress work. Call out implemented surfaces separately from planned extensions.

## Page Brief

What
: Explains the live and target network roles around the settlement core.

When
: Used before role-specific operator docs.

Where
: Network hub.

Who
: Operators, integrators, and technical readers.

Why
: The site needs a plain map from wallet intent to runtime admission and checkpoint settlement.

How
: Show role diagram, maturity labels, non-authority warnings, and links to each operator role.

## Reader Lenses

::: tabs

@tab:active Purpose
Explains the live and target network roles around the settlement core.

@tab Audience
Primary readers: Operators, integrators, and technical readers.

@tab Delivery
Show role diagram, maturity labels, non-authority warnings, and links to each operator role.

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
| [Aggregators](/docs/network/aggregators) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_runtime/*/src/lib.rs, crates/z00z_rollup_node/src/lib.rs`
- Section: `Network`
- Section message: operator roles, publication layers, observation data, and settlement authority are separate layers.
+++
