import type { CSSProperties } from "react";
import Link from "next/link";

import { NavIcon } from "@/components/ui/NavIcon";
import type { DocLandingCard } from "@/lib/content/docs";

type CardTone = {
  stripe: string;
  badgeBackground: string;
  badgeBorder: string;
  badgeText: string;
};

const CARD_TONES = {
  caution: {
    stripe: "var(--docs-caution-border)",
    badgeBackground: "var(--docs-caution-bg)",
    badgeBorder: "var(--docs-caution-border)",
    badgeText: "var(--docs-caution-border)",
  },
  important: {
    stripe: "var(--docs-important-border)",
    badgeBackground: "var(--docs-important-bg)",
    badgeBorder: "var(--docs-important-border)",
    badgeText: "var(--docs-important-border)",
  },
  note: {
    stripe: "var(--docs-note-border)",
    badgeBackground: "var(--docs-note-bg)",
    badgeBorder: "var(--docs-note-border)",
    badgeText: "var(--docs-note-border)",
  },
  tip: {
    stripe: "var(--docs-tip-border)",
    badgeBackground: "var(--docs-tip-bg)",
    badgeBorder: "var(--docs-tip-border)",
    badgeText: "var(--docs-tip-border)",
  },
  warning: {
    stripe: "var(--docs-warning-border)",
    badgeBackground: "var(--docs-warning-bg)",
    badgeBorder: "var(--docs-warning-border)",
    badgeText: "var(--docs-warning-border)",
  },
} satisfies Record<string, CardTone>;

function markerFromTitle(title: string): string {
  return title
    .split(" ")
    .map((token) => token[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function resolveCardTone(icon?: string): CardTone {
  if (!icon) {
    return CARD_TONES.note;
  }

  if (icon.includes("alpha-a") || icon.includes("alphabet-a")) {
    return CARD_TONES.note;
  }

  if (icon.includes("alpha-b") || icon.includes("alphabet-b")) {
    return CARD_TONES.tip;
  }

  if (icon.includes("alpha-c") || icon.includes("alphabet-c")) {
    return CARD_TONES.warning;
  }

  if (icon.includes("alpha-d") || icon.includes("alphabet-d")) {
    return CARD_TONES.caution;
  }

  if (icon.includes("alpha-e") || icon.includes("alphabet-e") || icon === "carbon:unknown") {
    return CARD_TONES.important;
  }

  if (["shield", "security", "legal", "scales"].includes(icon)) {
    return CARD_TONES.caution;
  }

  if (["flask", "research", "network"].includes(icon)) {
    return CARD_TONES.warning;
  }

  if (["layers", "protocol", "users", "map"].includes(icon)) {
    return CARD_TONES.important;
  }

  if (
    [
      "book",
      "code",
      "mdi:learn-outline",
      "palette",
      "spark",
      "wallet",
    ].includes(icon)
  ) {
    return CARD_TONES.tip;
  }

  return CARD_TONES.note;
}

export function DocLandingCards({ items }: { items: DocLandingCard[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="mb-8 space-y-3">
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-base-300" />
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-base-content/45">
          Browse This Section
        </p>
        <span className="h-px flex-1 bg-base-300" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => {
          const tone = resolveCardTone(item.icon);
          const badgeStyle: CSSProperties = {
            backgroundColor: tone.badgeBackground,
            borderColor: tone.badgeBorder,
            color: tone.badgeText,
          };

          return (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-base-300 bg-base-100 px-5 py-4 transition hover:-translate-y-0.5 hover:bg-base-200/55"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-3 left-0 w-[4px] rounded-r-full"
                style={{ backgroundColor: tone.stripe }}
              />

              <div className="flex items-start gap-3">
                <span
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border text-base-content/72 transition group-hover:scale-[1.02]"
                  style={badgeStyle}
                >
                  {item.icon ? (
                    <NavIcon icon={item.icon} className="h-5 w-5" />
                  ) : (
                    <span className="font-mono text-[0.72rem] font-bold tracking-[0.18em]">
                      {markerFromTitle(item.title)}
                    </span>
                  )}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-base font-semibold leading-6 text-base-content transition group-hover:text-primary">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-base-content/65">
                    {item.description ?? "Open this document."}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
