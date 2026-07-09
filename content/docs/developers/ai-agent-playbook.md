---
title: "AI Agent Playbook"
description: "Local operating rules for AI-assisted work in the Z00Z docs repository."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# AI Agent Playbook

> [!warning]
> **Maturity:** `Live repo instructions + active workflow rules`
>
> **Use this page when:** An AI coding agent will read, edit, verify, or review files in this repository.

AI-assisted work is useful in this repo only when the assistant behaves like a careful contributor, not like a speculative autocomplete engine. The local rules are strict for a reason: the repository combines human-facing docs, protocol whitepapers, workflow prompts, and verification scripts. A careless agent can easily produce polished but false implementation claims, overwrite important planning files, or cite local paths that do not exist. This playbook keeps the agent inside the evidence boundary.

## Operating Principle

The core rule is simple: **workspace evidence first, corpus evidence second, invention never**.

That means an agent should verify repo-specific claims against local files such as `package.json`, `scripts/verify.sh`, `content/docs/`, `content/whitepapers/`, `src/lib/content/markdown.ts`, and `.github/`. When a claim belongs to the protocol design rather than the docs product, the agent should justify it from the whitepaper corpus. If neither the repo nor the corpus supports the statement, the statement should not be shipped.

## Instruction Order

Before making substantial edits, an agent should read the local instruction surfaces in roughly this order:

1. Repository instructions such as `AGENTS.md`.
2. `.github/copilot-instructions.md` for operational rules.
3. Relevant skill files in `.github/skills/`.
4. Plan files under `.planning/` when the task is GSD-driven.
5. The target source file and adjacent navigation or summary files.

That order matters because task-specific plan rules can narrow what a safe edit looks like. A rewrite phase, for example, may require word-count bounds, exact evidence headings, or a review loop that goes beyond ordinary lint and build checks.

## Non-Negotiable Safety Rules

The repository exposes a few rules that should be treated as hard boundaries:

| Rule | Why it exists |
| --- | --- |
| Keep code, docs, comments, and commit content in English | Prevents mixed-language artifacts and keeps the public repo consistent |
| Use local repo files before external assumptions | The docs product already contains the authoritative evidence for many claims |
| Back up full rewrites of text-like files with `.bak` siblings | Protects planning and documentation work from destructive replacement |
| Avoid destructive deletion flows | Planning and source docs often carry work-in-progress context |
| Run the repo verification path before completion | Prevents polished edits from landing with broken navigation or build behavior |

For large GSD-driven tasks, a good agent also keeps a review log, records what changed, and stops only after repeated clean review passes.

## Practical Agent Loop

An effective local loop looks like this:

1. Read the current file and nearby context.
2. Extract the claims that need evidence.
3. Match each claim either to local repo files or to `content/whitepapers/`.
4. Edit with the smallest credible scope.
5. Run `npm run lint` and `npm run verify`.
6. Perform a workspace-first review pass before declaring the task done.

The review step matters because many failures in this repo are not syntax failures. They are scope failures. A page may build successfully while still implying that a runtime API, a wallet service, or a transport stack is already present locally. That kind of error is especially common in AI-generated drafts.

## Where Agents Commonly Fail

| Failure mode | Why it is dangerous here | Better behavior |
| --- | --- | --- |
| Treating the docs repo as the full product repo | Creates false implementation claims | Mark conceptual surfaces as conceptual and cite the corpus |
| Copying stale planning language into user-facing docs | Leaves scaffold headings and internal notes in published pages | Rewrite for readers, then verify against page requirements |
| Quoting non-existent local files | Produces plausible but unverifiable evidence | Check the path before using it |
| Skipping repeated review passes on large rewrites | Lets structural issues survive because lint is too shallow | Use a review loop with at least several distinct passes |

The best defense is deliberate skepticism. If a statement sounds too complete for the evidence you have, it probably is.

## Skills And Local Assets That Matter

This repository keeps prompt and skill logic under `.github/`. That makes the local instruction tree part of the implementation surface for AI-driven work.

| Surface | Typical use |
| --- | --- |
| `.github/skills/` | Task-specific operating procedures such as execution, review, diagrams, and versioning |
| `.github/prompts/` | Reusable review and planning prompts |
| `.planning/` | Phase plans, source matrices, summaries, and review logs |
| `scripts/verify.sh` | Canonical repo verification bundle |

When the task mentions a skill explicitly, the agent should read that skill before acting. When the task is a documentation rewrite, the agent should still inspect the plan and source matrix before editing. That is how the repo keeps automation aligned with human intent.

## End-Of-Cycle Discipline

AI-assisted work should end like human review work: with verification, an explicit status update, and a clear next step. In this repository the local workflow also includes a tone script, `./scripts/play_tone.sh`, when a user-facing interaction cycle is complete. The point is not theatrics. The point is to make sure the agent treats completion as a real checkpoint rather than drifting silently to the next assumption.

## Read Next

Move to [Rust Workspace](/docs/developers/workspace) for the repo structure, or return to [Get Started](/docs/developers/get-started) if you need the command path and verification flow first.

## Evidence and Further Reading

- `.github/copilot-instructions.md` defines the local English-only artifact rule, safe file-operation expectations, version-management guidance, and end-of-cycle tone requirement referenced on this page.
- `.github/skills/` and `.github/prompts/` are the live local automation surfaces that AI-assisted tasks are expected to follow.
- `content/whitepapers/Main-Whitepaper.md` and `content/whitepapers/Corpus-Terminology-Reference.md` explain why builder docs must keep protocol truth, service layers, and maturity claims clearly separated.
- `package.json` and `scripts/verify.sh` anchor the recommendation that agents finish with the current repo verification flow instead of speculative runtime commands.
