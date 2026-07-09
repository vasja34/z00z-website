---
title: "Roadmap And Maturity"
description: "Explains what is live, in progress, reserved, or target architecture across the workspace and corpus."
difficulty: basic
icon: mdi:alpha-a-circle-outline
toc: true
---

# Roadmap And Maturity

> [!note]
> **Maturity:** `Live docs`
>
> **Reading rule:** This page is about claim hygiene. It tells you how to talk about Z00Z without collapsing the live core, active hardening work, and target architecture into one blurred promise.

Z00Z has a broad whitepaper corpus, but not every described surface belongs to the same maturity band. Some claims are about the architecture that already defines the current direction. Some claims are about hardening or migration work that is clearly underway in the corpus. Others are explicitly future-facing. This page exists so readers, partners, contributors, and reviewers can keep those bands separate.

## The Three Maturity Bands

| Band | What it means | Safe wording |
| --- | --- | --- |
| Live core | The corpus treats the boundary as current or already shaping the protocol surface. | "Z00Z is designed around..." or "the current core centers..." |
| Active hardening | The direction is specific and named, but implementation depth or validation evidence is still developing. | "the corpus defines an active migration or hardening path for..." |
| Target architecture | The design is part of the roadmap, companion papers, or future expansion path. | "the whitepapers describe a target lane for..." |

The most important discipline is to avoid treating target architecture as shipped product. Z00Z becomes harder to trust when every future service, rights family, or migration lane is described as if it already exists in the live stack.

## What Belongs In The Live Core Story

The current core story is already strong without exaggeration. The corpus consistently supports these points:

- Z00Z is organized around wallet-local possession, transaction packages, and checkpoint-bound settlement evidence.
- Privacy is structural to the state model rather than a cosmetic layer over public accounts.
- The public chain acts on typed settlement evidence, roots, and replay-safe transitions rather than on a permanent public account graph.
- Protocol, wallet, steward, issuer, and service responsibilities are intentionally separated.

Those are architecture claims, not release-note claims. They can be stated plainly because the main whitepaper and companion papers repeat them as first-order design commitments.

## What Belongs In Active Hardening

Some topics are neither vague future dreams nor finished end-state claims. They sit in an active hardening band. Post-quantum migration is the clearest example in the current corpus. The dedicated migration paper is explicit that Z00Z is **not** end-to-end post-quantum secure today, but it also argues that the settlement and storage boundary are comparatively migration-friendly. That is an honest, useful, and non-promotional statement.

The same posture applies when the corpus discusses broader operator tooling, future disclosure modes, or more developed evidence lanes. These are not imaginary, but they still require careful language: describe the direction, the reason, and the remaining work.

## What Stays In Target Architecture

Target architecture includes many of the rights-expansion lanes and ecosystem overlays that make Z00Z interesting: generalized rights beyond cash, richer external-asset flows, expanded compliance-profile tooling, mature corporate overlays, and parts of the broader agentic economy story. Those topics are important, but they should stay visibly future-facing unless a page can point to current repo-backed evidence for a narrower claim.

That is not a weakness. It is how the docs keep the project credible.

## A Safe Way To Talk About Progress

When you summarize Z00Z, prefer sentences that combine architecture and maturity in one breath. For example:

- "The current corpus defines Z00Z as a wallet-local, checkpointed private cash and settlement model."
- "The broader rights economy remains an intentional extension path rather than a blanket live-product claim."
- "Post-quantum migration is an active hardening track, not a solved status."

Avoid schedule theater. If a page cannot point to a concrete corpus file that names a boundary or workstream, it should not imply dates, inevitability, or launch certainty.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` section 12 distinguishes current protocol contracts, current verification boundaries, and target architecture.
- `content/whitepapers/Tokenomics.md` and `content/whitepapers/DAO.md` describe governance, incentives, and treasury boundaries in maturity-aware terms rather than as blanket production claims.
- `content/whitepapers/Post-Quantum-Migration.md` is the current corpus source for the "active hardening" posture used on this page.
