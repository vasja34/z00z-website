---
title: Z00Z Website Specification
version: 1.0
date_created: 2026-07-08
last_updated: 2026-07-08
owner: Z00Z Website
tags:
  - design
  - architecture
  - nextjs
  - mdx
  - multi-domain
---

# Z00Z Website Specification

Z00Z Website is a single Next.js 16 application shell that serves multiple public-facing domains with one visual system, one routing model, and one editor-friendly authoring workflow. The target experience combines the structural clarity of Sui documentation, the concise editorial density of Hyperliquid and Next.js docs, and the configurable theme behavior seen in Sovereign docs, while remaining visually branded for Z00Z rather than cloning any reference site.

## 🎯 1. Purpose & Scope

This specification defines the target product, information architecture, authoring model, layout system, theme system, and implementation constraints for `z00z-website`.

**In scope**

- A shared application shell for `docs`, `wiki`, `explorer`, `network`, `tools`, `aggregators`, `validators`, `watchers`, and `wallet`
- A global dropdown switcher between domains
- Folder-driven hierarchy for content and interactive pages
- Markdown-first and HTML-capable authoring with extension support
- A collapsible left navigation model
- A configurable theme preset system
- YAML-driven configuration for domains, themes, search, and content behavior
- A recommended Next.js App Router structure inside `src/app/`
- Ecme-based component reuse strategy
- A maintenance flow that does not require programming for routine content updates

**Out of scope**

- Final copywriting for every page
- Explorer backend and indexer APIs
- Wallet business logic and authentication flows
- Search vendor selection and analytics vendor selection
- CMS or database-backed editing in the initial version

## 📚 2. Definitions

| Term | Definition |
| --- | --- |
| Domain | One top-level product surface such as `docs` or `explorer`, usually mapped to a subdomain in production |
| Shared Shell | The persistent layout system composed of header, domain switcher, left navigation, content canvas, and optional right rail |
| Content Page | A route backed by a file in `content/`, authored primarily in Markdown or trusted HTML |
| Application Page | A route implemented with `page.tsx` and rendered as an interactive React/Next.js page |
| Domain Registry | A single configuration source that defines available domains, labels, theme defaults, route behavior, and host mapping |
| Theme Preset | A named bundle of semantic color and surface tokens applied to the shell and page content |
| Folder-Driven IA | Information architecture where content directory structure defines URL structure and nested sidebar hierarchy |
| Content Repository | The `content/` tree that stores editor-owned `.md`, `.html`, and optional advanced `.mdx` files |
| Config Surface | Human-editable YAML files under `config/` and local `_meta.yaml` files inside `content/` |
| Parser Profile | The allowlisted Markdown/HTML processing rules and plugins used to render file-backed content |

## 🧭 3. Product Model

Z00Z Website should behave as one platform with multiple domain personalities rather than multiple disconnected sites.

### ✅ 3.1 Domain List

The initial domain switcher shall expose the following domains:

- `docs`
- `wiki`
- `explorer`
- `network`
- `tools`
- `aggregators`
- `validators`
- `watchers`
- `wallet`

### ✅ 3.2 Domain Modes

| Domain | Primary Mode | Notes |
| --- | --- | --- |
| `docs` | Content-first | Canonical product and developer documentation |
| `wiki` | Content-first | Research notes, design rationale, knowledge base |
| `explorer` | App-first | Live data, account, transaction, and block views |
| `network` | Hybrid | Status, topology, metrics, and technical explanation |
| `tools` | Hybrid | Tool catalog, guides, and interactive utilities |
| `aggregators` | Hybrid | Directory, metrics, and comparison surfaces |
| `validators` | Hybrid | Validator info, dashboards, and operator docs |
| `watchers` | Hybrid | Monitoring guides and live system views |
| `wallet` | App-first | Wallet-oriented product pages and support flows |

### ✅ 3.3 Shared Product Principle

All domains shall:

- use the same base shell
- inherit the same token system
- share the same theme picker behavior
- share the same domain switcher pattern
- preserve a common quality bar for accessibility and responsiveness

Each domain may still customize:

- default theme preset
- sidebar source and density
- content width
- availability of the right table of contents rail
- page templates for content-first versus app-first screens

## 🖥️ 4. Visual Direction and UX Intent

The visual direction shall be inspired by the reference products without copying them.

### ✅ 4.1 Reference Pattern Synthesis

