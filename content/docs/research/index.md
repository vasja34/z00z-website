---
title: "Research"
description: "Research hub for whitepapers, technical papers, benchmarks, verification, archive, and glossary."
toc: true
---
# Research
> [!note]
> **Docs route:** `/docs/research`
>
> **Target site route:** `/research`
>
> **Maturity:** `Live docs`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Research hub for whitepapers, technical papers, benchmarks, verification, archive, and glossary.

When
: Used by readers who want source depth beyond product and developer docs.

Where
: Header resources menu and footer.

Who
: Researchers, auditors, contributors, analysts, and protocol designers.

Why
: Z00Z has a large corpus; a research hub prevents the main navigation from becoming unwieldy.

How
: Organize active papers first, then tech papers, done papers, benchmarks, verification, and archive material.

## Reader Lenses

::: tabs

@tab:active Purpose
Research hub for whitepapers, technical papers, benchmarks, verification, archive, and glossary.

@tab Audience
Primary readers: Researchers, auditors, contributors, analysts, and protocol designers.

@tab Delivery
Organize active papers first, then tech papers, done papers, benchmarks, verification, and archive material.

:::

## Section Lens

Source
: whitepapers, technical papers, done papers, benchmark notes, verification plans, and archive material.

Message
: research pages should preserve source depth while separating active authority from historical context.

UX
: a document index with filters, abstracts, status labels, and deep links into exact source files.

Include
: status tags, reading order, source links, superseded notices, benchmark caveats, and open questions.

Avoid
: treating archive drafts as canonical or flattening all papers into an unprioritized list.

## Section Pages

| Page | Role |
| --- | --- |
| [Whitepapers](/docs/research/whitepapers) | Canonical whitepaper index with summaries, status, version dates, and recommended reading order. |
| [Technical Papers](/docs/research/technical-papers) | Technical paper index for roadmap, multi-DA, storage, thin transaction mode, benchmarks, and verification notes. |
| [HJMT Research](/docs/research/hjmt) | Research and design trail for bucketed root-chained JMT forest, settlement proofs, sharding, recovery, and performance. |
| [Benchmarks](/docs/research/benchmarks) | Performance evidence for settlement inserts, deletes, proof generation, proof verification, proof sizes, and caveats. |
| [Verification Orchestrator](/docs/research/verification-orchestrator) | Research plan for formal specifications, model checkers, theorem provers, Rust verification, fuzzing, and security gates. |
| [Archive](/docs/research/archive) | Historical notes, external article reviews, exploratory drafts, and archived research. |
| [Glossary](/docs/research/glossary) | Research-facing version of the corpus terminology reference with term authority and cross-links. |

## Navigation Links

| Link | Why it matters |
| --- | --- |
| [Z00Z Home](/docs) | Parent hub and primary context for this page. |
| [Security](/docs/security) | Previous page in the same section order. |
| [Support](/docs/support) | Next page in the same section order. |

## Delivery Focus

- [x] Route intent captured from the architecture scaffold
- [x] Internal cross-links added for hub navigation
- [x] Evidence anchors preserved for follow-up drafting
- [ ] Final long-form prose and diagrams still need source-document expansion

## Route Map

@mermaidstart
graph TD
  research["Research"]
  research --> research_whitepapers["Whitepapers"]
  research --> research_tech_papers["Technical Papers"]
  research --> research_hjmt["HJMT Research"]
  research --> research_benchmarks["Benchmarks"]
  research --> research_verification["Verification Orchestrator"]
  research --> research_archive["Archive"]
  research --> research_glossary["Glossary"]
@mermaidend

+++ Evidence and scaffold notes
- Evidence anchors: `docs/*.md, docs/tech-papers/*.md, docs/tech-papers/done/*.md`
- Section: `Research`
- Section message: research pages should preserve source depth while separating active authority from historical context.
+++
