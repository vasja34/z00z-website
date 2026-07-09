---
title: "Security"
description: "Security hub for privacy threat model, crypto policy, verification, supply chain, audits, disclosure, and incidents."
difficulty: basic
icon: mdi:alpha-a-circle-outline
toc: true
---

# Security

> [!warning]
> **Maturity:** `Live docs surface + target operational program`
>
> **Use this page when:** You need the shortest honest map of what Z00Z security claims mean, what they do not mean, and where to read deeper before taking risk.

Security pages are easy to get wrong because they sit between trust and marketing. If the wording is too weak, readers cannot tell what the project is trying to protect. If the wording is too strong, the docs start implying guarantees that neither the current repository nor the whitepaper corpus can support. This section exists to keep that line visible.

The core security claim is deliberately narrow: **Z00Z aims to minimize public observability while preserving replay-safe settlement validity, wallet-local ownership meaning, and scoped disclosure paths**. That is not the same as claiming perfect anonymity, a universal recovery switch, a completed corporate-audit overlay, or a fully staffed production incident program. Those stronger claims require separate evidence and should not be smuggled in through confident prose.

## What This Section Covers

Security in Z00Z is layered. Different pages exist because different risks live at different boundaries.

| Layer | Main question | Why it matters |
| --- | --- | --- |
| Protocol and privacy boundary | What public evidence exists, and what stays wallet-local? | Prevents "private by slogan" language |
| Cryptographic boundary | Which assumptions protect ownership, confidentiality, and validity today? | Keeps crypto claims concrete and versioned |
| Operator and publication boundary | What can aggregators, watchers, and data-availability surfaces observe or influence? | Separates liveness from settlement truth |
| Disclosure and support boundary | How should people report issues without leaking secrets? | Reduces harm during real incidents |
| Audit and evidence boundary | What proof should readers expect before trusting a strong claim? | Stops audit theater and badge inflation |

If you only remember one rule, remember this one: **every strong security statement needs an owner, an evidence source, and a residual-risk note**.

## Read By Urgency

Use the section in the order that matches the risk you are facing.

| Situation | Open first | Why |
| --- | --- | --- |
| You need the broad map before reviewing details | [Security Overview](/docs/security/overview) | It explains the layer split without pretending every lane is equally mature |
| You are reviewing adversaries, misuse cases, or failure modes | [Threat Model](/docs/security/threat-model) | It names who can see what and which failures remain possible |
| You are checking cryptographic wording or migration claims | [Crypto Policy](/docs/security/crypto-policy) | It keeps present-tense and future-lane claims separate |
| You are adding dependencies, tooling, or third-party services | [Supply Chain](/docs/security/supply-chain) | It frames repo-local dependency and trust-surface discipline |
| You found a sensitive issue | [Responsible Disclosure](/docs/security/responsible-disclosure) | It explains what to share, what not to share, and why public disclosure can be harmful |
| You want evidence before trusting a headline claim | [Audits And Reviews](/docs/security/audits) | It defines what counts as meaningful review evidence |
| You are discussing privacy quality or telemetry | [Privacy Metrics](/docs/security/privacy-metrics) | It explains what can be measured without faking a universal score |
| You are handling an active failure or scam wave | [Incident Response](/docs/security/incident-response) | It distinguishes user actions, maintainer actions, and communication discipline |

## What This Repository Proves Today

This repository is a documentation product, not the full runtime tree. That matters for security claims.

The current tree can prove:

- the whitepaper corpus that defines the intended privacy and settlement boundary;
- the reader-facing security language that contributors are publishing now;
- the repo-local verification flow used for docs and site changes;
- the workflow rules that already reject destructive edits, unsupported claims, and unverified completion.

The current tree does **not** prove:

- a universal production bounty program;
- a 24/7 staffed response team;
- end-to-end post-quantum security today;
- completed audits for every future protocol, wallet, or operator surface;
- a deployed service inventory for all wallet, bridge, archive, or enterprise overlays discussed in the papers.

That is why the rest of this family uses careful maturity notes instead of blanket promises.

## How Security Relates To Support

Support and security are related, but they should not be collapsed into one funnel. Ordinary troubleshooting belongs in [Support](/docs/support). Sensitive findings, privacy failures, fraud-enabling bugs, and trust-boundary mistakes belong in the security flow because the wrong public detail can make the situation worse before anyone has a chance to reproduce or contain it.

The same separation protects users. A reader who needs build help should not be pushed into a vulnerability-reporting path. A researcher who found a private-data leak should not be told to open a public issue with reproduction steps. Good security docs route people by risk, not by convenience.

## The Non-Claim That Keeps This Section Honest

This section should never be read as a promise that Z00Z can hide everything from everyone forever. The whitepapers consistently defend a narrower idea: private ownership meaning should stay wallet-local where possible, public settlement should stay minimal and replay-safe, and disclosure should be optional, scoped, and tied to a real purpose. Timing, transport, operator behavior, user reuse patterns, and external services can still create residual risk. Honest security language keeps those limits visible.

## Evidence and Further Reading

- `content/whitepapers/Privacy-Threat-Model.md` is the primary source for visibility boundaries, adversary classes, and residual-risk discipline across this section.
- `content/whitepapers/Main-Whitepaper.md` defines wallet-local possession, checkpoint-coupled settlement evidence, and the difference between public artifacts and private ownership meaning.
- `content/whitepapers/Post-Quantum-Migration.md` explains why present cryptographic claims must stay narrower than "fully post-quantum secure."
- `content/whitepapers/Legal-Architecture.md` defines safe public-claim formulas, banned overclaims, and the steward-versus-service boundary that this section follows.
