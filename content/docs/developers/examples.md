---
title: "Examples And Tutorials"
description: "Builder guide to documentation-first examples, scenario walkthroughs, and honest tutorial scope in the current repository."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# Examples And Tutorials

> [!warning]
> **Maturity:** `Live documentation examples + future implementation examples`
>
> **Use this page when:** You need to teach a flow, publish a walkthrough, or decide what counts as a real example in this repository.

Examples are where good architecture either becomes teachable or collapses into imitation. In a privacy-first system, the easiest examples to write are often the most misleading ones: "send funds from account A to account B," "call this endpoint to get balance," or "run this demo and assume the rest." Z00Z needs stronger discipline because its builder story depends on wallet-local possession, scoped receiver material, checkpoint-bound settlement, and a visible protocol-versus-service split. A tutorial that flattens those ideas is worse than no tutorial at all.

This repository also adds a practical constraint: it does not contain the whole runtime surface. That means an honest examples page must separate **live docs-product examples** from **future implementation examples**.

## What Counts As A Real Example Here

In the current repo, a real example is something a reader can actually inspect or verify locally.

| Real example type | What makes it real |
| --- | --- |
| A documentation walkthrough | The page exists, cites the corpus, and builds successfully |
| A command example | The command is present in `package.json` or `scripts/` |
| A flow diagram | The roles and maturity notes match the source corpus |
| A cross-page scenario | The linked pages describe one coherent builder story |

By contrast, a list of imaginary scripts, hidden crates, or unpublished SDK snippets is not an example. It is fiction with formatting.

## A Good Z00Z Tutorial Pattern

The most reliable tutorial structure for this repo is:

1. Start with the concept boundary.
2. Show the actor sequence or request path.
3. Name what is wallet-local, what is public, and what is service-layer.
4. Include only commands or local paths that really exist here.
5. End with evidence so the reader can verify the explanation.

This pattern works whether the subject is a receive flow, a runtime role map, a verification loop, or a configuration topic. It keeps examples useful without pretending that a full implementation lab already ships in the repo.

## Current Local Example Surfaces

The current repository already contains example-like teaching material:

| Surface | Why it matters |
| --- | --- |
| `content/docs/` | Reader-facing walkthroughs and subsystem explanations |
| `content/whitepapers/` | Deeper technical source material behind the walkthroughs |
| `package.json` | Real commands that can appear in contributor examples |
| `scripts/verify.sh` and related scripts | Real workflow examples for verification and delivery |

That is enough to produce high-value tutorials now, as long as the tutorial goal is explanation, contributor workflow, or architecture alignment rather than pretending to ship a hidden demo app.

## What Future Examples Should Preserve

When implementation examples arrive later, they should still preserve the same distinctions:

| Example property | Why it matters |
| --- | --- |
| Wallet-local versus public evidence | Prevents account-model drift |
| Service role versus protocol truth | Prevents optional services from looking authoritative |
| Maturity note versus finished-product claim | Prevents demos from becoming accidental promises |
| Whitepaper evidence versus repo-local command evidence | Keeps the tutorial traceable |

This page exists to make sure future examples inherit good architecture, not just good formatting.

## Example Anti-Patterns

| Anti-pattern | Why it is harmful |
| --- | --- |
| Copying a familiar public-account tutorial shape | It erases Z00Z's core differentiation |
| Inventing a local example inventory | Readers cannot verify what does not exist |
| Using commands from another repo or older plan | Workflow examples must match the current tree |
| Teaching only the happy path | Privacy, service, and settlement boundaries become invisible |

The goal is not to make examples cautious and boring. The goal is to make them accurate enough that builders can safely act on them.

## Read Next

Move to [API Reference](/docs/developers/api-reference) if you need a reference-style map instead of a walkthrough, or open [Verification And Tests](/docs/developers/verification-tests) if the next example you need is a review or validation workflow.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` explains the flow boundaries that any honest Z00Z example must preserve.
- `content/whitepapers/UseCases.md` provides grounded scenario pressure for tutorials that should feel real rather than generic.
- `package.json`, `scripts/verify.sh`, and `content/docs/` are the current repo-local evidence surfaces that support real examples in this tree.
- `content/whitepapers/Corpus-Terminology-Reference.md` keeps tutorial nouns aligned with the rest of the corpus.
