---
title: "Aggregators"
description: "Operator guide to admission, ordering, batching, and publication preparation without settlement overclaim."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# Aggregators

> [!warning]
> **Maturity:** `In-progress role boundary`
>
> **Use this page when:** You need to explain or review the admission-and-ordering role without letting it masquerade as settlement authority.

Aggregators are easy to romanticize because they sit where activity becomes visible. Packages arrive. Ordering happens. Publication gets prepared. Recovery and scheduling decisions appear. To a casual reader, that can make the aggregator look like the heart of the network. In Z00Z it is not the heart. It is an important **coordination role** that exists between wallet-local preparation and checkpoint-bound authority.

That distinction matters because the system would become much harder to reason about if every admission or ordering decision looked like final truth. Aggregators should help the network move work efficiently. They should not become a hidden substitute for the settlement theorem.

## What Aggregators Actually Do

The aggregator lane can be described through four bounded jobs:

| Job | Why it belongs here |
| --- | --- |
| Admission | Something has to decide whether publication work is worth carrying forward |
| Ordering | Candidate work must be sequenced or grouped before broader publication flow |
| Batch preparation | Publication usually benefits from structured grouping rather than one-package-at-a-time chaos |
| Recovery and retry support | Liveness work should stay outside the wallet and below settlement truth |

Those jobs are operationally significant, but each one remains conditional. Admission is not finality. Ordering is not correctness. Batch preparation is not proof of validity. Recovery support is not a rewrite of protocol rules.

## The Aggregator Non-Claim

The single most important sentence on this page is this: **an aggregator may decide what to publish next, but it does not get to decide what is valid forever**.

Keep that split visible with a comparison:

| Aggregator output | What it means | What it does not mean |
| --- | --- | --- |
| Accepted work item | It can move forward through the operator path | It is settled |
| Ordered batch | Publication work now has sequence or grouping | The underlying transition is correct |
| Retry or recovery state | The operator path is trying again | The protocol forgives invalid evidence |
| Admission rejection | The work will not move forward through this path | The sender's intent was inherently impossible or dishonest |

This comparison is what prevents operators and external observers from reading operational flow as protocol judgment.

## Why Aggregators Need Bounded Vocabulary

The corpus consistently warns against expanding service surfaces into authority surfaces. For aggregators that means documentation should avoid phrases that blur coordination with truth. Good wording sounds like:

| Better wording | Why it helps |
| --- | --- |
| "publication candidate" | Keeps pre-final state explicit |
| "ordered work" | Avoids suggesting correctness or ownership truth |
| "admission path" | Signals an operator lane rather than a theorem |
| "soft confirmation" | Makes pre-checkpoint acknowledgement legible without overstating it |

Bad wording is usually public-account-chain wording imported by habit: "the transaction is on the network now, therefore it is done." Z00Z does not want that shortcut.

## Risk Surfaces Around Aggregators

Aggregator docs should also name the real operational risks:

| Risk | Why it matters |
| --- | --- |
| Censorship or delayed admission | A coordination role can still shape user experience heavily |
| Bad batching choices | Performance and recovery behavior can degrade without changing protocol rules |
| Metadata concentration | Ingress or ordering surfaces may learn useful timing and routing information |
| Incentive distortion | Operators may require bonds, rewards, or challenge rules to stay aligned |

This is one reason aggregator docs belong near watcher, DA, and status pages. Observability and incentive language are not optional decorations around the role. They are part of how the role stays honest.

## Current Repo Posture

This repository does not ship a full aggregator implementation. What it does ship is the language needed to document the role correctly:

1. The protocol papers define publication and settlement boundaries.
2. The terminology corpus provides nouns like `Soft confirmation`, `Settlement evidence`, and operator-facing role concepts.
3. The network docs can now keep admission and ordering language aligned across pages.

That is enough for a credible docs-first phase. It is not enough to claim production aggregator ergonomics or deployment completion, and the page should not pretend otherwise.

## Read Next

Continue to [Validators](/docs/network/validators) for the reject-or-accept path after publication preparation, or jump to [Data Availability](/docs/network/data-availability) if your next question is how prepared work becomes durable publication bytes.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` defines soft confirmation, delayed publication, settlement evidence, and the operator chain that frames the aggregator role.
- `content/whitepapers/Proof-of-Useful-Work.md` is useful for operator incentive, evidence handling, and challenge-language discipline around coordination roles.
- `content/whitepapers/Corpus-Terminology-Reference.md` standardizes `Soft confirmation`, monitoring surface, operator-bond-adjacent vocabulary, and other terms that keep aggregator prose bounded.
- `content/docs/network/overview.md` and `content/docs/network/data-availability.md` are the current repo-local companion pages for role placement and downstream publication mechanics.
