---
title: "Contact"
description: "Verified routing guidance for support, contribution, security disclosure, and limited published contact surfaces."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# Contact

> [!note]
> **Maturity:** `Live routing guidance with only limited published contact surfaces proven by this repo`
>
> **Use this page when:** You need to decide which contact path is appropriate and how to verify that the path is real.

The safest contact page is not the one with the longest list of inboxes. It is the one that helps readers avoid impersonation, oversharing, and wrong-channel reports. This repository currently proves some contact surfaces and only implies others. The page should stay honest about that.

## Verify The Channel Before You Send Anything

Use these checks first:

| Check | Why it matters |
| --- | --- |
| Is the channel published in the current docs, repo, or a signed project announcement? | Reposted contact details are easy to spoof |
| Does the request belong in public support or private security disclosure? | Wrong routing can widen harm |
| Are you about to send a secret, recovery bundle, or private exploit detail? | If yes, stop and change the route |
| Is the person contacting you through a DM instead of a published project surface? | That is a common impersonation pattern |

If you cannot verify the route, do not assume urgency is proof of legitimacy.

## Current Published Surfaces This Repo Can Support

The current repository can directly support these contact-adjacent paths:

| Need | Current proven surface |
| --- | --- |
| Docs or build issue in this repo | The public issue and pull-request workflow attached to `github.com/vasja34/z00z-website` |
| General navigation inside the docs | The support and developer pages in this repo |
| Security-sensitive reporting rules | [Responsible Disclosure](/docs/security/responsible-disclosure) |
| Legal and privacy wording boundaries | The legal and security pages published in `content/docs/` |

What this repo does **not** clearly prove on its own is a staffed support email, a media desk, a partnership inbox, or a universal legal mailbox. Those may exist in live project operations later, but they should not be invented here without published evidence.

## Routing By Question Type

Use the narrowest correct route:

| Request type | Best route |
| --- | --- |
| Docs typo, broken page, bad link, or repo-local build problem | Public repo issue or pull request |
| Contributor workflow question | [Developer Support](/docs/support/developer-support) first, then the repo workflow if still unresolved |
| Wallet safety confusion or recovery panic | [Wallet Recovery And Safety](/docs/support/wallet-recovery-safety) before contacting anyone |
| Security bug, privacy leak, or scam report | [Responsible Disclosure](/docs/security/responsible-disclosure), not a public issue |
| Media, partnership, or legal outreach | Only the channels explicitly published in the live docs or signed project materials |

This table is intentionally conservative because over-routing is safer than under-routing when secrets or trust are involved.

## What Not To Send

No matter which channel you choose, do not send:

- seed phrases;
- private keys;
- wallet export files;
- raw recovery bundles;
- private exploit payloads in public threads;
- personal documents unless a separately published and justified process requires them.

Most honest support or contributor flows do not need any of that information.

## Why This Page Avoids Big Promises

The legal corpus warns against language that makes the project sound like a hidden service operator. A contact page can accidentally do exactly that if it implies full customer support, recovery custody, or enterprise-service coverage that the repo cannot prove. The safer posture is to publish only what exists, route sensitive matters carefully, and leave unproven channels unclaimed until they are actually public.

That is not a weak contact page. It is a safer one.

## Evidence and Further Reading

- `github.com/vasja34/z00z-website` is the current remote repository surface that anchors the public docs issue and contribution workflow referenced here.
- `content/whitepapers/Legal-Architecture.md` explains why public materials must avoid implying hidden custody, exchange, recovery, or managed-service posture.
- `content/whitepapers/Privacy-Threat-Model.md` is the main source for why sensitive details, metadata, and exploit paths need narrower routing than ordinary support.
- `content/whitepapers/Main-Whitepaper.md` reinforces the self-custodial and wallet-local boundary that makes secret-handling discipline essential on every contact path.
