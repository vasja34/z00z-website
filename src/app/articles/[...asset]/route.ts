import fs from "node:fs";
import path from "node:path";

import { NextResponse } from "next/server";

import { resolveArticleAssetFile } from "@/lib/content/docs";

const CONTENT_TYPE_BY_EXTENSION: Record<string, string> = {
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function buildFileResponse(filePath: string) {
  const extension = path.extname(filePath).toLowerCase();
  const contentType = CONTENT_TYPE_BY_EXTENSION[extension] ?? "application/octet-stream";
  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Length": String(fileBuffer.byteLength),
      "Content-Type": contentType,
      "Content-Disposition": "inline",
    },
  });
}

async function handleRequest(
  _request: Request,
  context: { params: Promise<{ asset: string[] }> },
) {
  const { asset } = await context.params;

  if (asset.length === 0) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const filePath = resolveArticleAssetFile(asset);

  if (!filePath) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return buildFileResponse(filePath);
}

export async function GET(request: Request, context: { params: Promise<{ asset: string[] }> }) {
  return handleRequest(request, context);
}

export async function HEAD(request: Request, context: { params: Promise<{ asset: string[] }> }) {
  return handleRequest(request, context);
}
