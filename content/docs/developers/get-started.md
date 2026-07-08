---
title: "Get Started"
description: "Minimal local setup for building, testing, and understanding the Rust workspace."
toc: true
---
# Get Started
> [!note]
> **Docs route:** `/docs/developers/get-started`
>
> **Target site route:** `/developers/get-started`
>
> **Maturity:** `Live code docs`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Minimal local setup for building, testing, and understanding the Rust workspace.

When
: Used by first-time contributors before crate-specific pages.

Where
: Developers hub and GitHub README link.

Who
: Engineers, reviewers, and AI coding agents.

Why
: Reduces friction and prevents readers from starting in the wrong crate.

How
: Document toolchain version, workspace members, core commands, normal validation gate, and where generated outputs go.

## Reader Lenses

::: tabs

@tab:active Purpose
Minimal local setup for building, testing, and understanding the Rust workspace.

@tab Audience
Primary readers: Engineers, reviewers, and AI coding agents.

@tab Delivery
Document toolchain version, workspace members, core commands, normal validation gate, and where generated outputs go.

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
| [AI Agent Playbook](/docs/developers/ai-agent-playbook) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `README.md, Cargo.toml, scripts/cargo_build.sh, scripts/verify-env.sh`
- Section: `Developers`
- Section message: builders need exact module ownership, runnable commands, API boundaries, and verification steps.
+++
