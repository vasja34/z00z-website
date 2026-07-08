---
title: "Node Operations"
description: "Operator guide for local node, rollup node, runtime services, configs, logs, and status control planes."
toc: true
---
# Node Operations
> [!tip]
> **Docs route:** `/docs/network/node-operations`
>
> **Target site route:** `/network/node-operations`
>
> **Maturity:** `In progress`
>
> This page mixes live evidence with in-progress work. Call out implemented surfaces separately from planned extensions.

## Page Brief

What
: Operator guide for local node, rollup node, runtime services, configs, logs, and status control planes.

When
: Used after an operator understands roles and wants deployment steps.

Where
: Network and Support.

Who
: Operators, SRE teams, infrastructure partners, and developers running local environments.

Why
: Hyperliquid-style support and operator docs should be separate from protocol theory.

How
: Document modes, config files, environment variables, service bindings, restart behavior, health checks, and normal verification commands.

## Reader Lenses

::: tabs

@tab:active Purpose
Operator guide for local node, rollup node, runtime services, configs, logs, and status control planes.

@tab Audience
Primary readers: Operators, SRE teams, infrastructure partners, and developers running local environments.

@tab Delivery
Document modes, config files, environment variables, service bindings, restart behavior, health checks, and normal verification commands.

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
| [Checkpoint Anchors And ZTS](/docs/network/checkpoint-anchors-zts) | Previous page in the same section order. |
| [Status And Explorer](/docs/network/status-explorer) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_rollup_node/src/lib.rs, config/hjmt_runtime, scripts/cargo_build.sh`
- Section: `Network`
- Section message: operator roles, publication layers, observation data, and settlement authority are separate layers.
+++
