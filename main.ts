import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The 3am text my smart fridge sends its owner: pickles over the sink,
// a diagnosis, and the fridge's disclaimer — punch lands on "therapist".
const line =
  "You're eating pickles over the sink again. Even I know this is a cry for help. I'm a fridge, not a therapist.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
