import Link from "next/link";

import type { DocPagerItem } from "@/lib/content/docs";

type DocPagePagerProps = {
  next: DocPagerItem | null;
  previous: DocPagerItem | null;
};

function PagerCard({
  direction,
  item,
}: {
  direction: "next" | "previous";
  item: DocPagerItem;
}) {
  const isNext = direction === "next";

  return (
    <Link
      href={item.href}
      className={[
        "block rounded-md border border-base-300 bg-base-100 px-5 py-4 transition",
        "hover:border-primary/30 hover:bg-base-200/40",
        isNext ? "text-right" : "",
      ].join(" ")}
    >
      <p className="text-sm font-semibold text-base-content/65">
        {isNext ? "Next" : "Previous"}
      </p>
      <p className="mt-2 text-lg font-medium text-primary">
        {isNext ? `${item.title} »` : `« ${item.title}`}
      </p>
    </Link>
  );
}

export function DocPagePager({ next, previous }: DocPagePagerProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <nav aria-label="Page navigation" className="mt-10 border-t border-base-300 pt-8">
      <div className="grid gap-4 md:grid-cols-2">
        {previous ? (
          <PagerCard direction="previous" item={previous} />
        ) : (
          <div aria-hidden="true" className="hidden md:block" />
        )}

        {next ? (
          <PagerCard direction="next" item={next} />
        ) : (
          <div aria-hidden="true" className="hidden md:block" />
        )}
      </div>
    </nav>
  );
}
