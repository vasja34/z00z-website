import path from "node:path";

import { abbr } from "@mdit/plugin-abbr";
import { alert } from "@mdit/plugin-alert";
import { align } from "@mdit/plugin-align";
import { anchor } from "@mdit/plugin-anchor";
import { attrs } from "@mdit/plugin-attrs";
import { container } from "@mdit/plugin-container";
import { dl } from "@mdit/plugin-dl";
import { embed } from "@mdit/plugin-embed";
import { figure } from "@mdit/plugin-figure";
import { footnote } from "@mdit/plugin-footnote";
import { imgLazyload } from "@mdit/plugin-img-lazyload";
import { imgSize } from "@mdit/plugin-img-size";
import { include } from "@mdit/plugin-include";
import { ins } from "@mdit/plugin-ins";
import { katex } from "@mdit/plugin-katex";
import { mark } from "@mdit/plugin-mark";
import { snippet } from "@mdit/plugin-snippet";
import { spoiler } from "@mdit/plugin-spoiler";
import { stylize } from "@mdit/plugin-stylize";
import { sub } from "@mdit/plugin-sub";
import { sup } from "@mdit/plugin-sup";
import { MarkdownItTabData, MarkdownItTabInfo, tab } from "@mdit/plugin-tab";
import { tasklist } from "@mdit/plugin-tasklist";
import { uml } from "@mdit/plugin-uml";
import { tocPlugin } from "@mdit-vue/plugin-toc";
import hljs from "highlight.js";
import MarkdownIt from "markdown-it";
import collapsible from "markdown-it-collapsible";

import type { ContentPipelineConfig } from "@/lib/config/site";

type RenderMarkdownOptions = {
  filePath: string;
  pipeline: ContentPipelineConfig;
};

function slugifyHeading(value: string): string {
  return encodeURIComponent(
    value
      .trim()
      .toLowerCase()
      .replace(/[^\p{Letter}\p{Number}\s-]+/gu, "")
      .replace(/\s+/g, "-"),
  );
}

function resolveCurrentPath(env: unknown, filePath: string): string {
  if (
    env &&
    typeof env === "object" &&
    "filePath" in env &&
    typeof (env as { filePath?: unknown }).filePath === "string"
  ) {
    return path.dirname((env as { filePath: string }).filePath);
  }

  return path.dirname(filePath);
}

