---
title: "Benchmarks"
description: "Guide to reading benchmark evidence conservatively across settlement cost, proof work, and maturity caveats."
difficulty: expert
icon: mdi:alpha-d-circle-outline
toc: true
---

# Benchmarks

> [!note]
> **Maturity:** `Live benchmark interpretation page with conservative claim posture`
>
> **Use this page when:** You need to repeat a performance claim and want to stay inside what the current corpus actually supports.

Benchmark pages are where a privacy-and-rights architecture can be damaged by careless wording fastest. The corpus already separates "what can be claimed today" from "what still needs benchmark evidence," and this page keeps that separation visible. A number without its workload, proof system, batch shape, or state-transition context is not evidence. It is just an attractive fragment.

## What Benchmark Evidence Is Good For

| Good use of benchmark evidence | Why it is legitimate |
| --- | --- |
| Comparing relative cost surfaces inside one bounded setup | It helps explain where the architecture spends time or proof budget |
| Showing that a design direction is plausible enough to keep researching | It supports roadmap discipline without pretending the work is done |
| Bounding claims about proof generation, verification, or settlement-path overhead | It stops "privacy" from becoming a synonym for "free" |
| Explaining what still needs operator-grade evidence | It keeps future performance work explicit instead of hidden |

Benchmarks are not there to prove universal scale, universal decentralization, or universal deployment readiness.

## The Benchmark Questions That Matter

Most readers only need to separate four kinds of measurements.

| Measurement family | What it helps answer | What it does not answer alone |
| --- | --- | --- |
| Proof generation cost | How expensive a private or checkpoint-bound operation is to construct | End-to-end network or operator throughput |
| Proof verification cost | What a verifier pays at settlement time | Whether the full publication path is production-ready |
| State transition and storage mutation cost | How inserts, deletes, or path updates scale inside one setup | Real-world behavior under heterogeneous operators and external services |
| Artifact size and batching shape | How publication cost might move with batch composition | Whether every topology or workload mixes equally well |

This distinction matters because Z00Z spans wallet preparation, checkpoint settlement, publication, and optional external custody or service edges. No single benchmark line speaks for all of them.

## Safe Claim Language

The corpus already gives a good language posture for benchmark pages.

| Stronger but unsafe wording | Safer wording |
| --- | --- |
| "Z00Z already scales to X in production." | "The current benchmark evidence suggests the cost surface may support X under bounded conditions, but wider operator evidence is still required." |
| "Proof size is solved." | "The measured proof size in this workload is compatible with the current design direction." |
| "Storage benchmarks prove real-world finality speed." | "Storage benchmarks illuminate one component of the settlement path, not the entire deployment surface." |
| "Privacy is cheap." | "Some privacy costs are manageable in the current measurements, while others still depend on batching, topology, and workload mix." |

The point is not to sound timid. The point is to keep the numbers usable after scrutiny.

## Why Z00Z Needs Benchmark Caveats

The main whitepaper is explicit that checkpoint settlement, proof verification, batching, and external publication are separate surfaces. The benchmark page therefore has to preserve at least three caveats.

First, measured internal cost is not the same as operator-grade end-to-end behavior. A strong verifier micro-benchmark does not prove a complete publishing topology.

Second, state-transition cost depends on workload shape. Rights-heavy workloads, voucher-like object flows, or claim-heavy reward systems may stress a different part of the architecture than simple asset movement.

Third, privacy is not one number. Entry and exit concentration, delayed publication, batch structure, and later audit or disclosure lanes can all affect the real privacy-performance tradeoff.

## Recommended Reading Order For Performance Questions

| If you are trying to evaluate... | Read these sources together |
| --- | --- |
| Settlement cost and proof path | `content/whitepapers/Main-Whitepaper.md` + this page |
| Storage and tree-shape implications | [HJMT Research](/docs/research/hjmt) + this page |
| Whether a use case is operationally mature | the relevant use-case page + this page + `content/whitepapers/UseCases.md` |

This prevents a common mistake: using one performance line to upgrade a whole scenario family from target architecture into shipped capability.

## Benchmark Reading Checklist

Before you repeat a number, confirm that you can also answer:

1. Which object family or proof path was being measured?
2. Was the measurement about generation, verification, publication, or storage mutation?
3. What surrounding service or operator layers were not included?
4. Does the main corpus still classify the related feature as live, near-core, or future?

If you cannot answer those questions, keep the claim qualitative.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` sections on throughput claims, current evidence, and benchmark policy are the main source for conservative performance wording.
- `content/whitepapers/Proof-of-Useful-Work.md` is useful when reward, attestation, or review workloads are being discussed as part of the operational cost surface.
- `content/whitepapers/Privacy-Threat-Model.md` is the place to check whether a benchmark claim is quietly ignoring timing, ingress, egress, or operator metadata pressure.
- `content/whitepapers/UseCases.md` helps determine whether a measured path belongs to the core settlement wedge or to a later scenario family that still depends on more surrounding infrastructure.
