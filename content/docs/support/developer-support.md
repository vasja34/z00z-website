---
title: "Developer Support"
description: "Support path for builder questions, bug reports, integration issues, and design-partner requests."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# Developer Support

> [!note]
> **Maturity:** `Live repo support route for builders`
>
> **Use this page when:** You are a contributor or integrator and the existing developer docs did not fully answer the question.

Developer support should start with self-service because the best technical question is the one that arrives with reproducible evidence already attached. In this repository, the first stop for most builder problems is not a human inbox. It is the local docs, the whitepaper corpus, and the repo verification flow that already define what can be proven here.

## Start With The Deepest Local Source

Before escalating, check the page that matches your question:

| Question type | Best first page |
| --- | --- |
| Setup and command flow | [Get Started](/docs/developers/get-started) |
| Validation and review expectations | [Verification And Tests](/docs/developers/verification-tests) |
| Repo structure and where work belongs | [Rust Workspace](/docs/developers/workspace) |
| AI-assisted workflow rules | [AI Agent Playbook](/docs/developers/ai-agent-playbook) |
| Security wording, disclosure, and maturity boundaries | [/docs/security](/docs/security) |

If those pages answer the question, support has already worked and no extra escalation is needed.

## What To Collect Before Asking For Help

When the docs still leave a gap, collect a minimal reproducible bundle:

- the exact file or route involved;
- the command you ran;
- the exact error or unexpected output;
- whether `npm run lint` fails, `npm run verify` fails, or both;
- the smallest set of changed files that reproduces the issue;
- whether the issue is purely docs-site behavior or a corpus/claim-discipline problem.

That bundle is usually enough for a docs repo. It also keeps the question narrow enough that a maintainer or reviewer can reproduce it without guesswork.

## Public Versus Private Routing

Use the public repo workflow for ordinary docs, build, navigation, or wording issues. Use the security path instead when the question includes:

- exploit details;
- secret handling;
- privacy leakage;
- trusted-channel impersonation;
- anything that becomes more dangerous if copied into a public thread.

This boundary is especially important for developers because technical users are often the most likely to over-share detailed reproduction data before asking whether the data is safe to publish.

## What Maintainers Need Most

From a maintainer's perspective, the best support request is one that separates:

| Helpful signal | Why it matters |
| --- | --- |
| Exact command | Reproduction starts from the same entry point |
| Exact path | Confirms whether the problem is content, routing, or workflow-related |
| Expected versus observed behavior | Prevents reviewers from guessing the intended contract |
| Security sensitivity flag | Decides whether the issue belongs in public or private routing |
| Evidence source | Shows whether the claim is repo-local, corpus-backed, or speculative |

Without that structure, the support path turns into archaeology.

## What This Repo Can Support Best

This repository is strongest at helping with:

- docs rewrites and navigation problems;
- search or verification regressions;
- maturity and wording drift;
- contributor workflow confusion;
- evidence mismatches between `content/docs/` and `content/whitepapers/`.

It is weaker as direct proof for full runtime, operator, or hosted-service behavior outside the tree. Good developer support should say so instead of pretending every concept described in the corpus is already present as a local executable surface.

## When To Use The Repo Tracker

For ordinary builder problems in this repo, use the public issue or pull-request workflow attached to `github.com/vasja34/z00z-website`. Keep the report concrete and local. If the issue is really a security problem, do not post the exploit details publicly just because the repo tracker is the most visible route.

## Evidence and Further Reading

- `content/docs/developers/get-started.md`, `content/docs/developers/verification-tests.md`, and `content/docs/developers/ai-agent-playbook.md` already document the main self-service builder flows referenced here.
- `README.md`, `package.json`, and `scripts/verify.sh` define the reproducible local command path that developer support requests should use.
- `content/whitepapers/Main-Whitepaper.md` and `content/whitepapers/Legal-Architecture.md` explain why docs support must distinguish repo-local proof from broader protocol or service claims.
- `content/whitepapers/Privacy-Threat-Model.md` is the reason public developer reports should stay careful around secrets, exploit details, and disclosure scope.
