---
title: "Technical Papers"
description: "Companion-paper index for bounded subsystem questions, trust boundaries, and deeper architecture reading."
difficulty: basic
icon: mdi:alpha-a-circle-outline
toc: true
---

# Technical Papers

> [!note]
> **Maturity:** `Live research index for companion architecture papers`
>
> **Use this page when:** The main whitepaper gives you the category, but you still need the sharper subsystem paper that explains one boundary in more detail.

The technical-paper lane is where the corpus stops speaking in one unified protocol narrative and starts speaking in bounded deep dives. These files matter because they explain why one subsystem, one liability rule, or one incentive mechanism should be read more narrowly than a marketing summary would suggest.

## What Companion Papers Are For

Companion papers should answer one of three needs:

| Need | What a good companion paper adds |
| --- | --- |
| Boundary precision | It shows exactly where protocol truth ends and service, issuer, or operator responsibility begins |
| Deeper object model | It names the objects, receipts, commitments, or policies that a shorter paper can only mention briefly |
| Narrower non-claims | It explains what the architecture must not promise even when the direction is strategically important |

That is why these papers are valuable. They make the broad corpus safer to reuse by removing ambiguity rather than by adding volume.

## Read By Topic, Not By Curiosity

| Topic | Best companion file | What to carry forward |
| --- | --- | --- |
| Offline fraud and conflict-triggered accountability | `content/whitepapers/Linked-Liability.md` | Liability stays hidden in the honest path and activates only under proven conflict |
| External custody, trust tiers, and cross-chain semantics | `content/whitepapers/Cross-Chain-Integration.md` | Z00Z privately moves rights, not the external asset itself |
| Policy-shaped value, vouchers, and object-local rules | `content/whitepapers/Assets-Rights-Vauchers.md` and `content/whitepapers/Smart-Cash.md` | Bounded meaning should live in spendable objects, not by default in public contract state |
| Private useful-work rewards | `content/whitepapers/Proof-of-Useful-Work.md` | Evaluation, authorization, and payout must stay separable |
| Agent and machine economies | `content/whitepapers/Agentic-Offline-Economy.md` | Spendable capability objects widen the model beyond cash, but remain maturity-sensitive |
| Governance and AI review safety | `content/whitepapers/DAO.md` | AI evaluation can be useful only when treasury execution remains separately controlled |

This structure is deliberate. It keeps readers from treating every technical paper as a general-purpose system overview. Most of them are strongest when read as one bounded answer to one bounded question.

## What These Papers Usually Prove

A technical companion paper is rarely the place to look for broad "what is Z00Z" language. It is usually the place to look for:

- object boundaries;
- trust-tier disclosure;
- replay or accountability semantics;
- review and payout separation;
- stronger non-claims than the headline corpus can carry in one pass.

That also means companion papers are where you should go before writing any sentence that sounds stronger than "the architecture points this way." If the wording still feels too strong after you read the companion paper, it probably is too strong.

## Current Best-Fit Reading Paths

Two reading paths cover most serious research tasks.

| You are trying to evaluate... | Read in this order |
| --- | --- |
| Protocol shape plus one sensitive extension | `content/whitepapers/Main-Whitepaper.md` -> one companion paper -> `content/whitepapers/Corpus-Terminology-Reference.md` |
| Scenario fit plus constraints | `content/whitepapers/UseCases.md` -> one companion paper -> `content/whitepapers/Privacy-Threat-Model.md` |

For example, a page about private external-asset rights should not rely only on the use-cases paper. It should also pass through `content/whitepapers/Cross-Chain-Integration.md`, because that is the paper that explicitly separates private internal reassignment from outside custody, reserves, and redemption honesty.

## What Technical Depth Does Not Mean

Technical depth does not automatically mean stronger maturity. Some of these papers are deeper precisely because they are still defining future-safe boundaries. `content/whitepapers/Proof-of-Useful-Work.md`, for example, is detailed because reward evaluation is risky, not because the full evaluator market is already live. `content/whitepapers/Agentic-Offline-Economy.md` is detailed because the future right families need disciplined naming, not because every agent-commerce path is already deployed.

That is the recurring pattern:

- more detail often means more caution, not more finality;
- object-model clarity does not equal full runtime closure;
- a sharper diagram is not itself evidence of a live production surface.

## Safe Output From This Page

After you read a companion paper, you should be able to answer three things clearly:

1. What is the narrow question this paper owns?
2. Which part of the answer is repo-backed enough for present-tense language?
3. Which part of the answer is still bounded by issuer, service, governance, or future implementation work?

If you cannot answer those three questions, keep the wording softer. That is especially important for use-case and benchmark pages, where strong technical phrasing can otherwise drift into overclaiming.

## Evidence and Further Reading

- `content/whitepapers/Linked-Liability.md` is the companion source for hidden accountability, fraud proofs, lock registries, and bounded post-fraud reveal.
- `content/whitepapers/Cross-Chain-Integration.md` is the companion source for lockers, trust tiers, `BridgeInTx` and `BridgeOutTx`, and the difference between internal transfer and external redemption.
- `content/whitepapers/Smart-Cash.md` and `content/whitepapers/Assets-Rights-Vauchers.md` are the key sources for object-local policy, vouchers, rights, and the distinction between final cash and conditional value.
- `content/whitepapers/Proof-of-Useful-Work.md`, `content/whitepapers/Agentic-Offline-Economy.md`, and `content/whitepapers/DAO.md` explain why reward systems, agent rights, and AI review surfaces must stay more tightly bounded than a generic "programmable economy" story implies.
