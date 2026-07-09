import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DocPagePager } from "@/components/docs/DocPagePager";
import { DocLandingCards } from "@/components/docs/DocLandingCards";
import { HtmlDocumentFrame } from "@/components/docs/HtmlDocumentFrame";
import { DocPageToc } from "@/components/docs/DocPageToc";
import { MarkdownEnhancer } from "@/components/docs/MarkdownEnhancer";
import { ShadowHtmlArticle } from "@/components/docs/ShadowHtmlArticle";
import { getDocPageNeighbors, getDocsDomain, loadDocPage } from "@/lib/content/docs";
import { getSiteConfig } from "@/lib/config/site";

type DocsPageProps = {
  params: Promise<{
    slug?: string[];
  }>;
};

export const dynamic = "force-dynamic";

function titleFromSegment(segment: string): string {
  return segment
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export async function generateMetadata({ params }: DocsPageProps): Promise<Metadata> {
  const { slug = [] } = await params;
  const page = loadDocPage(slug);
  const site = getSiteConfig();

  if (!page) {
    return {
      title: `Not Found · ${site.title_suffix}`,
    };
  }

  return {
    title: `${page.title} · ${site.title_suffix}`,
    description: page.description ?? site.description,
  };
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { slug = [] } = await params;
  const page = loadDocPage(slug);
  const domain = getDocsDomain();
  const neighbors = getDocPageNeighbors(slug);
  const enhancerKey = slug.join("/") || "index";

  if (!page) {
    notFound();
  }

  const breadcrumbs = [
    { href: domain.home_path, label: domain.label },
    ...slug.slice(0, -1).map((segment, index) => ({
      href: `/docs/${slug.slice(0, index + 1).join("/")}`,
      label: titleFromSegment(segment),
    })),
  ];
  const hasLandingCards = page.landingCards.length > 0;
  const showLandingOnly = hasLandingCards;

  return (
    <div className="grid gap-10 xl:grid-cols-[minmax(0,66rem)_14rem]">
      <section className="min-w-0">
        <nav aria-label="Breadcrumbs" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-base-content/55">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.href} className="flex items-center gap-2">
                {index > 0 && <span className="text-base-content/35">›</span>}
                {slug.length === 0 && index === breadcrumbs.length - 1 ? (
                  <span className="font-semibold text-base-content">{crumb.label}</span>
                ) : (
                  <a href={crumb.href} className="transition hover:text-primary">
                    {crumb.label}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <header
          className={
            showLandingOnly
              ? "mb-2"
              : hasLandingCards
                ? "mb-8 pb-6"
                : "mb-8 border-b border-base-300 pb-6"
          }
        >
          <h1 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{page.title}</h1>
          {page.description && (
            <p className="mt-3 max-w-3xl text-base leading-7 text-base-content/68">{page.description}</p>
          )}
        </header>

        <div className="min-w-0">
          <DocLandingCards items={page.landingCards} />

          {!showLandingOnly && page.frameHtml ? (
            <>
              <div className="overflow-hidden rounded-md border border-base-300 bg-base-100">
                <HtmlDocumentFrame
                  key={`${enhancerKey}:frame`}
                  html={page.frameHtml}
                  initialHeight={page.frameHeightHint}
                />
              </div>
              <DocPagePager previous={neighbors.previous} next={neighbors.next} />
            </>
          ) : !showLandingOnly && page.shadowHtml ? (
            <>
              <div className="overflow-hidden rounded-md border border-base-300 bg-base-100">
                <ShadowHtmlArticle html={page.shadowHtml} />
              </div>
              <DocPagePager previous={neighbors.previous} next={neighbors.next} />
            </>
          ) : !showLandingOnly ? (
            <>
              <article
                className={page.kind === "markdown" ? "docs-prose" : "docs-html"}
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: page.html }}
              />
              {page.kind === "markdown" && <MarkdownEnhancer key={enhancerKey} />}
              <DocPagePager previous={neighbors.previous} next={neighbors.next} />
            </>
          ) : null}
        </div>
      </section>

      <DocPageToc items={showLandingOnly ? [] : page.tocItems} />
    </div>
  );
}
