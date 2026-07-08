---
title: "Learn"
description: "Reader-first education hub that compresses Z00Z before the full technical corpus."
toc: true
---
# Learn
> [!note]
> **Docs route:** `/docs/learn`
>
> **Target site route:** `/learn`
>
> **Maturity:** `Site support`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Reader-first education hub that compresses Z00Z before the full technical corpus.

When
: Used after the home page or from search when a reader needs non-code orientation.

Where
: Top navigation and footer under Learn.

Who
: Cold readers, analysts, media, potential partners, and non-specialist technical readers.

Why
: NEAR and Sui both make onboarding paths explicit; Z00Z needs the same layer before deep protocol details.

How
: Expose short overview, litepaper, main whitepaper, terminology, roadmap, and comparison pages with progressive depth.

## Reader Lenses

::: tabs

@tab:active Purpose
Reader-first education hub that compresses Z00Z before the full technical corpus.

@tab Audience
Primary readers: Cold readers, analysts, media, potential partners, and non-specialist technical readers.

@tab Delivery
Expose short overview, litepaper, main whitepaper, terminology, roadmap, and comparison pages with progressive depth.

:::

## Section Lens

Source
: introductory whitepapers, terminology tables, roadmap notes, and comparison documents.

Message
: new readers should understand the model, vocabulary, maturity, and category boundary before deep protocol pages.

UX
: a progressive education flow with short pages first and deeper source documents one click away.

Include
: plain-language summaries, diagrams, glossary links, reading order, current-vs-target badges, and comparison tables.

Avoid
: raw technical dumps, speculative roadmap language without maturity tags, and claims that bypass the corpus.

## Section Pages

| Page | Role |
| --- | --- |
| [What Is Z00Z?](/docs/learn/what-is-z00z) | Defines Z00Z as a privacy-first digital cash and private settlement protocol organized around private objects, checkpoints, and rights. |
| [Litepaper](/docs/learn/litepaper) | Short public companion to the Z00Z corpus. |
| [Main Whitepaper](/docs/learn/main-whitepaper) | Canonical long-form protocol thesis: private asset objects, wallet-local possession, checkpoint settlement, visibility boundaries, and roadmap scope. |
| [Terminology And Abbreviations](/docs/learn/terminology) | Shared vocabulary contract for objects such as AssetLeaf, RightLeaf, SettlementPath, Checkpoint, TxPackage, and FeeEnvelope. |
| [Roadmap And Maturity](/docs/learn/roadmap) | Explains what is live, in progress, reserved, or target architecture across the workspace and corpus. |
| [Comparisons And Category Boundary](/docs/learn/comparisons) | Positions Z00Z against public account chains, privacy coins, shielded pools, rollups, e-cash systems, and smart-contract platforms. |

## Navigation Links

| Link | Why it matters |
| --- | --- |
| [Z00Z Home](/docs) | Parent hub and primary context for this page. |
| [Protocol](/docs/protocol) | Next page in the same section order. |

## Delivery Focus

- [x] Route intent captured from the architecture scaffold
- [x] Internal cross-links added for hub navigation
- [x] Evidence anchors preserved for follow-up drafting
- [ ] Final long-form prose and diagrams still need source-document expansion

## Route Map

@mermaidstart
graph TD
  learn["Learn"]
  learn --> learn_what["What Is Z00Z?"]
  learn --> learn_litepaper["Litepaper"]
  learn --> learn_main_whitepaper["Main Whitepaper"]
  learn --> learn_terminology["Terminology And Abbreviations"]
  learn --> learn_roadmap["Roadmap And Maturity"]
  learn --> learn_comparisons["Comparisons And Category Boundary"]
@mermaidend

+++ Evidence and scaffold notes
- Evidence anchors: `docs/Z00Z-Litepaper.md, docs/Z00Z-Corpus-Terminology-Reference.md`
- Section: `Learn`
- Section message: new readers should understand the model, vocabulary, maturity, and category boundary before deep protocol pages.
+++
