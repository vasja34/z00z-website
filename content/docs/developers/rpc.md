---
title: "RPC Transport"
description: "Transport-focused RPC abstraction for dispatch, local testing, WASM clients, and pluggable transports."
toc: true
---
# RPC Transport
> [!note]
> **Docs route:** `/docs/developers/rpc`
>
> **Target site route:** `/developers/rpc`
>
> **Maturity:** `Live code`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Transport-focused RPC abstraction for dispatch, local testing, WASM clients, and pluggable transports.

When
: Used when wiring wallets, rollup nodes, local tests, or browser clients.

Where
: Developers and Network.

Who
: Wallet developers, node developers, frontend developers, and test authors.

Why
: Keeps request dispatch separate from peer identity, auth, retry policy, and full networking.

How
: Document RpcTransport, RpcDispatcher, LocalRpcTransport, WasmRpcClient, errors, and non-boundary concerns.

## Reader Lenses

::: tabs

@tab:active Purpose
Transport-focused RPC abstraction for dispatch, local testing, WASM clients, and pluggable transports.

@tab Audience
Primary readers: Wallet developers, node developers, frontend developers, and test authors.

@tab Delivery
Document RpcTransport, RpcDispatcher, LocalRpcTransport, WasmRpcClient, errors, and non-boundary concerns.

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
| [Storage And HJMT](/docs/developers/storage-hjmt) | Previous page in the same section order. |
| [Rollup Node](/docs/developers/rollup-node) | Next page in the same section order. |
| [Z00Z Home](/docs) | Top-level entry for the full site architecture. |

+++ Evidence and scaffold notes
- Evidence anchors: `crates/z00z_networks/rpc/README.md, crates/z00z_networks/rpc/src/lib.rs`
- Section: `Developers`
- Section message: builders need exact module ownership, runnable commands, API boundaries, and verification steps.
+++
