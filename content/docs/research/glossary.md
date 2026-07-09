---
title: "Glossary"
description: "Research-facing version of the corpus terminology reference with term authority and cross-links."
difficulty: specialist
icon: mdi:alpha-e-circle-outline
toc: true
---

# Glossary

> [!note]
> **Maturity:** `Live research glossary aligned to the current corpus`
>
> **Use this page when:** You already know the beginner-friendly definitions in [/docs/learn/terminology](/docs/learn/terminology), but need the stricter research posture behind those same nouns.

This page is the research-facing companion to [/docs/learn/terminology](/docs/learn/terminology). The learn page keeps the most important terms short and approachable. This page keeps the shared core vocabulary tied to its authority source, scope rule, and common misuse pattern, then widens into extra research-facing terms where the corpus needs more precision. If a term is easy to misunderstand across multiple whitepapers, it belongs here.

The authority for the full term contract is still `content/whitepapers/Corpus-Terminology-Reference.md`. This page does not replace that file. It translates the most important research terms into a compact working glossary for readers who need to compare papers without losing track of scope.

## How To Use This Glossary

| If you need... | Use this page for... | Then go to... |
| --- | --- | --- |
| A quick boundary reminder | One research-safe definition plus a scope warning | the owning whitepaper under `content/whitepapers/` |
| A cross-paper noun check | The preferred current meaning and where it drifts | `content/whitepapers/Corpus-Terminology-Reference.md` |
| A simpler onboarding definition | The reader-friendly version | [/docs/learn/terminology](/docs/learn/terminology) |

The pattern is simple: learn page first for orientation, research glossary next for scope, source paper last for the full argument.

## Core Settlement Terms

AssetLeaf
: The public checkpointed settlement object that represents one confidential asset right in canonical state. Scope rule: use it for committed settlement evidence, not as a synonym for a public account balance.

SettlementPath
: The canonical path used to locate a committed settlement leaf. Scope rule: this is a state-location term, not a user-facing ownership surface.

Checkpoint
: The public validation boundary that turns ordered publication into replay-safe settlement. Scope rule: a package entering the publication path is not yet a checkpointed final state transition.

Settlement evidence
: The roots, typed deltas, proofs, and publication artifacts needed to verify a transition. Scope rule: it is narrower than "everything a service might know."

TxPackage
: The wallet-side canonical envelope for ordinary transfer preparation. Scope rule: it is a transport and settlement-candidate object, not canonical settled state.

ClaimTxPackage
: The wallet-side canonical envelope for claim-domain settlement. Scope rule: keep it distinct from ordinary spend flow because the replay context differs.

## Rights And Policy Terms

Right
: A bounded authority object that authorizes action without carrying final value by itself. Scope rule: do not use `Right` as a vague label for any conditional money-like object.

Voucher
: A conditional value claim that is distinct from final cash and distinct from pure authority. Scope rule: use it for backed or conditional value with redemption, refund, expiry, or partial-redeem semantics.

CashPolicy
: The fixed protocol cash rule set for native `Z00Z` asset behavior. Scope rule: this is the cash boundary, not a generic programmable-money container.

VoucherPolicy
: The bounded policy attached to a voucher-like object. Scope rule: it names object-local rules, not an unconstrained private VM.

ActionPool
: The committed set of allowed actions attached to a policy-shaped object. Scope rule: describe it as a bounded policy surface, not as arbitrary programmable behavior.

Asynchronous rights settlement
: The architecture in which wallet-local possession and local acceptance can happen before authoritative checkpoint settlement. Scope rule: do not confuse this with unconditional offline finality.

## Privacy And Accountability Terms

Wallet-local possession
: Ownership material and transfer preparation that stay in the wallet before publication. Scope rule: it is one of the main differences between Z00Z and a reusable public account model.

Privacy threat model
: The layered visibility boundary across ingress, internal movement, egress, transport, wallet UX, and operator surfaces. Scope rule: privacy claims must respect those layers instead of collapsing them into one slogan.

Selective disclosure
: The broad concept of revealing only the minimum evidence needed for one reviewer, counterparty, or policy lane. Scope rule: it is broader than enterprise audit and broader than fraud-triggered reveal.

Selective audit
: The narrower operator or enterprise evidence mode for a bounded review purpose. Scope rule: keep it distinct from general selective disclosure.

Selective Reveal
: The liability-specific reveal path that activates only under proven fraud or conflict. Scope rule: do not generalize it into ordinary-path transparency.

LiabilityDomain
: The hidden responsibility scope attached to a delayed, offline, or autonomous execution lane. Scope rule: it should stay hidden in the honest case.

FraudProof
: The conflict-triggered evidence object that proves a punishable reuse or policy violation. Scope rule: it should reveal enough to enforce consequences, not enough to expose unrelated history.

## Agent, Machine, And Reward Terms

Spendable capability object
: A broader private right object that can represent machine, service, access, compute, or mandate authority rather than only money. Scope rule: it is a widening of the architecture, not a claim that every capability family is already live.

Agent spending envelope
: A bounded private mandate that gives an agent task-scoped budget and fee capacity without full wallet authority. Scope rule: it is the preferred noun for safe delegated agent spending.

FeeEnvelope
: The processing guarantee paired with a right transition. Scope rule: it answers who pays and under which limit, and it must stay distinct from the right itself.

WorkPackage
: The canonical submission envelope for a claimed useful-work contribution. Scope rule: it belongs to reward review and authorization, not to ordinary payment flow.

RewardAuthorization
: The formal object that bridges useful-work review into private payout. Scope rule: it exists so that evaluation and treasury execution remain separate.

Private reward claim
: A privacy-preserving payout path that preserves contributor privacy while still enforcing one-time authorization. Scope rule: privacy does not remove anti-replay discipline.

## Common Drift Patterns

Readers usually go wrong in one of four ways.

| Drift pattern | What goes wrong | Safer correction |
| --- | --- | --- |
| Account drift | `AssetLeaf` or `TxPackage` gets retold as though Z00Z were just hiding a public account table | Re-anchor the wording in wallet-local possession and checkpointed settlement |
| Policy drift | A bounded voucher or right object gets retold as a universal private smart-contract VM | Re-anchor the wording in `VoucherPolicy`, `CashPolicy`, and object-local action limits |
| Privacy drift | A valid privacy property gets expanded into "nothing is visible" | Re-anchor the wording in the privacy threat model and its ingress/egress/operator caveats |
| Maturity drift | A strong research direction becomes a present-tense deployment claim | Re-anchor the wording in the current paper's maturity language and companion boundaries |

That is the main reason this glossary exists. Vocabulary mistakes quickly become architecture mistakes.

## Evidence and Further Reading

- `content/whitepapers/Corpus-Terminology-Reference.md` is the full authority for shared terms, aliases, and scope rules across the corpus.
- `content/whitepapers/Main-Whitepaper.md` is the source for `AssetLeaf`, `Checkpoint`, `TxPackage`, `ClaimTxPackage`, `wallet-local possession`, and the baseline settlement vocabulary.
- `content/whitepapers/Assets-Rights-Vauchers.md` and `content/whitepapers/Smart-Cash.md` are the sources for `Asset`, `Voucher`, `Right`, `CashPolicy`, `VoucherPolicy`, and bounded object-local programmability.
- `content/whitepapers/Linked-Liability.md`, `content/whitepapers/Agentic-Offline-Economy.md`, and `content/whitepapers/Proof-of-Useful-Work.md` are the sources for `LiabilityDomain`, `FeeEnvelope`, `Spendable capability object`, `WorkPackage`, and `RewardAuthorization`.
