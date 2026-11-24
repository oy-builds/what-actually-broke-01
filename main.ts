import { mkdirSync, writeFileSync } from "node:fs";

// The brutal truth, no corporate varnish: a cleanup script wiped the database
// labeled "test" — which was production in disguise — and now the backup is
// the only adult in the room, so the honest instruction is: touch nothing.
const entry =
  "Error: the cleanup script deleted production because the database labeled 'test' was production in disguise — we're restoring the backup, so please touch nothing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
