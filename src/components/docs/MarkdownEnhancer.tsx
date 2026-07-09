"use client";

import { useEffect } from "react";

import Panzoom, { type PanzoomObject } from "@panzoom/panzoom";
import mermaid from "mermaid";

import { jumpToHashTarget } from "@/components/docs/instantHashNavigation";
import { THEME_EVENT_NAME } from "@/components/theme/themeClient";

type MermaidPanzoomBinding = {
  frame: HTMLDivElement;
  handleDoubleClick: () => void;
  handleWheel: (event: WheelEvent) => void;
  panzoom: PanzoomObject;
  svg: SVGSVGElement;
};

const mermaidPanzoomBindings = new Map<HTMLElement, MermaidPanzoomBinding>();
let mermaidInitializationQueue = Promise.resolve();
let mermaidRenderSequence = 0;

const MERMAID_THEME_CONFIG = {
  fontFamily: "Trebuchet MS, Verdana, Arial, sans-serif",
  startOnLoad: false,
  theme: "base",
  themeVariables: {
    activationBkgColor: "#FFF3E0",
    activationBorderColor: "#FB8C00",
    actorBkg: "#E3F2FD",
    actorBorder: "#1E88E5",
    actorLineColor: "#546E7A",
    actorTextColor: "#0D47A1",
    altSectionBkgColor: "#ECEFF1",
    background: "#FFFFFF",
    clusterBkg: "#ECEFF1",
    clusterBorder: "#546E7A",
    critBkgColor: "#FFE0E0",
    critBorderColor: "#D32F2F",
    doneTaskBkgColor: "#E8F5E9",
    doneTaskBorderColor: "#43A047",
    edgeLabelBackground: "#FFFFFF",
    gridColor: "#D0D7DE",
    labelBoxBkgColor: "#FFFFFF",
    labelTextColor: "#263238",
    lineColor: "#546E7A",
    mainBkg: "#F3E5F5",
    nodeBorder: "#8E24AA",
    noteBkgColor: "#E8F5E9",
    noteTextColor: "#1B5E20",
    primaryBorderColor: "#8E24AA",
    primaryColor: "#F3E5F5",
    primaryTextColor: "#4A148C",
    secondaryBorderColor: "#1E88E5",
    secondaryColor: "#E3F2FD",
    secondaryTextColor: "#0D47A1",
    sectionBkgColor: "#F3E5F5",
    signalColor: "#263238",
    signalTextColor: "#263238",
    tertiaryBorderColor: "#FB8C00",
    tertiaryColor: "#FFF3E0",
    tertiaryTextColor: "#E65100",
    titleColor: "#263238",
  },
} as const;