| Reference | Pattern to borrow | Pattern not to copy blindly |
| --- | --- | --- |
| [Sui Docs](https://docs.sui.io/develop/sui-architecture) | Dark top bar, left technical sidebar, domain-like dropdown behavior | Exact branding, exact spacing, identical typography |
| [Hyperliquid Docs](https://hyperliquid.gitbook.io/hyperliquid-docs) | Dense technical reading flow and compact information hierarchy | GitBook visual defaults |
| [Next.js Docs](https://nextjs.org/docs) | App Router clarity, MDX-friendly docs behavior, content organization discipline | Generic Next.js visual identity |
| [Sovereign Docs](https://docs.sovereign.xyz) | Theme preset switcher pattern with multiple named palettes | Exact palette names and exact implementation |

### ✅ 4.2 Visual Character

The intended Z00Z shell should feel:

- technical
- calm
- premium
- dense enough for serious documentation
- flexible enough for explorer and wallet screens

The visual system should avoid:

- generic dashboard-template styling
- purple-on-white startup defaults
- bloated hero sections on documentation pages
- over-decorated animations that reduce reading speed

### ✅ 4.3 Core Layout Behavior

- The header shall use a dark surface for strong cross-domain identity.
- The main reading surface shall stay bright and high-contrast by default unless a dark preset is selected.
- The left navbar shall be collapsible on desktop and drawer-based on smaller breakpoints.
- The current domain context shall remain visible at all times.
- The right rail shall be optional and enabled only when it improves navigation.

## 🏗️ 5. Information Architecture

Folder structure shall be the primary source of content URL hierarchy and navigation hierarchy.

### ✅ 5.1 IA Rules

- For content-first and hybrid domains, `content/<domain>/` shall be the primary source of file-backed URLs and sidebar hierarchy.
- `src/app/` shall own the shell, route handlers, explicit application routes, and thin catch-all renderers for file-backed content.
- Child folders in `content/` shall create nested sidebar structure automatically.
- Group-only folders may exist without a page file; they shall appear as non-clickable section labels derived from folder names or `_meta.yaml`.
- Titles shall come from frontmatter first, then `_meta.yaml`, then derived file or folder names.
- Dynamic React routes shall be excluded from the public sidebar by default unless explicitly surfaced through config.
- Explicit React routes in `src/app/` shall take precedence over file-backed content when a path collision exists.

### ✅ 5.2 YAML-Assisted Content-First IA Principle

Use `content/` as the primary authoring surface for standard pages and `config/` as the primary maintenance surface for routable configuration. Do not require editors to create or modify route files for normal documentation work.

This is the recommended model because it keeps:

- editor-owned content in `content/`
- human-editable configuration in YAML
- React and TypeScript source in `src/`
- route ownership centralized in a small number of shell and catch-all route files
- maintenance accessible to non-programmers for day-to-day updates

### ✅ 5.3 Example Structure

```text
content/
  docs/
    _meta.yaml
    getting-started/
      _meta.yaml
      intro.md
      installation.html
    architecture/
      consensus.md
  wiki/
    research/
      confidential-transfers.md
config/
  site.yaml
  domains.yaml
  themes.yaml
  search.yaml
  content-pipeline.yaml
src/
  app/
    (domains)/
      layout.tsx
      [domain]/
        [[...slug]]/
          page.tsx
      explorer/
        block/
          [height]/
            page.tsx
        account/
          [address]/
            page.tsx
      network/
        status/
          page.tsx
  components/
  lib/
    content/
    domains/
    search/
    theme/
```

## ✍️ 6. Content Authoring Model

Z00Z Website must support a documentation workflow that is easy to maintain in Git, easy to reason about from the directory tree, and usable by editors who are not programmers.

### ✅ 6.1 Required Authoring Formats

- `.md` for standard authored content pages
- `.html` for ready-made imported or hand-authored static pages
- optional `.mdx` for engineer-owned advanced pages that genuinely require React components
- `_meta.yaml` for folder-level navigation and presentation overrides
- YAML config files under `config/` for global behavior
- `page.tsx` for interactive pages and catch-all content renderers
- `layout.tsx` for shared shells or domain-specific layout overrides
- colocated route helpers under private folders such as `_components/` or `_lib/`

### ✅ 6.2 Markdown and HTML Capability Set

The site shall support:

- standard Markdown
- GitHub Flavored Markdown
- frontmatter metadata
- ready-made HTML pages
- controlled React augmentation only where truly needed
- syntax-highlighted code blocks
- code block titles
- line highlighting
- callouts and admonitions
- tabs for alternate code or network examples
- footnotes, task lists, definition lists, and inline semantic formatting
- image sizing, lazy loading, and figure patterns
- automatic heading anchors
- table of contents generation
- optional diagrams such as Mermaid and Kroki-backed diagrams

### ✅ 6.3 Frontmatter Contract

Each Markdown or HTML content page should support the following frontmatter fields:

```yaml
title: "Bridge Overview"
description: "High-level explanation of bridge architecture."
order: 20
sidebar_label: "Bridges"
icon: "bridge"
layout: "content"
toc: true
draft: false
hide_in_nav: false
search: true
theme: "night"
keywords:
  - bridge
  - interoperability
```

### ✅ 6.4 Authoring Rules

- Folder names define slugs.
- Frontmatter defines page-level labels, metadata, and ordering.
- `_meta.yaml` defines folder-level labels, ordering, icons, collapsed state, and visibility.
- The content system shall not require manual nav duplication for every page.
- Monolithic YAML navigation files that duplicate every page are discouraged as the primary long-term maintenance pattern.
- MDX pages, when used, may import approved source components from `src/`.
- Runtime assets referenced by docs must live under `public/`.
- YAML config files shall be schema-validated with human-readable errors during development and build.
- If MDX is enabled later for advanced routes, shared MDX component registration shall follow a single controlled component map.

### ✅ 6.5 TypeScript-First Source Policy

- New source files shall default to TypeScript: `.ts` and `.tsx`.
- New React components, route files, utilities, domain registry modules, theme modules, parser modules, and config loaders shall use TypeScript whenever the framework supports it.
- JavaScript files shall be introduced only for concrete ecosystem or toolchain constraints that cannot be solved reasonably with TypeScript.
- Any Ecme-derived production code adopted into the website should be migrated to TypeScript during integration rather than copied as raw JavaScript.

### ✅ 6.6 Content Trust and Rendering Policy

- Markdown shall be treated as content, not as an unrestricted execution surface.
- Raw HTML embedded inside Markdown shall be disabled by default unless a reviewed sanitization strategy explicitly enables it.
- Standalone `.html` pages are allowed as trusted repository content, but they shall still pass through an HTML policy that blocks scripts, inline event handlers, and unsafe embeds by default.
- React components exposed to file-backed content shall come from a controlled allowlist under `src/`.
- If MDX is introduced later, it shall use a controlled component map rather than unbounded imports from arbitrary directories.
- If externally sourced Markdown or HTML is introduced later, the rendering pipeline must sanitize or transform that content before output.

### ✅ 6.7 YAML Configuration Surfaces

Routine maintenance shall be possible by editing content files and a small set of YAML files.

Recommended configuration ownership:

- `config/site.yaml`: brand metadata, canonical URLs, social metadata defaults
- `config/domains.yaml`: domain list, hostnames, default paths, domain modes, shell behavior
- `config/themes.yaml`: approved presets, labels, domain defaults, allowed per-domain theme lists
- `config/search.yaml`: search scopes, weights, keyboard shortcuts, result caps
- `config/content-pipeline.yaml`: enabled parser plugins, code-highlighting strategy, diagram support, HTML policy flags
- `content/**/_meta.yaml`: local folder title, order, icon, collapsed state, visibility, and optional landing-page selection

Example folder-level metadata:

```yaml
title: "Getting Started"
icon: "rocket"
collapsed: false
order:
  - intro
  - installation
  - first-transaction
```

### ✅ 6.8 mdit-plugins Primary Extension Profile

The initial parser profile shall be `mdit-plugins`-first. Official `@mdit/*` plugins and the `mdit-plugins` ecosystem shall be the primary source for Markdown extensions.

`markdown-it` itself remains the underlying parser engine, and non-`mdit` plugins from the broader `markdown-it` ecosystem may be used only as fallback when the required capability is missing, materially weaker, or not maintained in the `mdit-plugins` set.

| Category | Plugins or capability | Status | Notes |
| --- | --- | --- | --- |
| Core rendering | `markdown-it` engine, linkify, typographer, frontmatter parsing | Required engine | Base parser engine under the `mdit-plugins` extension profile |
| Navigation aids | `@mdit/plugin-anchor`, `markdown-it-toc-done-right` | Required | Prefer `@mdit/plugin-anchor`; keep TOC on the broader `markdown-it` side until an `mdit`-native replacement is justified |
| Editorial blocks | `@mdit/plugin-alert`, `@mdit/plugin-container`, `@mdit/plugin-attrs`, `@mdit/plugin-align`, `markdown-it-collapsible` | Required | Prefer `@mdit/*`; keep `markdown-it-collapsible` only as fallback for collapsible details behavior |
| Reading semantics | `@mdit/plugin-footnote`, `@mdit/plugin-tasklist`, `@mdit/plugin-dl`, `@mdit/plugin-abbr`, `@mdit/plugin-mark`, `@mdit/plugin-ins`, `@mdit/plugin-sub`, `@mdit/plugin-sup` | Required | Editorial richness without custom React |
| Tabs and comparison UI | `@mdit/plugin-tab` | Required | Alternate network, language, or CLI examples |
| Media helpers | `@mdit/plugin-figure`, `@mdit/plugin-img-lazyload`, `@mdit/plugin-img-size`, `@mdit/plugin-img-mark`, `@mdit/plugin-embed`, `@mdit/plugin-icon` | Default-on | Keep docs expressive without page-specific code |
| Reuse helpers | `@mdit/plugin-include`, `@mdit/plugin-snippet` | Opt-in | Must be restricted to project-owned content paths |
| Math | `@mdit/plugin-katex` or `@mdit/plugin-mathjax` | Opt-in | Choose one primary renderer per release, not both in active UI by default |
| Diagrams | Mermaid via `@mdit/plugin-uml`, `@mdit/plugin-plantuml`, `@kazumatu981/markdown-it-kroki` | Opt-in | Prefer `@mdit` diagram plugins first; keep Kroki as external fallback where remote rendering is needed |
| Interactive editorial patterns | `@mdit/plugin-demo`, `@mdit/plugin-spoiler`, `@mdit/plugin-stylize`, `@mdit/plugin-ruby`, `@mdit/plugin-emoji`, `@mdit/plugin-layout` | Later or selective | Use only where they materially improve docs quality |

Plugin enablement shall be controlled centrally through `config/content-pipeline.yaml`, not by scattering parser decisions across route files.

Before adding any new non-`mdit` Markdown plugin, the implementation shall first verify that no official `mdit-plugins` package already provides the needed capability.

Supporting parser utilities should include `gray-matter` for frontmatter extraction, `cheerio` for HTML heading or TOC extraction, and a typed YAML parser for config loading.

Example parser configuration:

```yaml
markdown:
  anchor: true
  toc: true
  tabs: true
  footnotes: true
  include: false
  snippet: false
diagrams:
  mermaid: true
  kroki: false
  plantuml: false
code:
  engine: "highlightjs"
  light_theme: "github"
  dark_theme: "night-owl"
html:
  allow_local_styles: true
  allow_scripts: false
  allow_remote_embeds: "allowlist-only"
```

### ✅ 6.9 HTML Page Policy

- The system shall accept ready-made `.html` pages inside `content/`.
- HTML pages should use semantic HTML structure consistent with technical documentation: `header`, `nav`, `main`, `article`, `section`, `aside`, and `footer` where appropriate.
- HTML pages shall not be allowed to execute arbitrary JavaScript.
- Inline event handlers such as `onclick` and remote script tags shall be blocked by policy.
- Local styles may be supported, but the renderer should isolate them with a scoped container or Shadow DOM strategy when necessary.
- HTML pages that are visually incompatible with the shared shell shall be normalized or rejected rather than silently shipped.

### ✅ 6.10 Syntax Highlighting Strategy

- File-backed Markdown pages should use server-side syntax highlighting through the Markdown renderer pipeline.
- `highlight.js` or an equivalent server-side highlighter is recommended for the initial Markdown parser because it keeps the base content experience simple and bundle-light.
- React-owned interactive code examples may use `react-syntax-highlighter`, but preferred builds are `PrismLight` or `PrismAsyncLight` rather than heavy all-language defaults.
- Code theme selection shall come from YAML configuration and remain visually aligned with the active shell theme.

## 🧩 7. Shared Shell Specification

The shared shell is the central product decision in this specification.

### ✅ 7.1 Header

The header shall contain:

- Z00Z brand mark and wordmark
- current domain label
- global domain switcher dropdown
- search entrypoint
- theme switcher
- optional wallet or app actions for relevant domains

### ✅ 7.2 Domain Switcher

The domain switcher shall:

- be visible in the header on every domain
- list all supported domains with labels and short descriptions
- highlight the current domain
- support keyboard navigation
- support quick filtering when the domain list grows
- preserve an equivalent path when possible
- fall back to the target domain home when the current path has no equivalent

### ✅ 7.3 Left Navigation

The left navbar shall:

- be persistent on desktop
- collapse to an icon or narrow state on desktop
- become an overlay drawer on tablet and mobile
- reflect folder-driven hierarchy
- persist collapse state per user
- allow deeper nesting for documentation-heavy domains

### ✅ 7.4 Right Rail

The right rail may contain:

- on-page table of contents
- quick anchor links
- contextual tools for explorer and wallet surfaces

The right rail shall be disabled on domains or viewports where it harms focus.

### ✅ 7.5 Content Canvas Variants

| Variant | Intended usage |
| --- | --- |
| `content` | Standard docs and wiki pages with comfortable reading width |
| `wide` | Mixed docs and dashboards |
| `app` | Explorer, network, wallet, and other data-heavy pages |

### ✅ 7.6 Search and Discovery

The search entrypoint shall be treated as a first-class product feature, not a cosmetic header icon.

Required behavior:

- open from the header on every domain
- support keyboard shortcut discovery such as `⌘K` and `Ctrl+K`
- default to the current domain scope with an option to broaden scope later
- index titles, descriptions, headings, and relevant frontmatter fields for content-first domains
- support entity or record search for app-first domains such as `explorer` when those data surfaces exist
- preserve keyboard accessibility and visible focus states

### ✅ 7.7 Semantic Structure and Accessibility

- The shared shell shall expose meaningful landmarks: `header`, `nav`, `main`, and `aside`.
- Content pages should render their primary body inside an `article` region when appropriate.
- The left navigation shall have a clear accessible name.
- Search, theme switching, and domain switching controls shall have visible labels or accessible text.
- The shell shall avoid `div`-only structural markup when a semantic element is available and appropriate.

## 🎨 8. Theme System

The site shall support a token-driven theme preset system similar in user experience to the one seen on Sovereign docs.

### ✅ 8.1 Theme Goals

- allow users to switch presets from the header
- persist the chosen preset across reloads
- preserve accessibility contrast across presets
- allow domains to define a default preset without preventing user override
- avoid hard-coding colors per page

### ✅ 8.2 Recommended Initial Presets

The theme picker should expose a curated set rather than the entire daisyUI catalog.

Recommended initial IDs:

- `light`
- `corporate`
- `fantasy`
- `dark`
- `night`
- `black`

These presets map directly to curated daisyUI themes. Do not expose a long uncurated theme list in the initial product.

### ✅ 8.2.1 Initial Domain Theme Policy

- The initial product shall use one shared `allowed_themes` list across all domains.
- Domain-level differentiation shall happen through `default_theme`, not through per-domain theme whitelists.
- If a domain later needs a restricted theme subset, that decision shall be explicit and documented, not introduced ad hoc.

### ✅ 8.3 Theme Token Ownership

Theme tokens shall be owned in source, not in runtime asset folders.

Recommended ownership:

- approved theme definitions in `config/themes.yaml`
- semantic token layers in `src/app/globals.css`
- optional theme preset maps and adapters in `src/lib/theme/` or `src/config/theme/`
- theme state in source code under `src/`

Example theme config:

```yaml
- id: light
  label: "Light"
  source: "daisyui"
  default_for: []
- id: dark
  label: "Dark"
  source: "daisyui"
  default_for:
    - docs
- id: night
  label: "Night"
  source: "daisyui"
  default_for:
    - explorer
```

### ✅ 8.4 Token Categories

Each preset shall define at least:

- background
- panel
- foreground
- muted text
- border
- accent
- accent hover
- focus ring
- code block background
- success, warning, and error surfaces

### ✅ 8.5 Typography and Theme Delivery

- Production typography shall be delivered through `next/font`.
- The final product shall not rely on the default browser sans stack as the intended branded typography system.
- Theme presets should be applied through a stable attribute contract such as `data-theme`, consistent with daisyUI theming behavior.
- Theme presets shall style both application chrome and documentation content, including code blocks, link states, callout surfaces, and embedded parser UI such as tabs and collapsibles.
- Theme switching shall respect user preference persistence and `color-scheme` behavior where applicable.
- DaisyUI may be used as a theme token source and utility layer, but the final palette system shall remain Z00Z-curated and semantically named.

## ⚙️ 9. Technical Architecture

### ✅ 9.1 Route Root

This repository uses `src/app/`, not a top-level `app/` directory. All new route work shall follow that convention, but standard authored content shall live in `content/` rather than being spread across route files.

### ✅ 9.2 TypeScript Preference

The implementation shall be TypeScript-first across the application wherever Next.js and the surrounding tooling support it.

This includes:

- route files such as `page.tsx`, `layout.tsx`, `loading.tsx`, and `error.tsx`
- shared modules under `src/`
- domain configuration and navigation logic
- theme state and token mapping helpers
- parser modules and optional advanced MDX support files

JavaScript should be treated as an exception surface, not the default authoring language.

### ✅ 9.3 Server and Client Component Policy

The architecture shall follow a server-first rendering model.

Required rules:

- Server Components are the default for routes, layouts, content rendering, and data-fetching surfaces.
- Client Components shall be introduced only for browser APIs, interactive state, event handling, or client-only libraries.
- Broad route-level `'use client'` boundaries are prohibited unless the route is genuinely app-like and cannot be decomposed further.
- Interactive shell features such as dropdowns, drawers, and theme controls should be implemented as narrow client islands inside a server-owned shell.
- Server Components shall not fetch the project's own Route Handlers when shared modules can be called directly.

### ✅ 9.4 Production Host Strategy

The production model should use subdomains:

- `docs.<host>`
- `wiki.<host>`
- `explorer.<host>`
- `network.<host>`
- `tools.<host>`
- `aggregators.<host>`
- `validators.<host>`
- `watchers.<host>`
- `wallet.<host>`

Recommended behavior:

- production hostnames map to domain folders through `proxy.ts` or equivalent host-based routing logic aligned with current Next.js App Router conventions
- local development falls back to path prefixes such as `/docs/*` and `/wiki/*`
- content-backed routes should resolve through a shared catch-all content renderer, while explicit app routes stay directly implemented in `src/app/`

### ✅ 9.5 Domain Registry Contract

```ts
type DomainId =
  | "docs"
  | "wiki"
  | "explorer"
  | "network"
  | "tools"
  | "aggregators"
  | "validators"
  | "watchers"
  | "wallet";

type DomainConfig = {
  id: DomainId;
  label: string;
  description: string;
  mode: "content" | "hybrid" | "app";
  homePath: string;
  contentRoot?: string;
  hostnames: string[];
  defaultTheme: string;
  allowedThemes: string[];
  defaultCanvas: "content" | "wide" | "app";
  showToc: boolean;
  routeStrategy: "content-catchall" | "explicit-app" | "hybrid";
};
```

Example `config/domains.yaml`:

```yaml
- id: docs
  label: "Docs"
  description: "Canonical Z00Z documentation"
  mode: content
  home_path: /docs
  content_root: content/docs
  hostnames:
    - docs.z00z.io
  default_theme: dark
  allowed_themes: &shared_allowed_themes
    - light
    - corporate
    - fantasy
    - dark
    - night
    - black
  default_canvas: content
  show_toc: true
  route_strategy: content-catchall

- id: wiki
  label: "Wiki"
  default_theme: corporate
  allowed_themes: *shared_allowed_themes
```

### ✅ 9.6 Shared Layout Strategy

Recommended structure:

```text
content/
  docs/
  wiki/
  network/
config/
  domains.yaml
  themes.yaml
  search.yaml
  content-pipeline.yaml
src/
  app/
    (domains)/
      layout.tsx
      [domain]/
        [[...slug]]/
          page.tsx
      explorer/
  components/
    shell/
    navigation/
    theme/
  lib/
    config/
    domains/
    content/
    search/
    theme/
```

Recommended behavior:

- `(domains)/layout.tsx` owns the universal shell
- `[domain]/[[...slug]]/page.tsx` resolves standard file-backed content for configured domains
- individual domain folders may add narrow domain overrides only when needed
- explicit application routes remain first-class route files under `src/app/`
- content and interactive pages share the same shell contract

### ✅ 9.7 Source and Asset Boundaries

- React and TypeScript source shall live under `src/`.
- Editor-owned content shall live under `content/`.
- Human-editable YAML configuration shall live under `config/`.
- Runtime assets shall live under `public/`.
- `public/assets/styles/` and `public/assets/svg/*.tsx` are legacy or stub material and shall not become the active production source pattern.
- New application styling shall be imported from source CSS or Tailwind-driven source files.
- Raster assets rendered in the application should use `next/image` unless there is a concrete reason not to.

### ✅ 9.8 Metadata, SEO, and Public Discovery

- Public-facing routes shall define intentional metadata.
- Stable public pages should prefer static `metadata` exports.
- `generateMetadata` shall be used only when metadata depends on route data or request context.
- Important public surfaces should be prepared to expose `robots.txt`, `sitemap.xml`, and social preview metadata as the site matures.
- File-backed content metadata shall be derived from frontmatter and domain config with clear fallbacks.
- HTML content pages shall still participate in metadata generation through frontmatter or adjacent metadata conventions.

### ✅ 9.9 Config Validation and Editor Safety

- YAML configs shall be parsed on the server and validated against typed schemas.
- Validation failures shall report the file path, the offending key, and a human-readable explanation.
- The application shall fail fast on invalid domain, theme, search, or parser config rather than silently degrading.
- Editor-facing maintenance should not require touching TypeScript unless behavior changes exceed the declared config surface.

## 🧱 10. Ecme Component Strategy

Ecme should be used as a component and interaction source, not as the final visual identity.

### ✅ 10.0 Ecme Adoption Policy

Ecme adoption is constrained by policy in this project:

- Ecme may accelerate low-level UI implementation.
- Z00Z brand expression, shared shell, and information architecture shall be implemented custom for this repository.
- The implementation must not make the site feel like a re-skinned admin dashboard.
- Full-template adoption of Ecme is prohibited for production-facing website surfaces.
- Ecme is approved only as a source of selected primitives, patterns, and implementation ideas that are reworked into the Z00Z architecture and visual system.

### ✅ 10.1 Recommended Ecme Reuse Targets

- dropdown primitives for the domain switcher and theme menu
- drawer primitives for mobile navigation
- menu and scroll primitives for side navigation
- theme state ideas such as collapsible side nav behavior
- layout composition ideas for shell wiring

### ✅ 10.2 Ecme Non-Goals

Do not treat Ecme as:

- the final dashboard aesthetic
- a direct CSS import source from `public/assets/styles/`
- permission to keep React source in `public/`
- permission to inherit demo pages that do not belong to the Z00Z product

### ✅ 10.3 Canonical Placement Policy

- `.temp/` is a disposable reference workspace and shall not be a runtime dependency, import root, or source-of-truth for production code.
- If an Ecme React component, hook, or utility is adopted, it shall be copied into canonical `src/` paths and migrated to project-local TypeScript before production use.
- Shared UI primitives imported from Ecme should live under `src/components/ui/` or a temporary migration namespace such as `src/components/ecme/` until they are fully normalized.
- Shell-specific adaptations should be moved into Z00Z-owned folders such as `src/components/docs/`, `src/components/theme/`, or another domain-owned `src/components/*` location.
- Non-React helpers adapted from Ecme should live under `src/lib/`, not inside content, config, or public asset folders.
- Browser-served static assets required by adopted Ecme components may live under `public/assets/`, but runtime application logic shall not live under `public/`.
- `tools/` shall not store website runtime components; it is reserved for developer tooling, penetration tooling, wrappers, manifests, and other non-application concerns.
- If a long-lived Ecme snapshot must be retained for reference, it should be preserved under a non-runtime location such as `vendor/ecme-reference/` or `docs/references/ecme/`, not under the active app source tree.

### ✅ 10.4 Implementation Note

Ecme code should be ported or adapted into canonical `src/` directories and normalized to the Z00Z token system before production use.

### ✅ 10.5 Initial Implementation Constraint

The first shell implementation shall:

- build `src/app/(domains)/layout.tsx` as a custom Z00Z shell
- keep domain switching, left navigation, and theme controls under Z00Z-owned source structure
- extract only the Ecme primitives that are directly useful for the shell
- avoid importing or reproducing broad Ecme demo layout structure, dashboard page structure, or legacy runtime style assets as the active production UI

## 🖼️ 11. Annotated Mockups

### ✅ 11.1 Desktop Shell

![Desktop shell wireframe](./assets/z00z-shell-desktop.svg)

This mockup defines the target desktop shell: dark top bar, visible domain switcher, collapsible left navigation, central content canvas, and optional right rail.

### ✅ 11.2 Mobile and Tablet Shell

![Mobile shell wireframe](./assets/z00z-shell-mobile.svg)

This mockup defines the responsive behavior: left navigation becomes a drawer, the current domain remains visible, and the header retains search and theme controls.

### ✅ 11.3 Theme Preset Menu

![Theme switcher wireframe](./assets/z00z-theme-switcher.svg)

This mockup defines the theme selector interaction model and the expected live-preview behavior for preset changes.

### ✅ 11.4 Folder-Driven Content Model

![Folder structure wireframe](./assets/z00z-content-structure.svg)

This mockup defines the relationship between the editor-owned `content/` tree, the YAML config surface, and the shared Next.js shell that renders both file-backed content and explicit application routes.

## 🧪 12. Acceptance Criteria

- **AC-001**: Given any domain page, when the user opens the header switcher, then all supported domains are visible and keyboard-selectable.
- **AC-002**: Given a new `.md` or `.html` file under `content/<domain>/...`, when the page renders, then the URL path and sidebar nesting match the folder hierarchy without requiring a new route file.
- **AC-003**: Given a `_meta.yaml` file in a content folder, when labels or order are changed, then the sidebar updates without requiring page-by-page navigation duplication.
- **AC-004**: Given a `page.tsx` route under `src/app/`, when the route is visited, then the page renders inside the same shared shell and takes precedence over file-backed content on path collisions.
- **AC-005**: Given a desktop viewport, when the user collapses the left navbar, then the shell persists the collapse state across navigation.
- **AC-006**: Given a mobile or tablet viewport, when the user opens navigation, then the left navbar appears as an accessible drawer and focus remains trapped inside the drawer until it closes.
- **AC-007**: Given a theme preset change, when the user refreshes the page or switches domains, then the selected preset persists unless the user explicitly resets it.
- **AC-008**: Given a domain with no path equivalent for the current route, when the user switches domain, then the app redirects to the target domain home path.
- **AC-009**: Given a content page with `toc: true`, when the page contains headings, then the right rail may render a table of contents on supported layouts.
- **AC-010**: Given a new runtime image or downloadable asset, when it is added for page content, then it resides in `public/` and not inside source code folders.
- **AC-011**: Given any domain page, when the user invokes search with keyboard or header action, then a searchable interface opens with current-domain context.
- **AC-012**: Given a public-facing route, when the page is built, then meaningful metadata is defined intentionally rather than scaffold defaults.
- **AC-013**: Given authored Markdown content, when it renders, then it uses the approved `markdown-it` profile and does not rely on unrestricted raw HTML by default.
- **AC-014**: Given the shared shell implementation, when interactive controls are added, then they are isolated to the smallest useful client boundary inside a server-first route structure.
- **AC-015**: Given invalid YAML in `config/` or `_meta.yaml`, when the app starts or builds, then it fails with an actionable validation message.
- **AC-016**: Given theme configuration, when the user opens the theme picker, then only the curated approved presets are exposed rather than the entire upstream theme catalog.
- **AC-017**: Given a trusted `.html` page in `content/`, when it renders, then arbitrary scripts and inline event handlers do not execute.
- **AC-018**: Given routine site maintenance such as adding a page, moving a page, reordering a section, or changing a default theme, then the change can be completed by editing `content/` and YAML files without writing TypeScript.

## 🧪 13. Test Automation Strategy

- **Unit**: domain registry parsing, YAML schema validation, host-to-domain mapping, sidebar tree generation, theme persistence logic, frontmatter parsing, `_meta.yaml` normalization
- **Integration**: Markdown and HTML rendering, shell layout composition, domain switcher behavior, mobile drawer behavior, metadata generation, parser profile enablement
- **End-to-End**: domain switching, sidebar collapse persistence, theme switching, mobile navigation, search invocation, representative file-backed docs routes, and representative `explorer` app routes
- **Accessibility**: keyboard traversal, focus management, color contrast validation, landmark structure checks, semantic-shell verification
- **Security**: HTML sanitization policy review, include or snippet path-boundary validation, parser allowlist review, and content trust-boundary validation when rich content is introduced
- **Build validation**: `npm run lint`, `npm run build`, and `npm run verify` when implementation work begins

## 🔍 14. Rationale & Context

The main architectural choice in this specification is to split responsibilities cleanly: `content/` for editor-owned pages, `config/` for human-editable YAML, and `src/app/` for the shell plus explicit application routes. This directly supports the requirement that routine maintenance should not require programming while preserving a strong Next.js architecture.

The second major choice is to use one shared shell with a domain registry rather than building isolated apps per subdomain. This keeps branding, theming, search, and navigation coherent while still allowing each domain to feel purpose-built.

The third major choice is to adopt the successful parts of `.temp/website_2025-09-30` while improving its maintenance model. The reference proves that a Markdown/HTML parser, YAML config, and file-backed search can work well, but Z00Z should replace a single large navigation YAML with folder-driven hierarchy plus smaller local `_meta.yaml` files.

The fourth major choice is to make `mdit-plugins` the primary Markdown extension surface while keeping `markdown-it` as the underlying engine and compatibility fallback. This creates a more coherent extension strategy than mixing unrelated plugins by default.

The fifth major choice is to treat Ecme as a primitive source, not as the final visual design. Ecme already contains useful dropdown, drawer, menu, and theme-state patterns, but the Z00Z product needs its own brand expression and its own source/layout boundaries.

## 🔗 15. Dependencies & External Integrations

### ✅ External References

- **EXT-001**: [Sui Docs](https://docs.sui.io/develop/sui-architecture) for the dark technical shell, left navigation behavior, and top-level dropdown precedent
- **EXT-002**: [Hyperliquid Docs](https://hyperliquid.gitbook.io/hyperliquid-docs) for dense editorial documentation patterns
- **EXT-003**: [Next.js Docs](https://nextjs.org/docs) for App Router and documentation conventions
- **EXT-004**: [Next.js MDX Guide](https://nextjs.org/docs/app/guides/mdx) for route-level MDX support
- **EXT-005**: [Next.js Project Structure Guide](https://nextjs.org/docs/app/getting-started/project-structure) for route ownership conventions
- **EXT-006**: [Next.js MDX Components Convention](https://nextjs.org/docs/app/api-reference/file-conventions/mdx-components) for shared MDX component registration
- **EXT-007**: [Next.js Multi-Tenant Guide](https://nextjs.org/docs/app/guides/multi-tenant) for host-based domain mapping ideas
- **EXT-007A**: [Next.js Proxy File Convention](https://nextjs.org/docs/app/api-reference/file-conventions/proxy) for current App Router host-routing entrypoints
- **EXT-008**: [Sovereign Docs](https://docs.sovereign.xyz) for theme preset switching behavior
- **EXT-009**: [Markdown It Plugins](https://mdit-plugins.github.io/) as the primary Markdown extension ecosystem
- **EXT-010**: [markdown-it](https://markdown-it.github.io/) for the parser engine, core options, and fallback plugin model
- **EXT-011**: [daisyUI Themes](https://daisyui.com/docs/themes/) for `data-theme` behavior and curated theme-preset sourcing
- **EXT-012**: [Doka HTML Guide](https://doka.guide/html/) for semantic HTML structure expectations
- **EXT-013**: [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) for Prism-based React code rendering options and light or async bundle strategies

### ✅ Internal Repository Dependencies

- **INF-001**: `src/app/` is the canonical route root
- **INF-002**: `src/app/globals.css` is the canonical global token entrypoint
- **INF-003**: `public/` is the canonical runtime asset surface
- **INF-004**: Ecme-derived assets and stubs currently present under `public/assets/` should be treated as migration material, not the final source architecture
- **INF-005**: `.temp/website_2025-09-30/USAGE.md` demonstrates the desired editor-friendly Markdown and YAML maintenance workflow
- **INF-006**: `.temp/website_2025-09-30/src/app/(protected-pages)/(docs)/[...slug]/page.tsx` demonstrates the desired Markdown or HTML parser pipeline breadth
- **INF-007**: `.temp/website_2025-09-30/src/app/api/search/route.ts` demonstrates file-backed search across `content/`

## ⚠️ 16. Edge Cases

- Switching from `docs` to `explorer` while viewing a route that has no app equivalent should redirect to the `explorer` home page instead of a 404.
- Group folders without page files should still create sidebar grouping and should not require placeholder content pages.
- Dynamic routes such as `block/[height]` or `account/[address]` should not appear in the sidebar unless explicitly configured.
- Explicit application routes should win when a file-backed content page and a React route target the same URL.
- Invalid YAML should fail fast rather than falling back silently.
- MDX pages, when introduced, may import React components, but those components must come from canonical source locations under `src/`.
- Different domains may default to different canvas widths, but the header and domain switcher behavior must remain consistent.
- HTML pages with local styles may need scoped rendering so they do not leak styles into the shared shell.
- `include` and `snippet` features must not allow path traversal outside approved content roots.
- Search results may need different ranking and field sets for content-first versus app-first domains while keeping one consistent command surface.

## ✅ 17. Validation Criteria

This specification is satisfied only when:

- a single domain registry exists
- domain switching works across all declared domains
- the left navbar is collapsible on desktop and drawer-based on smaller screens
- standard authored docs can be created by adding `.md` or `.html` files under `content/`
- navigation and ordering can be adjusted through `_meta.yaml` and central YAML config without per-page duplication
- dynamic app pages can be created by adding `page.tsx` files under `src/app/`
- the theme system is token-based and preset-driven
- theme exposure is curated through YAML rather than by dumping all upstream presets
- the parser profile is centrally configurable through YAML
- search behaves as a first-class shell feature
- server and client boundaries remain intentional and minimal
- public metadata is defined intentionally for production-facing routes
- HTML content follows the declared trust policy
- no new production React source is placed under `public/`
- routine maintenance does not require touching TypeScript
- the shell remains visually coherent across content-first and app-first domains

## 📌 18. Recommended Next Implementation Slice

1. Replace the scaffold landing page with a shared shell skeleton in `src/app/(domains)/layout.tsx`.
2. Create typed loaders and schemas for `config/domains.yaml`, `config/themes.yaml`, `config/search.yaml`, and `config/content-pipeline.yaml`.
3. Implement `[domain]/[[...slug]]/page.tsx` as the shared file-backed content renderer and author the first `docs` and `wiki` pages under `content/`.
4. Implement the collapsible sidebar, domain switcher, and curated theme preset menu.
5. Add one representative app-first route under `explorer`, one trusted HTML content page, and search indexing across `content/` to prove the mixed-model architecture.
