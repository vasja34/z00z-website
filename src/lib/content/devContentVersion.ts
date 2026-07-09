import fs from "node:fs";
import path from "node:path";

type VersionSummary = {
  directories: number;
  files: number;
  latestChangeMs: number;
};

const WATCH_ROOTS = [
  path.join(/* turbopackIgnore: true */ process.cwd(), "content"),
  path.join(/* turbopackIgnore: true */ process.cwd(), "config"),
] as const;

function readPathVersion(absolutePath: string, summary: VersionSummary): void {
  if (!fs.existsSync(absolutePath)) {
    return;
  }

  const stat = fs.statSync(absolutePath);
  summary.latestChangeMs = Math.max(summary.latestChangeMs, stat.mtimeMs);

  if (stat.isDirectory()) {
    summary.directories += 1;

    for (const entry of fs.readdirSync(absolutePath, { withFileTypes: true })) {
      readPathVersion(path.join(absolutePath, entry.name), summary);
    }

    return;
  }

  if (stat.isFile()) {
    summary.files += 1;
  }
}

export function getDevContentVersion(): string {
  const summary: VersionSummary = {
    directories: 0,
    files: 0,
    latestChangeMs: 0,
  };

  for (const root of WATCH_ROOTS) {
    readPathVersion(root, summary);
  }

  return `${Math.trunc(summary.latestChangeMs)}:${summary.directories}:${summary.files}`;
}
