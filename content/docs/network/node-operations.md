---
title: "Node Operations"
description: "Operator guide to practical readiness, local repo evidence, and non-claims around Z00Z node operation."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# Node Operations

> [!warning]
> **Maturity:** `Current docs-repo guidance + target operator closure`
>
> **Use this page when:** You need an operator-oriented checklist without pretending that this repository already contains the full node runtime and deployment stack.

Node-operations pages are where documentation often becomes the least honest. Readers naturally expect commands, logs, restart procedures, health endpoints, and deployment recipes. In this repository, giving all of that in present tense would be misleading, because the repo is primarily a docs and content surface. The correct job of this page is different: explain what a Z00Z operator would need to care about, distinguish the live repo-local evidence from the target runtime surface, and avoid inventing non-local commands.

## The Two Operational Layers

Read this page as a split between two environments:

| Layer | What is real here |
| --- | --- |
| Current docs repository | Live content, config, verification scripts, planning assets, and workflow rules |
| Broader network runtime | Conceptual node, operator, and service responsibilities described in the corpus |

That split prevents one of the most common operator-doc failures: borrowing commands from an implementation tree that this repo does not actually contain.

## What An Operator Needs To Track Conceptually

Even without the runtime here, the operator concerns are already clear:

| Concern | Why it matters |
| --- | --- |
| Publication liveness | Work must move from admission toward availability and validation |
| Validator and checkpoint alignment | Correctness depends on public-artifact coherence, not just uptime |
| Availability and recovery health | Byte loss or provider drift can break reviewability and recovery |
| Watcher and status hygiene | Public reporting must stay useful without becoming misleading |

These are the real operational questions. A good node-operations page starts with them before it ever tries to list knobs and endpoints.

## What You Can Validate Locally In This Repo

The local operator-like surfaces in this repository are documentation and workflow surfaces:

| Local surface | Operational value |
| --- | --- |
| `config/` | Shows how the docs product itself is configured |
| `package.json` | Defines the current local workflow commands |
| `scripts/verify.sh` | Gives the real completion gate for the docs site |
| `content/docs/network/` | Holds the operator-facing explanation pages themselves |
| `.planning/` | Records plan execution, review loops, and summary state for this rewrite phase |

These are not node-runtime operations, but they are the real surfaces contributors operate today in this repository.

## A Practical Operator-Docs Checklist

When writing or reviewing future node-operation guidance, keep these questions visible:

1. Is the action about the docs product, or about the broader network runtime?
2. If it is about the runtime, does this repo actually prove the command or file path?
3. Does the guidance separate operational health from settlement truth?
4. Does the guidance say what evidence an operator can inspect when something degrades?

This checklist is more important than a long list of imaginary service flags. It keeps the docs trustworthy until the runtime evidence is local and inspectable.

## Common Node-Ops Overclaims

| Overclaim | Better wording |
| --- | --- |
| "Run the node with this repo's built-in runtime commands." | "This repo documents the operator model but does not claim to ship the full runtime command surface." |
| "A healthy status page means the protocol is fine." | "Health surfaces are supportive; settlement truth still depends on checkpointed public evidence." |
| "The config directory here is the full node config authority." | "The local config files govern the docs product; broader runtime configuration remains a separate subsystem." |
| "Operational visibility is enough for incident truth." | "Operators still need evidence classes, role boundaries, and checkpoint context." |

These corrections keep later support and explorer pages from inheriting false confidence.

## Current Repo Posture

This page should be read as operator-readiness guidance, not as a deployment manual. The current repository provides:

1. The explanation of what operator roles exist.
2. The local docs and workflow surfaces contributors can actually run now.
3. The evidence chain that later runtime docs should stay aligned with.

That is valuable because bad operator docs do not start with bad binaries. They start with bad assumptions.

## Read Next

Continue to [Status And Explorer](/docs/network/status-explorer) if your next concern is what a public-facing operator surface should reveal. Go back to [Aggregators](/docs/network/aggregators) or [Data Availability](/docs/network/data-availability) if you need one role lane in more detail.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` defines the operator-role chain and checkpoint-bound authority that node-operations prose must preserve.
- `content/whitepapers/Proof-of-Useful-Work.md` is useful for bounded evidence, reviewer, and operator-discipline language around non-authoritative services.
- `config/`, `package.json`, `scripts/verify.sh`, and `.planning/` are the live repo-local operational surfaces summarized on this page.
- `content/docs/network/overview.md` and `content/docs/network/status-explorer.md` are the current repo-local companion pages for role mapping and public operational visibility.
