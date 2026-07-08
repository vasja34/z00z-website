---
title: "Rollup Node"
description: "Proof verification and rollup-facing node process docs, including mode wiring, DA adapter seam, RPC state, runtime, and status snapshot."
toc: true
---
# Rollup Node
> [!tip]
> **Docs route:** `/docs/developers/rollup-node`
>
> **Target site route:** `/developers/rollup-node`
>
> **Maturity:** `In progress`
>
> This page mixes live evidence with in-progress work. Call out implemented surfaces separately from planned extensions.

## Page Brief

What
: Proof verification and rollup-facing node process docs, including mode wiring, DA adapter seam, RPC state, runtime, and status snapshot.

When
: Used before implementing node process behavior, lifecycle, restart, or DA wiring.

Where
: Developers and Network operators.

Who
: Node developers, DA integrators, operators, and reviewers.

Why
: The rollup node is the chain-facing verification and service-binding boundary.

How
: Document config, DaAdapter, NodeMode, NodeRuntime, StatusSnapshot, service bindings, and verification limits.

## Reader Lenses

::: tabs

@tab:active Purpose
Proof verification and rollup-facing node process docs, including mode wiring, DA adapter seam, RPC state, runtime, and status snapshot.

@tab Audience
Primary readers: Node developers, DA integrators, operators, and reviewers.

@tab Delivery
Document config, DaAdapter, NodeMode, NodeRuntime, StatusSnapshot, service bindings, and verification limits.

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
| [RPC Transport](/docs/developers/rpc) | Previous page in the same section order. |
| [Runtime Services](/docs/developers/runtime-services) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_rollup_node/README.md, crates/z00z_rollup_node/src/lib.rs`
- Section: `Developers`
- Section message: builders need exact module ownership, runnable commands, API boundaries, and verification steps.
+++
