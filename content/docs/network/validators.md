---
title: "Validators"
description: "Operator guide to public-artifact replay, reject boundaries, and checkpoint-facing correctness."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# Validators

> [!warning]
> **Maturity:** `In-progress verification role`
>
> **Use this page when:** You need the validator mental model before writing correctness, dispute, or checkpoint-facing operator docs.

Validators sit in the most delicate place in the network family. They are close enough to settlement authority that casual readers may assume they *are* settlement authority. At the same time, they are still one role inside a broader path that includes publication, checkpoints, and later observation. The correct description is that validators replay **public artifacts** and decide whether a candidate transition is coherent under the current rules. They are not a public replacement for wallet meaning, and they are not a shortcut that makes every surrounding service irrelevant.

## What Validators Check

The validator role is easier to understand if you define its inputs rather than its prestige. Validators care about the public side of the transition:

| Validator concern | Why it matters |
| --- | --- |
| Package structure and consistency | Public artifacts must be parseable and internally coherent |
| Proof and replay boundaries | The system must reject malformed or reused transitions |
| Root and checkpoint linkage | A candidate transition must fit the authoritative state path |
| Inclusion and settlement evidence | Publicly visible facts must agree with each other |

This is why validator language belongs so close to checkpoints. The validator lane exists to keep public evidence honest before and around the place where final authority lands.

## What Validators Do Not Own

The same proximity to authority makes non-claims especially important:

| Not the validator's job | Why |
| --- | --- |
| Recover the user's full private ownership meaning | The wallet still owns local possession knowledge |
| Decide business legitimacy outside protocol evidence | Service honesty and real-world promises are broader questions |
| Replace checkpoint authority with a loose approval signal | Settlement remains stricter than a bare validation verdict |
| Turn public observation into exhaustive truth | Visibility is still bounded by the protocol design |

Without this table, validator pages tend to drift into either exaggerated omniscience or vague hand-waving. Z00Z needs neither.

## The Validator Verdict Is Narrower Than It Sounds

A validator verdict should be read like a precise technical judgment:

| Verdict idea | Correct interpretation |
| --- | --- |
| Accepted public-artifact path | The visible evidence is coherent under the checked rules |
| Rejected candidate | Something about the visible evidence, proof, replay boundary, or state link failed |
| Needs checkpoint context | Some correctness claims remain tied to the authoritative settlement boundary |

This is also why the protocol vocabulary prefers terms like `SettlementTheorem` and `Settlement evidence`. The system is trying to say something narrower and more defensible than "the network liked it."

## Why Linked Liability Still Matters Here

Validators are not only about happy-path correctness. They also sit close to later conflict and abuse handling. If a future fraud or conflict lane needs evidence, the validator role becomes part of the environment that made that evidence meaningful. That does not mean validators should become punishment engines by default. It means correctness documentation should remain compatible with later liability and exculpability requirements instead of pretending every rejected or accepted case is the end of the story.

## Current Repo Posture

This repository gives you the sources needed to explain validators accurately even without a local runtime:

| Repo-local evidence | Why it helps |
| --- | --- |
| `content/whitepapers/Main-Whitepaper.md` | Explains package, proof, checkpoint, and public-artifact relations |
| `content/whitepapers/Linked-Liability.md` | Keeps validation language compatible with later conflict evidence and exculpability needs |
| `content/whitepapers/Corpus-Terminology-Reference.md` | Standardizes checkpoints, settlement evidence, monitoring surfaces, and fraud-proof vocabulary |
| `content/docs/protocol/checkpoints.md` | Gives the closest reader-facing companion page for checkpoint authority |

That is enough to write high-quality docs now, as long as the page remains honest about not proving a full production validator stack in this repo.

## Common Validator Overclaims

| Overclaim | Better wording |
| --- | --- |
| "Validator approval means the business event is true." | "Validator approval means the checked public evidence is coherent under the current protocol rules." |
| "Validators see everything important." | "Validators see the public artifact lane, not the full private wallet meaning." |
| "Rejection proves malice." | "Rejection proves a protocol-facing inconsistency or insufficiency in the checked evidence." |
| "Validation replaces settlement." | "Validation is part of the settlement path, not a substitute for the authoritative checkpoint boundary." |

These corrections are the difference between a disciplined settlement system and a vague security theater story.

## Read Next

Continue to [Watchers](/docs/network/watchers) if your next question is how rejected, delayed, or anomalous cases become observable. Revisit [Checkpoint Anchors And ZTS](/docs/network/checkpoint-anchors-zts) if you need the relationship between validator-visible evidence and anchor-style proof references.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` defines the public-artifact verification path, package-to-checkpoint linkage, and settlement-bound reject-or-accept model summarized here.
- `content/whitepapers/Linked-Liability.md` adds conflict evidence, exculpability, and later enforcement context that validator docs should remain compatible with.
- `content/whitepapers/Corpus-Terminology-Reference.md` standardizes `SettlementTheorem`, settlement evidence, checkpoints, and fraud-proof-adjacent terms used on this page.
- `content/docs/protocol/checkpoints.md` is the current repo-local page that explains why validator language must stay subordinate to checkpoint authority.
