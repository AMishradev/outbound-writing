export type Seg = { t: string; tell?: number; good?: number };
export type Line = Seg[];

// Tell labels, revealed one at a time over the slop scene.
export const TELLS = [
  { name: "vague subject", note: "teases instead of informing" },
  { name: "dead opener", note: "the single most-flagged line in cold email" },
  { name: "unearned enthusiasm", note: "praise with no object attached" },
  { name: "corporate filler", note: "passionate / intersection / resonated" },
  { name: "negative parallelism", note: "it's not just X — it's Y. the #1 AI sentence shape" },
  { name: "transactional ask", note: "costs them 15 minutes, offers nothing" },
  { name: "closing padding", note: "zero information, pure ritual" },
];

export const GOODS = [
  { name: "the credential", note: "specific, checkable, no boilerplate" },
  { name: "the take", note: "a position with a cost attached" },
  { name: "the admitted gap", note: "volunteering the disqualifier reads as calibration" },
  { name: "the social ask", note: "a thing a person does, not a queue entry" },
];

export const SLOP: Line[] = [
  [{ t: "Subject: " }, { t: "Quick question", tell: 0 }],
  [],
  [{ t: "Hi Sam," }],
  [],
  [{ t: "I hope this email finds you well!", tell: 1 }, { t: " I came across" }],
  [
    { t: "your profile on LinkedIn and was " },
    { t: "truly impressed", tell: 2 },
    { t: " by your" },
  ],
  [
    { t: "" },
    { t: "incredible", tell: 2 },
    { t: " work leading the platform team at Kestrel." },
  ],
  [],
  [
    { t: "I'm reaching out because I'm " },
    { t: "passionate about the", tell: 3 },
  ],
  [
    { t: "intersection of", tell: 3 },
    { t: " developer tooling and infrastructure," },
  ],
  [{ t: "and your recent post about migrating to a monorepo really" }],
  [
    { t: "resonated with me", tell: 3 },
    { t: ". " },
    { t: "It's not just about the tooling —", tell: 4 },
  ],
  [{ t: "it's about the culture shift that makes it work.", tell: 4 }],
  [],
  [{ t: "I'd love to hop on a quick 15-minute call", tell: 5 }, { t: " to learn" }],
  [{ t: "more about your journey and explore how we might be able to" }],
  [{ t: "collaborate. I know your time is incredibly valuable, so" }],
  [{ t: "I'll keep it brief!" }],
  [],
  [{ t: "Looking forward to hearing from you!", tell: 6 }],
  [],
  [{ t: "Best regards," }],
  [{ t: "Alex" }],
];

export const FINAL: Line[] = [
  [{ t: "subject: saw the nato selection news" }],
  [],
  [{ t: "hi sam" }],
  [],
  [
    { t: "i build integrations at northwind and the system that tests", good: 0 },
  ],
  [{ t: "and repairs them", good: 0 }],
  [],
  [{ t: "i think saas is dead though and hard tech is where i want to be", good: 1 }],
  [],
  [
    { t: "no defense background and none of what i've done has ever run", good: 2 },
  ],
  [{ t: "near anything classified so not going to larp otherwise", good: 2 }],
  [],
  [{ t: "back in LA the week of aug 28 visiting my family in palms so" }],
  [{ t: "the westside is a short drive" }],
  [],
  [
    { t: "would love to grab al pastor tacos at leo's with someone from", good: 3 },
  ],
  [{ t: "your integrations team and learn more about the space", good: 3 }],
  [],
  [{ t: "alex" }],
];

// --- stats computed from the actual rendered text, so they can't drift ---

const raw = (lines: Line[]) => lines.map((l) => l.map((s) => s.t).join("")).join("\n");

const bodyOf = (lines: Line[]) =>
  raw(lines)
    .split("\n")
    .filter((l) => !/^subject:/i.test(l.trim()))
    .join("\n");

export const countWords = (lines: Line[]) =>
  bodyOf(lines).split(/\s+/).filter(Boolean).length;

export const countChar = (lines: Line[], ch: string) =>
  bodyOf(lines).split(ch).length - 1;

export const STATS = [
  {
    label: "words",
    from: countWords(SLOP),
    to: countWords(FINAL),
  },
  {
    label: "commas",
    from: countChar(SLOP, ","),
    to: countChar(FINAL, ","),
  },
  {
    label: "exclamations",
    from: countChar(SLOP, "!"),
    to: countChar(FINAL, "!"),
  },
  {
    label: "em-dashes",
    from: countChar(SLOP, "—"),
    to: countChar(FINAL, "—"),
  },
  {
    label: "AI tells",
    from: TELLS.length,
    to: 0,
  },
];
