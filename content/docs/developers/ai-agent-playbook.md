---
title: "AI Agent Playbook"
description: "Agent-ready builder page for coding assistants working inside the Z00Z repository."
toc: true
---
# AI Agent Playbook
> [!note]
> **Docs route:** `/docs/developers/ai-agent-playbook`
>
> **Target site route:** `/developers/ai-agent-playbook`
>
> **Maturity:** `Live repo instructions + site support`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Agent-ready builder page for coding assistants working inside the Z00Z repository.

When
: Used before an AI coding agent edits code, generates docs, runs verification, or interprets the protocol corpus.

Where
: Developers hub, Contribute, and Verification pages.

Who
: AI coding agents, maintainers, reviewers, and contributors using assistant-driven workflows.

Why
: Sui exposes agent skills as an onboarding surface; Z00Z already has local skills and repo rules that should be visible instead of hidden.

How
: Document safe file operations, English-only artifact policy, required skills, local evidence priority, verification commands, forbidden shortcuts, and prompt/tool boundaries.

## Reader Lenses

::: tabs

@tab:active Purpose
Agent-ready builder page for coding assistants working inside the Z00Z repository.

@tab Audience
Primary readers: AI coding agents, maintainers, reviewers, and contributors using assistant-driven workflows.

@tab Delivery
Document safe file operations, English-only artifact policy, required skills, local evidence priority, verification commands, forbidden shortcuts, and prompt/tool boundaries.

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
| [Get Started](/docs/developers/get-started) | Previous page in the same section order. |
| [Migration Guides](/docs/developers/migration-guides) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `.github/copilot-instructions.md, .github/skills, docs/tech-papers/z00z-verification-orchestrator.md`
- Section: `Developers`
- Section message: builders need exact module ownership, runnable commands, API boundaries, and verification steps.
+++
