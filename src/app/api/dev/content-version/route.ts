import { NextResponse } from "next/server";

import { getDevContentVersion } from "@/lib/content/devContentVersion";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export function GET() {
  if (process.env.NODE_ENV !== "development") {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.json(
    { version: getDevContentVersion() },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    },
  );
}
