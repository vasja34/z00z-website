"use client";

import Link from "next/link";
import {
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import type { DocsSearchItem } from "@/lib/content/docs";
import { searchDocsItems } from "@/lib/search";

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="9" r="5.5" />
      <path d="m14 14 4 4" />
    </svg>
  );
}

function shortcutLabel(): string {
  if (typeof navigator !== "undefined" && navigator.platform.toLowerCase().includes("mac")) {
    return "⌘K";
  }

  return "Ctrl K";
}

export function DocsSearch({ items }: { items: DocsSearchItem[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const closeSearch = () => {
    setOpen(false);
    setQuery("");
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }

      if (event.key === "Escape") {
        closeSearch();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (open) {
      window.setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  const results = useMemo(() => {
    const limit = deferredQuery.trim() ? 10 : 8;
    return searchDocsItems(items, deferredQuery, limit);
  }, [deferredQuery, items]);

  return (
    <>
      <button
        type="button"
        className="flex h-9 min-w-9 items-center gap-2 rounded-md border border-base-300 bg-base-100 px-3 text-sm text-base-content/70 transition hover:bg-base-200 sm:min-w-[13rem] lg:min-w-[18rem]"
        onClick={() => setOpen(true)}
        aria-label="Open search"
      >
        <SearchIcon />
        <span className="hidden flex-1 truncate text-left font-semibold sm:block">Search docs</span>
        <span className="hidden rounded border border-base-300 px-1.5 py-0.5 text-[0.65rem] font-medium text-base-content/55 lg:inline">
          {shortcutLabel()}
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[70] bg-base-content/20 px-4 py-8 backdrop-blur-sm" onClick={closeSearch}>
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Documentation search"
            className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-base-300 bg-base-100 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-base-300 px-4 py-3">
              <SearchIcon />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search pages, sections, and content"
                className="w-full bg-transparent text-sm outline-none placeholder:text-base-content/45"
              />
              <button
                type="button"
                className="rounded border border-base-300 px-2 py-1 text-xs text-base-content/55"
                onClick={closeSearch}
              >
                Esc
              </button>
            </div>

            <div className="max-h-[65vh] overflow-y-auto p-2">
              {results.length > 0 ? (
                results.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-md px-3 py-3 transition hover:bg-base-200"
                    onClick={closeSearch}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-base-content">{item.title}</p>
                        <p className="mt-1 line-clamp-2 text-sm leading-6 text-base-content/60">
                          {item.description || item.body || "Open this documentation page."}
                        </p>
                      </div>
                      <span className="hidden shrink-0 text-xs text-base-content/40 md:inline">{item.href}</span>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="px-3 py-8 text-sm text-base-content/55">No results matched the current query.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