function decodeMermaidDefinition(value: string | undefined): string | null {
  if (!value) {
    return null;
  }

  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function readMermaidSource(node: HTMLElement): string {
  return (
    decodeMermaidDefinition(node.dataset.mermaidDefinition) ??
    node.dataset.mermaidSource ??
    node.textContent ??
    ""
  ).trim();
}

function hasPendingMermaidNodes(): boolean {
  return Array.from(document.querySelectorAll<HTMLElement>(".docs-prose .mermaid")).some(
    (node) => node.querySelector("svg") === null,
  );
}

function queueMermaidInitialization() {
  mermaidInitializationQueue = mermaidInitializationQueue
    .catch(() => undefined)
    .then(async () => {
      await initializeMermaid();
    });

  return mermaidInitializationQueue;
}

function initializeTabs() {
  document.querySelectorAll<HTMLElement>(".tabs-block").forEach((container) => {
    const buttons = Array.from(container.querySelectorAll<HTMLButtonElement>(".tabs-nav-btn"));
    const panels = Array.from(container.querySelectorAll<HTMLElement>(".tabs-panel"));

    if (buttons.length === 0 || panels.length === 0) {
      return;
    }

    const activate = (index: number) => {
      buttons.forEach((button, buttonIndex) => {
        const isActive = buttonIndex === index;
        button.classList.toggle("tabs-nav-btn-active", isActive);
        button.classList.toggle("tabs-nav-btn-inactive", !isActive);
        button.setAttribute("aria-selected", String(isActive));
      });

      panels.forEach((panel, panelIndex) => {
        const isActive = panelIndex === index;
        panel.classList.toggle("tabs-panel-active", isActive);
        panel.classList.toggle("tabs-panel-hidden", !isActive);
        panel.setAttribute("aria-expanded", String(isActive));
      });
    };

    buttons.forEach((button, index) => {
      button.onclick = () => activate(index);
    });

    const activeIndex = buttons.findIndex((button) => button.classList.contains("tabs-nav-btn-active"));
    activate(activeIndex >= 0 ? activeIndex : 0);
  });
}

async function waitForDocumentFonts() {
  if (!("fonts" in document)) {
    return;
  }

  try {
    await document.fonts.ready;
  } catch {
    // Ignore font loading failures and render with fallback metrics.
  }
}

async function initializeMermaid() {
  const mermaidNodes = Array.from(document.querySelectorAll<HTMLElement>(".docs-prose .mermaid"));

  if (mermaidNodes.length === 0) {
    return;
  }

  await waitForDocumentFonts();

  mermaid.initialize(MERMAID_THEME_CONFIG);

  mermaidNodes.forEach((node) => {
    const source = readMermaidSource(node);

    cleanupMermaidPanzoom(node);

    if (source) {
      node.dataset.mermaidSource = source;
      node.textContent = source;
    }

    node.removeAttribute("data-processed");
  });

  for (const node of mermaidNodes) {
    const source = node.dataset.mermaidSource?.trim();

    if (!source) {
      continue;
    }

    try {
      const renderId = `mermaid-${mermaidRenderSequence++}`;
      const { bindFunctions, svg } = await mermaid.render(renderId, source);

      node.innerHTML = svg;
      bindFunctions?.(node);
    } catch {
      // Ignore Mermaid rendering failures in demo content.
    }
  }

  mermaidNodes.forEach((node) => {
    bindMermaidPanzoom(node);
  });
}

function cleanupMermaidPanzoom(node: HTMLElement) {
  const binding = mermaidPanzoomBindings.get(node);

  if (!binding) {
    return;
  }

  binding.frame.removeEventListener("wheel", binding.handleWheel);
  binding.frame.removeEventListener("dblclick", binding.handleDoubleClick);
  binding.panzoom.destroy();
  binding.panzoom.resetStyle();
  mermaidPanzoomBindings.delete(node);
}

function cleanupAllMermaidPanzoom() {
  Array.from(mermaidPanzoomBindings.keys()).forEach((node) => {
    cleanupMermaidPanzoom(node);
  });
}

function getFrameContentWidth(frame: HTMLDivElement) {
  const style = window.getComputedStyle(frame);
  const leftPadding = Number.parseFloat(style.getPropertyValue("padding-left")) || 0;
  const rightPadding = Number.parseFloat(style.getPropertyValue("padding-right")) || 0;

  return Math.max(1, frame.clientWidth - leftPadding - rightPadding);
}

function applyMermaidFitLayout(binding: MermaidPanzoomBinding) {
  const viewport = ensureMermaidSvgViewport(binding.svg);
  const contentWidth = getFrameContentWidth(binding.frame);
  const layoutScale = Math.min(1, contentWidth / viewport.width);
  const layoutWidth = Math.max(1, viewport.width * layoutScale);
  const layoutHeight = Math.max(1, viewport.height * layoutScale);

  binding.svg.style.width = `${layoutWidth}px`;
  binding.svg.style.height = `${layoutHeight}px`;
  binding.svg.style.maxWidth = "none";
  binding.svg.style.marginInline = "auto";
}

function fitMermaidPanzoom(binding: MermaidPanzoomBinding) {
  if (binding.frame.clientWidth <= 0) {
    return;
  }

  applyMermaidFitLayout(binding);
  binding.panzoom.setOptions({
    panOnlyWhenZoomed: true,
    startScale: 1,
    startX: 0,
    startY: 0,
  });
  binding.panzoom.reset({ animate: false });
}

function getSvgLength(value: string | null): number | null {
  if (!value) {
    return null;
  }

  const parsed = Number.parseFloat(value);

  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function ensureMermaidSvgViewport(svg: SVGSVGElement) {
  const existingViewBox = svg.viewBox.baseVal;

  if (existingViewBox && existingViewBox.width > 0 && existingViewBox.height > 0) {
    return {
      height: existingViewBox.height,
      width: existingViewBox.width,
    };
  }

  const graphRoot = svg.querySelector("g");
  const bboxTarget = graphRoot ?? svg;

  try {
    const bbox = bboxTarget.getBBox();

    if (bbox.width > 0 && bbox.height > 0) {
      const padding = 24;
      const viewBoxX = Math.floor(bbox.x - padding);
      const viewBoxY = Math.floor(bbox.y - padding);
      const viewBoxWidth = Math.ceil(bbox.width + padding * 2);
      const viewBoxHeight = Math.ceil(bbox.height + padding * 2);

      svg.setAttribute("viewBox", `${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`);
      svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

      if (!getSvgLength(svg.getAttribute("height"))) {
        svg.setAttribute("height", String(viewBoxHeight));
      }

      return {
        height: viewBoxHeight,
        width: viewBoxWidth,
      };
    }
  } catch {
    // Ignore getBBox failures and fall back to the measured DOM box.
  }

  const fallbackWidth = getSvgLength(svg.getAttribute("width")) ?? svg.getBoundingClientRect().width;
  const fallbackHeight = getSvgLength(svg.getAttribute("height")) ?? svg.getBoundingClientRect().height;

  return {
    height: fallbackHeight > 0 ? fallbackHeight : 1,
    width: fallbackWidth > 0 ? fallbackWidth : 1,
  };
}

function bindMermaidPanzoom(node: HTMLElement) {
  const svg = node.querySelector<SVGSVGElement>("svg");

  if (!svg) {
    return;
  }

  cleanupMermaidPanzoom(node);

  const frame = document.createElement("div");
  frame.className = "mermaid-panzoom-frame";
  frame.setAttribute(
    "aria-label",
    "Interactive Mermaid diagram. Drag to pan, wheel or pinch to zoom, double-click to reset.",
  );
  const hint = document.createElement("p");
  hint.className = "mermaid-panzoom-hint";
  hint.textContent = "Hint: Zoom with the mouse wheel, drag to pan, and double-click to reset the view.";

  const svgViewport = ensureMermaidSvgViewport(svg);
  svg.removeAttribute("height");
  svg.style.width = `${svgViewport.width}px`;
  svg.style.height = `${svgViewport.height}px`;
  svg.style.maxWidth = "none";
  svg.style.marginInline = "auto";
  svg.style.display = "block";
  svg.classList.add("mermaid-panzoom-svg");
  node.replaceChildren(frame, hint);
  frame.appendChild(svg);

  const panzoom = Panzoom(svg, {
    canvas: true,
    cursor: "grab",
    maxScale: 24,
    minScale: 0.1,
    overflow: "hidden",
    panOnlyWhenZoomed: true,
    roundPixels: true,
    step: 0.15,
    touchAction: "none",
  });

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();
    panzoom.zoomWithWheel(event);
  };

  const binding = {
    frame,
    handleDoubleClick: () => undefined,
    handleWheel,
    panzoom,
    svg,
  } satisfies MermaidPanzoomBinding;

  binding.handleDoubleClick = () => {
    ensureMermaidSvgViewport(binding.svg);
    fitMermaidPanzoom(binding);
  };

  frame.addEventListener("wheel", handleWheel, { passive: false });
  frame.addEventListener("dblclick", binding.handleDoubleClick);

  mermaidPanzoomBindings.set(node, binding);
  fitMermaidPanzoom(binding);

  const refreshViewport = () => {
    const currentBinding = mermaidPanzoomBindings.get(node);

    if (currentBinding) {
      ensureMermaidSvgViewport(currentBinding.svg);
      fitMermaidPanzoom(currentBinding);
    }
  };

  window.requestAnimationFrame(() => {
    refreshViewport();
    window.requestAnimationFrame(refreshViewport);
  });
}

export function MarkdownEnhancer() {
  useEffect(() => {
    const retryTimeoutIds: number[] = [];
    let animationFrameId = 0;

    const initializeContent = () => {
      initializeTabs();
      void queueMermaidInitialization();
    };

    const retryMermaid = () => {
      if (!hasPendingMermaidNodes()) {
        return;
      }

      void queueMermaidInitialization();
    };

    initializeContent();
    animationFrameId = window.requestAnimationFrame(retryMermaid);

    for (const delay of [160, 480]) {
      retryTimeoutIds.push(window.setTimeout(retryMermaid, delay));
    }

    const handleThemeChange = () => {
      void queueMermaidInitialization();
    };

    const handleResize = () => {
      window.requestAnimationFrame(() => {
        mermaidPanzoomBindings.forEach((binding) => {
          fitMermaidPanzoom(binding);
        });
      });
    };

    const handleTableOfContentsClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>(".table-of-contents-link[href^='#']");
      const href = link?.getAttribute("href");

      if (!link || !href) {
        return;
      }

      const id = decodeURIComponent(href.slice(1));

      if (!id) {
        return;
      }

      event.preventDefault();
      jumpToHashTarget(id);
    };

    window.addEventListener(THEME_EVENT_NAME, handleThemeChange as EventListener);
    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleTableOfContentsClick);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      retryTimeoutIds.forEach((timeoutId) => {
        window.clearTimeout(timeoutId);
      });
      cleanupAllMermaidPanzoom();
      window.removeEventListener(THEME_EVENT_NAME, handleThemeChange as EventListener);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleTableOfContentsClick);
    };
  }, []);

  return null;
}
