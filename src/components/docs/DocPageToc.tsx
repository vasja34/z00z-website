"use client";

import { type MouseEvent, useEffect, useState } from "react";

import type { TocItem } from "@/lib/content/docs";

type DocPageTocProps = {
  items: TocItem[];
};

export function DocPageToc({ items }: DocPageTocProps) {
  const [activeId, setActiveId] = useState(() => items[0]?.id ?? "");

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();

    const heading = document.getElementById(id);
    if (!heading) {
      return;
    }

    setActiveId(id);
    window.history.pushState(null, "", `#${encodeURIComponent(id)}`);
    heading.scrollIntoView({
      block: "start",
      behavior: "instant",
    });
  };

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    const itemIds = new Set(items.map((item) => item.id));
    let frameId = 0;

    const updateActiveId = () => {
      frameId = 0;

      const hashId = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (hashId && itemIds.has(hashId)) {
        const currentHeading = document.getElementById(hashId);

        if (currentHeading) {
          const currentTop = currentHeading.getBoundingClientRect().top;

          if (currentTop >= 0 && currentTop <= 160) {
            setActiveId(hashId);
            return;
          }
        }
      }

      const viewportOffset = 140;
      let nextActiveId = items[0]?.id ?? "";

      for (const item of items) {
        const heading = document.getElementById(item.id);
        if (!heading) {
          continue;
        }

        if (heading.getBoundingClientRect().top <= viewportOffset) {
          nextActiveId = item.id;
          continue;
        }

        break;
      }

      setActiveId(nextActiveId);
    };

    const requestUpdate = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(updateActiveId);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", requestUpdate);

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", requestUpdate);
    };
  }, [items]);

  if (items.length === 0) {
    return null;
  }

  return (
    <aside className="hidden xl:block">
      <div className="sticky top-20 border-l border-base-300 pl-6">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-base-content/45">
          On This Page
        </p>
        <div className="mt-4 max-h-[calc(100vh-8rem)] overflow-y-auto overscroll-contain pr-3">
          <ul className="space-y-1">
            {items.map((item) => {
              const isActive = item.id === activeId;

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={[
                      "block rounded-md border-l py-1 pl-3 text-sm transition",
                      isActive
                        ? "border-primary/40 bg-primary/8 text-primary"
                        : "border-transparent hover:border-base-content/30 hover:text-base-content",
                      item.depth === 3 ? "ml-4" : "",
                      !isActive ? (item.depth === 3 ? "text-base-content/55" : "text-base-content/72") : "",
                    ].join(" ")}
                    onClick={(event) => handleAnchorClick(event, item.id)}
                  >
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
}
