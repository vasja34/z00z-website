---
title: "Support"
description: "Support hub for FAQs, troubleshooting, wallet recovery, developer help, contact, and contribution paths."
toc: true
---
# Support
> [!note]
> **Docs route:** `/docs/support`
>
> **Target site route:** `/support`
>
> **Maturity:** `Site support`
>
> Keep the public wording aligned with the stated maturity and route intent.

## Page Brief

What
: Support hub for FAQs, troubleshooting, wallet recovery, developer help, contact, and contribution paths.

When
: Used by users or builders who hit a problem or need a human handoff.

Where
: Header utility nav and footer.

Who
: Users, developers, operators, wallet teams, and contributors.

Why
: Support should be searchable and safety-first, not scattered across community channels.

How
: Use issue categories, safety warnings, official-channel verification, and links to technical docs.

## Reader Lenses

::: tabs

@tab:active Purpose
Support hub for FAQs, troubleshooting, wallet recovery, developer help, contact, and contribution paths.

@tab Audience
Primary readers: Users, developers, operators, wallet teams, and contributors.

@tab Delivery
Use issue categories, safety warnings, official-channel verification, and links to technical docs.

:::

## Section Lens

Source
: wallet docs, troubleshooting notes, repo scripts, marketing support boundaries, and security disclosure policy.

Message
: support must reduce risk first, then route users to the correct technical or human path.

UX
: a task-focused support surface with decision trees, checklists, and contact categories.

Include
: issue categories, exact commands, logs to collect, no-secret warnings, official-channel checks, and escalation routes.

Avoid
: asking for secrets, relying on DMs, mixing security disclosure with ordinary support, or hiding response limits.

## Section Pages

| Page | Role |
| --- | --- |
| [FAQ](/docs/support/faq) | Common questions about Z00Z category, privacy, settlement, wallets, tokens, use cases, and maturity. |
| [Troubleshooting](/docs/support/troubleshooting) | Step-by-step fixes for setup, wallet build, WASM, RPC, simulator, node, and verification failures. |
| [Wallet Recovery And Safety](/docs/support/wallet-recovery-safety) | User-facing wallet safety, backups, restore, seed phrase handling, phishing warnings, and support boundaries. |
| [Developer Support](/docs/support/developer-support) | Support path for builder questions, bug reports, integration issues, and design-partner requests. |
| [Contact](/docs/support/contact) | Official contact routes for support, partnerships, security, media, legal, and ecosystem programs. |
| [Contribute](/docs/support/contribute) | Contributor guide for code, docs, tests, research, audits, examples, and useful-work submissions. |

## Navigation Links

| Link | Why it matters |
| --- | --- |
| [Z00Z Home](/docs) | Parent hub and primary context for this page. |
| [Research](/docs/research) | Previous page in the same section order. |
| [Legal](/docs/legal) | Next page in the same section order. |

## Delivery Focus

- [x] Route intent captured from the architecture scaffold
- [x] Internal cross-links added for hub navigation
- [x] Evidence anchors preserved for follow-up drafting
- [ ] Final long-form prose and diagrams still need source-document expansion

## Route Map

@mermaidstart
graph TD
  support["Support"]
  support --> support_faq["FAQ"]
  support --> support_troubleshooting["Troubleshooting"]
  support --> support_wallet_recovery["Wallet Recovery And Safety"]
  support --> support_developer["Developer Support"]
  support --> support_contact["Contact"]
  support --> support_contribute["Contribute"]
@mermaidend

+++ Evidence and scaffold notes
- Evidence anchors: `docs/Z00Z-Marketing-Srategy.md, Hyperliquid support pattern`
- Section: `Support`
- Section message: support must reduce risk first, then route users to the correct technical or human path.
+++
