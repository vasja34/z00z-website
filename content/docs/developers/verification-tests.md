---
title: "Verification And Tests"
description: "Verification strategy for unit tests, integration tests, benches, fuzzing, formal tools, security gates, and supply-chain checks."
toc: true
---
# Verification And Tests
> [!note]
> **Docs route:** `/docs/developers/verification-tests`
>
> **Target site route:** `/developers/verification-tests`
>
> **Maturity:** `Live tests + expanding formal gates`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Verification strategy for unit tests, integration tests, benches, fuzzing, formal tools, security gates, and supply-chain checks.

When
: Used before merging protocol, crypto, storage, wallet, or runtime changes.

Where
: Developers and Security.

Who
: Contributors, reviewers, release managers, and AI agents.

Why
: Z00Z needs evidence-backed claims, not aspirational correctness.

How
: Document fast, medium, deep gates, module-specific checks, benchmark caveats, formal verification targets, and required outputs.

## Reader Lenses

::: tabs

@tab:active Purpose
Verification strategy for unit tests, integration tests, benches, fuzzing, formal tools, security gates, and supply-chain checks.

@tab Audience
Primary readers: Contributors, reviewers, release managers, and AI agents.

@tab Delivery
Document fast, medium, deep gates, module-specific checks, benchmark caveats, formal verification targets, and required outputs.

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
| [API Reference](/docs/developers/api-reference) | Previous page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `docs/tech-papers/z00z-verification-orchestrator.md, .github/skills/z00z-full-verify-gate, crate tests`
- Section: `Developers`
- Section message: builders need exact module ownership, runnable commands, API boundaries, and verification steps.
+++
