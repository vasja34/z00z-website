---
title: "API Reference"
description: "Reference map for current docs-repo surfaces, protocol vocabulary, and future generated API detail."
difficulty: specialist
icon: mdi:alpha-e-circle-outline
toc: true
---

# API Reference

> [!warning]
> **Maturity:** `Reference hub, not exhaustive generated catalog`
>
> **Use this page when:** You need to find the right reference surface quickly without being misled into thinking this repo already publishes every runtime API in generated form.

An API reference page is useful only when it tells the truth about what kind of reference it is. In this repository, the correct truth is that the page is a **reference map**, not a complete generated catalog. Readers still need a place to orient themselves: where is the canonical protocol vocabulary, where are the current local commands, where does the docs rendering logic live, and which pages explain wallet, transport, or runtime concepts? That is real reference value. Pretending the repo also publishes a finished runtime API browser would only make the page less trustworthy.

## The Three Reference Layers

Think of the current reference surface as three stacked layers:

| Layer | What it provides today |
| --- | --- |
| Protocol language | Canonical terms, boundaries, and maturity framing from the whitepaper corpus |
| Repository workflow | Commands, rendering behavior, navigation, and verification surfaces that really exist locally |
| Reader-facing subsystem docs | Curated explanations for wallets, transport, runtime roles, storage, and verification |

This is enough to answer many builder questions even before generated runtime docs exist.

## Where To Look For What

Use this table as the real entry point:

| If you need... | Start here |
| --- | --- |
| Protocol object and settlement vocabulary | `content/whitepapers/Corpus-Terminology-Reference.md` and `content/docs/protocol/` |
| Contributor commands and completion gates | `package.json`, `scripts/verify.sh`, `content/docs/developers/get-started.md` |
| Markdown and content rendering behavior | `src/lib/content/markdown.ts` |
| Current docs routing and delivery | `src/app/` and `content/docs/` |
| AI-assisted workflow rules | `.github/copilot-instructions.md`, `.github/skills/`, `.github/prompts/` |

That structure is more useful than a fake namespace list because it helps the reader reach evidence that actually exists.

## What This Page Should Not Pretend To Be

The current repo does not justify claiming:

| Not justified here | Why |
| --- | --- |
| Exhaustive generated runtime method documentation | The implementation surface is not fully local in this tree |
| Complete wallet, node, or service signatures | Many advanced subsystem pages are concept-plus-maturity guides |
| Stable generated browser docs for every future package | That would require build artifacts or implementation sources not present here |

The page should therefore guide readers toward the right **kind** of reference rather than fabricating precision.

## A Useful Reference Habit For Builders

When you hit a technical question, ask first which of these it is:

1. A protocol meaning question.
2. A local repo workflow question.
3. A subsystem-orientation question.

If it is a protocol meaning question, the whitepaper corpus is primary. If it is a local repo workflow question, the code and scripts in this repository are primary. If it is a subsystem-orientation question, the current docs pages should summarize the boundary and then hand off to the right evidence. This habit prevents the reference page from turning into a dumping ground for mismatched details.

## Reference Anti-Patterns

| Anti-pattern | Why it weakens the page |
| --- | --- |
| Listing future APIs as if they are locally published | It teaches readers to trust non-evidence |
| Mixing conceptual terms and live commands in one undifferentiated list | Readers cannot tell what they can act on now |
| Treating docs prose as equivalent to generated API contracts | The confidence level is different |
| Omitting workflow surfaces because they are not "real APIs" | Builder productivity depends on them anyway |

The best API reference page is not always the biggest one. It is the one with the clearest truth boundary.

## Read Next

Continue to [Verification And Tests](/docs/developers/verification-tests) for the local quality gates that validate this repository, or return to [Examples And Tutorials](/docs/developers/examples) if you need narrative walkthroughs rather than reference entry points.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` and `content/whitepapers/Corpus-Terminology-Reference.md` are the primary protocol reference surfaces for object, settlement, and maturity vocabulary.
- `package.json`, `scripts/verify.sh`, and `src/lib/content/markdown.ts` are the main local reference surfaces for commands and content-rendering behavior in this repository.
- `content/docs/developers/` and `content/docs/protocol/` provide the current curated subsystem explanations that this hub points readers toward.
- `.github/copilot-instructions.md`, `.github/skills/`, and `.github/prompts/` are part of the live workflow reference surface for contributors using assistant-driven editing.
