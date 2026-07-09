---
title: "Learn"
description: "Reader-first education hub that compresses Z00Z before the full technical corpus."
difficulty: basic
icon: mdi:alpha-a-circle-outline
toc: true
---

# Learn

> [!note]
> **Maturity:** `Live onboarding hub over current core thesis and bounded target architecture`
>
> **Reading rule:** Start here if you need the thesis in plain language before you commit to the full whitepaper corpus.

The Learn section is the shortest guided path through the current Z00Z story. It is meant for readers who need orientation first: what Z00Z is trying to solve, how its core objects differ from public account-chain defaults, what the key terms mean, where the current maturity boundary sits, and how the project should be compared without drifting into marketing shorthand. The goal is not to replace the whitepapers. The goal is to help a reader arrive at the right whitepaper with the right expectations.

One important reconciliation decision already shapes this section: the current docs tree does **not** keep a separate litepaper route. Instead of preserving a dead sidebar entry, this learn flow absorbs litepaper intent into the entry pages you can actually read now. The short public summary function lives across the home page, [What Is Z00Z?](/docs/learn/what-is-z00z), and the guided [Main Whitepaper](/docs/learn/main-whitepaper) page. That keeps the navigation honest and avoids promising a surface that is not present in the current tree.

## How To Use This Section

If you are new to Z00Z, read the pages in order. Each page answers a different kind of question:

| Page | Primary question | Why it comes here |
| --- | --- | --- |
| [What Is Z00Z?](/docs/learn/what-is-z00z) | What category does Z00Z belong to? | It sets the shortest defensible answer before detail starts to sprawl. |
| [Main Whitepaper](/docs/learn/main-whitepaper) | Which paper owns the main thesis and how should I read it? | It turns the long-form corpus into a practical reading map. |
| [Terminology And Abbreviations](/docs/learn/terminology) | What do the recurring terms actually mean? | It prevents concept drift before the protocol pages get denser. |
| [Roadmap And Maturity](/docs/learn/roadmap) | What is live, what is target architecture, and how should I talk about that difference? | It keeps claims honest. |
| [Comparisons And Category Boundary](/docs/learn/comparisons) | What should Z00Z be compared to, and what should it not be reduced to? | It sets the public narrative boundary before outside analogies take over. |

## What This Section Optimizes For

This part of the site is intentionally written for five- to seven-minute reading sessions. It compresses the whitepaper corpus into a smaller onboarding layer without pretending that compression removes nuance. You should expect plain-language summaries, short tables, explicit maturity notes, and direct evidence blocks. You should not expect exhaustive legal analysis, implementation walkthroughs, or a promise that every described future lane already exists in the live repo.

That posture matters because Z00Z spans several kinds of readers at once. Analysts want clean category language. Builders want to know whether the repo and the whitepapers are aligned. Counsel wants maturity discipline and non-claims. Potential partners want to understand where responsibility sits. The Learn section serves all of them by making the boundaries readable first.

## What To Keep In Mind While Reading

- Z00Z is described as a privacy-first digital cash and settlement model, not as a generic public smart-contract platform with optional privacy extras.
- The corpus repeatedly separates protocol guarantees from wallet, issuer, bridge, steward, or service-layer behavior. Learn pages keep that separation visible.
- Maturity labels matter. Some pages describe live or current protocol direction, while others explain target architecture, future lanes, or compliance overlays that are still planned or external.
- Evidence sections at the bottom of each page are part of the product, not an appendix for specialists. They tell you exactly which corpus files justify the summary.

## Suggested Reading Sequences

| If you care about... | Read next |
| --- | --- |
| The core thesis in the fewest minutes | [What Is Z00Z?](/docs/learn/what-is-z00z) -> [Main Whitepaper](/docs/learn/main-whitepaper) |
| Shared vocabulary before technical detail | [Terminology And Abbreviations](/docs/learn/terminology) |
| Honest messaging and maturity discipline | [Roadmap And Maturity](/docs/learn/roadmap) -> [Comparisons And Category Boundary](/docs/learn/comparisons) -> [Legal](/docs/legal) |
| Deep protocol follow-through after onboarding | [Main Whitepaper](/docs/learn/main-whitepaper) -> [Protocol](/docs/protocol) |

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` sections 1, 2, and 12 establish the main protocol thesis, the settlement-notary framing, and the live-versus-target boundary used throughout this section.
- `content/whitepapers/Uniqueness.md` sections 1 through 4 support the category language for private spendable rights, service separation, and non-account semantics.
- `content/whitepapers/Corpus-Terminology-Reference.md` sections 3 through 5 provide the shared vocabulary and abbreviation contract used across the Learn pages.
