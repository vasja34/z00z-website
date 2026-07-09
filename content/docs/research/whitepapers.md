---
title: "Whitepapers"
description: "Canonical whitepaper reading order with authority lanes, companion papers, and maturity discipline."
difficulty: basic
icon: mdi:alpha-a-circle-outline
toc: true
---

# Whitepapers

> [!note]
> **Maturity:** `Live corpus index with mixed live and target papers`
>
> **Use this page when:** You need to know which whitepaper is the authority for a claim before you quote, summarize, or build another docs page on top of it.

The whitepaper corpus is not one flat shelf. Some papers define the current protocol thesis, some widen one important boundary such as liability or cross-chain custody, and some describe scenario families or governance systems that must still be read with explicit maturity labels. This page turns that corpus into a usable reading order.

## The Short Safe Reading Order

If you are new to the corpus, start with these three documents in this exact order.

| Read first | Why it is first | What it should answer |
| --- | --- | --- |
| `content/whitepapers/Main-Whitepaper.md` | It defines the baseline protocol thesis, wallet-local possession, checkpointed settlement, and present-vs-target posture | "What is Z00Z claiming as a system?" |
| `content/whitepapers/UseCases.md` | It explains the six scenario families and keeps them ordered by maturity | "Where does this architecture matter first?" |
| `content/whitepapers/Corpus-Terminology-Reference.md` | It stabilizes terms that otherwise drift across papers | "What do the recurring nouns actually mean?" |

That trio is enough to prevent most research mistakes. Many later papers assume you already understand the protocol category, the scenario ordering, and the corpus vocabulary.

## Core Authority Papers

These are the files most readers should treat as first-line authority.

| File | Role in the corpus | Safe reading posture |
| --- | --- | --- |
| `content/whitepapers/Main-Whitepaper.md` | Core protocol thesis, wallet-local possession, settlement-notary framing, privacy boundaries, locker direction, and maturity split | Use for baseline present-tense protocol wording |
| `content/whitepapers/UseCases.md` | Six-family scenario map from offline cash through agent and machine rights | Use when comparing scenario fit or ordering market wedges |
| `content/whitepapers/Corpus-Terminology-Reference.md` | Cross-paper vocabulary contract | Use when a term appears in multiple papers or shifts from live to target meaning |
| `content/whitepapers/Privacy-Threat-Model.md` | Layered privacy, adversary classes, and disclosure boundaries | Use before making strong privacy or selective-disclosure claims |

These papers are not interchangeable. The main whitepaper gives the protocol center of gravity. The terminology reference stops noun drift. The privacy model tells you where confidentiality ends. The use-cases paper tells you how the argument is staged for readers and builders.

## Companion Papers By Question

Once the core is clear, choose the companion paper that answers the question you actually have.

| If you need more depth on... | Read this file | What it adds |
| --- | --- | --- |
| Offline fraud, bounded accountability, and reveal-on-conflict logic | `content/whitepapers/Linked-Liability.md` | It explains how private execution can stay private in the honest path while still exposing fraud narrowly |
| External custody, trust tiers, and private rights over outside assets | `content/whitepapers/Cross-Chain-Integration.md` | It separates internal private reassignment from external custody and redemption assumptions |
| Policy-shaped money, vouchers, and rights boundaries | `content/whitepapers/Assets-Rights-Vauchers.md` and `content/whitepapers/Smart-Cash.md` | They define why bounded rules live in objects rather than in a public smart-contract default |
| Useful-work rewards, review lanes, and private payout | `content/whitepapers/Proof-of-Useful-Work.md` | It keeps contributor rewards rule-bound and privacy-aware |
| Agent budgets, machine rights, and spendable capability objects | `content/whitepapers/Agentic-Offline-Economy.md` | It widens the architecture beyond money without pretending every extension is already live |
| Governance lanes, AI review safety, and treasury non-control | `content/whitepapers/DAO.md` | It explains how AI evaluation and treasury execution must remain separated |

The important discipline is that these papers deepen the corpus. They do not automatically upgrade target architecture into live protocol fact.

## Maturity Labels To Keep Visible

Most misunderstanding comes from forgetting that different papers operate at different maturity bands.

| Maturity label | What it usually means in this corpus | Typical examples |
| --- | --- | --- |
| Live core contract | There is already a repo-backed protocol or wallet surface strong enough for present-tense wording | Package verification, checkpoint settlement, wallet-local possession |
| Near-core extension | The concept fits the live model closely, but depends on more service or policy closure | Policy-shaped money, private external-asset rights |
| Broader deployment | The architecture is coherent, but operational rails and product layers matter more | Organizational settlement, mass distribution programs |
| Expansion vector | Strong direction, weaker present-tense deployment posture | Machine and agent rights, richer useful-work ecosystems |

When you summarize a paper, keep that label visible. It is better to say "the corpus positions this as a serious extension direction" than to silently rewrite it as a shipped feature.

## How To Cite The Corpus Without Flattening It

Three habits keep the whitepaper set usable.

First, cite the narrowest authority that owns the claim. If you are discussing privacy leakage at ingress and egress, use `content/whitepapers/Privacy-Threat-Model.md`, not only the main paper. If you are discussing bounded agent spending, use `content/whitepapers/Agentic-Offline-Economy.md`, not only the use-cases overview.

Second, cite one core paper plus one companion paper when the topic crosses a boundary. External-asset rights, for example, usually need both `content/whitepapers/Main-Whitepaper.md` and `content/whitepapers/Cross-Chain-Integration.md`.

Third, do not use archive-era framing as a substitute for current-corpus wording. If an older draft says something more aggressively than the newer whitepapers, the newer corpus wins unless the page explicitly says otherwise.

## What This Page Does Not Treat As Current Authority

This page intentionally does not elevate archived or superseded material into the main authority lane. Older litepaper-era framing, exploratory drafts, and historical notes still matter for provenance, but they should be read through [Archive](/docs/research/archive), not as first-line evidence for live protocol wording.

That restraint matters because the corpus is ambitious. It wants to speak about private cash, external rights, selective disclosure, machine economies, and rule-bound useful-work programs in one family. The only way to keep that family credible is to keep the authority order strict.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` is the primary source for present-tense protocol contracts, settlement boundaries, and implementation-status language.
- `content/whitepapers/UseCases.md` is the source for the six-family ordering and for maturity discipline across scenario pages.
- `content/whitepapers/Corpus-Terminology-Reference.md` is the authority for terms such as `AssetLeaf`, `RightLeaf`, `SettlementPath`, `FeeEnvelope`, and `RewardAuthorization`.
- `content/whitepapers/Privacy-Threat-Model.md`, `content/whitepapers/Linked-Liability.md`, and `content/whitepapers/Cross-Chain-Integration.md` are the main companion files to consult before making privacy, fraud-accountability, or external-custody claims.
