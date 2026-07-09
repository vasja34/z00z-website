---
title: "Support"
description: "Support hub for FAQs, troubleshooting, wallet recovery, developer help, contact, and contribution paths."
difficulty: basic
icon: mdi:alpha-a-circle-outline
toc: true
---

# Support

> [!note]
> **Maturity:** `Live docs support surface with mixed downstream service maturity`
>
> **Use this page when:** You hit a problem, need the right next page quickly, or want to know which questions belong in support versus security.

Support is only useful if it lowers risk before it offers convenience. In a privacy-focused project, the wrong support habit can be worse than no support at all. Sending secrets to a stranger, posting exploit details in a public issue, or assuming the protocol has a hidden recovery switch are all support mistakes that create security incidents. This section exists to route readers away from those failures first.

## The First Three Rules

Before you read anything else, keep these rules visible:

1. never share seed phrases, private keys, wallet exports, or recovery bundles;
2. never rely on social DMs as the default support path;
3. move security-sensitive findings to [/docs/security](/docs/security), not ordinary troubleshooting.

Those rules apply whether you are a new reader, a wallet user, or a developer debugging a docs problem.

## Where To Start

Pick the page that matches the problem you actually have.

| If you need... | Open this page first | Why |
| --- | --- | --- |
| Quick answers about scope, maturity, and common misunderstandings | [FAQ](/docs/support/faq) | It clarifies what this repo and project can claim today |
| Concrete command-based help for the docs repository | [Troubleshooting](/docs/support/troubleshooting) | It stays aligned with the local `npm` and verify workflow |
| Guidance about backups, restores, phishing, or unsafe support requests | [Wallet Recovery And Safety](/docs/support/wallet-recovery-safety) | It keeps the no-secret boundary explicit |
| Builder-facing help and reproduction discipline | [Developer Support](/docs/support/developer-support) | It routes technical questions into the deeper developer docs |
| Contact routing and channel verification | [Contact](/docs/support/contact) | It explains what is actually published and what is not |
| Contribution workflow for docs, fixes, and research-backed edits | [Contribute](/docs/support/contribute) | It turns interest into a verifiable repo workflow |
| Security-sensitive disclosure | [/docs/security](/docs/security) | Privacy, fraud, and exploit issues need a different path |

This ordering is intentional. Support should reduce avoidable harm before it expands into broader discussion.

## What This Repository Can Help With Directly

Because this repository is a docs and site workspace, the strongest live support surface here is the one tied to current local evidence:

| Current repo support topic | Why this repo can help |
| --- | --- |
| Running the docs site locally | `README.md`, `package.json`, and the developer pages define the real commands |
| Fixing lint, build, or search-coverage issues | The verification scripts are local and inspectable |
| Clarifying maturity, terminology, or safe public wording | The whitepaper corpus and rewritten docs live here |
| Updating support copy or routing pages | These files are the published support surface |

This repo is weaker as evidence for things it does not directly ship, such as a universal wallet support desk, a staffed legal inbox, or full runtime operations. Good support docs say that plainly instead of hiding the gap behind friendly language.

## Support Versus Security

Readers often start in support when the situation is actually security-sensitive. Use support for ordinary setup, content, build, and routing problems. Switch to the security path when the issue involves:

- secrets or recovery material;
- privacy leakage or unexpected disclosure;
- replay, authorization, or value-validity concerns;
- impersonation, scam channels, or pressure to send sensitive data;
- anything that would become more dangerous if posted publicly in full detail.

That boundary protects both users and maintainers. It also keeps public issue trackers from becoming exploit catalogs.

## Why The Safety Tone Is Deliberate

Some support pages sound cautious because the corpus itself is cautious. The whitepapers argue for self-custody, optional disclosure, and narrow public observability. Those ideas become meaningless if support copy casually implies hidden recovery power, official endorsement of third-party services, or universal operational coverage. Support language should therefore be practical, but it should also be disciplined enough to preserve the same trust boundaries as the protocol papers.

## Evidence and Further Reading

- `content/whitepapers/Main-Whitepaper.md` explains wallet-local possession, recovery limits, and the narrower public settlement boundary that support pages must preserve.
- `content/whitepapers/Privacy-Threat-Model.md` is the main source for why support guidance must distinguish ordinary help from privacy- or exploit-sensitive disclosure.
- `content/whitepapers/Legal-Architecture.md` defines the self-custodial, reference-implementation, and non-operator language that support pages should keep consistent.
- `README.md`, `package.json`, and `scripts/verify.sh` provide the repo-local command and verification evidence used by the practical support pages in this section.
