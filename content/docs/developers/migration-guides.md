---
title: "Migration Guides"
description: "Concept mapping for builders coming from account chains, public smart-contract platforms, wallet SDKs, or bridge-heavy systems."
toc: true
---
# Migration Guides
> [!note]
> **Docs route:** `/docs/developers/migration-guides`
>
> **Target site route:** `/developers/migration-guides`
>
> **Maturity:** `Site support + research docs`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Concept mapping for builders coming from account chains, public smart-contract platforms, wallet SDKs, or bridge-heavy systems.

When
: Used when a builder asks how Ethereum, Solana, Sui, NEAR, shielded pools, or exchange-style assumptions map into Z00Z.

Where
: Developers, Learn comparisons, Cross-chain, and Ecosystem builders.

Who
: External-chain developers, wallet teams, bridge teams, auditors, and technical partners.

Why
: Sui's chain-to-chain migration pages show that builders need translation tables before they can reason about a different state model.

How
: Provide concept maps for accounts versus private objects, balances versus possession, bridge custody versus issuer/locker claims, mempool flows versus delayed publication, and public events versus privacy-safe receipts.

## Reader Lenses

::: tabs

@tab:active Purpose
Concept mapping for builders coming from account chains, public smart-contract platforms, wallet SDKs, or bridge-heavy systems.

@tab Audience
Primary readers: External-chain developers, wallet teams, bridge teams, auditors, and technical partners.

@tab Delivery
Provide concept maps for accounts versus private objects, balances versus possession, bridge custody versus issuer/locker claims, mempool flows versus delayed publication, and public events versus privacy-safe receipts.

:::

## Section Lens

Source
: Cargo workspace metadata, crate READMEs, crate root exports, examples, tests, scripts, and generated docs.

Message
: builders need exact module ownership, runnable commands, API boundaries, and verification steps.

UX
: a dense builder guide with command blocks, module maps, tabs for roles, and explicit source-file links.

Include
: setup commands, crate maps, stable-vs-internal API labels, examples, failure modes, and verification gates.

Avoid
: invented SDK behavior, snippets that do not map to code, or tutorial prose that hides safety boundaries.

## Navigation Links

| Link | Why it matters |
| --- | --- |
| [Developers](/docs/developers) | Parent hub and primary context for this page. |
| [AI Agent Playbook](/docs/developers/ai-agent-playbook) | Previous page in the same section order. |
| [Rust Workspace](/docs/developers/workspace) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `docs/Z00Z-Cross-Chain-Integration-Whitepaper.md, docs/Z00Z-Competitors-Research-Report.md, crates/z00z-crates-overview.md`
- Section: `Developers`
- Section message: builders need exact module ownership, runnable commands, API boundaries, and verification steps.
+++
