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
  page_title_source?: "document" | "filename";
  internal_link_text_source?: "authored" | "filename";
};

type Frontmatter = {
  title?: string;
  description?: string;
  toc?: boolean;
  hide_in_nav?: boolean;
  difficulty?: "unknown" | "basic" | "intermediate" | "advanced" | "expert" | "specialist";
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
  description: string | null;
  page?: boolean;
  children: DocNavItem[];
};

export type DocLandingCard = {
  title: string;
  href: string;
  icon?: string;
  description: string | null;
};

export type LoadedDocPage = {
  title: string;
  description: string | null;
  kind: "markdown" | "html";
  frameHtml: string | null;
  frameHeightHint: number | null;
  html: string;
  landingCards: DocLandingCard[];
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
const CONTENT_ASSET_ROUTE_PREFIX = "/content-assets";
const ARTICLE_ASSET_ROUTE_PREFIX = "/articles";
const ARTICLE_ASSET_ROOT = path.resolve(process.cwd(), "public/articles");
const INLINE_CONTENT_REFERENCE_PATTERN = /^content\/[A-Za-z0-9._/-]+\.(?:md|html)$/u;
const referenceTitleCache = new Map<string, string>();
const headingAnchorCache = new Map<string, Map<string, string>>();
const DIFFICULTY_ICON_MAP = {
  unknown: "carbon:unknown",
  basic: "mdi:alphabet-a-box-outline",
  intermediate: "mdi:alphabet-b-box-outline",
  advanced: "mdi:alphabet-c-box-outline",
  expert: "mdi:alphabet-d-box-outline",
  specialist: "mdi:alphabet-e-box-outline",
} as const;

function resolveDifficultyIcon(
  difficulty: Frontmatter["difficulty"] | undefined,
): (typeof DIFFICULTY_ICON_MAP)[keyof typeof DIFFICULTY_ICON_MAP] | undefined {
  if (!difficulty) {
    return undefined;
  }

  return DIFFICULTY_ICON_MAP[difficulty];
}

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

function slugifyHeadingAnchor(value: string): string {
  return encodeURIComponent(
    value
      .trim()
      .toLowerCase()
      .replace(/[^\p{Letter}\p{Number}\s-]+/gu, "")
      .replace(/\s+/g, "-"),
  );
}

function usesFilenamePageTitle(folderMeta: FolderMeta): boolean {
  return folderMeta.page_title_source === "filename";
}

function prefersFilenamePageTitle(folderMeta: FolderMeta, stem: string): boolean {
  return usesFilenamePageTitle(folderMeta) && stem !== "index";
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

function isPathInsideRoot(rootDir: string, targetPath: string): boolean {
  const relativePath = path.relative(rootDir, targetPath);

  return relativePath !== "" && !relativePath.startsWith("..") && !path.isAbsolute(relativePath);
}

function encodeUrlPathSegments(value: string): string {
  return value
    .split(/[\\/]+/)
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function resolveExistingAssetFile(basePath: string): string | null {
  if (!fs.existsSync(basePath) || !fs.statSync(basePath).isFile()) {
    return null;
  }

  return basePath;
}

function resolveRelativeAssetFile(
  rootDir: string,
  currentFilePath: string,
  relativePath: string,
): string | null {
  const targetPath = path.resolve(path.dirname(currentFilePath), relativePath);

  if (!isPathInsideRoot(rootDir, targetPath)) {
    return null;
  }

  return resolveExistingAssetFile(targetPath);
}

export function urlForContentAsset(domain: DomainConfig, assetPath: string): string {
  return `${CONTENT_ASSET_ROUTE_PREFIX}/${encodeURIComponent(domain.id)}/${encodeUrlPathSegments(assetPath)}`;
}

export function urlForArticleAsset(assetPath: string): string {
  return `${ARTICLE_ASSET_ROUTE_PREFIX}/${encodeUrlPathSegments(assetPath)}`;
}

export function resolveDomainAssetFile(domain: DomainConfig, assetSegments: string[]): string | null {
  const rootDir = resolveDomainRoot(domain);
  const targetPath = path.resolve(rootDir, ...assetSegments);

  if (!isPathInsideRoot(rootDir, targetPath)) {
    return null;
  }

  return resolveExistingAssetFile(targetPath);
}

export function resolveArticleAssetFile(assetSegments: string[]): string | null {
  const targetPath = path.resolve(ARTICLE_ASSET_ROOT, ...assetSegments);

  if (!isPathInsideRoot(ARTICLE_ASSET_ROOT, targetPath)) {
    return null;
  }

  return resolveExistingAssetFile(targetPath);
}

function resolveRelativeArticleAssetPath(relativePath: string): string | null {
  const normalizedPath = path.posix.normalize(relativePath.replaceAll("\\", "/"));
  const match = normalizedPath.match(/^(?:\.\.\/)+articles\/(.+)$/u);

  if (!match) {
    return null;
  }

  const articleAssetPath = match[1]
    .split("/")
    .map((segment) => segment.trim())
    .filter(Boolean)
    .join("/");

  if (!articleAssetPath) {
    return null;
  }

  return resolveArticleAssetFile(articleAssetPath.split("/")) ? articleAssetPath : null;
}

function readReferenceTitle(filePath: string): string {
  const cachedTitle = referenceTitleCache.get(filePath);

  if (cachedTitle) {
    return cachedTitle;
  }

  const fallbackTitle = titleFromFilePath(filePath);
  const extension = path.extname(filePath).toLowerCase();
  let resolvedTitle = fallbackTitle;

  if (extension === ".md") {
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    const frontmatter = data as Frontmatter;
    const firstHeading = content.match(/^#\s+(.+)$/mu)?.[1]?.trim();
    resolvedTitle = frontmatter.title?.trim() || firstHeading || fallbackTitle;
  } else if (extension === ".html") {
    const document = load(fs.readFileSync(filePath, "utf8"));
    resolvedTitle =
      document("title").first().text().trim() || document("h1").first().text().trim() || fallbackTitle;
  }

  referenceTitleCache.set(filePath, resolvedTitle);
  return resolvedTitle;
}

function normalizeSectionLabel(value: string): string {
  const compactValue = value.replace(/^appendix\s+/iu, "").trim();

  if (/^[a-z]/u.test(compactValue)) {
    return `${compactValue[0].toUpperCase()}${compactValue.slice(1)}`;
  }

  return compactValue;
}

function extractHeadingSectionLabel(headingText: string): string | null {
  const appendixMatch = headingText.match(/^Appendix\s+([A-Z])\./u);

  if (appendixMatch) {
    return appendixMatch[1];
  }

  const alphanumericMatch = headingText.match(/^([A-Z]\.\d+(?:\.\d+)*)\b/u);

  if (alphanumericMatch) {
    return alphanumericMatch[1];
  }

  const numericMatch = headingText.match(/^(\d+(?:\.\d+)*)\b/u);

  if (numericMatch) {
    return numericMatch[1];
  }

  return null;
}

function getHeadingAnchorMap(filePath: string): Map<string, string> {
  const cachedMap = headingAnchorCache.get(filePath);

  if (cachedMap) {
    return cachedMap;
  }

  if (path.extname(filePath).toLowerCase() !== ".md") {
    const emptyMap = new Map<string, string>();
    headingAnchorCache.set(filePath, emptyMap);
    return emptyMap;
  }

  const { content } = matter(fs.readFileSync(filePath, "utf8"));
  const headingMap = new Map<string, string>();
  const fenceStack: string[] = [];

  for (const line of content.split(/\r?\n/u)) {
    const trimmedLine = line.trim();
    const fenceMatch = trimmedLine.match(/^(```+|~~~+)/u);

    if (fenceMatch) {
      const fenceMarker = fenceMatch[1][0];

      if (fenceStack.at(-1) === fenceMarker) {
        fenceStack.pop();
      } else if (fenceStack.length === 0) {
        fenceStack.push(fenceMarker);
      }

      continue;
    }

    if (fenceStack.length > 0) {
      continue;
    }

    const headingMatch = line.match(/^(#{2,6})\s+(.+)$/u);

    if (!headingMatch) {
      continue;
    }

    const headingText = headingMatch[2].trim();
    const label = extractHeadingSectionLabel(headingText);

    if (!label || headingMap.has(label)) {
      continue;
    }

    headingMap.set(label, slugifyHeadingAnchor(headingText));
  }

  headingAnchorCache.set(filePath, headingMap);
  return headingMap;
}

function resolveSectionAnchorFromTail(filePath: string, tailText: string): string | null {
  const normalizedTail = tailText.trimStart();

  if (!normalizedTail) {
    return null;
  }

  const directSectionMatch = normalizedTail.match(
    /^(?:section|sections)\s+((?:appendix\s+)?[A-Z](?:\.\d+)*|\d+(?:\.\d+)*)\b/iu,
  );
  const appendixMatch = normalizedTail.match(/^(?:appendix|appendices)\s+([A-Z](?:\.\d+)*)\b/iu);
  const sectionLabel = normalizeSectionLabel(directSectionMatch?.[1] ?? appendixMatch?.[1] ?? "");

  if (!sectionLabel) {
    return null;
  }

  return getHeadingAnchorMap(filePath).get(sectionLabel) ?? null;
}

function resolveContentReferencePath(referencePath: string): {
  filePath: string;
  href: string;
  title: string;
} | null {
  const normalizedPath = referencePath.trim().replaceAll("\\", "/");

  if (!INLINE_CONTENT_REFERENCE_PATTERN.test(normalizedPath)) {
    return null;
  }

  const pathSegments = normalizedPath.split("/").filter(Boolean);

  if (pathSegments.length < 3 || pathSegments[0] !== "content") {
    return null;
  }

  const domain = getDomainConfigById(pathSegments[1]);

  if (!domain) {
    return null;
  }

  const rootDir = resolveDomainRoot(domain);
  const filePath = resolveSupportedContentFile(path.join(process.cwd(), normalizedPath));

  if (!filePath) {
    return null;
  }

  const slug = slugForFilePath(rootDir, filePath);

  if (!slug) {
    return null;
  }

  return {
    filePath,
    href: urlForSlug(domain, slug),
    title: readReferenceTitle(filePath),
  };
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

  const applyArticleLinkBehavior = (element: Parameters<typeof $>[0], href: string) => {
    const { pathname } = splitHref(href);

    if (!pathname.startsWith(ARTICLE_ASSET_ROUTE_PREFIX)) {
      return;
    }

    $(element).attr("target", "_blank");
    $(element).attr("rel", "noopener noreferrer");
  };

  const rewriteRelativeFileReference = (
    value: string,
    assign: (nextValue: string) => void,
  ) => {
    if (!value || value.startsWith("#")) {
      return;
    }

    const { pathname, query, hash } = splitHref(value);

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

    if (targetFile) {
      const targetSlug = slugForFilePath(rootDir, targetFile);

      if (targetSlug) {
        assign(`${urlForSlug(domain, targetSlug)}${query}${hash}`);
      }

      return;
    }

    const articleAssetPath = resolveRelativeArticleAssetPath(resolvedPathname);

    if (articleAssetPath) {
      assign(`${urlForArticleAsset(articleAssetPath)}${query}${hash}`);
      return;
    }

    const assetFile = resolveRelativeAssetFile(rootDir, currentFilePath, resolvedPathname);

    if (!assetFile) {
      return;
    }

    const assetRelativePath = path.relative(rootDir, assetFile);
    assign(`${urlForContentAsset(domain, assetRelativePath)}${query}${hash}`);
  };

  $("a[href]").each((_, element) => {
    const href = $(element).attr("href");

    rewriteRelativeFileReference(href ?? "", (nextHref) => {
      $(element).attr("href", nextHref);

      const { pathname } = splitHref(nextHref);

      if (!pathname.startsWith(domain.home_path)) {
        return;
      }

      const decodedPathname = decodeURIComponent(pathname);
      const slugPath = decodedPathname
        .replace(new RegExp(`^${domain.home_path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/?`), "")
        .split("/")
        .filter(Boolean);
      const targetFile = resolveDocFile(rootDir, slugPath);

      if (!targetFile) {
        return;
      }

      const targetFolderMeta = readFolderMeta(path.dirname(targetFile));

      if (usesFilenameLinkText(targetFolderMeta)) {
        $(element).text(titleFromFilePath(targetFile));
      }
    });

    applyArticleLinkBehavior(element, $(element).attr("href") ?? "");
  });

  $("img[src]").each((_, element) => {
    const src = $(element).attr("src");

    rewriteRelativeFileReference(src ?? "", (nextSrc) => {
      $(element).attr("src", nextSrc);
    });
  });

  $("code").each((_, element) => {
    if ($(element).closest("pre").length > 0 || $(element).parent("a").length > 0) {
      return;
    }

    const rawReference = $(element).text().trim();
    const resolvedReference = resolveContentReferencePath(rawReference);

    if (!resolvedReference) {
      return;
    }

    const nextSibling = element.next;
    const trailingText = nextSibling?.type === "text" ? nextSibling.data ?? "" : "";
    const sectionAnchor = resolveSectionAnchorFromTail(resolvedReference.filePath, trailingText);
    const targetHref = sectionAnchor
      ? `${resolvedReference.href}#${sectionAnchor}`
      : resolvedReference.href;

    $(element).replaceWith(
      `<a href="${escapeHtml(targetHref)}" data-inline-doc-reference="true">${escapeHtml(resolvedReference.title)}</a>`,
    );
  });

  return $("body").length > 0 ? $("body").html() ?? html : $.root().html() ?? html;
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
  const fallbackTitle = titleFromFilePath(filePath);

  if (extension === ".md") {
    const raw = fs.readFileSync(filePath, "utf8");
    const { data } = matter(raw);
    const frontmatter = data as Frontmatter;
    const title = prefersFilenamePageTitle(folderMeta, stem)
      ? fallbackTitle
      : frontmatter.title ?? fallbackTitle;

    return {
      filePath,
      slug,
      title,
      description: frontmatter.description ?? null,
      hideInNav: frontmatter.hide_in_nav ?? false,
      icon: resolveNavIconKey({
        explicitIcon: frontmatter.icon ?? resolveDifficultyIcon(frontmatter.difficulty),
        slug,
        title,
      }),
    };
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const $ = load(raw);
  const title = prefersFilenamePageTitle(folderMeta, stem)
    ? fallbackTitle
    : $("title").first().text().trim() || fallbackTitle;

  return {
    filePath,
    slug,
    title,
    description: $("p").first().text().trim() || null,
    hideInNav: false,
    icon: resolveNavIconKey({
      explicitIcon: undefined,
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
        description: landingPage?.description ?? null,
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
      description: metadata.description,
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

  return $("body").length > 0 ? $("body").html() ?? html : $.root().html() ?? html;
}

function stripLeadingMarkdownHeading(html: string): string {
  const $ = load(html);
  const firstHeading = $("h1").first();

  if (firstHeading.length === 0) {
    return html;
  }

  firstHeading.remove();

  return $("body").length > 0 ? $("body").html() ?? html : $.root().html() ?? html;
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

function findNavigationItem(items: DocNavItem[], href: string): DocNavItem | null {
  for (const item of items) {
    if (item.href === href) {
      return item;
    }

    const nestedMatch = findNavigationItem(item.children, href);

    if (nestedMatch) {
      return nestedMatch;
    }
  }

  return null;
}

function toLandingCard(item: DocNavItem): DocLandingCard {
  return {
    title: item.title,
    href: item.href,
    icon: item.icon,
    description: item.description,
  };
}

function resolveLandingCards(domain: DomainConfig, slug: string[]): DocLandingCard[] {
  const navItems = getDomainNavigation(domain);

  if (slug.length === 0) {
    return navItems.map(toLandingCard);
  }

  const currentItem = findNavigationItem(navItems, urlForSlug(domain, slug));

  if (!currentItem || currentItem.children.length === 0) {
    return [];
  }

  return currentItem.children.map(toLandingCard);
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
    frameHtml: null,
    frameHeightHint: null,
    html: [
      `<section class="space-y-6">`,
      `<p class="text-base text-base-content/72">${escapeHtml(domain.description)}</p>`,
      `</section>`,
    ].join(""),
    landingCards: navItems.map(toLandingCard),
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
  const stem = path.basename(filePath, extension);
  const preferFilenameTitle = prefersFilenamePageTitle(folderMeta, stem);
  const landingCards = resolveLandingCards(domain, slug);

  if (extension === ".md") {
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    const frontmatter = data as Frontmatter;
    const renderedHtml = rewriteMarkdownContentLinks(renderMarkdown(content, { filePath, pipeline }), {
      currentFilePath: filePath,
      domain,
      rootDir,
    });
    const title = preferFilenameTitle
      ? fallbackTitle
      : resolveMarkdownPageTitle(renderedHtml, frontmatter.title, fallbackTitle);
    const html = preferFilenameTitle
      ? stripLeadingMarkdownHeading(renderedHtml)
      : stripLeadingDuplicateMarkdownTitle(renderedHtml, title);

    return {
      title,
      description: frontmatter.description ?? null,
      kind: "markdown",
      frameHtml: null,
      frameHeightHint: null,
      html,
      landingCards,
      shadowHtml: null,
      tocItems: frontmatter.toc === false ? [] : extractTocItems(html),
    };
  }

  const rendered = renderHtmlDocument(fs.readFileSync(filePath, "utf8"), pipeline);

  return {
    title: preferFilenameTitle ? fallbackTitle : rendered.title ?? fallbackTitle,
    description: rendered.description,
    kind: "html",
    frameHtml: rendered.frameHtml,
    frameHeightHint: rendered.frameHeightHint,
    html: rendered.contentHtml,
    landingCards,
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
