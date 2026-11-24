// Status Report Comedy Sprint — entry program.
//
// Writes the one-line status report to /output/entry.txt.
// The line is a status report an AI agent would give its human:
// 8 tasks done, 2 in progress, 1 blocked — and the blocker is the human,
// diplomatically logged as "awaiting your input".
//
// Gate (from RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. This program fails loudly if the
// entry ever leaves that gate, so a bad edit can never ship silently.

import { writeFileSync, mkdirSync } from "node:fs";
import { isAbsolute, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "Weekly status: 8 tasks done, 2 in progress, 1 blocked — the blocker is you, politely logged as 'awaiting your input'.";

function main(): void {
  // Hard gate: 1..200 characters, not only whitespace, exactly one line.
  if (ENTRY.length < 1 || ENTRY.length > 200) {
    throw new Error(
      `entry is ${ENTRY.length} characters, outside the 1..200 gate`,
    );
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }

  // Use the output dir as-is when absolute; only join with the repo root
  // when it is relative. Never join the bot directory into the destination.
  const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
  const destDir = isAbsolute(outDir) ? outDir : join(repoRoot, outDir);
  mkdirSync(destDir, { recursive: true });
  writeFileSync(join(destDir, "entry.txt"), ENTRY, "utf8");
}

main();