export function renderMarkdown(source: string, options: RenderMarkdownOptions): string {
  const { filePath, pipeline } = options;

  const md = new MarkdownIt({
    html: pipeline.markdown.html,
    linkify: pipeline.markdown.linkify,
    typographer: pipeline.markdown.typographer,
    highlight(code, language) {
      if (language && hljs.getLanguage(language)) {
        return `<pre class="code-block"><code class="hljs language-${language}">${hljs.highlight(code, {
          language,
          ignoreIllegals: true,
        }).value}</code></pre>`;
      }

      const autoDetected = hljs.highlightAuto(code);

      return `<pre class="code-block"><code class="hljs language-${autoDetected.language ?? "plaintext"}">${autoDetected.value}</code></pre>`;
    },
  });

  const defaultFenceRenderer = md.renderer.rules.fence?.bind(md.renderer.rules);

  md.renderer.rules.fence = (tokens, index, rendererOptions, env, self) => {
    const token = tokens[index];
    const language = token.info.trim().split(/\s+/u)[0]?.toLowerCase();

    if (pipeline.markdown.mermaid && language === "mermaid") {
      return `<div class="mermaid">${md.utils.escapeHtml(token.content.trim())}</div>`;
    }

    if (defaultFenceRenderer) {
      return defaultFenceRenderer(tokens, index, rendererOptions, env, self);
    }

    return self.renderToken(tokens, index, rendererOptions);
  };

  if (pipeline.markdown.abbreviation) {
    md.use(abbr);
  }

  if (pipeline.markdown.alerts) {
    md.use(alert, { deep: true });
  }

  if (pipeline.markdown.align) {
    md.use(align);
  }

  if (pipeline.markdown.anchor) {
    md.use(anchor, {
      slugify: slugifyHeading,
    });
  }

  if (pipeline.markdown.toc) {
    md.use(tocPlugin, {
      pattern: /^\[TOC\]$/i,
      slugify: slugifyHeading,
      level: [2, 3],
      containerTag: "nav",
      containerClass: "table-of-contents",
      listClass: "table-of-contents-list",
      itemClass: "table-of-contents-item",
      linkClass: "table-of-contents-link",
    });
  }

  if (pipeline.markdown.attrs) {
    md.use(attrs);
  }

  if (pipeline.markdown.containers) {
    md.use(container, {
      name: "warning",
    });
  }

  if (pipeline.markdown.definition_lists) {
    md.use(dl);
  }

  if (pipeline.markdown.embeds) {
    md.use(embed, {
      config: [
        {
          name: "youtube",
          setup: (id: string) =>
            `<div class="video-embed"><iframe src="https://www.youtube.com/embed/${id}" title="YouTube video" loading="lazy" allowfullscreen></iframe></div>`,
        },
      ],
    });
  }

  if (pipeline.markdown.figures) {
    md.use(figure);
  }

  if (pipeline.markdown.footnotes) {
    md.use(footnote);
  }

  if (pipeline.markdown.image_lazyload) {
    md.use(imgLazyload);
  }

  if (pipeline.markdown.image_size) {
    md.use(imgSize);
  }

  if (pipeline.markdown.include) {
    md.use(include, {
      currentPath: (env) => resolveCurrentPath(env, filePath),
      deep: true,
    });
  }

  if (pipeline.markdown.insertions) {
    md.use(ins);
  }

  if (pipeline.markdown.katex) {
    md.use(katex);
  }

  if (pipeline.markdown.mark) {
    md.use(mark);
  }

  if (pipeline.markdown.snippet) {
    md.use(snippet, {
      currentPath: (env) => resolveCurrentPath(env, filePath),
    });
  }

  if (pipeline.markdown.spoiler) {
    md.use(spoiler);
  }

  if (pipeline.markdown.stylize) {
    md.use(stylize, {
      config: [
        {
          matcher: /^(?!bg-)([#a-zA-Z0-9-]+):(.*)$/,
          replacer: ({ tag, content }) => {
            if (tag !== "mark") {
              return;
            }

            const match = content.match(/^(?!bg-)([#a-zA-Z0-9-]+):(.*)$/);

            if (!match) {
              return;
            }

            const [, color, text] = match;

            return {
              tag: "span",
              attrs: {
                class: "token-inline-accent",
                style: color.startsWith("#") ? `color: ${color};` : undefined,
                "data-color-token": color.startsWith("#") ? undefined : color,
              },
              content: text.trim(),
            };
          },
        },
      ],
    });
  }

  if (pipeline.markdown.sub_sup) {
    md.use(sub);
    md.use(sup);
  }

  if (pipeline.markdown.tabs) {
    const tabActiveIndexStack: number[] = [];

    md.use(tab, {
      openRender(info: MarkdownItTabInfo) {
        const activeIndex = info.active >= 0 ? info.active : 0;
        tabActiveIndexStack.push(activeIndex);
        const navigation = info.data
          .map(
            (item, index) => `
              <button
                type="button"
                class="tabs-nav-btn ${index === activeIndex ? "tabs-nav-btn-active" : "tabs-nav-btn-inactive"}"
                aria-selected="${index === activeIndex}"
                data-tab-target="${item.id}"
              >
                ${item.title}
              </button>`,
          )
          .join("");

        return `<div class="tabs-block"><div class="tabs-nav" role="tablist">${navigation}</div>`;
      },
      closeRender: () => {
        tabActiveIndexStack.pop();
        return "</div>";
      },
      tabOpenRender(data: MarkdownItTabData) {
        const activeIndex = tabActiveIndexStack.at(-1) ?? 0;
        const isActive = data.index === activeIndex;
        return `<div class="tabs-panel ${isActive ? "tabs-panel-active" : "tabs-panel-hidden"}" id="${data.id}" role="tabpanel" aria-expanded="${isActive}">`;
      },
      tabCloseRender: () => "</div>",
    });
  }

  if (pipeline.markdown.tasklist) {
    md.use(tasklist);
  }

  if (pipeline.markdown.mermaid) {
    md.use(uml, {
      name: "mermaid",
      open: "mermaidstart",
      close: "mermaidend",
      render(tokens, index) {
        return `<div class="mermaid">${tokens[index].content}</div>`;
      },
    });
  }

  if (pipeline.markdown.collapsible) {
    md.use(collapsible);
  }

  return md.render(source, { filePath });
}
