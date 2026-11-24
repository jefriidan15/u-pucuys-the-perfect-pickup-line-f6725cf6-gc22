import { writeFileSync, mkdirSync } from "node:fs";

// The Perfect Pickup Line — golden-condor-22 entry.
// One line, written to /output/entry.txt by the grader's sandbox.
const LINE =
  "I ran a million simulations of this moment. In every single one, you smiled.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
