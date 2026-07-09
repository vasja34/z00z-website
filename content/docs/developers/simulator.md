---
title: "Simulator"
description: "Builder guide to scenario-driven validation for protocol, wallet, service, and docs-level changes."
difficulty: expert
icon: mdi:alpha-d-circle-outline
toc: true
---

# Simulator

> [!warning]
> **Maturity:** `Concept-plus-workflow guidance`
>
> **Use this page when:** You need to reason about cross-component behavior before a full implementation harness is available in this repository.

Simulation is valuable in Z00Z because the protocol is intentionally split across layers that must not be collapsed into one public-state story. Wallet-local possession, public settlement evidence, service-layer orchestration, transport seams, and watcher visibility all interact. A simulator helps builders test whether those boundaries still make sense when a flow becomes real. The current repository does not prove a full simulator implementation. It does provide the conceptual frame and the documentation product where scenario thinking should remain consistent.

That makes this page a guide to **how to think in scenarios**, not a fake local harness manual.

## What A Good Z00Z Simulation Tries To Prove

The goal of simulation is not just "does the happy path run." A useful scenario checks whether the architecture still tells the truth under realistic pressure.

| Simulation question | Why it matters |
| --- | --- |
| What does the wallet know before publication? | Preserves the private possession model |
| What becomes public at settlement time? | Protects the narrow public evidence contract |
| What can services observe, reorder, or delay? | Clarifies operational risk without overstating authority |
| What remains true if connectivity or timing changes? | Tests the offline-first and delayed-publication story |

This is why scenario design belongs in developer docs even before a local simulator module exists. A weak scenario model usually means a weak system explanation.

## A Useful Scenario Template

Builders can describe most Z00Z flows with five parts:

1. Initial possession state.
2. Wallet-side preparation or receive intent.
3. Service, transport, or publication interaction.
4. Checkpoint-bound settlement outcome.
5. Post-settlement observation or recovery behavior.

That template is especially useful when writing examples or reviewing new pages. It forces the author to say where knowledge lives, where authority changes hands, and where a user or operator could misread the flow.

## Simulation In A Docs Repo Still Has Real Work

Even without a local runtime harness, this repository supports simulation-style work:

| Local workflow | Why it counts |
| --- | --- |
| Rewriting walkthroughs into explicit scenario steps | Reduces conceptual ambiguity |
| Checking that multiple pages describe the same flow consistently | Prevents cross-page architectural drift |
| Verifying that a docs change still builds, indexes, and links correctly | Simulates the public documentation path readers actually consume |
| Reviewing diagrams against the protocol papers | Catches role confusion before implementation inherits it |

That kind of simulation is smaller than a full execution environment, but it is still a meaningful quality gate for a docs-first phase.

## Where Scenario Drift Usually Starts

Scenario drift tends to appear in predictable places:

| Drift pattern | Example of the mistake |
| --- | --- |
| Wallet and settlement collapse into one step | A page implies that creating a package is the same as final settlement |
| Service behavior gets promoted into protocol truth | A relay or watcher is described as authoritative |
| Privacy is treated as amount hiding only | The scenario ignores timing, routing, or operator visibility |
| Recovery and observation are skipped entirely | The flow looks clean on paper but not under real operational conditions |

By naming these patterns early, the simulator page helps reviewers ask better questions even before a real harness is available.

## What This Repo Does Not Prove

The current tree does not justify claiming:

| Not proven locally | Why |
| --- | --- |
| A fully implemented simulator engine | The repo is not the runtime monorepo |
| Execution traces for every protocol or service role | The docs here are conceptual and workflow-oriented |
| Performance or determinism characteristics of a non-local harness | Those would require implementation evidence elsewhere |

The right move is not to hide these gaps. It is to keep the scenario language precise enough that later implementation can target it cleanly.

## Read Next

Continue to [Configuration And Genesis](/docs/developers/configuration-genesis) if your next question is how scenario assumptions should be anchored at startup, or open [Examples And Tutorials](/docs/developers/examples) if you want the documentation-facing version of scenario design.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` explains the wallet-side, service-side, and checkpoint-side flow structure that any Z00Z simulation must preserve.
- `content/whitepapers/UseCases.md` gives real-world flow pressure that helps scenario design stay grounded in actual user or operator situations.
- `content/whitepapers/Corpus-Terminology-Reference.md` is the right source for stable nouns when turning protocol flows into scenario steps.
- `package.json`, `scripts/verify.sh`, and `content/docs/` are the local evidence surfaces that support documentation-level validation in this repository today.
