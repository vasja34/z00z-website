---
title: "Policy-Shaped Money And Claims"
description: "Private objects with bounded policies such as expiry, merchant scope, subscription windows, refunds, or partial redemption."
difficulty: advanced
icon: mdi:alpha-c-circle-outline
toc: true
---

# Policy-Shaped Money And Claims

> [!warning]
> **Maturity:** `Near-core extension with a strong object-model thesis and mixed runtime closure`
>
> **Use this page when:** You want to understand why the corpus talks about smart cash, vouchers, and rights instead of jumping straight to a universal private smart-contract story.

Policy-shaped money is where Z00Z becomes more than confidential transfer without becoming a generic public contract platform in disguise. The key claim from `content/whitepapers/Smart-Cash.md` and `content/whitepapers/Assets-Rights-Vauchers.md` is that bounded meaning should travel with the spendable object itself. Expiry, merchant scope, recurring windows, redemption limits, refunds, or staged release can live inside a voucher or right without forcing the whole workflow into visible public application state.

## The Object Split That Makes This Family Work

The corpus keeps returning to one clean triad.

| Object | Main meaning | Why the split matters |
| --- | --- | --- |
| Asset | Final spendable value | Native cash should stay clean and legible |
| Voucher | Conditional value | Bounded policy and redemption can exist without making cash itself "dirty" |
| Right | Authority without value | Delegation and action control do not have to be hidden inside money |

This is the reason policy-shaped money belongs in a separate family. The interesting point is not that "rules exist." The interesting point is that the rules do not have to live in a public smart-contract account surface by default.

## What The Chain Is Actually Checking

The smart-cash paper is careful here. The chain does not verify every hidden business rule in the broadest possible sense. It verifies a narrow public settlement boundary over typed artifacts and bounded policy surfaces.

| What the public layer can check | What still lives locally or in surrounding workflow |
| --- | --- |
| Structured settlement evidence, replay safety, and policy-facing transition consistency | Richer service, merchant, or issuer workflow meaning |
| Whether the object stays within the declared bounded settlement grammar | Whether every business process around the object was socially or commercially ideal |
| That the resulting public transition is well formed | That the system has become a universal private VM |

That distinction is what keeps "smart cash" stronger and more honest than vague private-programmability language.

## Scenarios That Fit This Family Well

| Scenario | Why it fits |
| --- | --- |
| Merchant-bound voucher or coupon | The restriction belongs to the object, not to a public merchant contract |
| Subscription slice or recurring claim | The user can hold a bounded claim instead of a broad recurring account allowance |
| Refund or staged-release note | Intermediate purchase logic can stay object-local and privately settled later |
| Partially redeemable claim | Conditional value can shrink or convert without redefining native cash |

These scenarios belong together because the underlying novelty is the same: private object-local policy rather than visible application-state choreography.

## Why This Family Is Different From A Public Smart Contract

Public contract systems usually expose the policy as public state. The corpus argues for a different center:

- the holder carries the bounded object privately;
- local meaning and acceptance can happen before final checkpoint settlement;
- the public surface sees only the narrower settlement evidence it needs.

That is why the family is described as smart cash before it is described as general private programmability. The bounded object is the primitive, not an unrestricted hidden execution engine.

## Current Versus Target Posture

| Surface | Current posture | Target direction |
| --- | --- | --- |
| Object-level policy thesis | Strongly articulated in the corpus | More runtime families can widen it over time |
| Native cash staying clean | Clear current design rule | The docs should keep preserving that boundary |
| Rich voucher and right families | Architecturally coherent, but not all equally mature | More policy engines, action pools, and settlement families can still land later |
| Universal private VM interpretation | Explicitly rejected as the default story | Remains outside the main wedge unless future work proves otherwise |

This maturity split is important because the family is powerful precisely when it stays bounded.

## Why This Family Comes Before Institutional Or Agentic Cases

The use-cases paper places policy-shaped money near the front because it strengthens the core without yet depending on full enterprise disclosure tooling or full agent-rights ecosystems. It is a cleaner next step after offline cash and private external-asset rights:

- offline cash proves private local exchange plus later settlement;
- external-asset rights prove private reassignment over outside value;
- policy-shaped money proves that bounded rules can travel with the object itself.

After that, organizational, distribution, and capability-rights scenarios become much easier to read as extensions of the same model.

## Evidence and Further Reading

- `content/whitepapers/Smart-Cash.md` is the primary source for the smart-cash boundary, client-side object logic, and the distinction between bounded rules and universal hidden execution.
- `content/whitepapers/Assets-Rights-Vauchers.md` is the primary source for the `Asset` / `Voucher` / `Right` split, clean native cash, and conditional-value semantics.
- `content/whitepapers/UseCases.md` explains why this family sits in the top three scenario wedges and why it should be read as object-local policy rather than as broad private-contract theater.
- `content/whitepapers/Main-Whitepaper.md` is the shared source for wallet-local possession, checkpoint settlement, and maturity language that still governs this extension family.
