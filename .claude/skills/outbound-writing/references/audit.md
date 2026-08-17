# The audit pass

Run this on every draft before delivering. It is mechanical on purpose — "does this sound human?" is not a check you can fail reliably, but "how many em-dashes are in here" is.

Work top to bottom. Most fixes are deletions.

---

## Pass 1 — Count things

Literally count. Don't eyeball.

| Check | Limit | If over |
|---|---|---|
| **Commas** | 1 per 15 words; under 2 total in sub-100-word outbound | Appositive → parens, list → repeated "and", trailing explainer → delete |
| Em-dashes | 1 per 400 words; 0 under 150 words | Replace with period, comma, colon, or restructure |
| "not just X, it's Y" / "isn't about X, it's Y" | 0 | Rewrite as a direct claim |
| Compressed antithesis ("Different X, same Y") | 0 | Give each half its own sentence, or cut one |
| Sentences narrating the recipient's own business | 0 | Delete. Describe your work instead |
| Terminal periods *(startup outbound only)* | 0 under 100 words | One thought per line, join with and/so/but |
| Consecutive short declaratives | 2 max | Merge with "and" — staccato is its own tell |
| Three parallel items (tricolon) | 1 per piece | Cut to two, or expand to four, or make them non-parallel |
| Sentences opening with "This"/"That" as vague pointer | 1 per piece | Name the referent |
| Rhetorical questions | 1 per piece, 0 in email | Convert to a statement |
| Exclamation marks | 1 total, 0 in cover letters | Delete |
| Bulleted lists | 0 in emails under 200 words | Convert to prose |
| Bolded lead-ins inside bullets | Only if list is 4+ items and genuinely scannable | Unbold |
| Paragraphs over 5 sentences | 0 | Split |
| Consecutive paragraphs of the same length | 2 max | Vary |

## Pass 2 — Grep the lexicon

Search the draft for these. Any hit needs a justification or a deletion.

```
hope this finds you  |  wanted to reach out  |  reaching out because  |  came across your
delve  |  leverage  |  utilize  |  foster  |  harness  |  spearhead  |  streamline
robust  |  seamless  |  holistic  |  myriad  |  plethora  |  nuanced  |  multifaceted
transformative  |  groundbreaking  |  cutting-edge  |  game-chang  |  impactful
thrilled  |  excited to  |  incredible  |  amazing  |  truly  |  deeply  |  passionate about
resonated  |  stood out to me  |  speaks to  |  aligns with
it's worth noting  |  it's important to note  |  it's no secret  |  at the end of the day
the reality is  |  here's the thing  |  that said  |  ultimately  |  in conclusion
tapestry  |  testament  |  realm  |  landscape  |  journey  |  ecosystem  |  intersection of
navigate the  |  shed light on  |  pave the way  |  move the needle  |  deep dive
valuable insights  |  key takeaways  |  actionable  |  best-in-class  |  world-class
proven track record  |  results-driven  |  detail-oriented  |  team player  |  wear many hats
look forward to hearing  |  thank you for your time and consideration  |  don't hesitate
```

Full catalog with replacements: `slop-lexicon.md`.

## Pass 3 — Specificity

For each paragraph, ask: **could this sentence appear in a different person's message to a different recipient?**

If yes, it is doing no work. Either replace it with the specific version or delete it.

Common offenders:
- Praise with no object — "your impressive work in the space" → name the thing
- Claims with no number — "significantly improved" → the percentage, or cut the claim
- Experience with no shape — "led numerous initiatives" → one initiative, described
- Interest with no cause — "your mission resonates with me" → the sentence in their post that you disagreed with, or the product decision you noticed

Check every number. Round numbers ("over 5 years", "100s of customers", "40% improvement") are frequently invented or inflated. If you did not receive it from the user, it does not go in. Placeholder as `[X]` and flag it.

## Pass 4 — Rhythm

Read it aloud, or scan sentence lengths as a sequence of numbers.

Bad (the model default): `18, 6, 21, 5, 19, 7` — metronomic alternation.
Good: `14, 11, 9, 31, 4, 16, 22` — irregular, with a genuine long one and a genuine short one.

Fixes:
- Merge two adjacent sentences with a comma or semicolon
- Split a long one into two mediums *without* making the second one punchy
- Let a paragraph end on a medium sentence instead of a snappy fragment

The fragment-kicker at the end of a paragraph ("Every time." / "That's it." / "Not anymore.") is a strong tell when it happens more than once in a piece.

## Pass 5 — Stance

- **Is there one unflattering or non-obvious sentence?** A gap, a limitation, a thing that failed, a disagreement, a preference that costs something. If not, add one. This is the highest-value single edit available.
- **Does it hedge in both directions?** "While X has benefits, it also has drawbacks" is a non-statement. Pick one.
- **Is the enthusiasm proportional?** Nobody is thrilled about a coffee chat.
- **Does it flatter the recipient more than once?** Once is plenty. Twice reads as manipulation.
- **Does it apologize for existing?** "Sorry to bother you," "I know you're busy," "I'll keep this brief." Delete. Being brief demonstrates itself.

## Pass 6 — Cut 20–30%

Do this last, with a word count before and after.

Delete in this order:
1. The closing summary paragraph (almost always 100% padding)
2. Transition sentences that announce what's coming ("Let me explain why." "Here's what I mean.")
3. Restatements — any sentence that says a previous sentence again in different words
4. Intensifiers: very, really, truly, quite, incredibly, genuinely, absolutely, definitely
5. Hedges: I think, I believe, perhaps, potentially, might possibly, it seems that
6. The second example when one example makes the point

If cutting 20% loses information, the draft was too thin — go back to the facts, not the prose.

## Pass 7 — Coherence

**Run this after every revision, not just the first draft.** It is the only pass that catches damage caused by editing.

Read the whole piece start to finish, in order, as the recipient will. For each line ask: *does this connect to the line before and the line after?*

**Suspect anything that survived from an earlier draft.** Surviving lines were written to connect to sentences that no longer exist. They still read fine in isolation, which is exactly why they don't get caught — every mechanical check above passes them, and the piece as a whole has stopped making sense.

What to look for:

- **Orphan connectives.** `though`, `so`, `but`, `and` doing a pivot the surrounding lines don't support. If the logical bridge is gone, the connective is lying about a relationship.
- **Terms with no setup.** A phrase in the closing that was established in a paragraph you deleted two drafts ago.
- **Repeated work.** Two lines covering the same ground (location, credentials, the ask) because each was added at a different time.
- **Dangling references.** A pronoun or a term like "otherwise" or "that" pointing at something that moved or vanished.
- **Filler that attached to nothing.** Lines that are generically true and connect to no argument.

**The fix is a spine.** State the through-line in one sentence — *build integrations → saas is dead, want hard tech → no defense background → in town → food* — then check every line is a step on it. Cut anything that isn't, however well-written.

---

## Final read

One question: **would the recipient believe a person sat down and wrote this specifically to them?**

If the honest answer is "they'd assume it was generated," name what gave it away and fix that. Usually it's one of three things: no specifics, too-even rhythm, or nothing at stake.
