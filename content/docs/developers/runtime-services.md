---
title: "Runtime Services"
description: "Developer hub for aggregators, validators, and watchers."
toc: true
---
# Runtime Services
> [!tip]
> **Docs route:** `/docs/developers/runtime-services`
>
> **Target site route:** `/developers/runtime-services`
>
> **Maturity:** `In progress`
>
> This page mixes live evidence with in-progress work. Call out implemented surfaces separately from planned extensions.

## Page Brief

What
: Developer hub for aggregators, validators, and watchers.

When
: Used before implementing admission, ordering, validation, reconciliation, alerting, or publication oversight.

Where
: Developers and Network.

Who
: Runtime engineers, operators, security reviewers, and simulator authors.

Why
: Runtime services move work toward settlement but should not redefine settlement truth.

How
: Split docs into aggregators, validators, watchers, shared types, service boundaries, examples, and tests.

## Reader Lenses

::: tabs

@tab:active Purpose
Developer hub for aggregators, validators, and watchers.

@tab Audience
Primary readers: Runtime engineers, operators, security reviewers, and simulator authors.

@tab Delivery
Split docs into aggregators, validators, watchers, shared types, service boundaries, examples, and tests.

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
| [Rollup Node](/docs/developers/rollup-node) | Previous page in the same section order. |
| [Simulator](/docs/developers/simulator) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_runtime/aggregators/src/lib.rs, crates/z00z_runtime/validators/src/lib.rs, crates/z00z_runtime/watchers/src/lib.rs`
- Section: `Developers`
- Section message: builders need exact module ownership, runnable commands, API boundaries, and verification steps.
+++
