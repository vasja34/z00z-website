import fs from "node:fs";
import path from "node:path";

import YAML from "yaml";
import { z } from "zod";

const CONFIG_ROOT = path.join(process.cwd(), "config");
const CONTENT_ROOT = path.join(process.cwd(), "content");
const DOMAINS_CONFIG_NAME = "domains.yaml";
const DOMAINS_CONFIG_PATH = path.join(CONFIG_ROOT, DOMAINS_CONFIG_NAME);

const siteConfigSchema = z.object({
  brand_name: z.string().min(1),
  brand_label: z.string().min(1),
  default_theme: z.string().min(1),
  default_code_theme: z.string().min(1),
  title_suffix: z.string().min(1),
  description: z.string().min(1),
});

const domainConfigSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().min(1).optional(),
  mode: z.enum(["content", "hybrid", "app"]),
  status: z.enum(["active", "planned"]),
  home_path: z.string().startsWith("/"),
  content_root: z.string().min(1),
  hostnames: z.array(z.string().min(1)).min(1),
  default_theme: z.string().min(1),
  allowed_themes: z.array(z.string().min(1)).min(1),
  default_canvas: z.enum(["content", "wide", "full"]),
  show_toc: z.boolean(),
  route_strategy: z.enum(["content-catchall", "app-router", "hybrid"]),
});

const themeOptionSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  description: z.string().min(1),
});

const codeThemeOptionSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  description: z.string().min(1),
  mode: z.enum(["light", "dark"]),
  background: z.string().min(1),
  border: z.string().min(1),
  foreground: z.string().min(1),
  comment: z.string().min(1),
  keyword: z.string().min(1),
  string: z.string().min(1),
  number: z.string().min(1),
  title: z.string().min(1),
});

const contentPipelineSchema = z.object({
  markdown: z.object({
    html: z.boolean(),
    linkify: z.boolean(),
    typographer: z.boolean(),
    toc: z.boolean(),
    abbreviation: z.boolean(),
    alerts: z.boolean(),
    align: z.boolean(),
    anchor: z.boolean(),
    attrs: z.boolean(),
    containers: z.boolean(),
    definition_lists: z.boolean(),
    embeds: z.boolean(),
    figures: z.boolean(),
    footnotes: z.boolean(),
    include: z.boolean(),
    image_lazyload: z.boolean(),
    image_size: z.boolean(),
    insertions: z.boolean(),
    katex: z.boolean(),
    mark: z.boolean(),
    snippet: z.boolean(),
    spoiler: z.boolean(),
    stylize: z.boolean(),
    sub_sup: z.boolean(),
    tabs: z.boolean(),
    tasklist: z.boolean(),
    mermaid: z.boolean(),
    collapsible: z.boolean(),
  }),
  html: z.object({
    allow_local_styles: z.boolean(),
    allow_scripts: z.boolean(),
    allow_inline_event_handlers: z.boolean(),
  }),
  code: z.object({
    auto_detect_html_blocks: z.boolean(),
    theme_mode: z.enum(["adaptive", "selectable"]),
  }),
});

type AllowedThemesSerializationMode = "define-shared" | "use-shared" | "inline";

function formatZodError(error: z.ZodError): string {
  return error.issues
    .map((issue) => {
      const location = issue.path.length > 0 ? issue.path.join(".") : "root";
      return `${location}: ${issue.message}`;
    })
    .join("; ");
}

function parseYamlContent<T>(fileName: string, raw: string, schema: z.ZodType<T>): T {
  const parsed = YAML.parse(raw);

  try {
    return schema.parse(parsed);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(`Invalid config in ${fileName}: ${formatZodError(error)}`);
    }

    throw error;
  }
}

function readYamlFile<T>(fileName: string, schema: z.ZodType<T>): T {
  const filePath = path.join(CONFIG_ROOT, fileName);
  const raw = fs.readFileSync(filePath, "utf8");
  return parseYamlContent(fileName, raw, schema);
}

