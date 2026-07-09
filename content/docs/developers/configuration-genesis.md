---
title: "Configuration And Genesis"
description: "Builder guide to startup authority, site-local configuration, and the difference between protocol genesis and docs-repo config."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# Configuration And Genesis

> [!warning]
> **Maturity:** `Mixed: live site config + protocol genesis design`
>
> **Use this page when:** You need to separate the live configuration surfaces in this repository from the broader protocol genesis concepts described in the Z00Z corpus.

Configuration and genesis are easy to blur because both sound like startup concerns. In practice they belong to different authority levels. **Genesis** is a protocol question: what is the canonical initial state, issuance basis, and starting authority model for the system? **Configuration** is often an environment question: how does a particular deployment, site, tool, or workflow decide how to behave? This repository contains real configuration files for the docs product, but it does not contain a full protocol genesis implementation. A good page must make that difference explicit.

## The Two Layers

The cleanest way to understand this page is to split the subject in two:

| Layer | What it means here |
| --- | --- |
| Protocol genesis | Whitepaper-grounded initial authority, object definitions, and settlement assumptions |
| Repository configuration | Live files that control how the docs product builds, renders, and routes |

That distinction is valuable because it prevents a docs repo from pretending to prove more than it does while still helping contributors work with real local configuration.

## The Live Config Surfaces In This Repo

The current tree includes several real configuration files:

| Path | What it appears to control |
| --- | --- |
| `config/site.yaml` | Site behavior and presentation settings |
| `config/content-pipeline.yaml` | Content and Markdown pipeline behavior |
| `config/domains.yaml` | Domain-oriented routing or content mapping |
| `config/themes.yaml` and `config/code-themes.yaml` | Theme and code-display settings |
| `package.json` | Script-level workflow configuration for dev, lint, and verify |

These are valid local evidence for docs-product behavior. If you are changing how the site renders, routes, or verifies content, they are the right files to inspect.

## What Genesis Means In The Z00Z Papers

Protocol genesis is narrower and more consequential than site config. It answers questions such as:

| Genesis question | Why it matters |
| --- | --- |
| What objects and definitions exist at system start? | The settlement model depends on initial object semantics |
| What issuance or reserve assumptions exist? | Economic and policy claims need a canonical starting point |
| Which boundaries are core protocol versus service overlays? | Builders need to know what is authoritative from the start |

That is why genesis belongs with the whitepaper corpus rather than with ad hoc environment tweaks. You should not let a runtime flag or site setting masquerade as protocol genesis.

## How Builders Should Work With Both Layers

A useful workflow is:

1. If the change affects the docs product, inspect `config/`, `package.json`, and the relevant `src/` or `content/` paths first.
2. If the change affects protocol wording, confirm the corresponding genesis or bootstrap concept in the whitepaper corpus.
3. If a page mentions both, say which layer each claim belongs to.

This avoids two common failures. One is overclaiming that the repo contains live genesis code. The other is underclaiming by pretending local config does not matter just because it is not consensus logic.

## Common Configuration Mistakes

| Mistake | Better interpretation |
| --- | --- |
| Treating site config as protocol truth | Site config shapes the docs product, not the protocol theorem |
| Treating genesis as just another settings file | Genesis is part of the protocol's initial authority contract |
| Hiding maturity differences | Readers need to know which layer is live locally and which is design-grounded |
| Mixing economic bootstrap language into UI config prose | Configuration and issuance should stay clearly separated |

This clarity matters because bootstrap language shapes how integrators and reviewers judge the system's credibility.

## Read Next

Go to [WASM Wallet](/docs/developers/wasm-wallet) if your next question is browser-facing deployment constraints, or revisit [Simulator](/docs/developers/simulator) if you need to reason about startup assumptions inside scenario design.

## Evidence and Further Reading

- `config/site.yaml`, `config/content-pipeline.yaml`, `config/domains.yaml`, `config/themes.yaml`, and `config/code-themes.yaml` are the live local configuration surfaces summarized on this page.
- `package.json` defines the repo workflow commands that also act as operational configuration for the docs product.
- `content/whitepapers/Main-Whitepaper.md` explains the canonical protocol boundaries that make genesis a distinct concept from environment configuration.
- `content/whitepapers/DAO.md` and `content/whitepapers/Tokenomics.md` add context for bootstrap authority, stewardship, reserve, and policy language that docs should not flatten into ordinary config talk.
