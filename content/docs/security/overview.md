---
title: "Security Overview"
description: "High-level map of cryptographic, protocol, wallet, storage, runtime, network, legal, and operational security boundaries."
difficulty: basic
icon: mdi:alpha-a-circle-outline
toc: true
---

# Security Overview

> [!note]
> **Maturity:** `Live docs map with mixed implementation maturity underneath`
>
> **Use this page when:** You want a compact security model before reading the deeper threat, crypto, audit, or incident pages.

The quickest way to misread Z00Z security is to assume there is one giant protection claim that covers everything equally. The corpus does not defend that idea. Instead, it separates different security questions by layer: what public observers can see, what a wallet must keep private, what operators can delay or correlate, what external services remain responsible for, and which statements are still target architecture rather than finished deployment fact.

That layered view is not a rhetorical preference. It is the only way to keep security statements technically honest. A protocol may have a strong settlement boundary while still leaving transport privacy, disclosure tooling, recovery ergonomics, or operator automation at a lower maturity level. A reader-facing overview page should make that visible before anyone starts comparing slogans.

## The Layer Map

The table below is the shortest useful map of the current security surface.

| Layer | What it protects | Main strength | Residual risk that must stay visible |
| --- | --- | --- | --- |
| Settlement and storage boundary | Replay-safe public validity and checkpoint continuity | Public truth is organized around typed artifacts, roots, and canonical replay checks | Valid settlement does not automatically imply private transport, perfect uptime, or full service safety |
| Wallet boundary | Private ownership meaning, local recovery state, and secret material | Ownership meaning stays wallet-local rather than living in a public account table | Lost keys, bad backups, endpoint compromise, and careless sharing still harm users |
| Cryptographic boundary | Authorization, stealth reception, encrypted payloads, and confidential amount semantics | The current lane is specific and concrete, not hand-wavy | It is not end-to-end post-quantum secure today, and some confidentiality surfaces remain a harder future frontier |
| Operator boundary | Publication, observation, alerts, and byte availability | Roles are separated so liveness and observation do not silently become settlement authority | Aggregators, watchers, and archives can still correlate timing, delay publication, or fail operationally |
| Disclosure boundary | Scoped evidence for reviewers, operators, or counterparties | The architecture allows selective and purpose-bound disclosure language | Full corporate-audit overlays remain a stronger future lane than the current repo can prove |
| Legal and stewardship boundary | Public claims, role containment, and non-custodial posture | Safe formulas exist for describing the protocol without turning it into a hidden operator stack | Bad wording can still imply exchange, custody, or universal recovery power that the design rejects |

None of those rows cancels the others. They simply answer different questions.

## Three Rules For Reading Security Claims

Use these three rules whenever you read or write a security sentence about Z00Z:

1. Ask which layer owns the claim.
2. Ask what evidence supports it in this repository or the whitepaper corpus.
3. Ask which residual risk is still outside the claim.

For example, "wallet-local ownership meaning is not stored as a public balance table" is a scoped protocol-and-wallet statement. "No one can ever correlate a payment" is not. The first has an owner and a boundary. The second erases transport, timing, service, and user-behavior risk.

## Present-Tense Versus Target-Lane Security

The current repository gives you strong documentation evidence, but it does not give you a complete production inventory. That distinction should stay visible across the whole family.

Safe present-tense claims in this repo include:

- the whitepaper corpus distinguishes wallet-local possession from public settlement evidence;
- the docs can publish maturity notes, support flows, and security boundaries consistently;
- the repo verification path for site changes is real and inspectable.

Claims that still need stronger caveats include:

- fully landed selective-disclosure workflows;
- mature enterprise audit overlays;
- complete operator-grade recovery automation;
- end-to-end post-quantum protection across all live surfaces.

When in doubt, use narrower language and point to the deeper page that carries the evidence.

## How The Deeper Pages Fit Together

Think of the rest of the security family as focused drill-downs:

| Page | Best use |
| --- | --- |
| [Threat Model](/docs/security/threat-model) | For adversaries, misuse cases, and failure classes |
| [Crypto Policy](/docs/security/crypto-policy) | For cryptographic scope, migration language, and non-claims |
| [Supply Chain](/docs/security/supply-chain) | For repo-local dependency and tooling trust boundaries |
| [Responsible Disclosure](/docs/security/responsible-disclosure) | For safe reporting behavior |
| [Audits And Reviews](/docs/security/audits) | For evidence expectations and review interpretation |
| [Privacy Metrics](/docs/security/privacy-metrics) | For measuring quality without inventing a fake universal score |
| [Incident Response](/docs/security/incident-response) | For severity classes and communication discipline during failures |

This page should leave you with one durable conclusion: **Z00Z security is strongest when each layer stays narrow, explicit, and evidence-backed**. The docs become untrustworthy when they collapse those layers into a single promise.

## Evidence and Further Reading

- `content/whitepapers/Privacy-Threat-Model.md` is the main source for adversary classes, visibility boundaries, and scoped privacy claims.
- `content/whitepapers/Main-Whitepaper.md` explains wallet-local possession, checkpointed settlement evidence, operator boundaries, and current-versus-target maturity lines.
- `content/whitepapers/Post-Quantum-Migration.md` defines the current cryptographic boundary and why explicit suite identity matters.
- `content/whitepapers/Legal-Architecture.md` provides the safe public-claim matrix used to keep this overview conservative.
