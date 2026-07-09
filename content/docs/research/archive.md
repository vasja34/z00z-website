---
title: "Archive"
description: "Historical notes, external article reviews, exploratory drafts, and archived research."
difficulty: basic
icon: mdi:alpha-a-circle-outline
toc: true
---

# Archive

> [!warning]
> **Maturity:** `Archive and superseded context`
>
> **Use this page when:** You need provenance, comparison history, or a record of earlier framing, not when you need the safest present-tense source for a live claim.

Archive material is useful because ambitious systems do not emerge from one perfectly stable paper. Terms evolve. scenario ranking changes. old framing gets tightened once the code, the threat model, or the governance boundary becomes clearer. This page exists so that history remains available without quietly outranking the current corpus.

## What Belongs In Archive Reading

Archive reading is appropriate for a small set of tasks.

| Good archive use | Why it is legitimate |
| --- | --- |
| Tracing how a term or scenario changed over time | It helps explain why the current corpus uses narrower language |
| Recovering the reasoning behind a superseded draft | It preserves design intent without forcing it into current claims |
| Comparing old market framing with current maturity posture | It shows where the project raised or lowered its claim discipline |
| Investigating provenance for a diagram, phrase, or legacy page | It helps maintainers clean up drift responsibly |

Archive reading is not the right starting point for present-tense docs wording.

## How To Read Archive Material Safely

Three rules keep archive material useful instead of dangerous.

First, locate the current replacement before you quote the older text. If an old note speaks about private external-asset rights, the current companion paper is usually `content/whitepapers/Cross-Chain-Integration.md`. If it speaks about bounded policy objects, check `content/whitepapers/Smart-Cash.md` and `content/whitepapers/Assets-Rights-Vauchers.md`.

Second, assume the older document is broader than the current claim until proven otherwise. Many historical texts were exploratory by design.

Third, never let an archive file be the only support for a live promise. If a claim cannot be backed by current files under `content/whitepapers/`, it should either be softened or removed from a public page.

## Typical Archive Categories

| Archive category | What it usually contains | How to treat it |
| --- | --- | --- |
| Superseded framing | Earlier versions of the protocol pitch, scenario taxonomy, or market language | Useful for provenance, not for final wording |
| Exploratory extension notes | Ideas that were stronger than the current implementation posture | Useful for roadmap context and future questions |
| Historical benchmarks or optimization notes | Old performance or storage experiments | Never cite without checking the current benchmark posture |
| Legacy terminology | Older nouns or aliases that the current corpus later narrowed | Cross-check against `content/whitepapers/Corpus-Terminology-Reference.md` |

This classification matters because archive problems are usually classification problems. A reader mistakes old exploration for current contract, or old vocabulary for current canonical naming.

## Signals That A Source Is Archive-Only

Watch for these signs before you reuse old material:

- it assumes stronger maturity than the current main whitepaper;
- it lacks the current protocol-versus-service separation;
- it speaks about privacy as if ingress, egress, and operator metadata did not matter;
- it uses terms that the terminology reference now marks as compatibility or narrowing cases;
- it makes performance or governance claims that later papers restated more conservatively.

Any one of those is a reason to route the reader back to the current corpus first.

## Archive Material Is Still Valuable

None of this means archived research is disposable. Archive material often preserves the first articulation of an idea that later became more disciplined:

- the intuition behind offline cash semantics;
- the early wedge for private external-asset control;
- older naming for rights, vouchers, or accountability lanes;
- rough market narratives that later became the six-family map.

That value is real. It just lives at the level of provenance, concept drift, and historical reasoning rather than live authority.

## The Safest Archive Workflow

If you need to use archive material in a docs rewrite or review, this workflow is usually enough:

1. Identify the current owning paper in `content/whitepapers/`.
2. Compare the archive wording against the current maturity and terminology posture.
3. Keep only the historical insight that still survives the newer boundary.
4. Cite the current corpus in the public page, not the archive file, unless the historical change itself is the topic.

That way archive remains a reference surface instead of a silent fork of the docs.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` is the first file to check before reusing any historical architecture wording.
- `content/whitepapers/UseCases.md` is the current authority for scenario ordering and for the maturity split across the six use-case families.
- `content/whitepapers/Corpus-Terminology-Reference.md` is the source to consult when an archive note uses a noun that may now be narrowed, renamed, or marked as compatibility vocabulary.
- `content/whitepapers/Privacy-Threat-Model.md` and `content/whitepapers/DAO.md` are useful backstops because older archive material often predates the current privacy-layer and governance-control discipline.
