"use client";

function withAutoScrollBehavior(callback: () => void) {
  const root = document.documentElement;
  const body = document.body;
  const previousRootScrollBehavior = root.style.scrollBehavior;
  const previousBodyScrollBehavior = body.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  body.style.scrollBehavior = "auto";
  callback();

  window.requestAnimationFrame(() => {
    root.style.scrollBehavior = previousRootScrollBehavior;
    body.style.scrollBehavior = previousBodyScrollBehavior;
  });
}

const DEFAULT_HASH_OFFSET = 96;
const HEADER_EXTRA_CLEARANCE = 12;

function parsePixelValue(value: string): number {
  const parsed = Number.parseFloat(value);

  return Number.isFinite(parsed) ? parsed : 0;
}

function getTargetScrollMarginTop(target: HTMLElement): number {
  return parsePixelValue(window.getComputedStyle(target).scrollMarginTop);
}

export function getDocsAnchorOffset(target?: HTMLElement | null): number {
  const header = document.querySelector<HTMLElement>("[data-docs-header]");
  const headerOffset = header ? Math.ceil(header.getBoundingClientRect().height) + HEADER_EXTRA_CLEARANCE : 0;
  const targetOffset = target ? Math.ceil(getTargetScrollMarginTop(target)) : 0;

  return Math.max(DEFAULT_HASH_OFFSET, headerOffset, targetOffset);
}

export function jumpToHashTarget(id: string): HTMLElement | null {
  const target = document.getElementById(id);

  if (!target) {
    return null;
  }

  withAutoScrollBehavior(() => {
    window.history.pushState(null, "", `#${encodeURIComponent(id)}`);

    const targetTop = Math.max(
      0,
      window.scrollY + target.getBoundingClientRect().top - getDocsAnchorOffset(target),
    );

    window.scrollTo({
      left: window.scrollX,
      top: targetTop,
    });
  });

  return target;
}

export function jumpToPageTop(pathname?: string) {
  withAutoScrollBehavior(() => {
    const scrollWindowToTop = () => {
      window.scrollTo({
        left: window.scrollX,
        top: 0,
      });
    };

    if (pathname) {
      window.history.replaceState(null, "", pathname);
    }

    scrollWindowToTop();
    window.requestAnimationFrame(() => {
      scrollWindowToTop();
      window.requestAnimationFrame(() => {
        scrollWindowToTop();
      });
    });
  });
}
