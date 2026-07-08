---
title: "Developers"
description: "Builder hub for Rust workspace, APIs, wallets, storage, runtime services, simulator, configs, tests, and examples."
toc: true
---
# Developers
> [!note]
> **Docs route:** `/docs/developers`
>
> **Target site route:** `/developers`
>
> **Maturity:** `Live code docs`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Builder hub for Rust workspace, APIs, wallets, storage, runtime services, simulator, configs, tests, and examples.

When
: Used after conceptual onboarding or by contributors landing directly from GitHub.

Where
: Primary navigation and docs sidebar.

Who
: Rust contributors, wallet builders, protocol integrators, operators, auditors, and tool authors.

Why
: Sui and NEAR both make developer routes first-class; Z00Z needs an equally clear builder map.

How
: Start with quickstart, then crate-level docs, API references, examples, local simulation, and verification commands.

## Reader Lenses

::: tabs

@tab:active Purpose
Builder hub for Rust workspace, APIs, wallets, storage, runtime services, simulator, configs, tests, and examples.

@tab Audience
Primary readers: Rust contributors, wallet builders, protocol integrators, operators, auditors, and tool authors.

@tab Delivery
Start with quickstart, then crate-level docs, API references, examples, local simulation, and verification commands.

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

## Section Pages

| Page | Role |
| --- | --- |
| [Get Started](/docs/developers/get-started) | Minimal local setup for building, testing, and understanding the Rust workspace. |
| [AI Agent Playbook](/docs/developers/ai-agent-playbook) | Agent-ready builder page for coding assistants working inside the Z00Z repository. |
| [Migration Guides](/docs/developers/migration-guides) | Concept mapping for builders coming from account chains, public smart-contract platforms, wallet SDKs, or bridge-heavy systems. |
| [Rust Workspace](/docs/developers/workspace) | Map of all active workspace crates and their ownership boundaries. |
| [Core Protocol API](/docs/developers/core) | Developer docs for assets, actions, policies, rights, vouchers, genesis, hashing, and curated root exports. |
| [Crypto Facade](/docs/developers/crypto) | Approved cryptographic API over Tari-backed primitives and Z00Z-owned domain, hash, KDF, AEAD, commitment, and proof surfaces. |
| [Wallet SDK](/docs/developers/wallet) | Wallet API docs for receiver cards, payment requests, object inventory, backups, RPC namespace, WASM support, and service facades. |
| [Payment Requests And Receiver Intents](/docs/developers/payment-requests) | Builder docs for signed receiver cards, payment requests, validation, one-time receiver material, and wallet-facing payment workflows. |
| [Storage And HJMT](/docs/developers/storage-hjmt) | Developer docs for settlement storage, HJMT, checkpoints, serialization, snapshots, durable backend seams, and proof generation. |
| [RPC Transport](/docs/developers/rpc) | Transport-focused RPC abstraction for dispatch, local testing, WASM clients, and pluggable transports. |
| [Rollup Node](/docs/developers/rollup-node) | Proof verification and rollup-facing node process docs, including mode wiring, DA adapter seam, RPC state, runtime, and status snapshot. |
| [Runtime Services](/docs/developers/runtime-services) | Developer hub for aggregators, validators, and watchers. |
| [Simulator](/docs/developers/simulator) | Scenario-driven integration harness for replaying protocol, wallet, storage, RPC, and runtime flows. |
| [Configuration And Genesis](/docs/developers/configuration-genesis) | Genesis, asset registry, rights-enabled YAML, runtime config, and reproducible bootstrap docs. |
| [WASM Wallet](/docs/developers/wasm-wallet) | Browser-compatible wallet build and integration docs. |
| [Examples And Tutorials](/docs/developers/examples) | Practical walkthroughs for wallets, transfers, claim packages, storage proofs, local simulator, and runtime verification. |
| [API Reference](/docs/developers/api-reference) | Reference hub for Rust crate APIs, RPC methods, wallet object namespace, and future generated docs. |
| [Verification And Tests](/docs/developers/verification-tests) | Verification strategy for unit tests, integration tests, benches, fuzzing, formal tools, security gates, and supply-chain checks. |

## Navigation Links

| Link | Why it matters |
| --- | --- |
| [Z00Z Home](/docs) | Parent hub and primary context for this page. |
| [Protocol](/docs/protocol) | Previous page in the same section order. |
| [Network](/docs/network) | Next page in the same section order. |

## Delivery Focus

- [x] Route intent captured from the architecture scaffold
- [x] Internal cross-links added for hub navigation
- [x] Evidence anchors preserved for follow-up drafting
- [ ] Final long-form prose and diagrams still need source-document expansion

## Route Map

@mermaidstart
graph TD
  developers["Developers"]
  developers --> dev_get_started["Get Started"]
  developers --> dev_agent_playbook["AI Agent Playbook"]
  developers --> dev_migration_guides["Migration Guides"]
  developers --> dev_workspace["Rust Workspace"]
  developers --> dev_core_api["Core Protocol API"]
  developers --> dev_crypto["Crypto Facade"]
  developers --> dev_wallet["Wallet SDK"]
  developers --> dev_payment_requests["Payment Requests And Receiver Intents"]
  developers --> dev_storage["Storage And HJMT"]
  developers --> dev_rpc["RPC Transport"]
  developers --> dev_rollup_node["Rollup Node"]
  developers --> dev_runtime["Runtime Services"]
  developers --> dev_simulator["Simulator"]
  developers --> dev_config_genesis["Configuration And Genesis"]
  developers --> dev_wasm["WASM Wallet"]
  developers --> dev_examples["Examples And Tutorials"]
  developers --> dev_api_reference["API Reference"]
  developers --> dev_verification["Verification And Tests"]
@mermaidend

+++ Evidence and scaffold notes
- Evidence anchors: `Cargo.toml, crates/z00z-crates-overview.md, crate README files`
- Section: `Developers`
- Section message: builders need exact module ownership, runnable commands, API boundaries, and verification steps.
+++
