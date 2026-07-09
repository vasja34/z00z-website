---
title: "Status And Explorer"
description: "Public-facing guide to network status, explorer scope, privacy-safe display rules, and authority non-claims."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# Status And Explorer

> [!warning]
> **Maturity:** `Target public surface + current documentation guidance`
>
> **Use this page when:** You need to define what a public network status or explorer surface should reveal without turning it into a privacy leak or a fake authority engine.

Public status pages are useful because they make systems legible to non-operators. Explorers are useful because they give public evidence a home that more people can inspect. In Z00Z, both tools need sharper discipline than usual. The protocol is deliberately designed so that public state does not become a reusable public account graph. A status page that carelessly rebuilds that graph through labels, timelines, or analytics would contradict the point of the architecture. An explorer that confuses observation with final authority would distort the network story just as badly.

## What A Good Public Surface Should Show

A public explorer or status surface should prioritize facts that are truly public and actually helpful:

| Safe public surface | Why it helps |
| --- | --- |
| Checkpoint progression and public roots | These are core public settlement facts |
| Network or provider health summaries | Users and operators need coarse liveness visibility |
| Published evidence references or anchor links | Reviewers need a path back to inspectable public artifacts |
| Incident banners or degraded-mode notices | Public trust improves when issues are surfaced honestly |

These are the kinds of surfaces that make a network understandable without turning it into a surveillance product.

## What A Good Public Surface Should Avoid

The corresponding non-claims are just as important:

| Unsafe surface | Why it is risky |
| --- | --- |
| User- or wallet-centric ownership timelines | They recreate the public-account mental model the protocol rejects |
| Over-detailed counterparty or route analytics | They can expose sensitive graph structure or operational metadata |
| Status labels that imply settlement finality too early | Observation can lag or mislead if the authority plane is not explicit |
| Business-meaning labels attached to raw public evidence | Public artifacts do not automatically reveal full real-world context |

This is where explorer design and privacy discipline meet most directly. A page can be technically informative and still violate the product's privacy posture if it chooses the wrong display model.

## A Useful Status Taxonomy

One way to keep public tooling honest is to classify every visible item:

| Category | What it can say |
| --- | --- |
| Authoritative settlement fact | A checkpointed root or similarly committed public fact |
| Supportive operational fact | Provider health, lag, or watcher observation |
| Reference artifact | An anchor, ZTS proof, or exported evidence package |
| Informational product layer | A dashboard summary or explorer convenience view |

Readers should always be able to tell which category they are looking at. If they cannot, the status surface is already misleading.

## Current Repo Posture

The current repository does not claim to ship a live public explorer. It does support the design discipline for one:

| Source | Why it helps |
| --- | --- |
| `content/whitepapers/Privacy-Threat-Model.md` | Explains why public visibility needs privacy-safe limits |
| `content/whitepapers/Main-Whitepaper.md` | Defines the public evidence model that an explorer should reflect |
| `content/whitepapers/Corpus-Terminology-Reference.md` | Standardizes monitoring surfaces, anchors, and checkpoint-facing nouns |
| `content/docs/network/watchers.md` and `content/docs/network/checkpoint-anchors-zts.md` | Provide adjacent role and evidence context inside the family |

That makes this page a design contract for public tooling rather than an implementation inventory.

## Common Explorer Overclaims

| Overclaim | Better wording |
| --- | --- |
| "The explorer tells you who owns what." | "The explorer shows bounded public evidence and network status." |
| "Green status means final settlement is complete everywhere." | "Green status means the displayed operational and public-evidence checks are currently healthy." |
| "Anchor links prove the full transaction story." | "Anchor links point to supportive reference evidence around public artifacts." |
| "More analytics always means better transparency." | "Analytics must be evaluated against privacy and authority boundaries." |

These corrections matter because public tools often become the most visible explanation of a protocol, even when they should not be the only one.

## Read Next

Return to [Network](/docs/network) for the full family map, or revisit [Watchers](/docs/network/watchers) and [Checkpoint Anchors And ZTS](/docs/network/checkpoint-anchors-zts) if you are designing public visibility around a specific observation or proof-reference surface.

## Evidence and Further Reading

- `content/whitepapers/Privacy-Threat-Model.md` is the primary source for why public visibility must remain privacy-safe and carefully bounded.
- `content/whitepapers/Main-Whitepaper.md` defines the narrow public settlement evidence model that status and explorer tooling should reflect.
- `content/whitepapers/Corpus-Terminology-Reference.md` standardizes monitoring surface, checkpoint, anchor, and public-evidence vocabulary used on this page.
- `content/docs/network/watchers.md` and `content/docs/network/checkpoint-anchors-zts.md` are the current repo-local companion pages for public observation and supportive proof-reference design.
