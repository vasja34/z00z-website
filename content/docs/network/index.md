---
title: "Network"
description: "Operator and network architecture hub for runtime services, transport, privacy ingress, DA, checkpoints, and observability."
toc: true
---
# Network
> [!warning]
> **Docs route:** `/docs/network`
>
> **Target site route:** `/network`
>
> **Maturity:** `In progress + reserved surfaces`
>
> This page describes target or draft behavior. Avoid present-tense production claims unless implementation evidence is added.

## Page Brief

What
: Operator and network architecture hub for runtime services, transport, privacy ingress, DA, checkpoints, and observability.

When
: Used by operators and developers once protocol concepts are understood.

Where
: Primary navigation and docs sidebar.

Who
: Node operators, runtime engineers, DA providers, observers, and security reviewers.

Why
: Separates network operation from protocol semantics and developer API reference.

How
: Organize by role: aggregators, validators, watchers, OnionNet, DA, anchors, nodes, and status.

## Reader Lenses

::: tabs

@tab:active Purpose
Operator and network architecture hub for runtime services, transport, privacy ingress, DA, checkpoints, and observability.

@tab Audience
Primary readers: Node operators, runtime engineers, DA providers, observers, and security reviewers.

@tab Delivery
Organize by role: aggregators, validators, watchers, OnionNet, DA, anchors, nodes, and status.

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

## Section Pages

| Page | Role |
| --- | --- |
| [Network Overview](/docs/network/overview) | Explains the live and target network roles around the settlement core. |
| [Aggregators](/docs/network/aggregators) | Aggregator role docs for batch planning, ingress, ordering, placement, recovery, scheduling, shard execution, and service boundaries. |
| [Validators](/docs/network/validators) | Validator docs for artifact decoding, checkpoint flow, claim package verification, nullifier checks, spend rules, transaction verification, and verdicts. |
| [Watchers](/docs/network/watchers) | Watcher docs for alerts, censorship watch, DA health, evidence export, provider comparison, publication watch, and observation snapshots. |
| [Data Infrastructure](/docs/network/data-infrastructure) | Public data-access and indexing plan for checkpoints, status snapshots, proof receipts, watcher evidence, telemetry exports, and privacy-safe analytics. |
| [OnionNet](/docs/network/onionnet) | Anonymous ingress target: deterministic active-set, client-owned route construction, replay durability, and runtime-bound handoff. |
| [Data Availability](/docs/network/data-availability) | Publication and recovery layer for batch bytes, provider receipts, watcher evidence, and DA adapter seams. |
| [Checkpoint Anchors And ZTS](/docs/network/checkpoint-anchors-zts) | Optional proof-reference layer for checkpoint anchors, timestamp batches, anchor calendars, and external meta-anchors. |
| [Node Operations](/docs/network/node-operations) | Operator guide for local node, rollup node, runtime services, configs, logs, and status control planes. |
| [Status And Explorer](/docs/network/status-explorer) | Public network status, explorer, telemetry, checkpoints, DA health, and proof receipt browsing. |

## Navigation Links

| Link | Why it matters |
| --- | --- |
| [Z00Z Home](/docs) | Parent hub and primary context for this page. |
| [Developers](/docs/developers) | Previous page in the same section order. |
| [Use Cases](/docs/use-cases) | Next page in the same section order. |

## Delivery Focus

- [x] Route intent captured from the architecture scaffold
- [x] Internal cross-links added for hub navigation
- [x] Evidence anchors preserved for follow-up drafting
- [ ] Final long-form prose and diagrams still need source-document expansion

## Route Map

@mermaidstart
graph TD
  network["Network"]
  network --> network_overview["Network Overview"]
  network --> network_aggregators["Aggregators"]
  network --> network_validators["Validators"]
  network --> network_watchers["Watchers"]
  network --> network_data_infra["Data Infrastructure"]
  network --> network_onionnet["OnionNet"]
  network --> network_da["Data Availability"]
  network --> network_anchors["Checkpoint Anchors And ZTS"]
  network --> network_node_ops["Node Operations"]
  network --> network_status["Status And Explorer"]
@mermaidend

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_runtime/*, crates/z00z_networks/*, docs/Z00Z-OnionNet-Whitepaper.md`
- Section: `Network`
- Section message: operator roles, publication layers, observation data, and settlement authority are separate layers.
+++
