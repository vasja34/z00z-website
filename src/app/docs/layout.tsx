import { DocsShell } from "@/components/docs/DocsShell";
import { getDocsNavigation, getDocsSearchIndex } from "@/lib/content/docs";
import {
  getCodeThemeOptions,
  getContentPipelineConfig,
  getDocsDomainConfig,
  getDomainConfigs,
  getSiteConfig,
  getThemeOptions,
} from "@/lib/config/site";

export const dynamic = "force-dynamic";

export default function DocsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const site = getSiteConfig();
  const currentDomain = getDocsDomainConfig();
  const domains = getDomainConfigs();
  const contentPipeline = getContentPipelineConfig();
  const themes = getThemeOptions().filter((theme) => currentDomain.allowed_themes.includes(theme.id));
  const codeThemes = getCodeThemeOptions();
  const navItems = getDocsNavigation();
  const searchItems = getDocsSearchIndex();

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
