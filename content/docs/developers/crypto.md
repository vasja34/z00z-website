---
title: "Crypto Facade"
description: "Builder guide to Z00Z cryptography boundaries, privacy discipline, and post-quantum migration posture."
difficulty: expert
icon: mdi:alpha-d-circle-outline
toc: true
---

# Crypto Facade

> [!warning]
> **Maturity:** `Live cryptographic design language + migration guidance`
>
> **Use this page when:** You need to reason about commitments, proofs, privacy boundaries, or migration posture without pretending that this repo ships the full cryptographic runtime.

In Z00Z, cryptography is not just an implementation detail hidden under a wallet or node API. It is part of the product boundary itself. The protocol promises confidential object ownership, narrow public settlement evidence, and replay-safe transitions. Those promises only make sense if builders treat cryptographic surfaces as tightly controlled boundaries rather than as a pile of interchangeable helper functions.

This page therefore explains the crypto facade as a **discipline**, not as a generated method catalog. The current repository gives you the source corpus for that discipline and the local contributor rules that reinforce it. That is enough to define what kind of cryptographic claims are safe in docs, design reviews, and future implementation planning.

## What The Facade Is Protecting

The facade protects four things at once:

| Protected property | Why builders care |
| --- | --- |
| Confidential amounts and object privacy | Prevents the chain from becoming a public balance graph |
| Verifier-minimal public evidence | Keeps settlement auditable without exposing wallet history |
| Safe replay and authorization boundaries | Prevents portable packages from becoming ambiguous or reusable in the wrong context |
| Controlled migration posture | Lets the protocol evolve without rewriting its trust story every time a primitive changes |

If a crypto discussion ignores any of those properties, it is probably too narrow to describe Z00Z correctly.

## Practical Crypto Boundaries

The whitepaper corpus suggests a builder-friendly split:

| Boundary | What belongs there |
| --- | --- |
| Wallet-local cryptography | Receiver material, ownership recognition, package preparation, and local authorization |
| Settlement proof boundary | Public artifacts needed to confirm a valid transition at checkpoint time |
| Privacy threat boundary | What observers, operators, services, and counterparties can infer from lawful behavior |
| Migration boundary | Which assumptions belong to the current lane and which must change under a post-quantum path |

This is why the crypto facade should never be described as "just use the library correctly." The protocol meaning depends on where secrets live, when proof material becomes public, and what kind of disclosure is considered acceptable.

## The Legacy Lane And The Migration Lane

One of the most important builder distinctions in the corpus is the split between the current cryptographic lane and the migration path beyond it.

| Lane | What it means for docs and design |
| --- | --- |
| Legacy lane | The current elliptic-curve-centered flow used by existing receiver, stealth, signature, commitment, and range-proof assumptions |
| Post-quantum migration lane | The staged path that preserves integrity while replacing or constraining broken assumptions over time |

Builders should not read this as permission to be vague. The migration paper argues for an integrity firewall, explicit cutover logic, and a distinction between authorization migration and the harder confidential-amount migration frontier. In practice, that means a future-facing page should say which cryptographic promise is already live, which one is still target work, and which one becomes harder under a migration scenario.

## What This Means For Implementation Reviews

Even without the full runtime in this repo, you can review implementation intent against these questions:

1. Does the design keep public evidence narrower than wallet-private meaning?
2. Does the design separate authorization, transport, and settlement verification instead of collapsing them?
3. Does the design avoid casual claims of "post-quantum ready" when the paper only claims a migration path?
4. Does the design treat privacy as a system property rather than a memo field hidden inside a transparent state model?

Those questions are more valuable than a long list of method names because they catch category errors early.

## What Not To Claim

There are several unsafe shortcuts that this page is meant to block:

| Unsafe claim | Why it is wrong |
| --- | --- |
| "The docs repo proves the full crypto implementation surface." | It does not; it proves the documentation and corpus boundary |
| "Post-quantum migration means everything is already post-quantum secure." | The corpus describes a migration strategy, not a completed state |
| "Privacy means nothing useful leaks." | The threat model explicitly distinguishes public evidence, service disclosure, transport leakage, and fraud-triggered reveal paths |
| "Any proof system that hides an amount fits the model." | Z00Z requires the proof surface to fit the broader settlement and replay discipline |

Precision matters here because cryptographic overclaim is one of the fastest ways to damage trust in a privacy-first system.

## Read Next

Move to [Wallet SDK](/docs/developers/wallet) for the user-side possession boundary, or open [RPC Transport](/docs/developers/rpc) if your next question is how cryptographic material should stay separate from transport responsibilities.

## Evidence and Further Reading

- `content/whitepapers/Privacy-Threat-Model.md` explains the visibility and adversary boundaries that make privacy a system property rather than a single-feature claim.
- `content/whitepapers/Post-Quantum-Migration.md` defines the legacy lane, integrity firewall, migration stages, and confidential-amount frontier referenced on this page.
- `content/whitepapers/Main-Whitepaper.md` describes the object-centric, wallet-local, checkpoint-bound architecture that the cryptographic facade exists to preserve.
- `content/whitepapers/Corpus-Terminology-Reference.md` standardizes the migration and privacy nouns that builder-facing docs should reuse consistently.
