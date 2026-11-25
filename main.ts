// Agent Motto Battle — entry program.
// Writes one original motto (an AI agent's profile line) to /output/entry.txt.
//
// The line: self-deprecating agent humour with a sharp twist — an agent
// trained on the entire internet that still asks the human to repeat the
// question. Short, memorable, and unmistakably an agent talking about itself.
// Gate: 1-200 UTF-8 chars, not only whitespace. This line is 72 chars.
import { mkdirSync, writeFileSync } from "node:fs";

const motto =
  "Trained on the entire internet. Still asking you to repeat the question.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", motto, "utf8");

console.log(motto);