function titleFromFolderName(value: string): string {
  const explicitLabels: Record<string, string> = {
    dao: "DAO",
  };

  if (explicitLabels[value]) {
    return explicitLabels[value];
  }

  return value
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function inferDomainDescription(domainId: string, label: string): string {
  const descriptions: Record<string, string> = {
    dao: "DAO governance materials and coordination documents.",
    treasury: "Treasury policies, operations, and financial planning materials.",
    whitepapers: "Long-form whitepapers, research papers, and canonical references.",
  };

  return descriptions[domainId] ?? `${label} content hub.`;
}

function inferDomainIcon(domainId: string): string {
  const icons: Record<string, string> = {
    dao: "users",
    treasury: "wallet",
    whitepapers: "flask",
  };

  return icons[domainId] ?? "file";
}

function resolveProjectPath(relativePath: string): string {
  return path.join(process.cwd(), relativePath);
}

function contentRootExists(contentRoot: string): boolean {
  const absolutePath = resolveProjectPath(contentRoot);
  return fs.existsSync(absolutePath) && fs.statSync(absolutePath).isDirectory();
}

function shouldKeepConfiguredDomain(domain: DomainConfig): boolean {
  if (domain.status === "planned") {
    return true;
  }

  if (domain.mode !== "content" || domain.route_strategy !== "content-catchall") {
    return true;
  }

  return contentRootExists(domain.content_root);
}

function normalizeConfiguredDomains(configuredDomains: DomainConfig[]): {
  changed: boolean;
  domains: DomainConfig[];
} {
  const seenIds = new Set<string>();
  const seenContentRoots = new Set<string>();
  const domains: DomainConfig[] = [];
  let changed = false;

  for (const domain of configuredDomains) {
    if (seenIds.has(domain.id) || seenContentRoots.has(domain.content_root)) {
      changed = true;
      continue;
    }

    if (!shouldKeepConfiguredDomain(domain)) {
      changed = true;
      continue;
    }

    seenIds.add(domain.id);
    seenContentRoots.add(domain.content_root);
    domains.push(domain);
  }

  return {
    changed,
    domains,
  };
}

function inferDomainConfigs(configuredDomains: DomainConfig[]): DomainConfig[] {
  if (!fs.existsSync(CONTENT_ROOT)) {
    return [];
  }

  const configuredRoots = new Set(configuredDomains.map((domain) => domain.content_root));
  const themeIds = getThemeOptions().map((theme) => theme.id);
  const site = getSiteConfig();

  return fs
    .readdirSync(CONTENT_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .map((entry) => entry.name)
    .filter((dirName) => !configuredRoots.has(`content/${dirName}`))
    .sort((left, right) => left.localeCompare(right))
    .map((dirName) => {
      const label = titleFromFolderName(dirName);

      return {
        id: dirName,
        label,
        description: inferDomainDescription(dirName, label),
        icon: inferDomainIcon(dirName),
        mode: "content",
        status: "active",
        home_path: `/${dirName}`,
        content_root: `content/${dirName}`,
        hostnames: [`${dirName}.z00z.io`],
        default_theme: site.default_theme,
        allowed_themes: themeIds,
        default_canvas: "content",
        show_toc: true,
        route_strategy: "content-catchall",
      } satisfies DomainConfig;
    });
}

function escapeYamlString(value: string): string {
  return value.replaceAll("\\", "\\\\").replaceAll('"', '\\"');
}

function isReadonlyConfigError(error: unknown): boolean {
  return error instanceof Error && "code" in error && ["EACCES", "EPERM", "EROFS"].includes(String(error.code));
}

function serializeAllowedThemes(
  themeIds: string[],
  mode: AllowedThemesSerializationMode,
): string[] {
  if (mode === "use-shared") {
    return ["  allowed_themes: *shared_allowed_themes"];
  }

  if (mode === "define-shared") {
    return [
      "  allowed_themes: &shared_allowed_themes",
      ...themeIds.map((themeId) => `    - ${themeId}`),
    ];
  }

  return [
    "  allowed_themes:",
    ...themeIds.map((themeId) => `    - ${themeId}`),
  ];
}

function serializeDomainConfig(
  domain: DomainConfig,
  allowedThemesMode: AllowedThemesSerializationMode,
): string {
  return [
    `- id: ${domain.id}`,
    `  label: "${escapeYamlString(domain.label)}"`,
    `  description: "${escapeYamlString(domain.description)}"`,
    ...(domain.icon ? [`  icon: "${escapeYamlString(domain.icon)}"`] : []),
    `  mode: ${domain.mode}`,
    `  status: ${domain.status}`,
    `  home_path: "${escapeYamlString(domain.home_path)}"`,
    `  content_root: "${escapeYamlString(domain.content_root)}"`,
    "  hostnames:",
    ...domain.hostnames.map((hostname) => `    - "${escapeYamlString(hostname)}"`),
    `  default_theme: "${escapeYamlString(domain.default_theme)}"`,
    ...serializeAllowedThemes(domain.allowed_themes, allowedThemesMode),
    `  default_canvas: ${domain.default_canvas}`,
    `  show_toc: ${domain.show_toc ? "true" : "false"}`,
    `  route_strategy: ${domain.route_strategy}`,
  ].join("\n");
}

function arraysEqual(left: string[], right: string[]): boolean {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

function canUseSharedThemesAlias(domains: DomainConfig[]): boolean {
  if (domains.length === 0) {
    return false;
  }

  const [firstDomain, ...restDomains] = domains;
  return restDomains.every((domain) => arraysEqual(domain.allowed_themes, firstDomain.allowed_themes));
}

function synchronizeSharedAllowedThemes(
  domains: DomainConfig[],
  preferSharedThemesAlias: boolean,
): {
  changed: boolean;
  domains: DomainConfig[];
} {
  if (!preferSharedThemesAlias || !canUseSharedThemesAlias(domains)) {
    return {
      changed: false,
      domains,
    };
  }

  const themeIds = getThemeOptions().map((theme) => theme.id);

  if (domains.length === 0 || arraysEqual(domains[0].allowed_themes, themeIds)) {
    return {
      changed: false,
      domains,
    };
  }

  return {
    changed: true,
    domains: domains.map((domain) => ({
      ...domain,
      allowed_themes: themeIds,
    })),
  };
}

function serializeDomainConfigs(domains: DomainConfig[], preferSharedThemesAlias: boolean): string {
  const useSharedThemesAlias = preferSharedThemesAlias && canUseSharedThemesAlias(domains);

  return `${domains
    .map((domain, index) =>
      serializeDomainConfig(
        domain,
        useSharedThemesAlias ? (index === 0 ? "define-shared" : "use-shared") : "inline",
      ),
    )
    .join("\n")}\n`;
}

function readConfiguredDomains(): DomainConfig[] {
  return readYamlFile(DOMAINS_CONFIG_NAME, z.array(domainConfigSchema));
}

export function syncDomainConfigFile(): DomainConfig[] {
  const latestRaw = fs.readFileSync(DOMAINS_CONFIG_PATH, "utf8");
  const preferSharedThemesAlias = latestRaw.includes("&shared_allowed_themes");
  const configuredDomains = readConfiguredDomains();
  const normalizedConfiguredDomains = normalizeConfiguredDomains(configuredDomains);
  const synchronizedConfiguredDomains = synchronizeSharedAllowedThemes(
    normalizedConfiguredDomains.domains,
    preferSharedThemesAlias,
  );
  const missingDomains = inferDomainConfigs(synchronizedConfiguredDomains.domains);

  if (
    !normalizedConfiguredDomains.changed &&
    !synchronizedConfiguredDomains.changed &&
    missingDomains.length === 0
  ) {
    return synchronizedConfiguredDomains.domains;
  }

  const latestConfiguredDomains = parseYamlContent(
    DOMAINS_CONFIG_NAME,
    latestRaw,
    z.array(domainConfigSchema),
  );
  const normalizedLatestConfiguredDomains = normalizeConfiguredDomains(latestConfiguredDomains);
  const synchronizedLatestConfiguredDomains = synchronizeSharedAllowedThemes(
    normalizedLatestConfiguredDomains.domains,
    preferSharedThemesAlias,
  );
  const missingAfterRefresh = inferDomainConfigs(synchronizedLatestConfiguredDomains.domains);

  if (
    !normalizedLatestConfiguredDomains.changed &&
    !synchronizedLatestConfiguredDomains.changed &&
    missingAfterRefresh.length === 0
  ) {
    return synchronizedLatestConfiguredDomains.domains;
  }

  const nextDomains = [...synchronizedLatestConfiguredDomains.domains, ...missingAfterRefresh];
  const nextRaw = serializeDomainConfigs(nextDomains, preferSharedThemesAlias);

  try {
    if (nextRaw !== latestRaw) {
      fs.writeFileSync(DOMAINS_CONFIG_PATH, nextRaw, "utf8");
    }
  } catch (error) {
    if (isReadonlyConfigError(error)) {
      return nextDomains;
    }

    throw error;
  }

  return nextDomains;
}

export type SiteConfig = z.infer<typeof siteConfigSchema>;
export type DomainConfig = z.infer<typeof domainConfigSchema>;
export type ThemeOption = z.infer<typeof themeOptionSchema>;
export type CodeThemeOption = z.infer<typeof codeThemeOptionSchema>;
export type ContentPipelineConfig = z.infer<typeof contentPipelineSchema>;

export function getSiteConfig(): SiteConfig {
  return readYamlFile("site.yaml", siteConfigSchema);
}

export function getDomainConfigs(): DomainConfig[] {
  return syncDomainConfigFile();
}

export function getDomainConfigById(domainId: string): DomainConfig | null {
  return getDomainConfigs().find((domain) => domain.id === domainId) ?? null;
}

export function getDocsDomainConfig(): DomainConfig {
  const docsDomain = getDomainConfigById("docs");

  if (!docsDomain) {
    throw new Error("Missing docs domain configuration in config/domains.yaml");
  }

  return docsDomain;
}

export function getThemeOptions(): ThemeOption[] {
  return readYamlFile("themes.yaml", z.array(themeOptionSchema));
}

export function getCodeThemeOptions(): CodeThemeOption[] {
  return readYamlFile("code-themes.yaml", z.array(codeThemeOptionSchema));
}

export function getContentPipelineConfig(): ContentPipelineConfig {
  return readYamlFile("content-pipeline.yaml", contentPipelineSchema);
}
