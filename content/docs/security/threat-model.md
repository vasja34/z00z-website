---
title: "Threat Model"
description: "Adversary and failure model across privacy, fraud, wallet behavior, ingress/egress, operators, bridges, and selective disclosure."
toc: true
---
# Threat Model
> [!note]
> **Docs route:** `/docs/security/threat-model`
>
> **Target site route:** `/security/threat-model`
>
> **Maturity:** `Live docs`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Adversary and failure model across privacy, fraud, wallet behavior, ingress/egress, operators, bridges, and selective disclosure.

When
: Used by auditors and designers before reviewing features.

Where
: Security and Protocol privacy pages.

Who
: Security engineers, auditors, researchers, wallet teams, and operators.

Why
: Threats differ by layer; one blanket privacy statement would be misleading.

How
: List threat categories, mitigations, residual risks, owner layer, evidence, and open questions.

## Reader Lenses

::: tabs

@tab:active Purpose
Adversary and failure model across privacy, fraud, wallet behavior, ingress/egress, operators, bridges, and selective disclosure.

@tab Audience
Primary readers: Security engineers, auditors, researchers, wallet teams, and operators.

@tab Delivery
List threat categories, mitigations, residual risks, owner layer, evidence, and open questions.

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
| [Security Overview](/docs/security/overview) | Previous page in the same section order. |
| [Crypto Policy](/docs/security/crypto-policy) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `docs/Z00Z-Privacy-Threat-Model-Whitepaper.md, docs/Z00Z-Linked-Liability-Whitepaper.md`
- Section: `Security`
- Section message: security is layered; every claim must name the layer, residual risk, evidence, and owner.
+++
