---
title: "Get Started"
description: "Practical local setup and verification flow for contributing to the Z00Z docs repository."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# Get Started

> [!note]
> **Maturity:** `Live repo workflow`
>
> **Use this page when:** You need the shortest correct path from a fresh checkout to a verified documentation change in this repository.

The fastest way to get useful in this repo is to stop thinking of it as a placeholder and start treating it as a working documentation product. You are not booting a full protocol runtime here. You are working with a Next.js site, a whitepaper corpus, a Markdown rendering pipeline, and a verification flow that checks the current docs tree. That means the right onboarding path is short, concrete, and local.

## First Working Session

From the repository root, the normal contributor loop is:

```bash
npm install
npm run dev
npm run lint
npm run verify
```

Those commands are not a guess. `package.json` defines the primary scripts, and `scripts/verify.sh` shows that the bundled verification flow runs lint, search-coverage checks, and a production build. If your change only touches content, you still need to respect the whole path because broken links, malformed frontmatter, or invalid Markdown patterns can fail outside the page you edited.

Use the commands this way:

| Command | What it tells you |
| --- | --- |
| `npm install` | Installs the local dependencies required by the docs site |
| `npm run dev` | Starts the local development server for page-by-page review |
| `npm run lint` | Catches content and code issues early, before a full verify pass |
| `npm run verify` | Runs the repo's normal quality gate: lint, search coverage, and build |

## What You Are Actually Editing

Most work in this repo falls into one of four buckets:

| Area | Typical files | What to check after editing |
| --- | --- | --- |
| Content pages | `content/docs/**/*.md` | Frontmatter, links, structure, rendering, search coverage |
| Whitepaper-aligned terminology | `content/docs/**/*.md`, `content/whitepapers/*.md` | Source accuracy and maturity language |
| Site behavior | `src/app/`, `src/lib/`, `config/` | Lint plus full verify |
| Contributor workflow assets | `.github/`, `scripts/` | Rule accuracy and build compatibility |

If you are only changing a documentation page, start in `content/docs/`. If you are adjusting how Markdown renders, inspect `src/lib/content/markdown.ts`. If you are unsure whether a claim is safe, go to `content/whitepapers/` before adding new prose.

## A Safe Editing Sequence

This repo rewards a disciplined sequence:

1. Read the relevant page and its nearby navigation files.
2. Find the whitepaper passages that justify the claim you plan to add.
3. Edit the docs page.
4. Run `npm run lint` for fast feedback.
5. Run `npm run verify` before considering the change complete.

That order matters because Z00Z docs are not supposed to grow through confident invention. Many pages describe live protocol direction, target architecture, or current repo workflow. Those categories must stay visibly distinct. When a page mixes them carelessly, builders leave with the wrong mental model.

## What `npm run verify` Covers

The `verify` script is worth understanding because it is the operational truth for this repository.

| Verify step | Why it exists |
| --- | --- |
| Lint | Prevents obvious code and content regressions |
| Search coverage | Protects discoverability and navigation quality in the docs product |
| Production build | Ensures the site can actually render and ship |

This is also why pages in the developer family cite `npm run verify` instead of inventing a broader runtime validation story. In this repository, that command is a real, inspectable claim.

## Common Mistakes To Avoid

The biggest onboarding mistakes are conceptual, not technical:

| Mistake | Better move |
| --- | --- |
| Writing as if the full runtime lives here | Say explicitly when a page is corpus-grounded rather than locally implemented |
| Adding commands that are not in `package.json` or repo scripts | Stick to commands the current tree actually supports |
| Treating route copy as independent from the whitepaper corpus | Reconcile terminology with `content/whitepapers/` first |
| Shipping a docs rewrite after only reading one page | Check sidebar context, adjacent pages, and evidence links |

If you are using an AI assistant, also read [AI Agent Playbook](/docs/developers/ai-agent-playbook) before making large edits. The repo has explicit rules for safe rewrites, local evidence, and skill usage.

## A Good First Contribution

A strong first contribution in this repo usually looks like one of these:

1. Rewrite a stub page into reader-facing prose backed by the corpus.
2. Fix navigation drift between `_meta.yaml` and the live page set.
3. Tighten maturity wording so a target architecture claim is not mistaken for live code.
4. Improve a diagram or content pattern while keeping the source boundary honest.

Those are not cosmetic tasks. In a protocol project, the docs define what readers believe exists. Good onboarding means reducing false certainty, not merely increasing page count.

## Read Next

Open [AI Agent Playbook](/docs/developers/ai-agent-playbook) if an assistant is helping with the change, or move to [Rust Workspace](/docs/developers/workspace) if you need the structure of the docs repo before editing a specific subsystem page.

## Evidence and Further Reading

- `package.json` defines the current local scripts, including `dev`, `lint`, and `verify`.
- `scripts/verify.sh` shows that the repo verification path runs lint, search coverage, and a production build.
- `content/whitepapers/Main-Whitepaper.md` explains why documentation must distinguish live settlement behavior from target topology and surrounding service layers.
- `content/whitepapers/Corpus-Terminology-Reference.md` provides the canonical vocabulary that new builder-facing docs should follow.
