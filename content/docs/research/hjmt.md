---
title: "HJMT Research"
description: "Research lane for settlement-tree structure, typed state boundaries, and storage-backed maturity discipline."
difficulty: expert
icon: mdi:alpha-d-circle-outline
toc: true
---

# HJMT Research

> [!note]
> **Maturity:** `Live settlement concept with mixed current and future storage detail`
>
> **Use this page when:** You need to understand how the corpus talks about settlement trees, rights leaves, and storage-owned replay boundaries without overstating the current runtime surface.

HJMT matters because it is where abstract privacy language has to become durable settlement structure. Once Z00Z stops speaking only about wallet-local possession and starts speaking about checkpointed state, it needs a way to explain what is actually committed, how a right or voucher survives in canonical state, and why replay protection belongs to storage and checkpoint application rather than to a public balance table.

## What This Research Lane Owns

HJMT research is best treated as the storage-and-settlement depth lane for four recurring questions.

| Question | Why HJMT matters |
| --- | --- |
| What kind of leaf does canonical state actually commit? | It keeps the corpus grounded in typed settlement objects rather than vague balance stories |
| Why does replay protection belong to state continuity, not only to package checks? | It explains why local verification and final settlement are not the same event |
| How can the model widen from assets to rights and vouchers? | It provides the structural lane for broader right objects without changing the core settlement contract |
| Why are performance claims around state transition expensive and maturity-sensitive? | Tree shape, proof size, batching, and recovery all affect what can honestly be claimed |

This is why HJMT should be read as research depth, not as a shortcut to "storage is solved."

## The Safe Present-Tense Reading

The current corpus gives a defensible present-tense story even without pretending every storage extension is already finished.

| Present-tense point | Safe wording |
| --- | --- |
| Z00Z settles typed objects, not public accounts | Canonical state is described through leaves, paths, checkpoints, and replay-safe transitions |
| Local package verification is not final settlement | Storage and checkpoint continuity still decide whether a transition becomes authoritative |
| The leaf family is widening conceptually | Rights and vouchers are part of the direction, but the corpus still treats some of that widening as target architecture |
| Performance and sharding discussion are evidence-sensitive | Benchmarks and design notes inform direction, but do not by themselves prove production-scale guarantees |

That posture keeps HJMT aligned with `content/whitepapers/Main-Whitepaper.md`, which repeatedly separates wallet-side preparation from canonical settlement.

## Why HJMT Shows Up Outside Storage Discussions

Readers sometimes assume HJMT only matters to a storage engineer. The corpus suggests a broader role.

First, it matters to privacy claims. If a reader does not understand that only settlement evidence becomes public, they may accidentally assume the system is hiding an ordinary account ledger. HJMT is one of the places where the corpus explains that the public side is narrower and more typed than that.

Second, it matters to liability and rights expansion. `content/whitepapers/Linked-Liability.md` assumes that rights, receipts, and later fraud proofs can attach to a structured settlement surface rather than to an undifferentiated balance map. HJMT is part of the reason that claim is coherent.

Third, it matters to maturity language. The more a page depends on rights leaves, vouchers, or generalized settlement families, the more carefully it should separate live boundary from target widening.

## What HJMT Research Does Not Prove By Itself

The research lane is valuable, but it should not be asked to prove more than it can.

| Overclaim to avoid | Safer replacement |
| --- | --- |
| "The full generalized rights tree is already production-complete." | "The corpus has a coherent widening path from asset-centric settlement toward broader right families." |
| "Storage design alone proves throughput at scale." | "Storage design shapes the cost surface that benchmarks and later implementation work still have to validate." |
| "HJMT means every policy family is already live." | "HJMT provides the structural lane for future settlement families, while policy maturity still varies." |
| "A tree diagram proves recovery and operator safety." | "Recovery, sharding, and publication resilience still need supporting operational evidence." |

This page is therefore less about celebrating one tree structure and more about teaching the reader how to keep tree research proportional to actual evidence.

## How To Use This Lane With Other Papers

For most readers, HJMT makes the most sense in combination with one core paper and one companion paper.

| Read together with... | Result |
| --- | --- |
| `content/whitepapers/Main-Whitepaper.md` | You get the baseline story of typed objects, checkpoints, and state continuity |
| `content/whitepapers/Linked-Liability.md` | You see how delayed execution and later fraud handling need a structured settlement surface |
| [Benchmarks](/docs/research/benchmarks) | You can separate storage-shape reasoning from measured performance claims |
| [Glossary](/docs/research/glossary) | You can keep terms such as `RightLeaf`, `SettlementLeaf`, and `SettlementPath` consistent |

That combination is usually enough to write careful prose about storage and settlement without importing stale or overly confident language from older technical notes.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` is the primary current-corpus source for canonical state objects, settlement paths, checkpoints, and implementation-status language.
- `content/whitepapers/Linked-Liability.md` shows why later fraud handling, domain locks, and reveal-on-conflict logic need a structured settlement surface.
- `content/whitepapers/Corpus-Terminology-Reference.md` is the authority for `RightLeaf`, `VoucherLeaf`, `SettlementLeaf`, `SettlementPath`, and related storage nouns.
- `content/whitepapers/Privacy-Threat-Model.md` is useful when you need to explain how internal private movement relates to public settlement evidence without turning the tree surface into a public behavior graph.
