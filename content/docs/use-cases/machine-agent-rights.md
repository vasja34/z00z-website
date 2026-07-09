---
title: "Machine And Agent Rights"
description: "Bounded private rights for machines, agents, API credits, compute budgets, DePIN resources, and useful-work claims."
difficulty: expert
icon: mdi:alpha-d-circle-outline
toc: true
---

# Machine And Agent Rights

> [!warning]
> **Maturity:** `Expansion family with strong architectural fit and heavier ecosystem dependence`
>
> **Use this page when:** You want to see how the Z00Z object model widens from money into bounded machine, service, and agent authority without claiming a universal private VM.

This family is the disciplined expansion lane of the corpus. It matters because public-account permissions and broad wallet delegation are poorly shaped for machines and agents. A robot, API client, research agent, or workflow assistant usually does not need unrestricted wallet power. It needs a bounded right: one access window, one compute budget, one task escrow, one relay allowance, one fee envelope, or one useful-work claim path.

## The Core Thesis

The agentic and machine papers both keep returning to one architectural move: replace reusable account power with spendable capability objects.

| Object family | What it carries |
| --- | --- |
| Spending envelope | Task-scoped budget and fee capacity without full wallet control |
| Capability or service right | Access to data, compute, APIs, relays, rooms, routes, or other bounded services |
| Reward or claim object | A private payout or task result that becomes redeemable only after defined proof or attestation |

The same settlement logic still applies. Local use or acceptance may happen first. Canonical authority still arrives later through checkpointed reconciliation.

## Why Public Permission Models Are Weak Here

Public systems often solve machine or agent commerce by delegation over an account, smart account, API key, or session key. The corpus argues that this creates two problems:

- too much authority is delegated if the agent or device is compromised;
- too much strategy becomes visible if the payment or permission graph is public.

Z00Z is a better fit when the right itself can carry the bound: provider scope, amount limit, expiry, one-time semantics, task category, or fee ceiling.

## What FeeEnvelope Changes

Machine and agent rights only make sense if the system also explains who pays for later publication and settlement. That is why `content/whitepapers/Agentic-Offline-Economy.md` treats `FeeEnvelope` as a separate primitive.

| Right answers... | FeeEnvelope answers... |
| --- | --- |
| What action is allowed | Who pays for processing it |
| Which provider or policy scope applies | Which asset, sponsor, or limit funds the processing path |
| How much authority the holder has | How the later settlement lane remains operationally viable |

Without that split, the system falls back toward broad wallet control, which is exactly what this family is trying to avoid.

## Representative Scenario Groups

| Scenario group | Why it fits |
| --- | --- |
| Offline machine economy | A device can present a bounded local right and reconcile later instead of waiting for live chain settlement |
| API, compute, or data credits | A user or agent can consume bounded service privately without creating a reusable public billing graph |
| Agent-to-agent commerce | One agent can buy or fund a task without receiving unrestricted account authority |
| Useful-work and payout claims | A reward can stay private until proof, authorization, and anti-replay conditions are satisfied |

These groups differ commercially, but the architecture is the same: a bounded private right becomes the economic primitive.

## Current Versus Target Posture

| Surface | Current posture | Target direction |
| --- | --- | --- |
| Rights-first conceptual fit | Strong in the current corpus | More object families can still land over time |
| Bounded agent and machine semantics | Clear and useful as a design language | Operational standards, providers, and wallet tooling still need to mature |
| Full multi-agent or machine ecosystem | Not a blanket live claim | Broader integrations, provider acceptance, and deployment evidence remain future-sensitive |
| Useful-work reward linkage | Coherent through the reward papers | Richer evaluator markets and large-scale adoption remain research-heavy |

This is why the use-cases paper places the family last. It is important, but it should widen the thesis only after the reader already accepts the cash and rights wedge.

## What This Family Must Not Be Retold As

The corpus is especially sensitive to overclaiming here.

| Unsafe retelling | Safer retelling |
| --- | --- |
| "Z00Z is already a universal private AI economy." | "The corpus describes bounded private rights that can support agent and machine commerce as an expansion direction." |
| "Agents get wallets." | "Agents get scoped spending envelopes, capability rights, and fee support rather than broad wallet authority." |
| "This proves a private VM." | "This proves the usefulness of bounded rights and later settlement for service and machine workflows." |

Those corrections keep the family strategically interesting without letting it become science fiction.

## Evidence and Further Reading

- `content/whitepapers/Agentic-Offline-Economy.md` is the primary source for spendable capability objects, rights wallets, machine rights, agent spending envelopes, and `FeeEnvelope`.
- `content/whitepapers/Proof-of-Useful-Work.md` is the companion source when the scenario depends on private reward claims, `WorkPackage`, `RewardAuthorization`, or anti-replay payout discipline.
- `content/whitepapers/UseCases.md` is the source for ranking this family as the disciplined expansion lane rather than as the opening wedge.
- `content/whitepapers/Linked-Liability.md` is useful when the scenario needs bounded fraud accountability for delayed or autonomous execution.
