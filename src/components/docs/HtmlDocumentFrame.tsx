"use client";

import { useEffect, useRef, useState } from "react";

type HtmlDocumentFrameProps = {
  html: string;
  initialHeight?: number | null;
};

const DEFAULT_FRAME_HEIGHT = 900;
const HEIGHT_POLL_MS = 250;
const FRAME_HEIGHT_MESSAGE_TYPE = "z00z-html-document-frame-height";

function measureDocumentHeight(frameDocument: Document | null): number {
  const rootElement = frameDocument?.documentElement;
  const bodyElement = frameDocument?.body;

  if (!rootElement) {
    return 0;
  }

  return Math.max(
    rootElement.scrollHeight,
    rootElement.offsetHeight,
    rootElement.clientHeight,
    bodyElement?.scrollHeight ?? 0,
    bodyElement?.offsetHeight ?? 0,
    bodyElement?.clientHeight ?? 0,
  );
}

const FRAME_HEIGHT_BRIDGE = `
<script>
(() => {
  const messageType = ${JSON.stringify(FRAME_HEIGHT_MESSAGE_TYPE)};
  let lastHeight = 0;

  const measureHeight = () => {
    const rootElement = document.documentElement;
    const bodyElement = document.body;

    if (!rootElement) {
      return 0;
    }

    return Math.max(
      rootElement.scrollHeight,
      rootElement.offsetHeight,
      rootElement.clientHeight,
      bodyElement ? bodyElement.scrollHeight : 0,
      bodyElement ? bodyElement.offsetHeight : 0,
      bodyElement ? bodyElement.clientHeight : 0,
    );
  };

  const postHeight = () => {
    const nextHeight = measureHeight();

    if (!Number.isFinite(nextHeight) || nextHeight <= 0 || nextHeight === lastHeight) {
      return;
    }

    lastHeight = nextHeight;
    window.parent.postMessage({ type: messageType, height: nextHeight }, "*");
  };

  const schedulePost = () => {
    window.requestAnimationFrame(postHeight);
  };

  const resizeObserver =
    typeof ResizeObserver === "function"
      ? new ResizeObserver(schedulePost)
      : null;

  if (resizeObserver) {
    resizeObserver.observe(document.documentElement);

    if (document.body) {
      resizeObserver.observe(document.body);
    }
  }

  const mutationObserver = new MutationObserver(schedulePost);
  mutationObserver.observe(document.documentElement, {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
  });

  if (document.fonts && typeof document.fonts.ready?.then === "function") {
    document.fonts.ready.then(schedulePost).catch(() => {});
  }

  if (document.fonts && typeof document.fonts.addEventListener === "function") {
    document.fonts.addEventListener("loadingdone", schedulePost);
  }

  const intervalId = window.setInterval(postHeight, 1000);

  window.addEventListener("load", schedulePost);
  window.addEventListener("resize", schedulePost);
  window.setTimeout(schedulePost, 0);
  window.setTimeout(schedulePost, 150);
  window.setTimeout(schedulePost, 500);

  window.addEventListener("beforeunload", () => {
    window.clearInterval(intervalId);
    mutationObserver.disconnect();
    resizeObserver?.disconnect();
  });
})();
</script>
`;

function injectFrameBridge(html: string): string {
  if (html.includes(FRAME_HEIGHT_MESSAGE_TYPE)) {
    return html;
  }

  if (/<\/body>/i.test(html)) {
    return html.replace(/<\/body>/i, `${FRAME_HEIGHT_BRIDGE}</body>`);
  }

  if (/<\/html>/i.test(html)) {
    return html.replace(/<\/html>/i, `${FRAME_HEIGHT_BRIDGE}</html>`);
  }

  return `${html}${FRAME_HEIGHT_BRIDGE}`;
}

export function HtmlDocumentFrame({ html, initialHeight = null }: HtmlDocumentFrameProps) {
  const frameRef = useRef<HTMLIFrameElement | null>(null);
  const [frameHeight, setFrameHeight] = useState(initialHeight ?? DEFAULT_FRAME_HEIGHT);

  useEffect(() => {
    const frame = frameRef.current;

    if (!frame) {
      return;
    }

    const syncFrameHeight = () => {
      const nextHeight = measureDocumentHeight(frame.contentDocument);

      if (nextHeight <= 0) {
        return;
      }

      setFrameHeight((currentHeight) => (currentHeight === nextHeight ? currentHeight : nextHeight));
    };

    const handleFrameMessage = (event: MessageEvent) => {
      const payload = event.data;

      if (
        !payload ||
        typeof payload !== "object" ||
        payload.type !== FRAME_HEIGHT_MESSAGE_TYPE ||
        typeof payload.height !== "number" ||
        payload.height <= 0
      ) {
        return;
      }

      setFrameHeight((currentHeight) =>
        currentHeight === payload.height ? currentHeight : payload.height,
      );
    };

    syncFrameHeight();
    const intervalId = window.setInterval(syncFrameHeight, HEIGHT_POLL_MS);
    window.addEventListener("message", handleFrameMessage);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("message", handleFrameMessage);
    };
  }, [html]);

  return (
    <iframe
      ref={frameRef}
      title="HTML document preview"
      srcDoc={injectFrameBridge(html)}
      sandbox="allow-same-origin allow-scripts"
      scrolling="no"
      onLoad={() => {
        const nextHeight = measureDocumentHeight(frameRef.current?.contentDocument ?? null);

        if (nextHeight <= 0) {
          return;
        }

        setFrameHeight((currentHeight) => (currentHeight === nextHeight ? currentHeight : nextHeight));
      }}
      className="block w-full border-0 bg-transparent"
      style={{ height: `${frameHeight}px` }}
    />
  );
}
