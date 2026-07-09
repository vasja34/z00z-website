---
title: "Privacy Metrics"
description: "Privacy quality signals such as ingress/egress posture, star and collector patterns, remix depth, and telemetry boundaries."
difficulty: expert
icon: mdi:alpha-d-circle-outline
toc: true
---

# Privacy Metrics

> [!warning]
> **Maturity:** `Target measurement discipline, not a live universal scorecard`
>
> **Use this page when:** You need to discuss privacy quality without pretending that one number can summarize the whole system.

Privacy metrics are useful only when they stay narrower than the privacy claim itself. If a project publishes one dramatic score and calls it "privacy," readers start assuming that the score covers everything: public observability, wallet leakage, transport metadata, disclosure overlays, operator retention, and user behavior. It never does. Z00Z needs privacy metrics that clarify tradeoffs, not a cosmetic leaderboard.

## What Privacy Metrics Should Actually Measure

A good privacy metric in Z00Z should answer one bounded question at a time:

| Metric family | Real question |
| --- | --- |
| Public observability | How much can a public settlement observer infer from the visible artifacts alone? |
| Request and receiver hygiene | How often are reusable identifiers, cards, or request patterns widening correlation risk? |
| Operator exposure | Which surfaces can aggregators, archives, or watchers observe even when settlement remains valid? |
| Disclosure pressure | How often do workflows require extra evidence outside the narrow base settlement core? |
| Service reliance | How much privacy depends on external bridges, issuers, or interface behavior rather than native protocol rules? |

Each family measures a different failure mode. Mixing them into one scalar score hides the very distinctions that the threat model is trying to preserve.

## Useful Metric Principles

The corpus suggests five practical rules.

First, prefer **bounded metrics over totalizing scores**. Second, measure what the chosen observer can actually see. Third, keep collection proportional to the question so the metric does not become its own privacy leak. Fourth, separate live measurements from design targets. Fifth, publish caveats alongside the metric rather than in a footnote nobody will read.

Those rules matter because a privacy metric can itself become a surveillance surface if it starts gathering unnecessary detail.

## Examples Of Good Metric Families

The following kinds of metrics can be useful when scoped correctly:

| Metric example | Why it can help | Important caveat |
| --- | --- | --- |
| Receiver or request reuse frequency | Identifies correlation pressure caused by repeated public-facing artifacts | Reuse alone does not prove compromise; context matters |
| Share of flows that require external-service disclosure | Shows how often privacy depends on an overlay rather than the base protocol | External-service use is not automatically bad, but it widens trust assumptions |
| Publication-delay and retry patterns | Helps study operator-side timing surfaces | Timing measurement must not be oversold as ownership disclosure proof |
| Audit-package frequency by workflow type | Reveals where selective disclosure is operationally necessary | A higher count does not automatically mean weaker core privacy; it may reflect regulated overlays |
| Wallet-side warning acceptance or unsafe-sharing incidents | Helps improve user safety messaging | User telemetry must be minimized and handled carefully to avoid creating new leaks |

These families are useful because they teach something concrete without claiming to settle the whole privacy question.

## What Not To Measure Carelessly

Some ideas are attractive precisely because they are dangerous:

- a global privacy score for the whole ecosystem;
- user-ranking systems that recreate hidden persistent identity;
- raw collection of wallet-local secrets, request payloads, or disclosure bundles for analytics;
- metrics that imply a third-party issuer or bridge is as safe as the base protocol merely because it is popular;
- dashboards that turn optional disclosure into a silent default.

The legal and terminology papers both push against these shortcuts. Privacy should not collapse into a scorekeeping system that quietly recreates the account model through telemetry.

## Live Versus Target Metrics

This repository currently proves the language of privacy metrics better than it proves a global live measurement program. That is acceptable as long as the docs stay honest about it. The safe present-tense claim is that Z00Z needs privacy metrics that remain observer-specific, evidence-backed, and minimization-aware. The stronger target claim is that future operators, wallets, researchers, or enterprise overlays may publish scoped metrics once they can do so without widening disclosure or silently centralizing data.

In other words, the maturity boundary is not "no metrics." It is "no fake certainty."

## How Metrics Relate To Incidents

Privacy metrics should also help incident response. If a support scam wave starts requesting seed phrases, if a disclosure overlay begins collecting too much detail, or if an operator lane starts widening timing exposure beyond expectations, that should show up as a measurable change in one bounded metric family. A good metric therefore acts as an early warning, not as a marketing badge.

When a metric becomes a public claim, it should be reviewed with the same skepticism as any other security claim: who measured it, what observer model it assumes, and what it still does not prove.

## Evidence and Further Reading

- `content/whitepapers/Privacy-Threat-Model.md` is the main source for observer classes, metadata surfaces, and the principle that privacy claims must be scoped to a concrete adversary.
- `content/whitepapers/Main-Whitepaper.md` explains wallet-local meaning, public settlement evidence, operator timing surfaces, and the narrower current maturity of richer disclosure overlays.
- `content/whitepapers/Legal-Architecture.md` warns against public wording that turns optional overlays or interface mitigations into overbroad claims.
- `content/whitepapers/Corpus-Terminology-Reference.md` defines terms such as privacy threat model, optional disclosure, and audit-related vocabulary that keep metric names precise.
