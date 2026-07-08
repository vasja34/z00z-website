---
title: "Status And Explorer"
description: "Public network status, explorer, telemetry, checkpoints, DA health, and proof receipt browsing."
toc: true
---
# Status And Explorer
> [!warning]
> **Docs route:** `/docs/network/status-explorer`
>
> **Target site route:** `/network/status-explorer`
>
> **Maturity:** `Target public surface`
>
> This page describes target or draft behavior. Avoid present-tense production claims unless implementation evidence is added.

## Page Brief

What
: Public network status, explorer, telemetry, checkpoints, DA health, and proof receipt browsing.

When
: Used by users, operators, researchers, and support teams during normal operation or incidents.

Where
: Network header and utility nav.

Who
: Users, operators, ecosystem partners, and external observers.

Why
: NEAR exposes explorer access as a utility route; Z00Z should expose status without leaking private wallet meaning.

How
: Build read-only dashboards for checkpoint roots, provider health, alerts, proof references, and service status, with privacy-safe labels.

## Reader Lenses

::: tabs

@tab:active Purpose
Public network status, explorer, telemetry, checkpoints, DA health, and proof receipt browsing.

@tab Audience
Primary readers: Users, operators, ecosystem partners, and external observers.

@tab Delivery
Build read-only dashboards for checkpoint roots, provider health, alerts, proof references, and service status, with privacy-safe labels.

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
| [Node Operations](/docs/network/node-operations) | Previous page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_telemetry/README.md, crates/z00z_runtime/watchers/src/lib.rs, website/z00z_website-6.yaml`
- Section: `Network`
- Section message: operator roles, publication layers, observation data, and settlement authority are separate layers.
+++
