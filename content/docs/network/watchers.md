---
title: "Watchers"
description: "Operator guide to observation, alerts, exported evidence, and the boundary between visibility and authority."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# Watchers

> [!warning]
> **Maturity:** `In-progress observation role`
>
> **Use this page when:** You need to explain how the ecosystem can observe network behavior without confusing observation with settlement truth.

Watchers are one of the most important and most easily misunderstood roles in the Z00Z network family. They make the system legible to operators, support teams, auditors, and public observers. They can surface missing publication, delayed availability, provider inconsistency, or suspicious patterns. But they do not become the authoritative source of protocol truth merely because they are the ones talking about it publicly. In Z00Z that distinction matters a lot, because a privacy-first system can still leak too much or overstate too much through its observation surfaces.

## What Watchers Are For

The watcher role exists to make network behavior inspectable:

| Watcher output | Why it helps |
| --- | --- |
| Alerts | Operators need fast signals when publication or availability drifts |
| Exported evidence | Reviewers and external observers need something more concrete than screenshots |
| Health and lag views | Ecosystem participants need to know whether operator surfaces are keeping up |
| Cross-provider comparison | Multiple publication or availability paths may disagree or degrade differently |

All of these are useful. None of them should silently become consensus.

## The Core Boundary

The cleanest watcher rule is this: **watchers report on public evidence and operator behavior, not on the hidden ownership meaning the protocol intentionally keeps private**.

That boundary has two consequences:

| Consequence | Why it matters |
| --- | --- |
| Watchers should not invent wallet meaning from public traces | Privacy claims would collapse if observation tools became shadow account explorers |
| Watchers should distinguish evidence classes carefully | A lagging provider, a missing blob, a rejected artifact, and a settled checkpoint are different facts |

This is exactly where privacy and operations meet. A watcher can be operationally excellent and still become a privacy liability if its docs encourage the wrong mental model.

## Useful Watcher Questions

Good watcher docs help readers ask the right questions:

1. Was a publication path delayed or unavailable?
2. Did multiple providers or sources disagree?
3. Is a validator verdict missing, inconsistent, or late?
4. Is the public evidence complete enough to support the status being shown?
5. What does this observation *not* prove about private wallet state?

These questions keep alerts and dashboards sharp without turning them into gossip engines about hidden ownership behavior.

## Privacy-Safe Observation

The privacy threat model is especially relevant here. Observation tools should prefer:

| Safer watcher pattern | Why |
| --- | --- |
| Checkpoint and provider health summaries | Useful without exposing user-level meaning |
| Evidence-package links or references | Lets experts verify claims directly |
| Coarse incident classes | Helps support and ops without encouraging unnecessary deanonymization |
| Bounded timestamps and lag windows | Supports debugging while reducing over-detailed user inference |

By contrast, any watcher story that starts sounding like a reusable address explorer or counterparty graph browser is drifting away from the protocol's stated privacy discipline.

## Current Repo Posture

This repository does not claim to ship a complete watcher platform. It does provide the right explanatory materials:

| Source | Why it matters |
| --- | --- |
| `content/whitepapers/Privacy-Threat-Model.md` | Defines why operator visibility is a real privacy boundary |
| `content/whitepapers/Main-Whitepaper.md` | Defines public settlement evidence and the limited role of observation |
| `content/whitepapers/Corpus-Terminology-Reference.md` | Standardizes `Monitoring surface`, watcher evidence, and related nouns |
| `content/docs/network/status-explorer.md` | Provides the current family companion for public-facing status output |

That is enough to make watcher docs useful now without inventing a local monitoring stack.

## Common Watcher Overclaims

| Overclaim | Better wording |
| --- | --- |
| "The watcher knows what every user did." | "The watcher knows what public evidence and operator surfaces reveal." |
| "The alert proves the protocol failed." | "The alert indicates an operational or public-evidence issue that needs interpretation." |
| "Explorer visibility is harmless because balances are hidden." | "Operational metadata and observation patterns can still reveal sensitive structure." |
| "A watcher is just a nicer validator." | "Watchers observe and summarize; validators replay correctness-critical artifacts." |

The distinction between the last two rows is especially important. Roles can interact closely without becoming interchangeable.

## Read Next

Continue to [Data Infrastructure](/docs/network/data-infrastructure) if you need the public-data layer built on top of watcher-style evidence, or jump to [Status And Explorer](/docs/network/status-explorer) if your next concern is what a public-facing observation surface should display safely.

## Evidence and Further Reading

- `content/whitepapers/Privacy-Threat-Model.md` is the primary source for why observation, metadata, and service visibility remain part of the real privacy boundary.
- `content/whitepapers/Main-Whitepaper.md` explains the public settlement evidence model that watchers observe without replacing.
- `content/whitepapers/Corpus-Terminology-Reference.md` defines `Monitoring surface`, watcher evidence, and related operator vocabulary used on this page.
- `content/docs/network/status-explorer.md` and `content/docs/network/data-infrastructure.md` are the current repo-local companion pages for turning watcher observations into public tooling carefully.
