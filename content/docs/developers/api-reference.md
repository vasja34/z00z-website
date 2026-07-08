---
title: "API Reference"
description: "Reference hub for Rust crate APIs, RPC methods, wallet object namespace, and future generated docs."
toc: true
---
# API Reference
> [!warning]
> **Docs route:** `/docs/developers/api-reference`
>
> **Target site route:** `/developers/api-reference`
>
> **Maturity:** `Live code docs + generated docs target`
>
> This page describes target or draft behavior. Avoid present-tense production claims unless implementation evidence is added.

## Page Brief

What
: Reference hub for Rust crate APIs, RPC methods, wallet object namespace, and future generated docs.

When
: Used when builders need exact types, methods, errors, or module ownership.

Where
: Developers and footer.

Who
: Rust developers, SDK authors, wallet teams, and auditors.

Why
: Reference docs should be separate from conceptual docs.

How
: Link generated Rust docs, handwritten RPC surfaces, crate-specific module maps, and stable-vs-internal boundaries.

## Reader Lenses

::: tabs

@tab:active Purpose
Reference hub for Rust crate APIs, RPC methods, wallet object namespace, and future generated docs.

@tab Audience
Primary readers: Rust developers, SDK authors, wallet teams, and auditors.

@tab Delivery
Link generated Rust docs, handwritten RPC surfaces, crate-specific module maps, and stable-vs-internal boundaries.

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
| [Examples And Tutorials](/docs/developers/examples) | Previous page in the same section order. |
| [Verification And Tests](/docs/developers/verification-tests) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crate root lib.rs files, cargo doc`
- Section: `Developers`
- Section message: builders need exact module ownership, runnable commands, API boundaries, and verification steps.
+++
