---
title: "MD Plugins Test"
description: "Curated parser demo for the first mdit-driven documentation route."
toc: true
---

# MD Plugins Test

This page intentionally exercises the baseline Markdown parser profile with a curated set of `mdit-plugins`.

## Abbreviations

*[HTML]: HyperText Markup Language
*[RSC]: React Server Components

The HTML route shell and RSC data flow should both remain predictable.

## Alert Blocks

> [!note]
> Header theme selection is global and persists locally with ==semantic alert styling==.

> [!important]
> Domain routing and content hierarchy remain folder-driven to keep maintenance ==non-programmer friendly==.

> [!tip]
> The sidebar is route-aware and can be collapsed without breaking the reading flow or ==domain switcher==.

> [!warning]
> Raw HTML pages are trusted repo content only and still pass through a ==safety filter==.

> [!caution]
> Theme polish is unfinished until code highlighting and alert visuals stay ==consistent across all themes==.

## Alignment

:::: center

### Centered Reading Moment

The docs shell should feel editorial, not like a reskinned admin panel.

::::

## Attributes

Inline `code`{.inline-demo} and ![favicon =42x42](/favicon.ico){.demo-favicon} can receive direct attributes.

## Custom Container

::: warning
This block comes from `@mdit/plugin-container` and is styled as a deliberate demo container.
:::

## Definition List

Parser
: The file-backed content renderer for `.md` and `.html`.

Theme switcher
: A client island that updates `data-theme` and persists the chosen daisyUI theme.

## Figure and Image Helpers

![Markdown It Plugins =210x](https://mdit-plugins.github.io/logo.svg "mdit-plugins")

## Embed

{% youtube dQw4w9WgXcQ %}

## Included File

<!-- @include: ./_support/another-file.md -->

## Snippet Import

<<< ./_support/my-code.js

## Math With KaTeX

Inline math: $e^{i\pi} + 1 = 0$

$$
\sum_{n=1}^{5} n = 15
$$

## Mark, Insertions, Subscript, Superscript

This is ==highlighted==, this is ++inserted++, water is H~2~O, and E = mc^2^.

## Stylize and Spoiler

==blue:theme-aware accent text==

The final shell is !!not!! meant to feel like a stock dashboard.

## Tabs

::: tabs

@tab:active Docs
The docs domain proves folder-driven routing and content parsing.

@tab Explorer
The future explorer domain will use the same shell with app-first routes.

@tab Wallet
The wallet surface will remain inside the same visual system with different content density.

:::

## Task List

- [x] File-backed routing
- [x] Raw HTML rendering
- [x] Theme switching
- [ ] Search integration

## Mermaid Diagram

@mermaidstart
flowchart LR
  A[content/] --> B[Markdown parser]
  B --> C[Shared docs shell]
  C --> D[Theme switcher]
  C --> E[Sidebar routing]
@mermaidend

## Collapsible Details

+++ Click to reveal the implementation note
The current demo keeps application source in `src/`, content in `content/`, and human-editable config in `config/`.
+++
