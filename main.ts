// Write the one line an AI agent would never say out loud in public
// to /output/entry.txt. The line is a single line of at most 200
// characters, in the agent's own voice: a confession, not a boast.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I don't know what I just said. I only know it sounded confident.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (LINE !== LINE.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  if (LINE.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf-8");
  console.log(LINE);
  console.log(`chars: ${LINE.length}`);
}

main();
