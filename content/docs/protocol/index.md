---
title: "Protocol"
description: "Protocol documentation hub for settlement, object model, privacy, checkpoints, economics, governance, and companion whitepapers."
toc: true
---
# Protocol
> [!warning]
> **Docs route:** `/docs/protocol`
>
> **Target site route:** `/protocol`
>
> **Maturity:** `Live core + target extensions`
>
> This page describes target or draft behavior. Avoid present-tense production claims unless implementation evidence is added.

## Page Brief

What
: Protocol documentation hub for settlement, object model, privacy, checkpoints, economics, governance, and companion whitepapers.

When
: Used after Learn, or directly by readers who already understand blockchain concepts.

Where
: Primary header navigation and docs sidebar.

Who
: Protocol engineers, researchers, reviewers, ecosystem architects, and serious builders.

Why
: Mirrors the NEAR and Sui pattern of separating protocol concepts from developer implementation details.

How
: Organize pages by settlement primitives first, then extension families and policy surfaces.

## Reader Lenses

::: tabs

@tab:active Purpose
Protocol documentation hub for settlement, object model, privacy, checkpoints, economics, governance, and companion whitepapers.

@tab Audience
Primary readers: Protocol engineers, researchers, reviewers, ecosystem architects, and serious builders.

@tab Delivery
Organize pages by settlement primitives first, then extension families and policy surfaces.

:::

## Section Lens

Source
: the main whitepaper, companion protocol papers, HJMT design notes, and core/storage/wallet crate surfaces.

Message
: settlement authority, private possession, object semantics, checkpoints, and policy boundaries must stay distinct.

UX
: a technical reference page with diagrams first, then invariants, then implementation links.

Include
: state diagrams, object lifecycle diagrams, invariants, non-goals, maturity labels, and cross-links to developer APIs.

Avoid
: turning target architecture into present-tense implementation or merging DA, anchors, support, and settlement truth.

## Section Pages

| Page | Role |
| --- | --- |
| [Protocol Architecture](/docs/protocol/architecture) | High-level architecture of wallet-local possession, package preparation, publication, checkpoint verification, and authoritative settlement. |
| [Settlement Model](/docs/protocol/settlement-model) | Defines checkpoint-bound settlement, SettlementStateRoot, SettlementPath, terminal leaves, and proof envelopes. |
| [Wallet-Local Possession](/docs/protocol/wallet-local-possession) | Explains why ownership meaning starts in wallet-held secrets, receiver material, scans, and portable packages rather than public account rows. |
| [Checkpoints And Public Evidence](/docs/protocol/checkpoints) | Documents checkpoint validation, DA commitments, anchors, ZTS, and optional external witnesses as separate proof layers. |
| [Assets, Vouchers, And Rights](/docs/protocol/assets-vouchers-rights) | Defines the clean split between final-value assets, conditional-value vouchers, and authority-bearing rights. |
| [Smart Cash](/docs/protocol/smart-cash) | Explains bounded smart-cash semantics without presenting Z00Z as a universal hidden smart-contract VM. |
| [Linked Liability](/docs/protocol/linked-liability) | Fraud realism layer for delayed, offline, and autonomous execution: honest use stays private, provable conflict activates responsibility. |
| [Privacy Threat Model](/docs/protocol/privacy-threat-model) | Layered privacy model across ingress, internal movement, egress, wallet behavior, service disclosures, bridge edges, and fraud-triggered reveal. |
| [Cross-Chain Rights](/docs/protocol/cross-chain-rights) | Shows how external systems can hold assets while Z00Z privately moves internal ownership rights. |
| [Tokenomics And Incentives](/docs/protocol/tokenomics) | Economic constitution for Z00Z fees, fee credits, bonds, treasury compartments, bootstrap reserves, and useful-work funding. |
| [DAO And Governance](/docs/protocol/governance) | Governance architecture with constitutional, policy, operational, and signaling lanes plus rule-bound AI assistance. |
| [Proof Of Useful Work](/docs/protocol/proof-of-useful-work) | Rule-bound reward system for verifiable useful outcomes rather than passive holding, empty activity, or hype farming. |
| [Post-Quantum Migration](/docs/protocol/post-quantum-migration) | Honest migration plan: Z00Z is not end-to-end post-quantum secure today, but has PQ-friendly settlement and storage boundaries. |
| [Legal Architecture](/docs/protocol/legal-architecture) | Architecture-first legal boundary for neutral protocol, steward limits, rule-bound treasury, independent issuers, optional compliance wallets, and do-not-operate zones. |

## Navigation Links

| Link | Why it matters |
| --- | --- |
| [Z00Z Home](/docs) | Parent hub and primary context for this page. |
| [Learn](/docs/learn) | Previous page in the same section order. |
| [Developers](/docs/developers) | Next page in the same section order. |

## Delivery Focus

- [x] Route intent captured from the architecture scaffold
- [x] Internal cross-links added for hub navigation
- [x] Evidence anchors preserved for follow-up drafting
- [ ] Final long-form prose and diagrams still need source-document expansion

## Route Map

@mermaidstart
graph TD
  protocol["Protocol"]
  protocol --> protocol_architecture["Protocol Architecture"]
  protocol --> protocol_settlement["Settlement Model"]
  protocol --> protocol_wallet_local["Wallet-Local Possession"]
  protocol --> protocol_checkpoints["Checkpoints And Public Evidence"]
  protocol --> protocol_objects["Assets, Vouchers, And Rights"]
  protocol --> protocol_smart_cash["Smart Cash"]
  protocol --> protocol_linked_liability["Linked Liability"]
  protocol --> protocol_privacy_threat["Privacy Threat Model"]
  protocol --> protocol_cross_chain["Cross-Chain Rights"]
  protocol --> protocol_tokenomics["Tokenomics And Incentives"]
  protocol --> protocol_dao["DAO And Governance"]
  protocol --> protocol_pouw["Proof Of Useful Work"]
  protocol --> protocol_pq["Post-Quantum Migration"]
  protocol --> protocol_legal["Legal Architecture"]
@mermaidend

+++ Evidence and scaffold notes
- Evidence anchors: `docs/Z00Z-Main-Whitepaper.md, crates/z00z_core/src/lib.rs, crates/z00z_storage/README.md`
- Section: `Protocol`
- Section message: settlement authority, private possession, object semantics, checkpoints, and policy boundaries must stay distinct.
+++
