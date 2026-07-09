---
title: "Storage And HJMT"
description: "Builder guide to settlement roots, path semantics, proof boundaries, and the HJMT storage model."
difficulty: expert
icon: mdi:alpha-d-circle-outline
toc: true
---

# Storage And HJMT

> [!warning]
> **Maturity:** `Live storage vocabulary + target implementation guidance`
>
> **Use this page when:** You need the settlement-storage model before working on proofs, checkpoints, recovery flows, or storage-facing documentation.

Storage is where many privacy systems accidentally reveal their real philosophy. If the storage layer is designed like a public wallet database, the protocol will leak like a public wallet database no matter how elegant the proof system looks elsewhere. Z00Z takes the opposite route. Storage is not meant to mirror a reusable account table. It is meant to preserve the **public evidence needed for replay-safe settlement** while leaving ownership meaning, receiver knowledge, and local inventory interpretation on the wallet side.

That is why this page treats HJMT and storage as a semantic boundary first. The current repository does not ship a full storage implementation surface. It does, however, provide the whitepaper vocabulary and the reader-facing protocol pages that explain what the storage layer is supposed to prove. That is enough to document the contract honestly.

## What Storage Owns In Z00Z

The storage boundary owns the public side of settlement truth:

| Storage responsibility | Why it matters |
| --- | --- |
| Commit the current settlement root | Verifiers need a canonical public state boundary |
| Preserve path semantics for committed objects | Replay-safe settlement depends on stable object identity and location |
| Support inclusion and non-inclusion reasoning | Proofs are part of validity, not an optional indexing feature |
| Record the transition from one checkpoint state to the next | Settlement must bind prior state, next state, and public artifacts together |

This is why storage language in Z00Z is inseparable from checkpoints. A storage root is not just a convenient index summary. It is part of the public evidence that lets the system reject malformed or replayed transitions.

## Why HJMT Matters

The corpus uses HJMT language to keep two ideas together:

| Idea | Builder consequence |
| --- | --- |
| Semantic settlement objects should have stable path meaning | Builders should document the object model before talking about backends |
| Physical storage layout can evolve under a fixed proof contract | Performance work must not silently rewrite the public meaning of state |

That distinction is useful because it keeps implementation detail from swallowing protocol meaning. A fast storage engine that changes proof semantics is not an optimization. It is a protocol change. A new backend that preserves the same proof and root contract can be an implementation change. HJMT vocabulary gives builders a way to talk about that difference precisely.

## The Storage Terms That Matter Most

The terminology reference gives several storage-facing terms special weight:

| Term | Why builders should use it carefully |
| --- | --- |
| `SettlementStateRoot` | The preferred live term for the generalized public root over checkpointed settlement leaves |
| `SettlementPath` | The canonical path concept for one committed settlement object |
| `Forest commit journal` | The crash-safety and replayability concept for multi-tree state updates |
| `Path index` | A storage-internal lookup aid, not automatically a public semantic contract |

The important habit is to separate **what the verifier must trust** from **what the implementation may use internally**. If a page blurs those, readers will not know which part of the storage story is consensus-facing and which part is a backend choice.

## What This Repo Can Prove Locally

Even without a storage implementation tree, the current repository still supports real storage documentation work:

| Local evidence | What it supports |
| --- | --- |
| `content/whitepapers/Main-Whitepaper.md` | The reason storage exists as settlement evidence rather than account memory |
| `content/whitepapers/Corpus-Terminology-Reference.md` | The canonical root, path, and proof vocabulary |
| `content/docs/protocol/settlement-model.md` | The reader-facing explanation of object transitions and public evidence |
| `content/docs/protocol/checkpoints.md` | The explanation of checkpoint authority and final settlement |

These are the right sources for a docs repo. They let you tighten explanations, reconcile terminology, and remove false implementation claims without inventing missing code.

## Common Storage Misreads

| Misread | Better interpretation |
| --- | --- |
| Storage is just a persistence detail below the real protocol | No, storage and proof shape the public settlement contract |
| The public root should mirror the wallet view | No, the wallet holds private interpretation that public state intentionally does not reveal |
| Any backend optimization is harmless if tests pass | Not if the optimization changes path meaning, proof semantics, or checkpoint continuity |
| A path index is automatically a public object model | No, internal lookup convenience and public semantic truth are different layers |

These are not minor wording corrections. They are the difference between a private settlement system and a dressed-up public ledger.

## Read Next

Go to [RPC Transport](/docs/developers/rpc) if you need the delivery boundary around storage-facing workflows, or continue to [Rollup Node](/docs/developers/rollup-node) if your next question is how public artifacts get verified across checkpoint transitions.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` explains why Z00Z narrows public state to settlement evidence instead of publishing a public balance model.
- `content/whitepapers/Corpus-Terminology-Reference.md` defines `SettlementStateRoot`, `SettlementPath`, path-index vocabulary, proof terms, and HJMT-adjacent storage language.
- `content/whitepapers/Linked-Liability.md` adds useful context for why storage cannot be treated as a naive history log when replay, reveal, and fraud paths exist.
- `content/docs/protocol/settlement-model.md` and `content/docs/protocol/checkpoints.md` are the current reader-facing docs in this repo that should stay aligned with the storage contract summarized here.
