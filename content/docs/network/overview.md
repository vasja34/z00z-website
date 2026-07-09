---
title: "Network Overview"
description: "Operator map for the Z00Z network family, from publication paths to checkpoint authority and public observation."
difficulty: basic
icon: mdi:alpha-a-circle-outline
toc: true
---

# Network Overview

> [!warning]
> **Maturity:** `In-progress subsystem map`
>
> **Use this page when:** You want the shortest accurate description of who does what across the Z00Z operator surface.

The easiest way to misunderstand Z00Z networking is to treat it like a generic distributed-systems stack where one node owns everything and every public service is part of the same truth surface. The network family exists to stop that mistake early. The protocol already separates wallet-local possession from public settlement evidence. The network layer continues that separation by assigning different responsibilities to different operator roles without letting those roles collapse into each other.

## The Role Chain In One Pass

You can describe the operator map in one sentence: **aggregators move work toward publication, validators replay public artifacts, watchers observe what happened, DA layers preserve bytes, and checkpoints remain the authoritative settlement boundary**. That sentence is compact, but each clause matters.

| Role | Primary output | Why it exists |
| --- | --- | --- |
| Aggregator | Ordered publication work | Keeps admission and batching outside the wallet while still below settlement truth |
| Validator | A public-artifact consistency verdict | Protects the reject-or-accept path before checkpoint authority lands |
| Watcher | Alerts, evidence, and observation snapshots | Gives the ecosystem visibility without granting new authority |
| DA layer | Availability references, blobs, receipts, or recovery artifacts | Preserves publication bytes without redefining protocol validity |
| Checkpoint boundary | Authoritative state transition | Commits the public evidence into replay-safe settlement |

This map matters because each role answers a different question. "Was it published?" is not "Was it valid?" "Was it visible?" is not "Was it final?" "Was it timestamped?" is not "Was it settled?"

## Why The Role Split Is Valuable

Z00Z benefits from this split for the same reason it benefits from wallet-local possession: the system becomes easier to reason about when each surface has a smaller job.

| Benefit | Result |
| --- | --- |
| Narrower roles | Less pressure to turn every service into protocol authority |
| More explicit evidence types | Easier to explain what a proof, receipt, or alert really means |
| Cleaner maturity language | Docs can say which lane is conceptual, live, or still target work |
| Better privacy discipline | Observability and transport can be discussed without overstating their meaning |

This is also why the overview page is not a deployment manual. Before readers ask how to operate a role, they need to know what kind of truth that role is even allowed to produce.

## The Main Non-Claim

The network family must keep one warning visible: **operational usefulness is not the same as settlement authority**.

That warning applies everywhere:

| Surface | Useful for | Not sufficient for |
| --- | --- | --- |
| Aggregator logs | Publication flow and liveness | Final settlement |
| Validator verdicts | Public-artifact sanity and reject paths | The entire business truth behind a transfer |
| Watcher evidence | External observation and incident response | Replacing the protocol theorem |
| Anchor or ZTS proofs | Timestamped or externally pinned references | Proving a transition was valid by themselves |
| Explorer status | Public readability and operator visibility | Revealing private ownership meaning |

If a page in this family forgets this table, it will overclaim sooner or later.

## Current Repo Usefulness

Even though this repository is not the full runtime implementation tree, it is still useful for network work:

1. It holds the corpus that defines the role boundaries.
2. It exposes the reader-facing pages that later security, support, and use-case docs will depend on.
3. It lets contributors keep diagrams, evidence sections, and maturity notes consistent across the operator family.

That is enough to make the network docs valuable now. What matters is that they remain precise about what they are and are not proving.

## Where To Go Next

| If your next question is... | Open |
| --- | --- |
| How work enters and gets ordered | [Aggregators](/docs/network/aggregators) |
| How correctness gets re-checked | [Validators](/docs/network/validators) |
| How observations and alerts should be interpreted | [Watchers](/docs/network/watchers) |
| How privacy transport differs from state privacy | [OnionNet](/docs/network/onionnet) |
| How anchors, timestamps, and checkpoints relate | [Checkpoint Anchors And ZTS](/docs/network/checkpoint-anchors-zts) |

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` is the primary source for the publication, validation, and checkpoint role chain summarized here.
- `content/whitepapers/OnionNet.md` and `content/whitepapers/Privacy-Threat-Model.md` explain why transport, ingress, and observation need their own bounded operator language.
- `content/whitepapers/Corpus-Terminology-Reference.md` defines monitoring surface, DA commitment, checkpoints, anchors, and related network terms used throughout this family.
- `content/docs/network/index.md` and `content/docs/protocol/architecture.md` provide the current repo-local hub context for readers moving between protocol and operator views.
