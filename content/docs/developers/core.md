---
title: "Core Protocol API"
description: "Conceptual developer map for the core Z00Z object model, settlement boundaries, and no-account architecture."
difficulty: specialist
icon: mdi:alpha-e-circle-outline
toc: true
---

# Core Protocol API

> [!warning]
> **Maturity:** `Live protocol vocabulary + current docs-repo evidence`
>
> **Use this page when:** You need the core Z00Z object model and settlement boundaries before writing implementation code or reviewing protocol-facing docs.

This page is called "Core Protocol API," but in the current repository it should be read as a **core protocol contract map**, not as a generated reference for a local runtime package. The repo does not expose a finished implementation library for the full protocol. What it does expose is the whitepaper corpus that defines the stable builder vocabulary and a docs surface that should keep that vocabulary consistent. The job of this page is to make the core model legible without inventing code that is not present here.

## The Core Question

Z00Z starts from a different question than a public account chain: **what must become public for settlement to stay safe, and what should remain wallet-local until publication?** The answer drives the whole object model. Public state centers on committed settlement objects, replay-safe transitions, checkpoints, and narrow evidence. Private user meaning stays in wallet-local possession, receiver material, and package preparation until a specific transition crosses the settlement boundary.

That is why the core vocabulary is object-first rather than account-first. Builders should think in terms of spendable confidential objects, transition packages, checkpoint roots, and settlement evidence. If you begin with public accounts and balances, you will misunderstand both the privacy model and the verification model.

## Minimal Core Vocabulary

The whitepaper corpus makes a few nouns central:

| Term | Builder meaning |
| --- | --- |
| `AssetLeaf` | The committed settlement object that appears in canonical public state |
| `TxPackage` | The wallet-side transfer package prepared before checkpoint settlement |
| `ClaimTxPackage` | A claim-domain settlement package with its own replay context |
| `Settlement evidence` | Public roots, deltas, proofs, and artifacts needed to verify a transition |
| `Checkpoint` | The authoritative public validation boundary |
| `Wallet-local possession` | Ownership material and transfer preparation that remain off-chain until publication |

These terms are not interchangeable. A `TxPackage` is not settled state. Wallet-local possession is not public finality. A checkpoint is not just a timestamp or publication notice. The clarity of those distinctions is what keeps the protocol from collapsing back into a public account model.

## Invariants Builders Should Preserve

| Invariant | Why it matters |
| --- | --- |
| The wallet can know more than the public chain reveals | Protects privacy and preserves the no-account design |
| Publication is not the same as final settlement | Prevents soft admission from being mistaken for checkpoint truth |
| Public state carries the minimum evidence needed for replay-safe settlement | Keeps the protocol narrow and auditable |
| Service layers cannot redefine settlement validity | Preserves the protocol-versus-service boundary |

Any implementation, SDK, or service explanation that breaks one of these invariants is probably not describing Z00Z accurately, even if the prose sounds technically plausible.

## How To Use This Page During Implementation Work

Even though this repo is not the full runtime, this page is still practical for builders. Use it as a pre-coding checklist:

1. Identify which concept your component actually handles: asset object, receiver material, package assembly, publication evidence, or checkpoint verification.
2. Ask whether that component belongs on the wallet side, the settlement-verifier side, or an optional service layer.
3. Make sure the public-facing docs do not promote a wallet-local object into a public-account abstraction by accident.
4. Keep maturity wording honest when the current repo only documents the contract rather than shipping the implementation.

This is especially useful for docs reviews. Many draft pages fail because they describe a transport, wallet, or ecosystem surface as if it were the authoritative core. In Z00Z the core is narrower than that.

## What This Repo Can And Cannot Show

This repository can show:

| It can show... | Because the evidence lives here |
| --- | --- |
| The canonical terms and category boundaries | `content/whitepapers/` |
| The way developer docs present those terms | `content/docs/developers/` and adjacent docs pages |
| The current documentation product and verification flow | `src/`, `package.json`, `scripts/verify.sh` |

This repository cannot by itself prove:

| It cannot prove... | Because the evidence is not local here |
| --- | --- |
| A full runtime API surface for every protocol object | The repo is not the full implementation tree |
| Production readiness of every node, wallet, or service component | Many pages are concept or target architecture pages |
| Concrete code signatures for broader system libraries | Those would require implementation repositories or generated references |

That limitation is exactly why this page stays conceptually strict. It would be easier to overstate. It is better not to.

## Read Next

Go to [Crypto Facade](/docs/developers/crypto) if your next question is about proof, commitment, and migration boundaries. Go to [Wallet SDK](/docs/developers/wallet) if you need the user-side possession model that turns the core objects into real wallet flows.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` sections 1, 2, 3, 4, and 10 define the settlement-notary model, wallet-local possession, checkpoint-bound finality, and protocol boundary used throughout this page.
- `content/whitepapers/Corpus-Terminology-Reference.md` is the canonical source for `AssetLeaf`, `TxPackage`, `ClaimTxPackage`, settlement evidence, checkpoints, and related builder vocabulary.
- `content/whitepapers/Assets-Rights-Vauchers.md` explains how final cash, vouchers, and rights remain distinct object families inside the broader settlement model.
- `content/docs/protocol/` contains the current reader-facing explanations that should stay aligned with the core terminology summarized here.
