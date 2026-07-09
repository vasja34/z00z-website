---
title: "Verification And Tests"
description: "Builder guide to the current repo verification path, deeper review surfaces, and honest quality claims."
difficulty: intermediate
icon: mdi:alpha-b-circle-outline
toc: true
---

# Verification And Tests

> [!note]
> **Maturity:** `Live docs-repo verification workflow`
>
> **Use this page when:** You need to know which validation steps are real in this repository, which deeper checks exist as supporting tools, and which broader runtime gates are not proven locally here.

Verification is where Z00Z docs either stay credible or quietly become marketing. A privacy-first protocol cannot afford casual quality claims, especially when the current repository is a docs product rather than the entire runtime. The right verification story in this tree is therefore concrete and modest: say exactly which checks exist, run them consistently, and avoid borrowing validation claims from a different repository or an older plan.

## The Current Completion Gate

For most work in this repository, the central quality gate is:

```bash
npm run verify
```

That command is defined in `package.json` and implemented by `scripts/verify.sh`. Today it runs the local lint step, the search-coverage check, and a production build. Those are real, inspectable checks. They are the correct baseline for documentation, rendering, navigation, and workflow changes in this repo.

## The Practical Validation Ladder

Use the local checks in increasing order of cost:

| Level | Command or surface | Purpose |
| --- | --- | --- |
| Fast | `npm run lint` | Catch local code and content issues early |
| Normal | `npm run verify` | Run the repo's bundled completion gate |
| Focused | `scripts/verify-search-coverage.mjs` via the verify flow | Protect search discoverability across docs content |
| Specialized | `scripts/penetration/` tool runners | Support optional security-oriented review where the task actually warrants it |

This ladder keeps everyday work fast while still giving reviewers a path to deeper inspection when the change touches riskier surfaces.

## What The Specialized Security Scripts Are For

The repository also contains several scripts under `scripts/penetration/`. Their existence is useful, but it should be explained carefully.

| Surface | Why it exists |
| --- | --- |
| Local DAST and pentest runners | Help exercise selected security-review workflows |
| Source and secret scanning helpers | Support deeper audit passes on relevant changes |
| Scope and artifact validators | Keep security-oriented automation disciplined |

These scripts are not the default completion gate for every docs change. They are supporting tools for tasks that actually justify a broader security review. A good verification page tells readers when to escalate instead of pretending one giant command is always appropriate.

## What This Repo Can Honestly Claim

The current repository can honestly claim:

| Honest claim | Why it is safe |
| --- | --- |
| The docs product can be linted, search-checked, and built locally | The commands and scripts are present here |
| Contributor workflow rules can be reviewed against live `.github/` assets | The prompts and skills are part of the repo |
| Builder-facing pages can be checked for evidence, maturity wording, and navigation drift | Those pages are local content files |

The current repository should not claim:

| Not safe to claim | Why |
| --- | --- |
| Full runtime test coverage for every subsystem in the broader protocol | The runtime implementation is not fully local here |
| Cargo-based release validation for non-local crates | Those commands would belong to an implementation repo, not this docs tree |
| Fuzzing, formal proofs, or performance benchmarks for absent subsystems | Without local evidence, those become empty promises |

## Verification Failure Modes

Most verification failures in this repo are not dramatic. They are slow credibility leaks:

| Failure mode | Example |
| --- | --- |
| Borrowed commands | A page cites a runtime validation flow that this repo cannot run |
| Overstated maturity | A conceptual page is described like a fully implemented subsystem |
| Unreviewed documentation drift | Navigation, diagrams, or terminology diverge across related pages |
| Shallow completion | A large rewrite passes build checks but was never critically reviewed for source accuracy |

That last case matters enough that repeated review loops are valuable for major documentation rewrites. Lint is necessary, but it is not the whole verification story.

## A Good Verification Habit

For substantial work in this repo, use this habit:

1. Run `npm run lint` while iterating.
2. Finish with `npm run verify`.
3. Re-check evidence claims against local files or `content/whitepapers/`.
4. Use deeper review or security scripts only when the task surface justifies them.

This keeps the quality bar high without importing non-local assumptions.

## Read Next

Return to [API Reference](/docs/developers/api-reference) if you need the broader reference map again, or go back to [Get Started](/docs/developers/get-started) if you want the shortest contributor command path for this repository.

## Evidence and Further Reading

- `package.json` defines the local `lint`, `verify`, and related workflow commands referenced on this page.
- `scripts/verify.sh` and `scripts/verify-search-coverage.mjs` are the current repo-local validation surfaces for docs and site delivery.
- `scripts/penetration/` contains the deeper, task-specific security and audit helpers mentioned as specialized review surfaces.
- `content/whitepapers/Main-Whitepaper.md`, `content/whitepapers/Privacy-Threat-Model.md`, and `content/whitepapers/Proof-of-Useful-Work.md` reinforce why high-signal evidence and bounded review claims matter in a privacy-first system.
