---
title: "Legal Architecture Companion"
description: "Architecture-first legal companion for neutral protocol, steward limits, rule-bound treasury, independent issuers, optional compliance wallets, and do-not-operate zones."
difficulty: advanced
icon: mdi:alpha-c-circle-outline
toc: true
---

# Legal Architecture Companion

> [!warning]
> **Maturity:** `Drafted legal architecture`
>
> **Use this page when:** You need the protocol-facing translation of the legal architecture paper rather than only the plain-language hub summary.

This page exists because many readers arrive with a protocol question, not a legal one. They want to know how legal boundary language maps back to objects, checkpoints, wallets, issuers, and service layers in the rest of the corpus. The companion page answers that question. It keeps the legal architecture inside the legal family, but it preserves the deeper reader intent that used to live alongside technical protocol expectations.

## Why The Companion Matters

The architecture paper says that technical impossibility, narrow protocol scope, and proof of non-control all matter legally. That is easy to say in abstract language. It is harder to translate into working questions such as:

- Does the public layer need to know a user's identity to settle value?
- Does the core protocol choose which external asset is legitimate?
- Does the project need to run an official market or custody desk for the model to work?
- Can a wallet or compliance overlay add stronger controls without redefining the base protocol?

The companion page keeps those questions visible so technical readers do not treat the legal paper as something disconnected from system design.

## Protocol Questions And Legal Meaning

| Protocol question | Legal meaning |
| --- | --- |
| Why does the architecture emphasize wallet-local possession? | It helps keep the user's ownership logic and private state out of a public operator-controlled account table. |
| Why are checkpoints so important? | They provide a narrow, typed final-settlement boundary instead of relying on broad discretionary service control. |
| Why separate protocol from issuers, bridges, and wallets? | Because legal exposure rises when the public message implies the core project operates or sponsors every surrounding surface. |
| Why keep public claims narrow? | Because saying less, but saying it precisely, is often the strongest proof that the architecture is not a disguised operator model. |

## Diligence Questions This Page Should Answer

When a partner, reviewer, or contributor reads the broader Z00Z corpus, this page should help them answer a disciplined set of questions.

First, what can the protocol honestly defend? It can defend the design choice to keep settlement evidence narrow, to avoid public account-style default exposure, and to keep the chain focused on finalization rather than on service operation.

Second, what stays outside the core? Issuer legitimacy, redemption promises, custodial services, compliance overlays, audit workflows, and business obligations remain the responsibility of whoever offers them. The legal corpus wants that line to stay clear even when those services are valuable.

Third, what should public docs never imply? They should never imply that Z00Z itself is an exchange, a guarantee of lawful use in every jurisdiction, an official market maker, or a finished compliance product.

## How This Fits With The Rest Of The Docs

Use [Legal Architecture](/docs/legal/architecture) when you need the short-form boundary. Use this companion when you need the more technical translation of that boundary into architecture, diligence, and claims review. Then move to [Public Claim Boundaries](/docs/legal/public-claim-boundaries) if the question is specifically about messaging, decks, or public-facing copy.

## Evidence and Further Reading

- `content/whitepapers/Legal-Architecture.md` sections 4, 7, 9, 10, 12, and 17 connect neutral protocol design to service separation, optional compliance overlays, wallet boundaries, and public claim discipline.
- `content/whitepapers/Main-Whitepaper.md` sections 2, 5, 6, 7, and 10 show how wallet-local possession, checkpoints, privacy, external assets, and protocol-versus-service separation interact technically.
- `content/whitepapers/DAO.md` sections 3 and 10 help explain why governance layers should remain bounded instead of mutating the legal boundary into discretionary control.
