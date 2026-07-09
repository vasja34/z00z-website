---
title: "Data Infrastructure"
description: "Builder guide to public data surfaces, indexing discipline, and the boundary between publication data and settlement meaning."
difficulty: advanced
icon: mdi:alpha-c-circle-outline
toc: true
---

# Data Infrastructure

> [!warning]
> **Maturity:** `Target public-data surface + current docs evidence`
>
> **Use this page when:** You need to describe machine-readable network data without turning public datasets into a shadow wallet ledger.

Data infrastructure is useful because not every reader wants prose pages or manual inspection. Operators want structured feeds. Analysts want trend lines. Status tooling wants stable fields. External reviewers may want exported evidence. But in Z00Z, public data must stay disciplined. A privacy-first settlement system should not publish so much "helpful" structured information that it quietly rebuilds the same public graph it was meant to avoid.

This page therefore explains the data layer as a **bounded public observation surface**. It should support checkpoint visibility, publication health, provider evidence, and carefully curated status information. It should not become an accidental public account explorer.

## What Public Data Can Safely Mean

Public data is most useful when its meaning is narrow:

| Data class | Safe interpretation |
| --- | --- |
| Checkpoint roots and sequence | Authoritative public settlement progression |
| Provider receipts and DA references | Evidence that publication bytes were stored or referenced somewhere |
| Status snapshots | A bounded view of operator or network health |
| Watcher evidence exports | Observation artifacts suitable for review or support work |

These classes help public understanding without claiming that public data captures the whole economic meaning of the system.

## What Public Data Must Not Pretend To Mean

Just as important are the non-claims:

| Not a safe interpretation | Why |
| --- | --- |
| "This dataset tells you who owns what" | Z00Z intentionally avoids a reusable public ownership table |
| "This index reconstructs private wallet history" | That would contradict the wallet-local possession model |
| "This provider reference proves settlement validity" | DA and data services support evidence access, not theorem truth |
| "This analytics layer is privacy-neutral" | Indexing and correlation can create new metadata risk |

A strong data-infrastructure page must make these limitations explicit so downstream tooling teams do not build the wrong thing just because structured data exists.

## Good Data Design Questions

Before publishing or documenting a new data surface, ask:

1. What exact public artifact does this field summarize?
2. Could the field encourage graph reconstruction or unsafe correlation?
3. Is this a status indicator, an audit reference, or a settlement fact?
4. Does the data class belong on a public status surface, a restricted operational feed, or not at all?

These questions matter because data infrastructure often feels neutral. In privacy systems it rarely is.

## Current Repo Posture

The current repository does not expose a live network data API. What it does provide is enough to define safe boundaries:

| Local evidence | Why it is useful |
| --- | --- |
| `content/whitepapers/Main-Whitepaper.md` | Defines the narrow public-evidence philosophy |
| `content/whitepapers/Cross-Chain-Integration.md` | Helps separate supporting service layers from core settlement truth |
| `content/whitepapers/Privacy-Threat-Model.md` | Explains why observation and indexing can become privacy surfaces |
| `content/docs/network/watchers.md` and `content/docs/network/status-explorer.md` | Provide adjacent public-observation context inside the docs family |

This lets the page guide later implementation honestly instead of pretending that a complete indexer stack is already packaged here.

## A Useful Public Data Taxonomy

Builders often benefit from a small taxonomy:

| Class | Example purpose | Caution |
| --- | --- | --- |
| Settlement-facing public facts | Checkpoint progression, public roots | Should remain authoritative but narrow |
| Publication support facts | Blob availability, provider receipt existence | Useful, but not equivalent to validity |
| Observation facts | Watcher alerts, lag summaries, incident evidence | Must stay clearly labeled as observation |
| Analytics products | Aggregated health trends or operational metrics | Highest risk of over-interpretation or privacy drift |

This taxonomy helps status, explorer, and support pages stay consistent with each other.

## Read Next

Continue to [OnionNet](/docs/network/onionnet) if you need the privacy-ingress side of the data story, or jump to [Status And Explorer](/docs/network/status-explorer) if your next concern is what should actually be shown to public readers.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` defines why public data should remain limited to settlement evidence and adjacent supportive facts.
- `content/whitepapers/Cross-Chain-Integration.md` reinforces that data and service layers can support the protocol without becoming the protocol.
- `content/whitepapers/Privacy-Threat-Model.md` explains why indexing, correlation, and observation remain real privacy concerns.
- `content/docs/network/watchers.md` and `content/docs/network/status-explorer.md` are the current repo-local companion pages for data interpretation and public display.
