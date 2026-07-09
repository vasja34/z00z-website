---
title: "OnionNet"
description: "Privacy-ingress guide for route ownership, lane contracts, and transport-layer non-claims in Z00Z."
difficulty: advanced
icon: mdi:alpha-c-circle-outline
toc: true
---

# OnionNet

> [!warning]
> **Maturity:** `Target privacy-ingress architecture`
>
> **Use this page when:** You need to discuss network privacy, route validation, and ingress hardening without overstating what transport alone can achieve.

OnionNet matters because state privacy and transport privacy are not the same thing. Z00Z can keep ownership meaning out of public settlement state and still leak too much through timing, route exposure, helper dependence, or ingress centralization. OnionNet is the family name for the transport-side answer to that problem. It describes how route ownership, lane selection, witness material, and bounded topology disclosure should work so that publishing a package does not automatically expose more about the sender than the protocol intends.

This page should be read carefully: the current repository does not claim to ship a finished OnionNet implementation. What it provides is the conceptual contract that later transport work must preserve.

## What OnionNet Is Trying To Protect

The transport problem is broader than "hide the IP address":

| Protection goal | Why it matters |
| --- | --- |
| Client-owned route construction | Prevents a helper service from becoming the route authority |
| Bounded topology disclosure | Reduces how much a single observer can infer from ingress structure |
| Route-validity proofs | Lets clients verify compatibility without blindly trusting a relay |
| Replay-aware ingress durability | Keeps transport privacy compatible with later public settlement |

These goals are transport goals, not settlement goals. That distinction should stay visible throughout the page.

## The Key OnionNet Terms

The terminology reference gives the transport layer a disciplined vocabulary:

| Term | Why it matters |
| --- | --- |
| `Public membership registry` | The public state that commits node identity and capability metadata |
| `Eligible set` | The pool from which active routing participants may be chosen |
| `Lane contract` | The public output that defines compatibility and route-validity rules |
| `Route witness` | Authenticated evidence that a route or bucket membership claim is valid |
| `Epoch witness bundle` | Bulk witness material that supports privacy-preserving route validation |

This vocabulary is useful because it prevents OnionNet from being described as a hand-wavy "private tunnel." The transport layer is meant to have real public commitments and validation rules without collapsing into a central planner.

## What OnionNet Does Not Solve By Itself

The biggest documentation risk is overclaim:

| Overclaim | Why it is wrong |
| --- | --- |
| "OnionNet means end-to-end privacy is solved." | Transport is only one privacy axis among several |
| "If transport is private, public data can be sloppy." | State, observation, and explorer surfaces still matter |
| "A route proof is equivalent to settlement proof." | Route validity and settlement validity live on different authority planes |
| "Transport privacy eliminates service trust questions." | Relays, helpers, and ingress operators can still shape risk |

These corrections are central to keeping the network docs honest.

## How To Read Maturity Here

OnionNet is a good example of a target architecture page:

| What is real now | What remains target work |
| --- | --- |
| The problem statement and vocabulary | Full implementation closure in this repository |
| The separation between transport privacy and state privacy | Concrete deployed route, relay, and witness services |
| The need for route-validity commitments | Operational hardening, performance tuning, and rollout ergonomics |

That is still valuable. Good transport architecture should be precise before it is popular.

## Why This Page Still Belongs In The Current Repo

Even without a local transport implementation, the page matters because:

1. Security and support pages will inherit its language.
2. Public status and explorer surfaces need its non-claims.
3. Wallet and network docs must agree on where privacy promises start and stop.

That makes OnionNet a foundational explanation page, not a speculative appendix.

## Read Next

Continue to [Data Availability](/docs/network/data-availability) for the publication side that follows ingress, or revisit [Watchers](/docs/network/watchers) if your next concern is what transport-side observers should and should not be able to infer.

## Evidence and Further Reading

- `content/whitepapers/OnionNet.md` is the primary source for the route, lane, witness, and topology vocabulary summarized on this page.
- `content/whitepapers/Privacy-Threat-Model.md` explains why transport privacy is necessary but not sufficient.
- `content/whitepapers/Corpus-Terminology-Reference.md` standardizes `Public membership registry`, `Eligible set`, `Lane contract`, `Route witness`, and `Epoch witness bundle`.
- `content/whitepapers/Main-Whitepaper.md` provides the broader protocol context that keeps privacy-ingress work subordinate to wallet-local possession and checkpoint-bound settlement.
