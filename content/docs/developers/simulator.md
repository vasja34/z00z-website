---
title: "Simulator"
description: "Scenario-driven integration harness for replaying protocol, wallet, storage, RPC, and runtime flows."
toc: true
---
# Simulator
> [!note]
> **Docs route:** `/docs/developers/simulator`
>
> **Target site route:** `/developers/simulator`
>
> **Maturity:** `Live integration harness`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Scenario-driven integration harness for replaying protocol, wallet, storage, RPC, and runtime flows.

When
: Used for regression testing, design validation, and example flows.

Where
: Developers and Research.

Who
: Test authors, protocol engineers, auditors, and contributors.

Why
: The simulator proves layered architecture behaves as a system.

How
: Document scenario contracts, configuration, actors, context, events, result states, deterministic RNG modes, and scenario outputs.

## Reader Lenses

::: tabs

@tab:active Purpose
Scenario-driven integration harness for replaying protocol, wallet, storage, RPC, and runtime flows.

@tab Audience
Primary readers: Test authors, protocol engineers, auditors, and contributors.

@tab Delivery
Document scenario contracts, configuration, actors, context, events, result states, deterministic RNG modes, and scenario outputs.

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
| [Runtime Services](/docs/developers/runtime-services) | Previous page in the same section order. |
| [Configuration And Genesis](/docs/developers/configuration-genesis) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_simulator/README.md, crates/z00z_simulator/src/lib.rs`
- Section: `Developers`
- Section message: builders need exact module ownership, runnable commands, API boundaries, and verification steps.
+++
