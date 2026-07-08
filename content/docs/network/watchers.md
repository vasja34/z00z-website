---
title: "Watchers"
description: "Watcher docs for alerts, censorship watch, DA health, evidence export, provider comparison, publication watch, and observation snapshots."
toc: true
---
# Watchers
> [!tip]
> **Docs route:** `/docs/network/watchers`
>
> **Target site route:** `/network/watchers`
>
> **Maturity:** `In progress`
>
> This page mixes live evidence with in-progress work. Call out implemented surfaces separately from planned extensions.

## Page Brief

What
: Watcher docs for alerts, censorship watch, DA health, evidence export, provider comparison, publication watch, and observation snapshots.

When
: Used by monitoring teams and incident reviewers.

Where
: Network, Security, and Support.

Who
: Operators, SRE teams, watchers, auditors, and community monitors.

Why
: Operational visibility should inform users without becoming protocol truth.

How
: Document alert severities, provider outcomes, evidence records, publication errors, dashboards, and incident workflow.

## Reader Lenses

::: tabs

@tab:active Purpose
Watcher docs for alerts, censorship watch, DA health, evidence export, provider comparison, publication watch, and observation snapshots.

@tab Audience
Primary readers: Operators, SRE teams, watchers, auditors, and community monitors.

@tab Delivery
Document alert severities, provider outcomes, evidence records, publication errors, dashboards, and incident workflow.

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
| [Validators](/docs/network/validators) | Previous page in the same section order. |
| [Data Infrastructure](/docs/network/data-infrastructure) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_runtime/watchers/src/lib.rs`
- Section: `Network`
- Section message: operator roles, publication layers, observation data, and settlement authority are separate layers.
+++
