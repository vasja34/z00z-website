---
title: "Research"
description: "Research hub for whitepapers, technical papers, benchmarks, verification, archive, and glossary."
difficulty: basic
icon: mdi:alpha-a-circle-outline
toc: true
---

# Research

> [!note]
> **Maturity:** `Live research hub over a mixed live-plus-target corpus`
>
> **Use this page when:** You want the shortest safe reading path into the whitepapers without treating every draft, benchmark, or extension idea as equal authority.

The Z00Z corpus is broad enough that readers can easily lose the distinction between what is acting as the current protocol thesis, what is a supporting extension, and what is still historical or exploratory. This section exists to prevent that drift. It is not a second whitepaper. It is the map that tells you which document to trust first, which companion paper adds depth, and which materials should be read only as background.

The first rule is simple: start with the canonical papers before you start comparing scenarios, benchmarks, or governance overlays. The main protocol posture still lives in the current corpus files under `content/whitepapers/`, not in isolated excerpts, old outlines, or one attractive diagram.

## Start With The Right Lane

Use the page that matches the question you are trying to answer.

| If your question is... | Start here | Why |
| --- | --- | --- |
| "What is Z00Z claiming as the main protocol story?" | [Whitepapers](/docs/research/whitepapers) | It separates the core papers from companion and archived material |
| "Which papers matter for implementation or architecture pressure?" | [Technical Papers](/docs/research/technical-papers) | It groups the extension papers by the boundary they clarify |
| "How should I read storage and settlement-tree discussion safely?" | [HJMT Research](/docs/research/hjmt) | It keeps design depth separate from blanket production claims |
| "What do the current performance numbers actually prove?" | [Benchmarks](/docs/research/benchmarks) | It keeps benchmark evidence narrower than marketing throughput language |
| "How is formal verification or assurance framed in the corpus?" | [Verification Orchestrator](/docs/research/verification-orchestrator) | It distinguishes current review surfaces from target verification programs |
| "Where do older frames, superseded wording, or historical notes belong?" | [Archive](/docs/research/archive) | It keeps background context from becoming present-tense authority |
| "Which terms are safe to reuse across papers?" | [Glossary](/docs/research/glossary) | It aligns research vocabulary with `/docs/learn/terminology` |

## Authority Order

Readers usually do better with an authority order than with a flat list of files.

| Authority level | What belongs there | How to use it |
| --- | --- | --- |
| Core authority | Main thesis papers that define the protocol category and scope | Read first, cite carefully, and treat as the baseline for present-tense wording |
| Companion authority | Papers that sharpen one subsystem, scenario family, or governance boundary | Use after the core papers when you need more precise language |
| Evidence support | Benchmarks, threat models, terminology references, and roadmap-style framing | Use to bound claims, define vocabulary, and check caveats |
| Archive context | Older or superseded framing, background notes, and historical experiments | Read for provenance only, never as the sole basis for a live claim |

The practical consequence is that a benchmark cannot overrule the main corpus, an archive note cannot silently outrank a current whitepaper, and a scenario paper should not be used to back a claim that the main paper still labels as target architecture.

## Recommended Reading Sequence

For most technical readers, the safest sequence is:

1. [Whitepapers](/docs/research/whitepapers) for the present-tense category claim and scope discipline.
2. [Technical Papers](/docs/research/technical-papers) for companion deep dives such as linked liability, cross-chain integration, useful-work incentives, and governance.
3. [Glossary](/docs/research/glossary) when a term seems familiar but may be overloaded across papers.
4. [Benchmarks](/docs/research/benchmarks) before repeating any performance number.
5. [Archive](/docs/research/archive) only when you need historical provenance or superseded framing.

This order is intentionally conservative. The goal is not to slow readers down. The goal is to stop old terminology, isolated numbers, or future-facing scenario language from becoming accidental protocol truth.

## How To Read Research Material Safely

The research section is strongest when you ask four questions every time you cite it.

| Question | Why it matters |
| --- | --- |
| Is this file describing a live contract, a target architecture, or a comparative research direction? | Many papers intentionally mix current and future surfaces |
| Does this claim depend on protocol truth or on an external issuer, service, operator, or governance layer? | Z00Z repeatedly separates settlement truth from outside responsibility |
| Is the evidence quantitative, architectural, or terminological? | Benchmarks, definitions, and design theses should not be interchanged |
| Is there a newer current-corpus file that narrows or replaces this framing? | This prevents archive drift and duplicate authority |

These questions are especially important for research readers because the corpus is ambitious by design. It wants to describe cash, rights, external assets, useful-work incentives, agentic economies, and selective disclosure without collapsing them into one vague promise. The only reliable way to keep that ambition legible is to keep authority labels visible.

## What This Section Deliberately Avoids

This section does not try to duplicate the content of the whitepapers themselves. It does not present a fresh protocol summary, and it does not flatten all research into one "read everything" list. The value of the section is navigation and authority labeling:

- where to start;
- which companion paper answers which question;
- which files are safe for live claims;
- which files are better treated as archive or support material.

That is also why the research pages repeatedly point back to `content/whitepapers/` instead of trying to replace those files with shorter paraphrases. If you need the actual argument, go to the paper. If you need to know which paper to trust, stay here.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` is the baseline for protocol category, settlement scope, wallet-local possession, and implementation-status language.
- `content/whitepapers/UseCases.md` explains how the scenario families fit together and why they must still be ordered by maturity.
- `content/whitepapers/Corpus-Terminology-Reference.md` is the authority for shared vocabulary and cross-paper term discipline.
- `content/whitepapers/Privacy-Threat-Model.md` is the source to consult before turning a privacy-friendly design goal into an unconditional privacy claim.
