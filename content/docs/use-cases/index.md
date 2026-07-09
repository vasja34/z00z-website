---
title: "Use Cases"
description: "Use-case hub for private cash, external-asset rights, policy-shaped money, organizational settlement, community money, and machine or agent rights."
difficulty: basic
icon: mdi:alpha-a-circle-outline
toc: true
---

# Use Cases

> [!note]
> **Maturity:** `Live docs hub over mixed core, near-core, and target scenario families`
>
> **Use this page when:** You want to understand where the Z00Z architecture is most convincing first, and where the surrounding operator, issuer, or ecosystem rails still matter more.

The use-case family is not a list of industries that might someday touch privacy. It is a disciplined map of where the Z00Z architecture has the strongest native fit. The papers repeatedly return to the same idea: value or authority begins as a wallet-local object or bounded right, can move or be accepted locally, and becomes authoritative only after later checkpointed settlement. This page helps readers see where that pattern matters most.

## The Six Families At A Glance

| Family | Why it belongs here | Current maturity posture |
| --- | --- | --- |
| [Offline-First Private Cash](/docs/use-cases/offline-private-cash) | Shows wallet-local possession and spend-then-reconcile most directly | Closest to the core settlement wedge |
| [Private Rights Over External Assets](/docs/use-cases/private-external-asset-rights) | Separates external custody from private internal reassignment | Near-core extension with explicit outside trust |
| [Policy-Shaped Money And Claims](/docs/use-cases/policy-shaped-money) | Keeps bounded policy inside the object instead of in public contract state | Near-core extension with object-model discipline |
| [Private Organizational Settlement](/docs/use-cases/private-organizational-settlement) | Adds payroll, B2B, treasury privacy, and scoped audit | Broader deployment with disclosure and workflow dependencies |
| [Private Distribution And Community Money](/docs/use-cases/private-distribution-community-money) | Explains private mass issuance, aid, vouchers, and local programs | Broader deployment with stronger field-operations dependence |
| [Machine And Agent Rights](/docs/use-cases/machine-agent-rights) | Widens the model into service, machine, and agent capabilities | Expansion vector with meaningful but future-sensitive value |

The order matters. The first families prove the category cleanly. The later families widen it without claiming that every surrounding service layer is already production-complete.

## How To Read Scenario Pages Safely

Each scenario page in this section should answer the same four questions.

| Question | Why it matters |
| --- | --- |
| What is the private object or right that is moving? | It keeps the scenario grounded in the architecture rather than in marketing prose |
| What can happen locally before publication? | It separates useful local action from final canonical settlement |
| What trust or service assumptions remain outside the protocol? | It prevents hidden operator or issuer responsibility from being misdescribed as protocol truth |
| What is live today versus target direction? | It keeps the scenario honest about maturity |

If a scenario page cannot answer those questions, it is probably drifting away from the current corpus.

## The Maturity Bands

The use-cases paper places the families in clear maturity bands, and this docs section should preserve that ordering.

| Maturity band | Families | Why the band exists |
| --- | --- | --- |
| Core settlement wedge | Offline-first private cash and closely related private internal rights | These scenarios depend most directly on wallet-local possession plus later reconciliation |
| Near-core extension | Private external-asset rights and policy-shaped money | These keep the same core but add custody, issuer, or policy complexity |
| Broader deployment and generalized rights | Organizational settlement, private distribution, machine and agent rights | These rely more heavily on surrounding operators, providers, standards, or disclosure tooling |

This is one of the most important pages for docs tone. It tells later readers that not every promising scenario should be described in the same tense.

## What The Family Is Trying To Prove

The scenario family is proving one narrow thesis: Z00Z is not only "better privacy for ordinary public-chain behavior." It is a rights-first settlement architecture whose most natural use cases are the ones that become awkward on public account systems:

- offline or delayed-connectivity exchange;
- private internal reassignment of externally anchored value;
- object-local policy instead of visible contract-state choreography;
- selective disclosure instead of default public finance graphs;
- bounded machine or agent authority instead of reusable public account permission.

That does not mean other systems cannot imitate pieces of the behavior. It means these workflows fit the Z00Z object model more naturally than they fit account-centric or always-online architectures.

## What This Section Should Never Promise

The use-case papers themselves are careful about non-claims, and this docs family should be equally careful.

| Unsafe promise | Safer framing |
| --- | --- |
| "Every family is production-ready." | "Families sit at different maturity bands and depend on different surrounding rails." |
| "External trust disappears." | "Internal transfer can be private even when custody, redemption, or service honesty stays external." |
| "Offline means final." | "Local meaning can arrive before publication, while final authority still belongs to checkpoint settlement." |
| "Agent rights mean universal private programmability." | "Bounded capability objects are a strong extension direction, not proof of a general private VM." |

Those cautions are not disclaimers bolted on after the fact. They are part of what makes the family credible.

## Evidence and Further Reading

- `content/whitepapers/UseCases.md` is the primary source for the six-family map, the maturity ordering, and the rights-first scenario thesis.
- `content/whitepapers/Main-Whitepaper.md` is the shared source for wallet-local possession, checkpoint settlement, privacy boundaries, and implementation-status language.
- `content/whitepapers/Smart-Cash.md`, `content/whitepapers/Assets-Rights-Vauchers.md`, and `content/whitepapers/Cross-Chain-Integration.md` are the main companion files for policy-shaped money, object-local rules, and external-asset rights.
- `content/whitepapers/Agentic-Offline-Economy.md` and `content/whitepapers/Proof-of-Useful-Work.md` are the companion sources for capability rights, fee envelopes, and private reward or service flows.
