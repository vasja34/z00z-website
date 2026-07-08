---
title: "Security"
description: "Security hub for privacy threat model, crypto policy, verification, supply chain, audits, disclosure, and incidents."
toc: true
---
# Security
> [!warning]
> **Docs route:** `/docs/security`
>
> **Target site route:** `/security`
>
> **Maturity:** `Live + target program`
>
> This page describes target or draft behavior. Avoid present-tense production claims unless implementation evidence is added.

## Page Brief

What
: Security hub for privacy threat model, crypto policy, verification, supply chain, audits, disclosure, and incidents.

When
: Used before making security claims, reporting issues, or reviewing critical code.

Where
: Primary navigation and footer.

Who
: Auditors, researchers, engineers, operators, and legal reviewers.

Why
: Hyperliquid-style risks/audits/support separation is necessary for a privacy protocol.

How
: Use severity-first pages, disclosure instructions, evidence links, audit history, and clear non-claims.

## Reader Lenses

::: tabs

@tab:active Purpose
Security hub for privacy threat model, crypto policy, verification, supply chain, audits, disclosure, and incidents.

@tab Audience
Primary readers: Auditors, researchers, engineers, operators, and legal reviewers.

@tab Delivery
Use severity-first pages, disclosure instructions, evidence links, audit history, and clear non-claims.

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

## Section Pages

| Page | Role |
| --- | --- |
| [Security Overview](/docs/security/overview) | High-level map of cryptographic, protocol, wallet, storage, runtime, network, legal, and operational security boundaries. |
| [Threat Model](/docs/security/threat-model) | Adversary and failure model across privacy, fraud, wallet behavior, ingress/egress, operators, bridges, and selective disclosure. |
| [Crypto Policy](/docs/security/crypto-policy) | Public policy for approved cryptographic surfaces, vendor isolation, domain separation, sensitive data handling, and test-only functions. |
| [Supply Chain](/docs/security/supply-chain) | Dependency, advisory, import, and vendored-code security posture. |
| [Responsible Disclosure](/docs/security/responsible-disclosure) | How to report vulnerabilities, privacy failures, wallet issues, fraud vectors, supply-chain findings, and critical operational incidents. |
| [Audits And Reviews](/docs/security/audits) | Public index of security audits, verification reports, benchmark notes, review status, and open risks. |
| [Privacy Metrics](/docs/security/privacy-metrics) | Privacy quality signals such as ingress/egress posture, star and collector patterns, remix depth, and telemetry boundaries. |
| [Incident Response](/docs/security/incident-response) | Operational response path for protocol bugs, wallet bugs, DA failures, censorship alerts, privacy degradation, and support scams. |

## Navigation Links

| Link | Why it matters |
| --- | --- |
| [Z00Z Home](/docs) | Parent hub and primary context for this page. |
| [Ecosystem](/docs/ecosystem) | Previous page in the same section order. |
| [Research](/docs/research) | Next page in the same section order. |

## Delivery Focus

- [x] Route intent captured from the architecture scaffold
- [x] Internal cross-links added for hub navigation
- [x] Evidence anchors preserved for follow-up drafting
- [ ] Final long-form prose and diagrams still need source-document expansion

## Route Map

@mermaidstart
graph TD
  security["Security"]
  security --> security_overview["Security Overview"]
  security --> security_threat_model["Threat Model"]
  security --> security_crypto_policy["Crypto Policy"]
  security --> security_supply_chain["Supply Chain"]
  security --> security_disclosure["Responsible Disclosure"]
  security --> security_audits["Audits And Reviews"]
  security --> security_privacy_metrics["Privacy Metrics"]
  security --> security_incidents["Incident Response"]
@mermaidend

+++ Evidence and scaffold notes
- Evidence anchors: `docs/Z00Z-Privacy-Threat-Model-Whitepaper.md, crates/z00z_crypto/README.md, supply-chain`
- Section: `Security`
- Section message: security is layered; every claim must name the layer, residual risk, evidence, and owner.
+++
