---
title: "Incident Response"
description: "Operational response path for protocol bugs, wallet bugs, DA failures, censorship alerts, privacy degradation, and support scams."
toc: true
---
# Incident Response
> [!warning]
> **Docs route:** `/docs/security/incident-response`
>
> **Target site route:** `/security/incident-response`
>
> **Maturity:** `Target operational docs`
>
> This page describes target or draft behavior. Avoid present-tense production claims unless implementation evidence is added.

## Page Brief

What
: Operational response path for protocol bugs, wallet bugs, DA failures, censorship alerts, privacy degradation, and support scams.

When
: Used during live incidents or postmortems.

Where
: Security, Network status, and Support.

Who
: Operators, maintainers, support teams, legal reviewers, and users.

Why
: Incident docs reduce panic and keep public claims aligned with evidence.

How
: Publish severity levels, owner roles, communication templates, evidence handling, user actions, and post-incident review workflow.

## Reader Lenses

::: tabs

@tab:active Purpose
Operational response path for protocol bugs, wallet bugs, DA failures, censorship alerts, privacy degradation, and support scams.

@tab Audience
Primary readers: Operators, maintainers, support teams, legal reviewers, and users.

@tab Delivery
Publish severity levels, owner roles, communication templates, evidence handling, user actions, and post-incident review workflow.

:::

## Section Lens

Source
: privacy threat model, crypto facade docs, supply-chain config, verification docs, audits, and incident surfaces.

Message
: security is layered; every claim must name the layer, residual risk, evidence, and owner.

UX
: a severity-first security section with tables, warnings, and clear report flows.

Include
: threat categories, mitigations, residual risks, disclosure path, audit status, and verification evidence.

Avoid
: absolute privacy/security language, secret disclosure in public flows, and vague audit badges.

## Navigation Links

| Link | Why it matters |
| --- | --- |
| [Security](/docs/security) | Parent hub and primary context for this page. |
| [Privacy Metrics](/docs/security/privacy-metrics) | Previous page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_runtime/watchers/src/lib.rs, docs/Z00Z-Legal-Architecture-Whitepaper.md`
- Section: `Security`
- Section message: security is layered; every claim must name the layer, residual risk, evidence, and owner.
+++
