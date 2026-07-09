---
title: "Data Availability"
description: "Operator guide to publication support, recovery references, and the difference between byte availability and settlement truth."
difficulty: advanced
icon: mdi:alpha-c-circle-outline
toc: true
---

# Data Availability

> [!warning]
> **Maturity:** `In-progress publication support layer`
>
> **Use this page when:** You need to explain how batch bytes stay available and recoverable without confusing availability support with protocol validity.

Data availability sits in a deceptively strong position in the operator stack. It handles the bytes that publication depends on, which makes it tempting to treat it as the place where truth lives. In Z00Z that temptation must be resisted. A DA layer can preserve publication data, issue provider-facing evidence, and help recovery workflows. It does not, by itself, prove that a transition satisfied the settlement rules. The protocol needs DA. It does not subordinate settlement truth to DA.

## What The DA Layer Does

The data-availability lane is best described as a support surface for publication and recovery:

| DA responsibility | Why it matters |
| --- | --- |
| Store or reference publication bytes | Later review and recovery need the underlying material |
| Produce availability-facing evidence | Operators need to know whether bytes were preserved somewhere real |
| Support retries and recovery paths | Publication can fail operationally even when the protocol model is sound |
| Feed watcher and status surfaces | Availability health is still important public information |

These are meaningful jobs. They still belong below settlement authority.

## The Most Important Non-Claim

The DA page should repeat one sentence often enough that no reader can miss it: **availability evidence is not the same thing as settlement evidence**.

Use the distinction explicitly:

| Evidence type | What it tells you |
| --- | --- |
| DA commitment or provider receipt | Bytes were stored, referenced, or acknowledged in some availability lane |
| Settlement evidence | The public roots, deltas, proofs, and artifact relations needed for valid state transition |
| Checkpoint boundary | The authoritative state progression that commits valid settlement |

This separation is one of the main reasons the terminology reference keeps `DA commitment` and `Settlement evidence` as different nouns.

## Why Multi-Provider Thinking Helps

A mature DA story often implies more than one availability surface:

| Why multiple providers matter | Why docs should say it carefully |
| --- | --- |
| Resilience | A single provider should not become a hidden fragility point |
| Auditability | Independent evidence paths help operators reason about disputes or outages |
| Recovery | More than one publication reference can improve retrieval and verification confidence |

But even a multi-provider design should not be described as if more receipts automatically equal more validity. Redundancy improves support posture. It does not rewrite protocol truth.

## Current Repo Posture

This repository does not provide a production DA integration layer. It does provide the right explanation surfaces:

| Source | Why it helps |
| --- | --- |
| `content/whitepapers/Cross-Chain-Integration.md` | Defines DA commitments, attestation-adjacent language, and service-boundary discipline |
| `content/whitepapers/Main-Whitepaper.md` | Keeps publication support distinct from checkpoint authority |
| `content/whitepapers/Corpus-Terminology-Reference.md` | Standardizes `DA commitment`, `Anchor`, and related evidence terms |
| `content/docs/network/checkpoint-anchors-zts.md` | Provides the closest companion page for supportive proof references |

That is enough to document the layer honestly now without inventing provider-specific local code.

## Common DA Overclaims

| Overclaim | Better wording |
| --- | --- |
| "The data is available, so the transition is valid." | "The data is recoverable or referenced; validity still depends on settlement rules." |
| "The provider is authoritative." | "The provider is supportive and evidentiary, not the protocol's final authority." |
| "A missing blob proves malicious behavior." | "A missing blob proves an availability or publication problem that still needs interpretation." |
| "DA solves privacy because the payload is externalized." | "Availability and privacy are different surfaces with different risks." |

These are exactly the kinds of shortcuts the network docs should block before they show up in support, security, or investor-facing language.

## Read Next

Continue to [Checkpoint Anchors And ZTS](/docs/network/checkpoint-anchors-zts) if your next question is how supportive proof references relate to the public settlement path, or revisit [Aggregators](/docs/network/aggregators) if you want the upstream ordering lane again.

## Evidence and Further Reading

- `content/whitepapers/Cross-Chain-Integration.md` is the primary source for DA commitment vocabulary and the service-layer discipline summarized here.
- `content/whitepapers/Main-Whitepaper.md` keeps publication, public evidence, and checkpoint settlement on distinct authority planes.
- `content/whitepapers/Corpus-Terminology-Reference.md` standardizes DA commitments, anchors, and the related language that keeps this page precise.
- `content/docs/network/checkpoint-anchors-zts.md` and `content/docs/protocol/checkpoints.md` are the closest current repo-local companion pages for supportive proof references versus authoritative settlement.
