import fs from "node:fs";
import path from "node:path";

import { load } from "cheerio";
import matter from "gray-matter";
import YAML from "yaml";

import { searchDocsItems } from "../src/lib/search.ts";

const repoRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const supportedExtensions = new Set([".md", ".html"]);

function isPrivateEntry(entryName) {
  return entryName.startsWith("_");
}

function titleFromSegment(value) {
  return value
    .replace(/\.(md|html)$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function urlForSlug(domain, slug) {
  return slug.length === 0 ? domain.home_path : `${domain.home_path}/${slug.join("/")}`;
}

function stripMarkdownSyntax(source) {
  return source
    .replace(/^---[\s\S]*?---/m, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*]\([^)]+\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]+\)/g, "$1")
    .replace(/^[>\-+*#]+\s?/gm, " ")
    .replace(/\{[%@][^]*?\}/g, " ")
    .replace(/[_*~]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function readPageMetadata(filePath, slug) {
  const extension = path.extname(filePath).toLowerCase();

  if (extension === ".md") {
    const raw = fs.readFileSync(filePath, "utf8");
    const { data } = matter(raw);

    return {
      filePath,
      slug,
      title: data.title ?? titleFromSegment(path.basename(filePath, extension)),
      description: data.description ?? "",
    };
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const $ = load(raw);

  return {
    filePath,
    slug,
    title: $("title").first().text().trim() || titleFromSegment(path.basename(filePath, extension)),
    description: $("p").first().text().trim() || "",
  };
}

function extractPageSearchText(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const raw = fs.readFileSync(filePath, "utf8");

  if (extension === ".md") {
    const { content } = matter(raw);
    return stripMarkdownSyntax(content);
  }

  const $ = load(raw);
  return ($("body").length > 0 ? $("body").text() : $.root().text()).replace(/\s+/g, " ").trim();
}

function collectPageRecords(rootDir, relativeSegments = []) {
  const entries = fs.readdirSync(rootDir, { withFileTypes: true });
  const pages = [];

  for (const entry of entries) {
    if (isPrivateEntry(entry.name)) {
      continue;
    }

    const absolutePath = path.join(rootDir, entry.name);

    if (entry.isDirectory()) {
      pages.push(...collectPageRecords(absolutePath, [...relativeSegments, entry.name]));
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();

    if (!supportedExtensions.has(extension)) {
      continue;
    }

    const stem = entry.name.replace(/\.(md|html)$/i, "");
    const slug = stem === "index" ? relativeSegments : [...relativeSegments, stem];
    pages.push(readPageMetadata(absolutePath, slug));
  }

  return pages;
}

function buildSearchItems(domain) {
  const rootDir = path.join(repoRoot, domain.content_root);

  return collectPageRecords(rootDir).map((page) => ({
    body: extractPageSearchText(page.filePath),
    description: page.description,
    href: urlForSlug(domain, page.slug),
    title: page.title,
  }));
}

function assertSearchCoverage(domain, items) {
  const failures = [];

  for (const item of items) {
    const results = searchDocsItems(items, item.title, 10);

    if (!results.some((result) => result.href === item.href)) {
      failures.push(`${item.href} (${item.title})`);
    }
  }

  return failures;
}

const domains = YAML.parse(fs.readFileSync(path.join(repoRoot, "config/domains.yaml"), "utf8"));
const failures = [];

for (const domain of domains) {
  const items = buildSearchItems(domain);
  const missing = assertSearchCoverage(domain, items);

  console.log(`search coverage ${domain.id}: ${items.length} pages checked`);

  if (missing.length > 0) {
    failures.push({ domain: domain.id, missing });
  }
}

if (failures.length > 0) {
  console.error("");
  console.error("Search coverage failed:");

  for (const failure of failures) {
    console.error(`- ${failure.domain}`);

    for (const item of failure.missing) {
      console.error(`  - ${item}`);
    }
  }

  process.exit(1);
}

console.log("");
console.log("Search coverage passed.");
