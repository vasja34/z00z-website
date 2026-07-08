# Repository Agent Rules and Guidance

- Use repository docs, planning files, and source code directly.
- Keep instructions local to this repository and avoid external documentation graph workflows.
- Validate changes with the repository's normal build, test, and review commands.

## Canonical Instruction Surfaces

- Primary live instruction roots are `./.github/skills/`, `./.github/prompts/`, `./.github/hooks/`, `./.github/agents/`, and `./.github/plugins/`.
- Use canonical `.github/*` paths directly. Do not rely on alias names, shim names, `.codex/*` mirrors, or cached prompt nicknames when a real path exists.
- Treat `./.codex/`, `./.github/gsd-local-patches/`, `./.github/deep-wiki-local-overrides/`, `./.agents/.install-backups/`, `$HOME/.codex/.tmp/`, `$HOME/.codex/plugins/cache/`, and `$HOME/.codex/vendor_imports/` as non-authoritative unless the task explicitly targets them.

## Project Shape

- There is no top-level `app/`; Next.js App Router source lives under `src/app/`.
- Route and layout source lives under `src/app/`.
- Shared application source lives under `src/`.
- Runtime-served assets live under `public/`.
- Project-level configuration lives under `config/`.
- Human-facing project docs live under `docs/`.
- Local runtime and debug logs live under `logs/`.
- Developer automation lives under `scripts/`.
- Canonical pentest source and orchestration live under `scripts/penetration/`.
- Pentest payloads, wrappers, manifests, and Docker runtime assets live under `tools/penetration/`.
- Generated machine output lives under `reports/`.
- Do not place React or TypeScript application source under `public/`.

## Token discipline

Use compact output by default.

Before producing long text, classify the task:

- simple: answer directly
- medium: short plan + concrete steps
- complex: summary first, then structured sections

For implementation work:

- Prefer code changes over prose.
- Do not explain unchanged code.
- Do not paste full files unless requested.
- Use paths and line references where possible.
- When tests fail, show only the failing command, error essence, and next action.

## Forbidden verbosity

Avoid:

- "Sure, here is..."
- restating the task
- generic caveats
- duplicate bullet points
- long background explanations
- full tutorials unless requested

## Expansion protocol

If more detail is needed, end with:

`EXPANDABLE: details available for <topic>.`

Do not expand unless the user asks.

## Init Workflow

At the start of every new session in this repository, run the `/z00z-chat-init`
skill before any planning, editing, review, or test work.

# Instructions for GSD

- Use the gsd-core skill when the user asks for GSD or uses a `gsd-*` command.
- Treat `/gsd-...` or `gsd-...` as command invocations and load the matching file from `.github/skills/gsd-*`.
- When a command says to spawn a subagent, prefer a matching custom agent from `.github/agents`.
- Do not apply GSD workflows unless the user explicitly asks for them.
- After completing any `gsd-*` command (or any deliverable it triggers: feature, bug fix, tests, docs, etc.), ALWAYS: (1) offer the user the next step by prompting via `ask_user`; repeat this feedback loop until the user explicitly indicates they are done.
<!-- /GSD Configuration -->
