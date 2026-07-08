---
title: "Supply Chain"
description: "Dependency, advisory, import, and vendored-code security posture."
toc: true
---
# Supply Chain
> [!warning]
> **Docs route:** `/docs/security/supply-chain`
>
> **Target site route:** `/security/supply-chain`
>
> **Maturity:** `Live config + target reporting`
>
> This page describes target or draft behavior. Avoid present-tense production claims unless implementation evidence is added.

## Page Brief

What
: Dependency, advisory, import, and vendored-code security posture.

When
: Used before dependency upgrades, releases, or external security reviews.

Where
: Security and Developers verification.

Who
: Maintainers, auditors, release managers, and contributors.

Why
: The repo has explicit supply-chain config and vendored Tari code that must be treated carefully.

How
: Document cargo-deny policy, reviewed advisories, import locks, vendor boundaries, upgrade procedure, and release checks.

## Reader Lenses

::: tabs

@tab:active Purpose
Dependency, advisory, import, and vendored-code security posture.

@tab Audience
Primary readers: Maintainers, auditors, release managers, and contributors.

@tab Delivery
Document cargo-deny policy, reviewed advisories, import locks, vendor boundaries, upgrade procedure, and release checks.

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
| [Crypto Policy](/docs/security/crypto-policy) | Previous page in the same section order. |
| [Responsible Disclosure](/docs/security/responsible-disclosure) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `.reviews/config.toml, deny.toml, Cargo.lock`
- Section: `Security`
- Section message: security is layered; every claim must name the layer, residual risk, evidence, and owner.
+++
