import fs from "node:fs";
import path from "node:path";

import { load } from "cheerio";
import matter from "gray-matter";
import YAML from "yaml";

import {
  getContentPipelineConfig,
  getDomainConfigById,
  getDocsDomainConfig,
  type DomainConfig,
} from "@/lib/config/site";
import { renderHtmlDocument } from "@/lib/content/html";
import { renderMarkdown } from "@/lib/content/markdown";

type FolderMeta = {
  title?: string;
  order?: string[];
  icon?: string;
  page_icons?: Record<string, string>;
  page_title_source?: "document" | "filename";
  internal_link_text_source?: "authored" | "filename";
};

type Frontmatter = {
  title?: string;
  description?: string;
  toc?: boolean;
  hide_in_nav?: boolean;
  icon?: string;
};

export type TocItem = {
  id: string;
  text: string;
  depth: number;
};

export type DocNavItem = {
  title: string;
  href: string;
  icon?: string;
  page?: boolean;
  children: DocNavItem[];
};

export type LoadedDocPage = {
  title: string;
  description: string | null;
  kind: "markdown" | "html";
  html: string;
  shadowHtml: string | null;
  tocItems: TocItem[];
};

export type DocsSearchItem = {
  body: string;
  description: string;
  href: string;
  title: string;
};

export type DocPagerItem = {
  href: string;
  title: string;
};

type PageRecord = {
  filePath: string;
  slug: string[];
  title: string;
  description: string | null;
  hideInNav: boolean;
  icon: string;
};

const SUPPORTED_EXTENSIONS = [".md", ".html"];

function isPrivateEntry(entryName: string): boolean {
  return entryName.startsWith("_");
}

function isSupportedFile(fileName: string): boolean {
  return SUPPORTED_EXTENSIONS.includes(path.extname(fileName).toLowerCase());
}

