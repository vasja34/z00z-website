---
title: "Workspace"
description: "Structure map for the Z00Z docs repository, including content, rendering, configuration, and workflow boundaries."
difficulty: basic
icon: mdi:alpha-a-circle-outline
toc: true
---

# Workspace

> [!note]
> **Maturity:** `Live docs repo structure`
>
> **Use this page when:** You need to know where work belongs in this repository and how the docs, content, and workflow surfaces fit together.

The historical page name says "Rust Workspace," but the practical job of this page is broader and more honest: it is the structure map for the current Z00Z docs repository. The tree contains code, but its center of gravity is not a protocol runtime workspace. It is a documentation product with a content pipeline, a whitepaper corpus, repo-local automation, and a set of builder-facing pages that must stay aligned with what is actually present.

That distinction helps contributors choose the right evidence source. If your change is about rendering, routing, or content behavior, the answer usually lives in this repo. If your question is about final runtime implementation status of the broader protocol, the answer is more likely conceptual and should be grounded in the corpus rather than implied as local code.

## The Current Repository Shape

These top-level surfaces matter most during normal work:

| Path | Purpose |
| --- | --- |
| `src/app/` | Next.js App Router routes and layouts for the site |
| `src/` | Shared application code used by the docs product |
| `content/docs/` | Human-facing documentation pages |
| `content/whitepapers/` | Canonical protocol corpus and terminology sources |
| `public/` | Assets served at runtime |
| `config/` | Project-level configuration |
| `scripts/` | Local automation, including verification helpers |
| `.github/` | Prompts, skills, hooks, agents, and contributor rules |
| `.planning/` | Phase plans, matrices, summaries, and review logs |

This is enough structure to support real development work even without the full runtime. Contributors can change layout logic, Markdown behavior, search coverage, diagrams, copy, navigation, and planning assets directly here.

## How The Content Pipeline Fits Together

For most documentation tasks, the most important internal seam is the one between authored content and rendered output.

| Layer | What it owns |
| --- | --- |
| `content/docs/` | Markdown source for public documentation pages |
| `content/whitepapers/` | Long-form source material and canonical terminology |
| `src/lib/content/markdown.ts` | Markdown parsing, plugin setup, Mermaid handling, and rendering behavior |
| `src/app/` and related UI code | Presentation, navigation, and page delivery |

This means a contributor working on docs quality should think in two passes. First ask whether the content is conceptually correct. Then ask whether the rendering layer will display that content correctly. A page can be source-accurate and still fail because of broken frontmatter, malformed syntax, or unsupported patterns.

## Choosing The Right Place For A Change

Use this quick decision table:

| If you need to change... | Start here |
| --- | --- |
| Page wording, structure, or citations | `content/docs/` |
| Protocol terminology or concept framing | `content/whitepapers/` first, then the affected docs page |
| Markdown rendering behavior or supported syntax | `src/lib/content/markdown.ts` |
| Navigation order inside a section | The section's `_meta.yaml` file |
| Verification or automation behavior | `package.json` and `scripts/` |
| Workflow or agent behavior | `.github/` |

This page is also the right place to reset expectations when a reader assumes there must be a local runtime module somewhere in the tree. Often there is not, and the correct edit is to clarify the page boundary rather than search for a missing implementation that this repo never claimed to contain.

## What "Workspace" Means Here

In this repository, "workspace" should be read in a contributor sense rather than a narrow language-tooling sense. It is the working surface that combines:

1. The docs product itself.
2. The source whitepapers that define protocol meaning.
3. The workflow assets that constrain how changes are planned, reviewed, and verified.

That is why pages in this developer family often mention both repo-local paths and corpus sources. The docs site is where the explanation ships. The whitepapers are where many of the authoritative concepts are defined. Both belong to the builder workspace even though only one is executable application code.

## Boundaries That Prevent Drift

The most useful guardrails are simple:

| Boundary | Why it matters |
| --- | --- |
| Local code justifies site and workflow claims | Prevents invented implementation detail |
| Whitepapers justify protocol language and future direction | Prevents pages from becoming unsupported opinion |
| Sidebar files define current-tree navigation truth | Prevents dead-route drift |
| Verification scripts define completion, not personal habit | Keeps contributors on the same quality gate |

When these boundaries blur, the result is usually one of two failures: either a page becomes too vague to help builders, or it becomes too specific to be truthful. Good workspace discipline avoids both.

## Practical Reading Strategy

If you are new to the repo, read the workspace this way:

1. Inspect `content/docs/` and the relevant `_meta.yaml` file for page structure.
2. Open `content/whitepapers/` for the concepts behind the page.
3. Check `src/lib/content/markdown.ts` if the page uses advanced Markdown or diagrams.
4. Finish with `package.json` and `scripts/verify.sh` so you know how completion is judged.

That sequence will answer most contributor questions without requiring guesswork.

## Read Next

Continue to [Core Protocol API](/docs/developers/core) if you need the protocol object vocabulary next, or go back to [AI Agent Playbook](/docs/developers/ai-agent-playbook) if the main question is workflow discipline rather than repo layout.

## Evidence and Further Reading

- `src/app/`, `src/`, `content/docs/`, `content/whitepapers/`, `config/`, `public/`, and `scripts/` are the current live repo surfaces summarized on this page.
- `src/lib/content/markdown.ts` is the clearest local evidence for the Markdown and Mermaid rendering boundary described here.
- `package.json` and `scripts/verify.sh` define the actual workflow checks that contributors should treat as canonical completion gates.
- `content/whitepapers/Main-Whitepaper.md` and `content/whitepapers/Corpus-Terminology-Reference.md` explain why the docs workspace must keep protocol meaning and service or implementation maturity visibly separate.
