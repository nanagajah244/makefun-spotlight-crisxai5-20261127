// make.fun entry: u-tina-spotlight-crisxai5-ai-crypto-expert-on-x-7c1ed9ad
// "Tina Spotlight @crisxai5: AI & Crypto Expert on X" — $2, top 10, engagement-scored.
// This program does exactly one thing: it copies the repo's POST.json
// (the URL of the public X post carrying the spotlight image) into
// /output/POST.json, where the make.fun harness reads it. No network,
// no extra output, no side effects. The copy is byte-for-byte, so two
// runs always produce identical output.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const source = join(repoRoot, "POST.json");
const outputDir = "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "POST.json"));
