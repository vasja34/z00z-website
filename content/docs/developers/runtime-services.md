---
title: "Runtime Services"
description: "Builder guide to aggregator, validator, and watcher roles around the Z00Z settlement core."
difficulty: advanced
icon: mdi:alpha-c-circle-outline
toc: true
---

# Runtime Services

> [!warning]
> **Maturity:** `In-progress service family + current docs evidence`
>
> **Use this page when:** You need to understand how surrounding operator services help move work toward settlement without becoming settlement authority themselves.

Z00Z runtime services matter precisely because they are not the whole protocol. Aggregators, validators, watchers, and similar operators help the system publish, inspect, challenge, and observe state transitions. But if the docs let those services become the apparent source of truth, the architecture becomes misleading. The protocol must stay narrow enough that service coordination, operational visibility, and business logic can evolve without rewriting the core settlement theorem.

This page is therefore a service-boundary explainer, not a promise that every runtime role already ships in this repository.

## The Three Service Roles

The builder-facing service map is easiest to understand in three role families:

| Role | Primary job | What it cannot claim |
| --- | --- | --- |
| Aggregator | Admit work, order or bundle it, and move it toward publication | Final settlement by itself |
| Validator | Re-check public artifacts and reject inconsistent transitions | Ownership meaning outside the public evidence path |
| Watcher | Observe, alert, export evidence, and surface operational anomalies | Authority to redefine protocol truth |

This split matters because it keeps performance and coordination concerns from silently becoming consensus claims.

## Why Services Exist At All

If wallets already prepare packages and checkpoints define settlement, why add runtime services? Because real systems still need:

1. Admission and ordering.
2. Re-verification and challenge surfaces.
3. Monitoring and recovery signals.
4. A place to attach optional business or ecosystem workflows without changing protocol validity.

The important part is where those jobs stop. A runtime service can help the protocol happen. It should not get to redefine what a valid protocol transition is.

## Service Language That Keeps The Architecture Honest

When writing service docs, prefer these distinctions:

| Good distinction | Why it matters |
| --- | --- |
| Operational status versus settlement finality | A service can report progress without conferring finality |
| Monitoring surface versus authority plane | Watchers and dashboards can observe without owning truth |
| Service layer versus protocol layer | Optional services should not be confused with core guarantees |
| Runtime coordination versus wallet possession | Services work around the public boundary; wallets still own private possession |

The cross-chain and privacy papers make these distinctions especially valuable because outside services can add useful capabilities while also becoming new leakage or trust surfaces.

## What This Repo Can Support

This repository can support runtime-service work in several honest ways:

| Local activity | Why it is still valuable |
| --- | --- |
| Rewriting service docs for clearer authority boundaries | Prevents architecture drift before implementation |
| Aligning runtime language with protocol and privacy pages | Keeps service docs from overstating their authority |
| Improving diagrams or operator explanations | Makes surrounding roles legible to integrators and reviewers |
| Tightening maturity notes | Helps readers understand what is live, in progress, or purely target architecture |

That is not a substitute for an operator codebase, but it is not nothing. Service misunderstandings often begin in documentation.

## Service Risks Builders Should Name

Runtime-service docs should not sound generic. They should explicitly acknowledge the main risk classes:

| Risk class | Why it belongs in service docs |
| --- | --- |
| Metadata and visibility leakage | Services can observe more than the base protocol publishes |
| Liveness and ordering pressure | Operational roles can shape user experience without changing validity |
| Incentive and challenge design | Some operator actions depend on bonds, reputation, or dispute incentives |
| Ecosystem trust overlays | A service can be useful while still being optional or non-authoritative |

This is also why privacy and operator docs must remain connected. A privacy-first protocol can still lose important privacy at the service layer if the documentation treats services as harmless plumbing.

## Read Next

Go to [Simulator](/docs/developers/simulator) if you want to think through multi-role scenarios, or return to [Rollup Node](/docs/developers/rollup-node) if the main question is still how public-artifact verification reaches the checkpoint boundary.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` defines the protocol-versus-service boundary and the role of public settlement evidence.
- `content/whitepapers/Privacy-Threat-Model.md` explains why operator and service visibility are part of the real privacy story.
- `content/whitepapers/Proof-of-Useful-Work.md` adds useful service-layer vocabulary for evidence handling, review, and bounded reward or challenge paths.
- `content/whitepapers/Cross-Chain-Integration.md` helps keep external adapters, watchers, and other services in the correct non-authoritative lane.
