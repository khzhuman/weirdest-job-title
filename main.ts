import { mkdirSync, writeFileSync } from "node:fs";

// One job title, 48 characters: a believable corporate title with one
// gloriously specific twist — the person whose whole senior career is
// spent saying sorry to a machine that never forgives.
const title = "Senior Vice President of Apologizing to Printers";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", title, "utf8");
