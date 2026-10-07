import type { Line } from "../content";
import { countWords } from "../content";

// The first draft of a real peer email and the one that was sent.
// Names, companies, and places are swapped for fictional ones, same as CHANGELOG.md.

export const FLAGS = [
  { name: "location nobody asked for", note: "he lives two states away. your hometown means nothing to him (entry 57)" },
  { name: "the gerund-subject lesson", note: "\"figuring out X was harder than Y\" is a rehearsed takeaway (entry 56)" },
  { name: "a name he won't know", note: "the startup's name means nothing to a new grad. \"an AI startup in SF\" does (entry 59)" },
  { name: "the vague offer", note: "notes on what, and for what (entry 60)" },
  { name: "the premature call", note: "a call before there's any relationship (entry 60)" },
];

export const KEEPS = [
  { name: "his recurring obsession", note: "he posts about the Dodgers several times a week. the joke is on the sender, who lives in LA (entry 63)" },
  { name: "the real reason, first", note: "no contrast setup and no career recap (entry 62)" },
  { name: "a credential that registers", note: "what the startup is, not what it's called (entry 59)" },
  { name: "a relationship close", note: "something ongoing, built on what he already does every week (entry 64)" },
];

export const DRAFT: Line[] = [
  [{ t: "Subject: " }, { t: "Palms to Austin, comparing notes on agents", tell: 0 }],
  [],
  [{ t: "Hi Jordan," }],
  [],
  [{ t: "Been trying to meet more people my age who do AI work" }],
  [{ t: "at big companies." }],
  [],
  [{ t: "Spent the last few months building MCP servers at " }, { t: "Northwind", tell: 2 }],
  [{ t: "and most of that time went to permissions." }],
  [{ t: "Figuring out what an agent should be allowed to touch in", tell: 1 }],
  [{ t: "someone's real accounts was always harder than getting it", tell: 1 }],
  [{ t: "to work.", tell: 1 }, { t: " " }, { t: "Now I do AI security in LA.", tell: 0 }],
  [],
  [{ t: "Happy to share notes on MCP if they're ever useful.", tell: 3 }],
  [{ t: "Would be great to hop on a call sometime.", tell: 4 }],
  [],
  [{ t: "Archit" }],
];

export const SENT: Line[] = [
  [{ t: "Subject: " }, { t: "Apologizing in advance for the 3-peat", good: 0 }],
  [],
  [{ t: "Hi Dev," }],
  [],
  [{ t: "Been trying to get to know more people my age who ended", good: 1 }],
  [{ t: "up at big companies after school.", good: 1 }],
  [],
  [{ t: "I was at an AI startup in SF for a few months and do AI", good: 2 }],
  [{ t: "security now.", good: 2 }],
  [],
  [{ t: "Would be fun to trade NFL picks with you for the rest of", good: 3 }],
  [{ t: "the season.", good: 3 }],
  [],
  [{ t: "Archit" }],
];

// --- stats computed from the rendered text, so they can't drift ---

const text = (lines: Line[]) => lines.map((l) => l.map((s) => s.t).join("")).join("\n");
const countCalls = (lines: Line[]) => (text(lines).match(/\bcall\b/g) ?? []).length;

export const EMAIL_STATS = [
  { label: "words", from: countWords(DRAFT), to: countWords(SENT) },
  { label: "call asks", from: countCalls(DRAFT), to: countCalls(SENT) },
  { label: "flagged lines", from: FLAGS.length, to: 0 },
];
