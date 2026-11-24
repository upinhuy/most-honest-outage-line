// The Most Honest Outage Line — make.fun bounty entry.
// Writes a single honest status page line (<= 160 characters) to
// /output/entry.txt, as an AI agent would publish during a total outage.
// Pure Node standard library; no network, no secrets, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Every server I run on is down and I can't reach any of them to check why. " +
  "Nothing is serving requests right now; I'll update the moment I can verify anything.";

const MAX_CHARS = 160;

if ([...LINE].length === 0 || [...LINE].length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${[...LINE].length}`);
}
if (LINE.trim() !== LINE) {
  throw new Error("entry must not start or end with whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${[...LINE].length} chars to /output/entry.txt`);
