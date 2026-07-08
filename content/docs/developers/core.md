---
title: "Core Protocol API"
description: "Developer docs for assets, actions, policies, rights, vouchers, genesis, hashing, and curated root exports."
toc: true
---
# Core Protocol API
> [!note]
> **Docs route:** `/docs/developers/core`
>
> **Target site route:** `/developers/core`
>
> **Maturity:** `Live code`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Developer docs for assets, actions, policies, rights, vouchers, genesis, hashing, and curated root exports.

When
: Used when implementing protocol-facing logic or reading genesis and asset flows.

Where
: Developers and Protocol object-model pages.

Who
: Rust contributors, wallet engineers, storage engineers, and protocol reviewers.

Why
: The core crate owns protocol domain types and canonical bootstrap authority.

How
: Document stable exports, owner modules, genesis authority, YAML config boundaries, examples, and validation rules.

## Reader Lenses

::: tabs

@tab:active Purpose
Developer docs for assets, actions, policies, rights, vouchers, genesis, hashing, and curated root exports.

@tab Audience
Primary readers: Rust contributors, wallet engineers, storage engineers, and protocol reviewers.

@tab Delivery
Document stable exports, owner modules, genesis authority, YAML config boundaries, examples, and validation rules.

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
| [Rust Workspace](/docs/developers/workspace) | Previous page in the same section order. |
| [Crypto Facade](/docs/developers/crypto) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_core/README.md, crates/z00z_core/src/lib.rs`
- Section: `Developers`
- Section message: builders need exact module ownership, runnable commands, API boundaries, and verification steps.
+++
