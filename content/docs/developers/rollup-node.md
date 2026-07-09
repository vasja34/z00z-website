---
title: "Rollup Node"
description: "Builder guide to the rollup-facing verification boundary, publication seams, and operator maturity posture."
difficulty: advanced
icon: mdi:alpha-c-circle-outline
toc: true
---

# Rollup Node

> [!warning]
> **Maturity:** `In-progress subsystem + current docs evidence`
>
> **Use this page when:** You need the node role map before discussing publication, checkpoint verification, DA seams, or operator workflows.

The safest way to describe the Z00Z rollup node is not "the server that runs everything." It is the **public-artifact verifier and publication boundary** that sits between wallet-built packages, checkpointed settlement, and surrounding operator services. That definition is narrower than a generic chain node on purpose. Z00Z does not want builders to confuse universal public execution with the specific job of checking whether published settlement evidence is coherent and authoritative.

The current repository does not ship a full node implementation. What it does give you is the vocabulary that a correct node explanation must preserve. That matters because node docs are one of the easiest places to accidentally overclaim maturity.

## What The Node Is For

The node's conceptual job is to stand at the public boundary where the system decides whether a candidate transition deserves checkpoint-coupled authority.

| Node responsibility | Why it matters |
| --- | --- |
| Accept public artifacts for verification | The wallet-side package is not final by itself |
| Check consistency across package, checkpoint context, and root transition | Settlement authority depends on agreement between multiple public artifacts |
| Coordinate with publication and availability seams | Validity and availability interact, but are not identical |
| Expose status that operators and downstream services can reason about | Operational visibility must not silently become protocol truth |

That is already enough to distinguish the node from a wallet, a bridge service, or a public account runtime.

## The Boundary It Must Preserve

Z00Z node language should keep these layers distinct:

| Layer | What it owns |
| --- | --- |
| Wallet | Private possession, receiver material, package preparation |
| Rollup-facing node | Public-artifact verification and checkpoint-path handling |
| DA or publication seam | Byte publication, retrieval, and availability evidence |
| Surrounding services | Monitoring, alerts, relaying, analytics, and ecosystem UX |

This split is important because it prevents service success from being mistaken for settlement success. A publication service can be available while a transition is still invalid. A node can reject a package even if the transport path delivered it cleanly. A dashboard can show a status that is operationally useful without being protocol authority.

## A Good Node Explanation Avoids Three Errors

| Error | Why it is misleading |
| --- | --- |
| Describing the node as a universal smart-contract host | Z00Z is centered on settlement verification, not public-state generality |
| Treating publication as finality | Checkpoint authority remains stricter than admission or blob availability |
| Treating service orchestration as protocol truth | Operational support layers cannot redefine settlement validity |

These errors often show up when teams import language from other chains without adjusting it to Z00Z's narrower architecture.

## What Builders Can Still Do In This Repo

Even without a live node codebase here, this repo is useful for node-facing work:

| Builder task | Repo-local value |
| --- | --- |
| Align operator copy with protocol truth | Use the protocol docs and whitepapers as the authority |
| Clarify maturity labels | Distinguish live verifier concepts from target operator closure |
| Improve system diagrams | Keep role boundaries visually accurate |
| Keep node, runtime, and transport pages consistent | Use one shared vocabulary across the docs tree |

That is especially important because node pages often become the handoff surface between protocol engineers, operators, and external integrators. If the docs get the boundary wrong, downstream design work will drift with them.

## What Not To Promise Yet

The current docs should not imply that this repository proves:

| Not proven locally | Why |
| --- | --- |
| A full production node runtime | The repo is a docs and content surface, not the full node implementation tree |
| Complete DA integration closure | The papers define seams and roles, but the local code evidence is not here |
| End-to-end operator automation | Monitoring, recovery, and rich service closure remain broader maturity questions |

The correct wording is not weaker. It is more precise: the role boundary is real, the surrounding ecosystem is still maturing, and the docs should say so directly.

## Read Next

Continue to [Runtime Services](/docs/developers/runtime-services) for the surrounding aggregator, validator, and watcher roles, or revisit [Storage And HJMT](/docs/developers/storage-hjmt) if your next question is about the proof and root contract that the node ultimately verifies.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` defines the checkpoint-coupled settlement boundary, public-artifact verification path, and rollup direction summarized on this page.
- `content/whitepapers/Cross-Chain-Integration.md` is useful for the protocol-versus-service split around bridges, adapters, and outside coordination surfaces.
- `content/whitepapers/Proof-of-Useful-Work.md` helps frame operator and evidence-handling language without confusing service orchestration with core settlement truth.
- `content/docs/protocol/architecture.md` and `content/docs/protocol/checkpoints.md` are the current repo-local explanations that should remain consistent with the node boundary described here.
