---
title: "Supply Chain"
description: "Dependency, tooling, and trust-surface security posture for the current docs repository."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# Supply Chain

> [!warning]
> **Maturity:** `Live repo dependency posture with broader ecosystem hardening still layered above it`
>
> **Use this page when:** You are changing dependencies, build tooling, or trust boundaries in the docs repository and need the conservative security baseline.

Supply-chain security means more than checking a lockfile into git. In this repository it also means controlling which tools are allowed to shape public claims, which dependencies the site actually ships, which automation surfaces can rewrite content, and which external assumptions contributors are smuggling into reader-facing pages.

Because this repo is a docs and site workspace, its live supply-chain posture is narrower than a full protocol runtime. The present-tense goal here is simple: keep the published site, the authoring toolchain, and the workflow prompts understandable, pinned, and reviewable enough that a dependency or automation change cannot silently rewrite the trust surface.

## What The Current Repo Actually Uses

The live dependency story in this repository is straightforward:

| Surface | Current repo evidence | Why it matters |
| --- | --- | --- |
| Node package graph | `package.json` and `package-lock.json` | Defines the shipped site and authoring dependencies |
| Install path | `npm ci` in `README.md` | Encourages deterministic installs from the lockfile |
| Verification path | `npm run lint` and `npm run verify` | Catches obvious regressions before docs changes ship |
| Workflow rules | `.github/copilot-instructions.md` and related skills | Constrains risky editing behavior and unsupported claims |
| Markdown and content behavior | `content/docs/` plus repo-local build scripts | Makes public-claim drift reviewable as content, not just code |

That is enough to talk honestly about this repo's supply-chain posture. It is not enough to claim that every ecosystem dependency across every future service is already covered here.

## The Main Risk Classes

Supply-chain risk in this repo falls into four practical buckets.

First is **dependency drift**: a package upgrade can change rendering, parsing, search behavior, or build output in ways that subtly rewrite what readers see. Second is **tooling drift**: a helper script or automation surface can change the validation contract without contributors noticing. Third is **prompt and instruction drift**: local workflow assets under `.github/` can reshape how AI-assisted changes are made, which matters because this repo explicitly treats those files as part of the live working surface. Fourth is **external-assumption drift**: contributors may import commands, trust claims, or service expectations from another repository and publish them here as if they were local facts.

None of these risks requires malicious code execution to matter. A docs repo can damage trust simply by publishing the wrong boundary with clean formatting.

## Minimum Review Standard For Dependency Changes

When a dependency or build-tooling change is in scope, the minimum safe review standard should include:

1. confirm why the dependency is needed at all;
2. check whether an existing repo surface already solves the problem;
3. preserve or update the lockfile consistently;
4. run `npm run lint` and `npm run verify`;
5. re-read any affected reader-facing pages for claim drift, not only for build success.

That last step matters. A dependency can pass build checks while still changing search coverage, Markdown behavior, or content rendering in a way that alters reader expectations.

## What This Page Will Not Pretend

This page does not claim that the current docs repo proves a finished advisory intake process, a full SBOM program, or complete ecosystem dependency review for every future wallet, node, or enterprise surface. It also does not treat third-party assets or external services as automatically safer because a docs page mentions them. The legal corpus is explicit that external issuers, overlays, and regulated-service duties remain external responsibilities unless separately proven otherwise.

In other words, supply-chain discipline here is about keeping the local trust surface narrow and inspectable. Broader operational hardening belongs to the systems that actually ship those services.

## How This Connects To The Rest Of Security

Read [Crypto Policy](/docs/security/crypto-policy) when a dependency change affects cryptographic claims or migration language. Read [Responsible Disclosure](/docs/security/responsible-disclosure) if a dependency or tool introduces a vulnerability that should not be reported in public. Read [Audits And Reviews](/docs/security/audits) when you need to decide what kind of evidence a future supply-chain assurance claim would require.

The common thread is that trust should move upward only when evidence moves with it.

## Evidence and Further Reading

- `package.json` and `package-lock.json` are the current repo-local sources of truth for the Node dependency graph discussed on this page.
- `README.md` defines the install and verification flow that keeps dependency changes reproducible and reviewable in this workspace.
- `.github/copilot-instructions.md` and `.github/requirements/Z00Z_WEB_DESIGN_FOUNDATION.md` constrain risky automation and require evidence-backed verification before completion.
- `content/whitepapers/Legal-Architecture.md` explains why external-service, issuer, and operator responsibilities must not be collapsed into the base protocol's trust claims.
- `content/whitepapers/Privacy-Threat-Model.md` reinforces the principle that extra tooling, telemetry, or service layers can widen exposure even when the base protocol boundary remains narrower.
