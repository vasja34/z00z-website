---
title: "Smart Cash"
description: "Defines Z00Z smart cash as bounded object-local rules and rights, not as a universal private virtual machine."
difficulty: advanced
icon: mdi:alpha-c-circle-outline
toc: true
---

# Smart Cash

> [!warning]
> **Maturity:** `Target/current mixed`
>
> **Use this page when:** You need the honest boundary between “cash with bounded rules” and “hidden general-purpose smart contracts.”

Smart cash is one of the easiest parts of the Z00Z story to overstate. The strong, defensible claim is that a spendable private object can carry bounded economic meaning, move locally, and later reconcile through checkpointed settlement evidence. The overclaim is that Z00Z already behaves like a universal hidden-state VM where arbitrary private programs execute off-chain and the chain later blesses them generically. This page keeps those two ideas separate.

The right description today is that Z00Z supports a **bounded smart-cash direction**. Cash, claims, vouchers, subscription slices, service rights, or other scoped objects can carry rules that matter before publication. But the public chain still verifies only a narrow settlement surface: the object transition, its replay boundary, its proof-bearing package, and its checkpoint consistency.

## What “Smart” Means Here

| Smart-cash claim | Safe meaning in Z00Z | Unsafe overclaim |
| --- | --- | --- |
| Rules travel with the object | The wallet or local service domain can evaluate bounded policy before publication | The chain already validates arbitrary hidden application state |
| Objects can be locally meaningful before finality | Offline-first or delayed-connectivity workflows can make economic sense before reconciliation | Local execution is already equivalent to global final settlement |
| Rights can widen the cash model | Claims, vouchers, machine budgets, and bounded service permissions fit one architecture | Every future rights family is already implemented as a live general runtime |
| The public layer still decides final acceptance | Checkpoint settlement remains the authoritative public boundary | A provider or app can privately define canonical truth |

This distinction is the heart of the page. Z00Z is not “ordinary cash now, programmability later.” The bounded rules are already part of the object family. They are just object-local and settlement-facing rather than universal public-contract logic.

## Client-Side State Machines, Not A Hidden Public VM

Many Z00Z objects behave like small client-side state machines. A wallet, service, or machine can hold richer local state, evaluate policy, and accept bounded risk before publication. Later, the chain needs only the public evidence required to accept or reject the resulting transition. That pattern fits offline packages, vouchers, external-asset rights, machine capabilities, and agent budgets remarkably well.

The important constraint is that this is still a **typed object model**, not an unrestricted hidden-computation claim. The chain does not promise to verify every private branch of an arbitrary application. It promises to verify whether the resulting package and checkpoint artifacts fit the object and settlement grammar the protocol already exposes.

## What The Chain Actually Verifies

The chain is strongest at checking the narrow public boundary:

- whether a package is well formed and authorized;
- whether replay inputs and roots line up;
- whether the checkpoint artifact, execution input, and link agree;
- whether created and consumed objects fit one valid state transition.

That is enough to support a rich smart-cash thesis, because many economically useful workflows do not need a public account VM. They need a private object, a local policy lane, and a later settlement rule. What the chain does **not** verify generically is every hidden service-side branch, pricing heuristic, social workflow, or app-local rule that may have existed before publication.

## Why Fees And Liability Stay Separate

One useful discipline from the smart-cash paper is that the right itself should remain distinct from the fee or liability surface around it. A bounded right can authorize value transfer, service access, recurring claim windows, or machine activity. A fee envelope answers who pays for processing, batching, or settlement. Linked liability answers who bears the cost of proven abuse when delayed or offline behavior later conflicts.

That separation matters because otherwise every smart-cash object starts becoming an all-in-one bundle of money, execution budget, and punishment logic. Z00Z becomes easier to reason about when those concerns remain adjacent but distinct.

## Supported Now Versus Future Widening

| Surface | Current reading |
| --- | --- |
| Bounded object-local rules | Strong architectural claim already justified by the corpus |
| Wallet-local preparation before settlement | Strong current claim |
| Public checkpoint authority over final acceptance | Strong current claim |
| Universal private VM or generic hidden program execution | Not justified by current live evidence |
| Richer right families, locker control, machine envelopes, and agent rights | Serious extension direction with mixed maturity |

This maturity split is not a weakness. It is what keeps the docs from sounding like they are promising a hidden world computer when the real architectural achievement is already more specific and more interesting: private, portable, replay-safe economic objects.

## Why The Category Matters

If Z00Z is described too narrowly, readers cannot see why rights, vouchers, claims, lockers, and agent envelopes belong to the same family. If it is described too broadly, readers start expecting arbitrary private execution with guarantees the current repo does not prove. “Smart cash” is the middle path that preserves both coherence and discipline. It names the live design space without pretending the chain already does more than it does.

## Evidence and Further Reading

- `content/whitepapers/Smart-Cash.md` sections 3 through 10 define the marketing-versus-architecture risk, bounded smart-cash thesis, client-side FSM model, settlement surface, and future widening conditions.
- `content/whitepapers/Main-Whitepaper.md` sections 2, 5, and 6 explain why wallet-local possession and narrow public evidence are already enough to support a stronger object model than plain transparent cash.
- `content/whitepapers/Assets-Rights-Vauchers.md` and `content/whitepapers/Linked-Liability.md` show how vouchers, rights, fee envelopes, and liability surfaces widen the model without collapsing into a generic VM claim.