function titleFromSegment(value: string): string {
  return value
    .replace(/\.(md|html)$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function titleFromFilePath(filePath: string): string {
  return titleFromSegment(path.basename(filePath, path.extname(filePath)));
}

function usesFilenamePageTitle(folderMeta: FolderMeta): boolean {
  return folderMeta.page_title_source === "filename";
}

function usesFilenameLinkText(folderMeta: FolderMeta): boolean {
  return folderMeta.internal_link_text_source === "filename";
}

function readFolderMeta(dirPath: string): FolderMeta {
  const metaPath = path.join(dirPath, "_meta.yaml");

  if (!fs.existsSync(metaPath)) {
    return {};
  }

  return YAML.parse(fs.readFileSync(metaPath, "utf8")) as FolderMeta;
}

function resolveDomainRoot(domain: DomainConfig): string {
  const relativeRoot = domain.content_root.replace(/^content[\\/]/, "");
  return path.join(process.cwd(), "content", relativeRoot);
}

function directoryExists(dirPath: string): boolean {
  return fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
}

function urlForSlug(domain: DomainConfig, slug: string[]): string {
  return slug.length === 0 ? domain.home_path : `${domain.home_path}/${slug.join("/")}`;
}

function normalizeContentStem(value: string): string {
  return value
    .replace(/^z00z-/i, "")
    .replace(/-whitepaper$/i, "")
    .replace(/[^a-z0-9]+/gi, "")
    .toLowerCase();
}

function resolveLegacyContentAlias(basePathWithoutExtension: string): string | null {
  const directory = path.dirname(basePathWithoutExtension);

  if (!fs.existsSync(directory) || !fs.statSync(directory).isDirectory()) {
    return null;
  }

  const normalizedStem = normalizeContentStem(path.basename(basePathWithoutExtension));

  if (!normalizedStem) {
    return null;
  }

  const matches = fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && isSupportedFile(entry.name))
    .filter(
      (entry) =>
        normalizeContentStem(path.basename(entry.name, path.extname(entry.name))) === normalizedStem,
    );

  if (matches.length !== 1) {
    return null;
  }

  return path.join(directory, matches[0].name);
}

function resolveSupportedContentFile(basePath: string): string | null {
  const extension = path.extname(basePath).toLowerCase();

  if (SUPPORTED_EXTENSIONS.includes(extension)) {
    if (fs.existsSync(basePath) && fs.statSync(basePath).isFile()) {
      return basePath;
    }

    return resolveLegacyContentAlias(basePath.slice(0, -extension.length));
  }

  for (const supportedExtension of SUPPORTED_EXTENSIONS) {
    const candidate = `${basePath}${supportedExtension}`;

    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
  }

  return resolveLegacyContentAlias(basePath);
}

function splitHref(href: string): { pathname: string; query: string; hash: string } {
  const hashIndex = href.indexOf("#");
  const beforeHash = hashIndex === -1 ? href : href.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : href.slice(hashIndex);
  const queryIndex = beforeHash.indexOf("?");

  if (queryIndex === -1) {
    return {
      pathname: beforeHash,
      query: "",
      hash,
    };
  }

  return {
    pathname: beforeHash.slice(0, queryIndex),
    query: beforeHash.slice(queryIndex),
    hash,
  };
}

function slugForFilePath(rootDir: string, filePath: string): string[] | null {
  const relativePath = path.relative(rootDir, filePath);

  if (!relativePath || relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    return null;
  }

  const segments = relativePath.split(path.sep);
  const lastSegment = segments[segments.length - 1];
  const stem = lastSegment.replace(/\.(md|html)$/i, "");

  if (stem === "index") {
    return segments.slice(0, -1);
  }

  return [...segments.slice(0, -1), stem];
}

function rewriteMarkdownContentLinks(
  html: string,
  {
    currentFilePath,
    domain,
    rootDir,
  }: {
    currentFilePath: string;
    domain: DomainConfig;
    rootDir: string;
  },
): string {
  const $ = load(html);

  $("a[href]").each((_, element) => {
    const href = $(element).attr("href");

    if (!href || href.startsWith("#")) {
      return;
    }

    const { pathname, query, hash } = splitHref(href);

    if (!pathname || pathname.startsWith("/") || /^(?:[a-z][a-z0-9+.-]*:|\/\/)/iu.test(pathname)) {
      return;
    }

    let resolvedPathname = pathname;

    try {
      resolvedPathname = decodeURIComponent(pathname);
    } catch {
      resolvedPathname = pathname;
    }

    const targetFile = resolveSupportedContentFile(
      path.resolve(path.dirname(currentFilePath), resolvedPathname),
    );

    if (!targetFile) {
      return;
    }

    const targetSlug = slugForFilePath(rootDir, targetFile);

    if (!targetSlug) {
      return;
    }

    $(element).attr("href", `${urlForSlug(domain, targetSlug)}${query}${hash}`);

    const targetFolderMeta = readFolderMeta(path.dirname(targetFile));

    if (usesFilenameLinkText(targetFolderMeta)) {
      $(element).text(titleFromFilePath(targetFile));
    }
  });

  return $.root().html() ?? html;
}

function resolveNavIconKey({
  explicitIcon,
  hasChildren = false,
  slug,
  title,
}: {
  explicitIcon?: string;
  hasChildren?: boolean;
  slug: string[];
  title: string;
}): string {
  if (explicitIcon) {
    return explicitIcon;
  }

  if (slug.length === 0) {
    return "home";
  }

  const iconRules: Array<[RegExp, string]> = [
    [/\b(home|landing)\b/, "home"],
    [/\b(demo|theme|highlight|plugin)\b/, "palette"],
    [/\b(legal|terms|disclosures?|privacy|claim)\b/, "legal"],
    [/\b(security|threat|audit|incident|disclosure|supply|crypto policy)\b/, "shield"],
    [/\b(research|whitepapers?|technical papers?|benchmarks?|verification|archive|hjmt)\b/, "flask"],
    [/\b(network|aggregators?|validators?|watchers?|onionnet|node|status explorer|data)\b/, "network"],
    [/\b(wallet|payment)\b/, "wallet"],
    [/\b(ecosystem|builders?|community|operators?|blog|changelog)\b/, "users"],
    [/\b(developers?|workspace|rpc|api|runtime|simulator|wasm|examples?|migration|configuration|genesis|code|crypto)\b/, "code"],
    [/\b(protocol|architecture|settlement|checkpoints?|governance|tokenomics|liability|rights|vouchers?|smart cash|proof)\b/, "layers"],
    [/\b(learn|what is|intro|overview|terminology|glossary|litepaper|docs?)\b/, "book"],
    [/\b(roadmap|route)\b/, "map"],
    [/\b(comparisons?)\b/, "chart"],
    [/\b(use cases?|machine|cash|policy|distribution|organizational|asset)\b/, "spark"],
    [/\b(support|faq|troubleshooting|recovery|contact|contribute)\b/, "support"],
  ];

  const normalized = `${slug.join(" ")} ${title}`.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

  for (const [pattern, icon] of iconRules) {
    if (pattern.test(normalized)) {
      return icon;
    }
  }

  return hasChildren ? "book" : "file";
}

function readPageMetadata(filePath: string, slug: string[], folderMeta: FolderMeta, stem: string): PageRecord {
  const extension = path.extname(filePath).toLowerCase();
  const configuredIcon = folderMeta.page_icons?.[stem];
  const fallbackTitle = titleFromFilePath(filePath);

  if (extension === ".md") {
    const raw = fs.readFileSync(filePath, "utf8");
    const { data } = matter(raw);
    const frontmatter = data as Frontmatter;
    const title = usesFilenamePageTitle(folderMeta)
      ? fallbackTitle
      : frontmatter.title ?? fallbackTitle;

    return {
      filePath,
      slug,
      title,
      description: frontmatter.description ?? null,
      hideInNav: frontmatter.hide_in_nav ?? false,
      icon: resolveNavIconKey({
        explicitIcon: frontmatter.icon ?? configuredIcon,
        slug,
        title,
      }),
    };
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const $ = load(raw);
  const title = usesFilenamePageTitle(folderMeta)
    ? fallbackTitle
    : $("title").first().text().trim() || fallbackTitle;

  return {
    filePath,
    slug,
    title,
    description: $("p").first().text().trim() || null,
    hideInNav: false,
    icon: resolveNavIconKey({
      explicitIcon: configuredIcon,
      slug,
      title,
    }),
  };
}

function stripMarkdownSyntax(source: string): string {
  return source
    .replace(/^---[\s\S]*?---/m, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
    .replace(/^[>\-\+\*#]+\s?/gm, " ")
    .replace(/\{[%@][^]*?\}/g, " ")
    .replace(/[_*~]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractPageSearchText(filePath: string): string {
  const extension = path.extname(filePath).toLowerCase();
  const raw = fs.readFileSync(filePath, "utf8");

  if (extension === ".md") {
    const { content } = matter(raw);
    return stripMarkdownSyntax(content);
  }

  const $ = load(raw);
  return ($("body").length > 0 ? $("body").text() : $.root().text()).replace(/\s+/g, " ").trim();
}

function collectPageRecords(rootDir: string, relativeSegments: string[] = []): PageRecord[] {
  if (!directoryExists(rootDir)) {
    return [];
  }

  const folderMeta = readFolderMeta(rootDir);
  const entries = fs.readdirSync(rootDir, { withFileTypes: true });
  const pages: PageRecord[] = [];

  for (const entry of entries) {
    if (isPrivateEntry(entry.name)) {
      continue;
    }

    const absolutePath = path.join(rootDir, entry.name);

    if (entry.isDirectory()) {
      pages.push(...collectPageRecords(absolutePath, [...relativeSegments, entry.name]));
      continue;
    }

    if (!entry.isFile() || !isSupportedFile(entry.name)) {
      continue;
    }

    const stem = entry.name.replace(/\.(md|html)$/i, "");
    const slug = stem === "index" ? relativeSegments : [...relativeSegments, stem];
    pages.push(readPageMetadata(absolutePath, slug, folderMeta, stem));
  }

  return pages;
}

function sortByOrder<T extends { href: string }>(
  items: T[],
  order: string[] | undefined,
  currentSlug: string[],
  domain: DomainConfig,
): T[] {
  if (!order || order.length === 0) {
    return items.sort((left, right) => left.href.localeCompare(right.href));
  }

  const orderIndex = new Map(
    order.map((item, index) => [
      item === "index"
        ? urlForSlug(domain, currentSlug)
        : urlForSlug(domain, [...currentSlug, item]),
      index,
    ]),
  );

  return [...items].sort((left, right) => {
    const leftOrder = orderIndex.get(left.href);
    const rightOrder = orderIndex.get(right.href);

    if (leftOrder !== undefined && rightOrder !== undefined) {
      return leftOrder - rightOrder;
    }

    if (leftOrder !== undefined) {
      return -1;
    }

    if (rightOrder !== undefined) {
      return 1;
    }

    return left.href.localeCompare(right.href);
  });
}

function buildNavigationTree(
  dirPath: string,
  domain: DomainConfig,
  slug: string[] = [],
): DocNavItem[] {
  if (!directoryExists(dirPath)) {
    return [];
  }

  const folderMeta = readFolderMeta(dirPath);
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const pages: DocNavItem[] = [];
  const sections: DocNavItem[] = [];

  for (const entry of entries) {
    if (isPrivateEntry(entry.name)) {
      continue;
    }

    const absolutePath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      const childSlug = [...slug, entry.name];
      const childMeta = readFolderMeta(absolutePath);
      const childItems = buildNavigationTree(absolutePath, domain, childSlug);
      const landingPage = childItems.find((item) => item.href === urlForSlug(domain, childSlug));
      const title = childMeta.title ?? titleFromSegment(entry.name);

      sections.push({
        title,
        href: landingPage?.href ?? urlForSlug(domain, childSlug),
        icon: resolveNavIconKey({
          explicitIcon: childMeta.icon ?? landingPage?.icon,
          hasChildren: true,
          slug: childSlug,
          title,
        }),
        page: Boolean(landingPage),
        children: childItems.filter((item) => item.href !== landingPage?.href),
      });
      continue;
    }

    if (!entry.isFile() || !isSupportedFile(entry.name)) {
      continue;
    }

    const stem = entry.name.replace(/\.(md|html)$/i, "");
    const pageSlug = stem === "index" ? slug : [...slug, stem];
    const metadata = readPageMetadata(absolutePath, pageSlug, folderMeta, stem);

    if (metadata.hideInNav) {
      continue;
    }

    pages.push({
      title: metadata.title,
      href: urlForSlug(domain, pageSlug),
      icon: metadata.icon,
      page: true,
      children: [],
    });
  }

  return sortByOrder([...pages, ...sections], folderMeta.order, slug, domain);
}

function extractTocItems(html: string): TocItem[] {
  const $ = load(html);
  const tocItems: TocItem[] = [];

  $("h2, h3").each((_, element) => {
    const id = $(element).attr("id");
    const text = $(element).text().trim();

    if (!id || !text) {
      return;
    }

    const tagName = element.tagName.toLowerCase();
    const depth = tagName === "h2" ? 2 : 3;

    tocItems.push({ id, text, depth });
  });

  return tocItems;
}

function normalizeHeadingText(value: string): string {
  return value
    .replace(/\s+/g, " ")
    .replace(/[^\p{Letter}\p{Number}\s]+/gu, "")
    .trim()
    .toLowerCase();
}

function stripLeadingDuplicateMarkdownTitle(html: string, pageTitle: string): string {
  const $ = load(html);
  const firstHeading = $("h1").first();

  if (firstHeading.length === 0) {
    return html;
  }

  if (normalizeHeadingText(firstHeading.text()) !== normalizeHeadingText(pageTitle)) {
    return html;
  }

  firstHeading.remove();

  return $.root().html() ?? html;
}

function stripLeadingMarkdownHeading(html: string): string {
  const $ = load(html);
  const firstHeading = $("h1").first();

  if (firstHeading.length === 0) {
    return html;
  }

  firstHeading.remove();

  return $.root().html() ?? html;
}

function resolveMarkdownPageTitle(
  html: string,
  frontmatterTitle: string | undefined,
  fallbackTitle: string,
): string {
  if (frontmatterTitle) {
    return frontmatterTitle;
  }

  const firstHeading = load(html)("h1").first().text().trim();

  return firstHeading || fallbackTitle;
}

function resolveDocFile(rootDir: string, slug: string[]): string | null {
  const joined = path.join(rootDir, ...slug);
  const directCandidate = resolveSupportedContentFile(joined);

  if (directCandidate) {
    return directCandidate;
  }

  for (const extension of SUPPORTED_EXTENSIONS) {
    const nestedIndexCandidate = path.join(joined, `index${extension}`);

    if (fs.existsSync(nestedIndexCandidate) && fs.statSync(nestedIndexCandidate).isFile()) {
      return nestedIndexCandidate;
    }
  }

  if (slug.length === 0) {
    for (const extension of SUPPORTED_EXTENSIONS) {
      const rootIndexCandidate = path.join(rootDir, `index${extension}`);

      if (fs.existsSync(rootIndexCandidate) && fs.statSync(rootIndexCandidate).isFile()) {
        return rootIndexCandidate;
      }
    }
  }

  return null;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderNavList(items: DocNavItem[]): string {
  if (items.length === 0) {
    return "";
  }

  const listItems = items
    .map((item) => {
      const children = renderNavList(item.children);

      return [
        `<li>`,
        `<a href="${escapeHtml(item.href)}">${escapeHtml(item.title)}</a>`,
        children,
        `</li>`,
      ].join("");
    })
    .join("");

  return `<ul>${listItems}</ul>`;
}

function buildSyntheticDomainIndexPage(domain: DomainConfig): LoadedDocPage | null {
  const navItems = getDomainNavigation(domain);

  if (navItems.length === 0) {
    return null;
  }

  return {
    title: domain.label,
    description: domain.description,
    kind: "html",
    html: [
      `<section class="space-y-6">`,
      `<p class="text-base text-base-content/72">${escapeHtml(domain.description)}</p>`,
      `<div class="space-y-4">`,
      renderNavList(navItems),
      `</div>`,
      `</section>`,
    ].join(""),
    shadowHtml: null,
    tocItems: [],
  };
}

function flattenNavigationPages(items: DocNavItem[]): DocPagerItem[] {
  return items.flatMap((item) => [
    ...(item.page ? [{ href: item.href, title: item.title }] : []),
    ...flattenNavigationPages(item.children),
  ]);
}

export function getDomainNavigation(domain: DomainConfig): DocNavItem[] {
  return buildNavigationTree(resolveDomainRoot(domain), domain, []);
}

export function getDomainById(domainId: string): DomainConfig | null {
  return getDomainConfigById(domainId);
}

export function getAllDomainSlugs(domain: DomainConfig): string[][] {
  return collectPageRecords(resolveDomainRoot(domain)).map((page) => page.slug);
}

export function getDomainSearchIndex(domain: DomainConfig): DocsSearchItem[] {
  return collectPageRecords(resolveDomainRoot(domain)).map((page) => ({
    body: extractPageSearchText(page.filePath),
    description: page.description ?? "",
    href: urlForSlug(domain, page.slug),
    title: page.title,
  }));
}

export function loadDomainPage(domain: DomainConfig, slug: string[]): LoadedDocPage | null {
  const rootDir = resolveDomainRoot(domain);

  if (!directoryExists(rootDir)) {
    return slug.length === 0 ? buildSyntheticDomainIndexPage(domain) : null;
  }

  const filePath = resolveDocFile(rootDir, slug);

  if (!filePath) {
    if (slug.length === 0) {
      return buildSyntheticDomainIndexPage(domain);
    }

    return null;
  }

  const extension = path.extname(filePath).toLowerCase();
  const pipeline = getContentPipelineConfig();
  const folderMeta = readFolderMeta(path.dirname(filePath));
  const fallbackTitle = titleFromFilePath(filePath);

  if (extension === ".md") {
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    const frontmatter = data as Frontmatter;
    const renderedHtml = rewriteMarkdownContentLinks(renderMarkdown(content, { filePath, pipeline }), {
      currentFilePath: filePath,
      domain,
      rootDir,
    });
    const title = usesFilenamePageTitle(folderMeta)
      ? fallbackTitle
      : resolveMarkdownPageTitle(renderedHtml, frontmatter.title, fallbackTitle);
    const html = usesFilenamePageTitle(folderMeta)
      ? stripLeadingMarkdownHeading(renderedHtml)
      : stripLeadingDuplicateMarkdownTitle(renderedHtml, title);

    return {
      title,
      description: frontmatter.description ?? null,
      kind: "markdown",
      html,
      shadowHtml: null,
      tocItems: frontmatter.toc === false ? [] : extractTocItems(html),
    };
  }

  const rendered = renderHtmlDocument(fs.readFileSync(filePath, "utf8"), pipeline);

  return {
    title: usesFilenamePageTitle(folderMeta) ? fallbackTitle : rendered.title ?? fallbackTitle,
    description: rendered.description,
    kind: "html",
    html: rendered.contentHtml,
    shadowHtml: rendered.shadowHtml,
    tocItems: [],
  };
}

export function getDomainPageNeighbors(domain: DomainConfig, slug: string[]): {
  next: DocPagerItem | null;
  previous: DocPagerItem | null;
} {
  const pages = flattenNavigationPages(getDomainNavigation(domain));
  const currentHref = urlForSlug(domain, slug);
  const currentIndex = pages.findIndex((item) => item.href === currentHref);

  if (currentIndex === -1) {
    return {
      previous: null,
      next: null,
    };
  }

  return {
    previous: pages[currentIndex - 1] ?? null,
    next: pages[currentIndex + 1] ?? null,
  };
}

export function getDocsNavigation(): DocNavItem[] {
  return getDomainNavigation(getDocsDomainConfig());
}

export function getDocsDomain(): DomainConfig {
  return getDocsDomainConfig();
}

export function getAllDocSlugs(): string[][] {
  return getAllDomainSlugs(getDocsDomainConfig());
}

export function getDocsSearchIndex(): DocsSearchItem[] {
  return getDomainSearchIndex(getDocsDomainConfig());
}

export function loadDocPage(slug: string[]): LoadedDocPage | null {
  return loadDomainPage(getDocsDomainConfig(), slug);
}

export function getDocPageNeighbors(slug: string[]) {
  return getDomainPageNeighbors(getDocsDomainConfig(), slug);
}
