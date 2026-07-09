---
title: "Private Rights Over External Assets"
description: "Externally custodied value enters Z00Z as an internal private right that can move privately before redemption."
difficulty: expert
icon: mdi:alpha-d-circle-outline
toc: true
---

# Private Rights Over External Assets

> [!warning]
> **Maturity:** `Near-core extension with explicit external custody and redemption assumptions`
>
> **Use this page when:** You want to understand how a public or issuer-side asset can keep its outside meaning while its ownership right moves privately inside Z00Z.

This family matters because it proves that Z00Z is not only a better transfer rail for value already native to itself. The cross-chain and use-case papers both argue for a sharper split: the external chain, issuer, or locker keeps custody or redemption authority, while Z00Z privately reassigns the economically meaningful right between deposit and exit.

## The Core Thesis

The right way to read this family is not "the asset moved privately across chains." The narrower and more accurate reading is:

1. an external asset or reserve position remains outside Z00Z;
2. one internal private right is created against a specific source family;
3. that private right can move inside Z00Z without exposing every reassignment;
4. exit later consumes the internal right before release or redemption outside.

This is why the cross-chain paper emphasizes lockers, asset-family identity, and burn-before-release discipline.

## What Z00Z Actually Contributes

| Z00Z contribution | Why it matters |
| --- | --- |
| Private internal reassignment | The outside system does not need to see every ownership change |
| Typed asset-family identity | The right can preserve whether it refers to an externally backed, issuer-native, or synthetic family |
| Checkpointed settlement | Internal movement still ends in replay-safe canonical evidence |
| Honest protocol-versus-service separation | The docs can stay clear about what the protocol proves and what outside operators still have to honor |

The value of the family is that privacy is created in the interval between visible entry and visible exit, not by pretending the public source event disappeared.

## Trust Boundaries That Stay External

This family is only credible when the outside trust remains visible.

| External boundary | Why it does not become protocol truth automatically |
| --- | --- |
| Vault or locker custody | The protocol does not itself prove that the outside reserve is solvent or correctly managed |
| Issuer redemption | An issuer-native asset still depends on the issuer honoring its promise |
| Relayer or attestation quality | Import depends on a source event being observed and bound correctly |
| Public exit privacy | Entry and exit remain visible edges that can still create correlation pressure |

The safer sentence is: Z00Z can privately move the internal right. It does not erase external custody risk or redemption honesty requirements.

## Three Asset Families To Keep Distinct

The cross-chain paper repeatedly warns against flattening all private assets into one category.

| Family | Meaning | Reader caution |
| --- | --- | --- |
| Externally backed asset | A private right whose meaning depends on outside custody or collateral | Do not narrate it as though Z00Z itself guarantees the reserve |
| Issuer-native asset | A private asset family whose meaning depends on issuer policy and redemption | Do not confuse issuer promise with protocol proof |
| Synthetic internal unit | A private internal unit with bounded purpose and no default outside redemption claim | Do not market it as equivalent to a stable externally backed asset |

This distinction matters because privacy can hide holder graphs while still leaving asset meaning very different.

## Current Versus Target Posture

| Surface | Current posture | Target direction |
| --- | --- | --- |
| Internal right movement | Strongly coherent in the current corpus | More integrations can widen the family without changing the core idea |
| Full locker ecosystem | Not a blanket live claim | Canonical locker objects, reserve attestations, and richer routes remain future work |
| Trust-tier disclosure | Conceptually strong and already described | Wallet and market presentation can still mature |
| Exit and release UX | Directionally clear | Batching, privacy-improving routes, and operator tooling still need closure |

That is why the use-cases paper places this family high, but still after offline cash. It is close to the core and still more dependent on outside systems.

## When This Family Is Especially Useful

This family is strongest when users want private internal circulation without losing the economic meaning of a public or issuer-recognized asset:

- stable-value private payment rails;
- private treasury or payroll flows using externally meaningful units;
- internal private movement before later public redemption;
- community or merchant ecosystems where outside asset identity still matters.

The family is weaker when a user expects the protocol itself to prove solvency, custody integrity, or legal redemption on its own.

## Evidence and Further Reading

- `content/whitepapers/Cross-Chain-Integration.md` is the primary source for lockers, trust tiers, `BridgeInTx`, `BridgeOutTx`, and the separation between internal rights and external custody.
- `content/whitepapers/Main-Whitepaper.md` is the main source for the locker thesis, protocol-versus-service separation, and implementation-status language.
- `content/whitepapers/UseCases.md` is the source for the family ordering and for the explanation of why private external-asset rights form one of the strongest near-core wedges.
- `content/whitepapers/Assets-Rights-Vauchers.md` is useful when the scenario mixes externally backed value with voucher-like or rights-like semantics inside one object family.
