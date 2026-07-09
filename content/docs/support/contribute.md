---
title: "Contribute"
description: "Contributor guide for code, docs, tests, research, audits, examples, and useful-work submissions."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# Contribute

> [!note]
> **Maturity:** `Live repo contribution workflow`
>
> **Use this page when:** You want to turn a docs, workflow, or evidence improvement into a clean contribution to this repository.

This repository is a good place to contribute if you understand one principle early: the highest-value changes are often the ones that make public claims narrower, safer, and easier to verify. In a privacy-focused project, a careful docs correction can be more important than a flashy new page because it changes what readers trust.

## What Counts As A Good Contribution Here

Useful contributions in this repo include:

| Contribution type | Why it matters |
| --- | --- |
| Rewriting scaffold pages into source-backed reader docs | Improves trust and reduces unsupported claims |
| Fixing broken navigation, metadata, or search coverage | Keeps the docs usable as a product |
| Tightening maturity wording | Prevents target architecture from being mistaken for live code |
| Correcting whitepaper alignment | Keeps terminology and public claims consistent |
| Improving workflow prompts, review rules, or verification guidance | Raises the quality floor for future changes |

The common thread is evidence. Good contributions make the next reader less likely to leave with the wrong mental model.

## Ground Rules Before You Edit

The local repo rules matter:

- keep public artifacts in English;
- prefer local repo evidence first and whitepaper evidence second;
- back up full rewrites of text-like files before replacing them;
- avoid destructive edits and unsupported assumptions;
- finish with the repo verification path.

Those rules are not ceremony. They protect planning files, public docs, and trust boundaries from accidental damage.

## A Practical Contribution Loop

For most repo-local changes, the contribution loop is:

1. read the target page and nearby navigation files;
2. find the `content/whitepapers/` passages that justify the claim;
3. edit the content or workflow asset;
4. run `npm run lint`;
5. run `npm run verify`;
6. submit the change through the repo workflow attached to `github.com/vasja34/z00z-website`.

If the change is large, add a review note or summary that explains what boundary was tightened or clarified.

## What Maintainers Will Usually Reject

Expect pushback on contributions that:

- add claims not supported by local files or the corpus;
- present target architecture as already shipped;
- introduce commands not supported by `package.json` or repo scripts;
- post sensitive security details in a public contribution thread;
- widen support or contact claims beyond what the repo can currently prove.

That rejection standard is healthy. The docs become safer when contributors know that polished overreach still counts as a bug.

## Where To Ask Before Opening A Large Change

For uncertain builder questions, start with [Developer Support](/docs/support/developer-support). For ordinary repo-local issues, use the public issue tracker attached to `github.com/vasja34/z00z-website`. For security-sensitive findings, switch to [Responsible Disclosure](/docs/security/responsible-disclosure) instead of posting the details in a normal contribution thread.

This separation keeps contribution channels productive and keeps security channels from being diluted by ordinary support traffic.

## Why Useful Work Still Needs Evidence

The broader Z00Z corpus includes strong language about contribution quality, evidence, and challengeability. That matters here too. A helpful contribution is not judged only by enthusiasm or volume. It should leave behind something another reviewer can inspect: a cleaner page, a fixed route, a clearer claim boundary, a passing verify run, or a more accurate evidence trail. That is as true for documentation work as it is for code.

## The Best First Contribution

If you are unsure where to start, pick a page that still reads like a scaffold, or find a place where the current wording is stronger than the evidence. Those contributions are small enough to review and meaningful enough to improve the project immediately.

## Evidence and Further Reading

- `README.md`, `package.json`, and `scripts/verify.sh` define the local contribution and validation flow referenced on this page.
- `.github/copilot-instructions.md` and `.github/requirements/Z00Z_WEB_DESIGN_FOUNDATION.md` contain the repo-local editing, backup, and verification rules contributors are expected to follow.
- `content/whitepapers/Main-Whitepaper.md` and `content/whitepapers/Legal-Architecture.md` explain why public wording, maturity discipline, and role boundaries are core contribution concerns rather than optional polish.
- `content/whitepapers/Proof-of-Useful-Work.md` reinforces the evidence-first contribution mindset: work should be reviewable, scoped, and challengeable rather than justified by enthusiasm alone.
