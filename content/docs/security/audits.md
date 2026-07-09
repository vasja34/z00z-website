---
title: "Audits And Reviews"
description: "Public index of security audits, verification reports, benchmark notes, review status, and open risks."
difficulty: basic
icon: mdi:alpha-a-circle-outline
toc: true
---

# Audits And Reviews

> [!warning]
> **Maturity:** `Live review interpretation page, but not proof of a complete external audit program`
>
> **Use this page when:** You want to know what kind of evidence should exist before trusting a strong security or privacy claim.

Security pages often become misleading not because they lie outright, but because they blur very different kinds of review into one reassuring word: audit. A whitepaper edit pass is not the same as a code audit. A docs build verification run is not the same as a wallet threat review. A future external assessment of one subsystem does not automatically cover every external service that might later be built around the protocol.

This page exists to make those distinctions explicit. The right question is not "Was there an audit?" The right question is "Which surface was reviewed, by whom, against what evidence, with what residual risk left open?"

## What Counts As Meaningful Review Evidence

Use this table when reading future review claims:

| Evidence type | What it can support honestly | What it cannot support by itself |
| --- | --- | --- |
| Whitepaper review or architecture review | Conceptual coherence, terminology, boundary discipline, and threat framing | A claim that every implementation lane is already secure |
| Repo-local verification run | That the current docs and site build, lint, and search checks passed | A claim of full runtime or service security |
| Focused code or design review | A narrower statement about one component or one class of risk | A blanket "everything is audited" conclusion |
| Incident report or postmortem | What happened, what was learned, and what changed | Proof that the same class of issue cannot recur |
| External audit report | Bounded third-party evidence for the audited scope | Coverage of unaudited overlays, future upgrades, or unrelated operator surfaces |

The whitepapers themselves encourage this narrower interpretation. Strong privacy language requires narrower evidence, not broader adjectives.

## What The Current Repository Can Show

This repo can already show some review evidence, but it should be described correctly:

| Current evidence in this repo | Safe interpretation |
| --- | --- |
| `npm run verify` and its underlying scripts | The docs product and site workflow were validated against the current repo checks |
| Review logs under `.planning/phases/001-Docs/` | Large documentation rewrites were iteratively reviewed and corrected |
| The security and support pages you are reading now | Public claim surfaces can be inspected directly for drift or overstatement |
| `content/whitepapers/` corpus | The intended architecture and threat-language baseline are published and reviewable |

None of those items is a substitute for a future subsystem-specific external audit. They are still valuable because they let readers separate what is locally verifiable now from what remains target or pending work.

## How Future Audit Entries Should Be Read

When a future audit or review is referenced, readers should expect at least:

1. the date;
2. the exact scope;
3. the reviewer identity or organization;
4. the evidence set used;
5. whether the finding is architectural, implementation, operational, or documentation-level;
6. any unresolved residual risk.

Without those fields, "audited" is too vague to be useful. A good review page should make it easier to ask hard follow-up questions, not harder.

## Why Residual Risk Must Stay Visible

The legal and privacy corpus repeatedly warns against absolute language. Review evidence follows the same rule. A real audit can increase confidence, tighten boundaries, and expose important defects. It does not magically erase endpoint compromise, external-issuer risk, future upgrade risk, or user mistakes. Readers should become more precise after reading review evidence, not more complacent.

That is especially important for privacy systems. A component can be secure in its own lane while still depending on narrower user behavior, operator posture, or service-layer disclosure rules.

## What This Page Intentionally Refuses To Do

This page does not give out security badges, quality scores, or implied endorsements. It also does not backfill missing evidence by restating the same claim more loudly. If the current repo or published corpus cannot prove a statement, the correct action is to narrow the statement or mark the gap, not to decorate it.

That discipline is more valuable than cosmetic confidence because it keeps later audit work interpretable instead of theatrical.

## Evidence and Further Reading

- `content/whitepapers/Privacy-Threat-Model.md` explains why privacy and security claims must remain scoped to concrete adversaries and surfaces.
- `content/whitepapers/Main-Whitepaper.md` distinguishes live boundaries from operator or disclosure work that remains less mature.
- `content/whitepapers/Legal-Architecture.md` provides the safe-claim matrix and warns against statements that imply universal control, endorsement, or stronger maturity than the evidence supports.
- `README.md`, `package.json`, and `scripts/verify.sh` define the current repo-local verification surface that can be cited honestly today.
- `.planning/phases/001-Docs/001-review-log.md` is current repo evidence that large docs changes are reviewed iteratively rather than published after one unchecked pass.
