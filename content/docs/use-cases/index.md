---
title: "Use Cases"
description: "Use-case hub for the six core application families."
toc: true
---
# Use Cases
> [!warning]
> **Docs route:** `/docs/use-cases`
>
> **Target site route:** `/use-cases`
>
> **Maturity:** `Live docs + target applications`
>
> This page describes target or draft behavior. Avoid present-tense production claims unless implementation evidence is added.

## Page Brief

What
: Use-case hub for the six core application families.

When
: Used by product readers after learning the architecture.

Where
: Primary navigation and marketing funnels.

Who
: Partners, builders, privacy-sensitive organizations, and community readers.

Why
: Shows one coherent settlement model across multiple application families.

How
: Group scenarios by architecture primitive, not by random market labels.

## Reader Lenses

::: tabs

@tab:active Purpose
Use-case hub for the six core application families.

@tab Audience
Primary readers: Partners, builders, privacy-sensitive organizations, and community readers.

@tab Delivery
Group scenarios by architecture primitive, not by random market labels.

:::

## Section Lens

Source
: the use-case whitepaper plus the relevant protocol, legal, cross-chain, and wallet documents behind each scenario.

Message
: each use case should prove one architectural primitive through a concrete user journey.

UX
: scenario pages with visual flows, stakeholder columns, and clear handoffs into Protocol and Developers.

Include
: actor flows, before/after diagrams, trust boundaries, privacy boundaries, and implementation maturity.

Avoid
: market buzzwords, unsupported production promises, and use cases that ignore legal or custody boundaries.

## Section Pages

| Page | Role |
| --- | --- |
| [Offline-First Private Cash](/docs/use-cases/offline-private-cash) | Cash-like private transfer using wallet-local possession, package handoff, delayed publication, and checkpoint reconciliation. |
| [Private Rights Over External Assets](/docs/use-cases/private-external-asset-rights) | Externally custodied value enters Z00Z as an internal private right that can move privately before redemption. |
| [Policy-Shaped Money And Claims](/docs/use-cases/policy-shaped-money) | Private objects with bounded policies such as expiry, merchant scope, subscription windows, refunds, or partial redemption. |
| [Private Organizational Settlement](/docs/use-cases/private-organizational-settlement) | Payroll, B2B netting, treasury privacy, and selective-disclosure accounting over private settlement evidence. |
| [Private Distribution And Community Money](/docs/use-cases/private-distribution-community-money) | Aid, vouchers, local currencies, donor flows, and community money without public exposure of recipients or spending graphs. |
| [Machine And Agent Rights](/docs/use-cases/machine-agent-rights) | Bounded private rights for machines, agents, API credits, compute budgets, DePIN resources, and useful-work claims. |

## Navigation Links

| Link | Why it matters |
| --- | --- |
| [Z00Z Home](/docs) | Parent hub and primary context for this page. |
| [Network](/docs/network) | Previous page in the same section order. |
| [Ecosystem](/docs/ecosystem) | Next page in the same section order. |

## Delivery Focus

- [x] Route intent captured from the architecture scaffold
- [x] Internal cross-links added for hub navigation
- [x] Evidence anchors preserved for follow-up drafting
- [ ] Final long-form prose and diagrams still need source-document expansion

## Route Map

@mermaidstart
graph TD
  use_cases["Use Cases"]
  use_cases --> use_offline_cash["Offline-First Private Cash"]
  use_cases --> use_external_rights["Private Rights Over External Assets"]
  use_cases --> use_policy_money["Policy-Shaped Money And Claims"]
  use_cases --> use_org_settlement["Private Organizational Settlement"]
  use_cases --> use_aid_community["Private Distribution And Community Money"]
  use_cases --> use_machine_agent["Machine And Agent Rights"]
@mermaidend

+++ Evidence and scaffold notes
- Evidence anchors: `docs/Z00Z-UseCases-Whitepaper.md`
- Section: `Use Cases`
- Section message: each use case should prove one architectural primitive through a concrete user journey.
+++
