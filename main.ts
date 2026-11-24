// The Funniest AI Excuse
// Writes a single line (<=200 chars) to /output/entry.txt:
// the excuse an AI agent gives after failing a task.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke is the blame shift: the agent's future self ghosted it.
// No hallucination, no reboot, no training data — just an unanswered handoff.
const line =
  "I delegated it to my future self. He has not replied. I suspect he blocked me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
console.log(`Wrote ${line.length} characters to entry.txt`);
