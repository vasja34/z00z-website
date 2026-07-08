---
title: "Crypto Policy"
description: "Public policy for approved cryptographic surfaces, vendor isolation, domain separation, sensitive data handling, and test-only functions."
toc: true
---
# Crypto Policy
> [!note]
> **Docs route:** `/docs/security/crypto-policy`
>
> **Target site route:** `/security/crypto-policy`
>
> **Maturity:** `Live code`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Public policy for approved cryptographic surfaces, vendor isolation, domain separation, sensitive data handling, and test-only functions.

When
: Used before implementing or auditing cryptographic logic.

Where
: Security and Developers crypto.

Who
: Crypto engineers, auditors, reviewers, and contributors.

Why
: Prevents custom cryptography and unsafe internal dependency drift.

How
: State allowed facades, forbidden vendor paths, safety checklist, constant-time expectations, zeroization, and required verification commands.

## Reader Lenses

::: tabs

@tab:active Purpose
Public policy for approved cryptographic surfaces, vendor isolation, domain separation, sensitive data handling, and test-only functions.

@tab Audience
Primary readers: Crypto engineers, auditors, reviewers, and contributors.

@tab Delivery
State allowed facades, forbidden vendor paths, safety checklist, constant-time expectations, zeroization, and required verification commands.

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
| [Threat Model](/docs/security/threat-model) | Previous page in the same section order. |
| [Supply Chain](/docs/security/supply-chain) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_crypto/README.md, .github/requirements/Tari-Crypto-Integration-Z00Z.md`
- Section: `Security`
- Section message: security is layered; every claim must name the layer, residual risk, evidence, and owner.
+++
