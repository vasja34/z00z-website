---
title: "Validators"
description: "Validator docs for artifact decoding, checkpoint flow, claim package verification, nullifier checks, spend rules, transaction verification, and verdicts."
toc: true
---
# Validators
> [!tip]
> **Docs route:** `/docs/network/validators`
>
> **Target site route:** `/network/validators`
>
> **Maturity:** `In progress`
>
> This page mixes live evidence with in-progress work. Call out implemented surfaces separately from planned extensions.

## Page Brief

What
: Validator docs for artifact decoding, checkpoint flow, claim package verification, nullifier checks, spend rules, transaction verification, and verdicts.

When
: Used before operating or implementing validation gates.

Where
: Network and Security.

Who
: Validator operators, protocol engineers, auditors, and test authors.

Why
: Validation is the reject/accept boundary for checkpoint-facing artifacts.

How
: Document ValidatorService, RejectClass, VerdictKind, claim/spend/tx verification, reconciliation, and storage proof dependencies.

## Reader Lenses

::: tabs

@tab:active Purpose
Validator docs for artifact decoding, checkpoint flow, claim package verification, nullifier checks, spend rules, transaction verification, and verdicts.

@tab Audience
Primary readers: Validator operators, protocol engineers, auditors, and test authors.

@tab Delivery
Document ValidatorService, RejectClass, VerdictKind, claim/spend/tx verification, reconciliation, and storage proof dependencies.

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
| [Aggregators](/docs/network/aggregators) | Previous page in the same section order. |
| [Watchers](/docs/network/watchers) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_runtime/validators/src/lib.rs`
- Section: `Network`
- Section message: operator roles, publication layers, observation data, and settlement authority are separate layers.
+++
