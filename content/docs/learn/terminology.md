---
title: "Terminology And Abbreviations"
description: "Shared vocabulary contract for objects such as AssetLeaf, RightLeaf, SettlementPath, Checkpoint, TxPackage, and FeeEnvelope."
difficulty: specialist
icon: mdi:alpha-e-circle-outline
toc: true
---

# Terminology And Abbreviations

> [!note]
> **Maturity:** `Live docs`
>
> **Use this page when:** You want the shortest stable definitions before you read protocol, legal, or developer pages.

Z00Z spans a large corpus, and many misunderstandings start as vocabulary mistakes. This page exists to keep the most repeated terms stable in normal reading, not only inside a glossary appendix. The goal is practical: if you understand the difference between a wallet-local object, a checkpoint, a transaction package, and public settlement evidence, the rest of the documentation becomes much easier to follow.

The full authority for naming and abbreviation discipline lives in `content/whitepapers/Corpus-Terminology-Reference.md`. This page is the reader-friendly bridge into that document. It keeps the terms short, explains why they matter, and highlights the scope rules that prevent category drift.

## Core Terms You Will See Repeatedly

AssetLeaf
: The public, checkpointed settlement object that represents a confidential asset right in canonical state. It is not a public account balance. It is the committed settlement fact that verifiers can reason about.

RightLeaf
: A live settlement object for non-coin rights under the broader rights-oriented contract direction. It matters because the corpus wants to generalize the model beyond cash without pretending that every future rights lane is already live.

Checkpoint
: The validation boundary that turns ordered publication into final, replay-safe settlement. A package reaching the network is not the same thing as a package crossing the checkpoint boundary.

Settlement evidence
: The public roots, deltas, proofs, and link artifacts that let an observer verify a transition without reconstructing a full private wallet history.

Wallet-local possession
: The design rule that ownership material and transfer preparation stay in the wallet until publication is required. This is one of the clearest differences between Z00Z and public account systems.

TxPackage
: The wallet-side canonical envelope for ordinary transfer preparation. It bundles the data that later needs to be checked for structure, authorization, and replay-safe settlement consistency.

Nullifier
: A domain-separated anti-replay artifact used in current flows. It is part of the replay boundary, not a generic synonym for "spent state."

Soft confirmation
: A pre-checkpoint acknowledgement that something entered the publication path without yet becoming final settlement.

## Reading Rules That Prevent Confusion

Three habits make the corpus much easier to read.

First, do not translate these terms back into public-account language unless the paper explicitly does so. `AssetLeaf` is not just "an account row with privacy." `Checkpoint` is not just "a block" or "a mempool event." `Wallet-local possession` is not just "a client feature." Each term exists because the architecture is trying to move the default truth boundary.

Second, watch for maturity cues. Some terms describe live or current surfaces, while others are used to explain future or generalized direction. The terminology reference is careful about that distinction, and the docs pages should be equally careful.

Third, keep protocol terms separate from service terms. The legal corpus makes this especially important. A wallet, steward, issuer, bridge, or compliance overlay may add important behavior, but those layers should not silently redefine the core protocol vocabulary.

## Common Abbreviation Posture

The corpus allows concise names such as `TxPackage`, `AssetLeaf`, `RightLeaf`, and `PQ` because they carry repeated technical meaning. It avoids vague abbreviations that hide the role of an object. When in doubt, prefer the longer plain-language phrase once, then introduce the corpus term. That keeps docs readable for new readers without flattening the underlying model.

## Evidence and Further Reading

- `content/whitepapers/Corpus-Terminology-Reference.md` sections 3 through 5 are the primary authority for the shared term contract and abbreviation list.
- `content/whitepapers/Main-Whitepaper.md` "Key Terms Used In This Paper" and sections 3 through 6 show how the same vocabulary behaves inside the core protocol thesis.
- `content/whitepapers/Uniqueness.md` uses the terms in comparison-driven context, which is useful when you need to understand why naming precision changes the public category claim.
