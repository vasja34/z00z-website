import { load } from "cheerio";
import hljs from "highlight.js";

import type { ContentPipelineConfig } from "@/lib/config/site";

export type RenderedHtmlDocument = {
  contentHtml: string;
  shadowHtml: string | null;
  title: string | null;
  description: string | null;
};

const SHADOW_HTML_BASE_CSS = `
  :host {
    display: block;
    color: var(--color-base-content);
    background: var(--color-base-100);
    font-family: var(--font-open-sans), sans-serif;
    line-height: 1.6;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  pre {
    overflow-x: auto;
  }

  pre,
  code.hljs,
  .source {
    background: var(--docs-code-bg) !important;
    border: 1px solid var(--docs-code-border) !important;
    color: var(--docs-code-fg) !important;
    border-radius: 0.5rem;
  }

  code.hljs {
    display: block;
    padding: 1rem 1.25rem;
    line-height: 1.65;
  }

  code:not(.hljs) {
    background: var(--docs-inline-code-bg) !important;
    border: 1px solid var(--docs-inline-code-border) !important;
    border-radius: 0.375rem;
    color: var(--docs-inline-code-fg) !important;
    font-family: var(--font-source-code-pro), ui-monospace, SFMono-Regular, Menlo, monospace !important;
    font-size: 0.92em;
    padding: 0.25rem 0.375rem;
  }

  .hljs-comment,
  .hljs-quote {
    color: var(--docs-code-muted) !important;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-name {
    color: var(--docs-code-keyword) !important;
  }

  .hljs-string,
  .hljs-attr,
  .hljs-symbol,
  .hljs-addition {
    color: var(--docs-code-string) !important;
  }

  .hljs-number,
  .hljs-built_in,
  .hljs-type {
    color: var(--docs-code-number) !important;
  }

  .hljs-title,
  .hljs-section {
    color: var(--docs-code-title) !important;
  }
`;

const SHADOW_HTML_THEME_BRIDGE_CSS = `
  :host,
  :host article,
  :host .page,
  :host .page-body,
  :host .collection-content {
    color: var(--color-base-content) !important;
    background: transparent !important;
  }

  :host a,
  :host a:visited,
  :host .table_of_contents-link {
    color: var(--color-primary) !important;
  }

  :host hr,
  :host table,
  :host th,
  :host td,
  :host .source,
  :host .callout {
    border-color: var(--color-base-300) !important;
  }

  :host th {
    background: color-mix(in srgb, var(--color-base-200) 74%, transparent) !important;
  }

  :host th,
  :host figcaption,
  :host .pdf-relative-link-path {
    color: color-mix(in srgb, var(--color-base-content) 62%, transparent) !important;
  }

  :host blockquote {
    border-left: 4px solid var(--color-primary) !important;
    background: color-mix(in srgb, var(--color-base-200) 72%, transparent) !important;
    border-radius: 0.5rem;
    color: var(--color-base-content) !important;
    padding: 1rem 1.25rem;
  }

  :host mark,
  :host .highlight-red,
  :host .highlight-yellow,
  :host .highlight-blue,
  :host .highlight-green,
  :host .highlight-pink,
  :host .highlight-purple,
  :host .highlight-orange,
  :host .highlight-gray,
  :host .highlight-brown {
    background: color-mix(in srgb, var(--color-accent) 18%, transparent) !important;
    color: inherit !important;
  }

  :host :where(p, span, li, td, th, h1, h2, h3, h4, h5, h6, a, strong, em, small, div)[style*="color:"] {
    color: inherit !important;
  }

  :host :where(div, p, span, td, th, mark, blockquote)[style*="background"],
  :host :where(div, p, span, td, th, mark, blockquote)[style*="background-color"] {
    background-color: transparent !important;
  }
`;

function extractLanguage(className: string | undefined): string | null {
  if (!className) {
    return null;
  }

  const languageToken = className
    .split(/\s+/)
    .find((token) => token.startsWith("language-"));

  return languageToken ? languageToken.replace("language-", "") : null;
}

export function renderHtmlDocument(
  source: string,
  pipeline: ContentPipelineConfig,
): RenderedHtmlDocument {
  const $ = load(source);

  if (!pipeline.html.allow_scripts) {
    $("script").remove();
  }

  if (!pipeline.html.allow_inline_event_handlers) {
    $("*").each((_, element) => {
      const attributes =
        "attribs" in element && element.attribs
          ? Object.keys(element.attribs)
          : [];

      for (const attribute of attributes) {
        if (attribute.toLowerCase().startsWith("on")) {
          $(element).removeAttr(attribute);
        }
      }
    });
  }

  $("pre code").each((_, element) => {
    const code = $(element).text();
    const language = extractLanguage($(element).attr("class") ?? undefined);

    const highlighted = language && hljs.getLanguage(language)
      ? hljs.highlight(code, { language, ignoreIllegals: true }).value
      : hljs.highlightAuto(code).value;

    $(element).addClass("hljs");
    $(element).html(highlighted);
  });

  const title = $("title").first().text().trim() || null;
  const description = $("p").first().text().trim() || null;
  const headStyles = pipeline.html.allow_local_styles
    ? $("head style")
        .map((_, element) => $(element).html() ?? "")
        .get()
        .join("\n")
    : "";

  const bodyHtml = $("body").length > 0 ? $("body").html() ?? "" : $.root().html() ?? "";
  const shadowHtml =
    headStyles.length > 0
      ? `<style>${SHADOW_HTML_BASE_CSS}</style><style>${headStyles}</style><style>${SHADOW_HTML_THEME_BRIDGE_CSS}</style>${bodyHtml}`
      : null;

  return {
    contentHtml: bodyHtml,
    shadowHtml,
    title,
    description,
  };
}
