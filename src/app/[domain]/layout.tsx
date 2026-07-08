import { notFound } from "next/navigation";

import { DocsShell } from "@/components/docs/DocsShell";
import {
  getDomainById,
  getDomainNavigation,
  getDomainSearchIndex,
} from "@/lib/content/docs";
import {
  getCodeThemeOptions,
  getContentPipelineConfig,
  getDomainConfigs,
  getSiteConfig,
  getThemeOptions,
} from "@/lib/config/site";

export const dynamic = "force-dynamic";

type ContentDomainLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{
    domain: string;
  }>;
}>;

export default async function ContentDomainLayout({
  children,
  params,
}: ContentDomainLayoutProps) {
  const { domain: domainId } = await params;
  const currentDomain = getDomainById(domainId);

  if (!currentDomain || currentDomain.id === "docs") {
    notFound();
  }

  const site = getSiteConfig();
  const domains = getDomainConfigs();
  const contentPipeline = getContentPipelineConfig();
  const themes = getThemeOptions().filter((theme) => currentDomain.allowed_themes.includes(theme.id));
  const codeThemes = getCodeThemeOptions();
  const navItems = getDomainNavigation(currentDomain);
  const searchItems = getDomainSearchIndex(currentDomain);

  return (
    <DocsShell
      brandName={site.brand_name}
      codeThemeMode={contentPipeline.code.theme_mode}
      codeThemes={codeThemes}
      currentDomain={currentDomain}
      defaultCodeTheme={site.default_code_theme}
      defaultTheme={currentDomain.default_theme}
      domains={domains}
      navItems={navItems}
      searchItems={searchItems}
      themes={themes}
    >
      {children}
    </DocsShell>
  );
}
