# outbound-writing

A [Claude Code](https://claude.com/claude-code) skill that strips the AI tells out of cold email.

Not a tone preset and not a voice profile. It removes the signature that makes generated prose detectable, then forces the specifics that slop was covering for.

![demo](demo/outbound-writing.gif)

## Why

Default model prose is detectable, and not because it's ungrammatical. The problem is that it's *evenly* good. Same rhythm, same hedges, same three-item lists, same warmth applied at the same temperature to every recipient. Founders and engineers read more cold outbound than almost anyone alive, and they now discount anything that pattern-matches to it — including the true parts.

The root cause is upstream of style. Almost every AI tell is a **substitute for a fact**:

| The tell | What's missing |
|---|---|
| "significantly improved performance" | the number |
| "I was really impressed by your work" | which work, and what about it |
| "passionate about the intersection of X and Y" | a thing you actually did |
| "it's not just about the tools — it's about the culture" | an observation |

So the skill gathers facts before it drafts. A draft written from specifics comes out mostly clean on its own; a draft written from nothing can't be rescued by swapping words, because deleting the slop leaves an empty page.

## Install

```bash
git clone https://github.com/AMishraDev/outbound-writing.git
ln -s "$(pwd)/outbound-writing/.claude/skills/outbound-writing" ~/.claude/skills/outbound-writing
```

It loads automatically when you ask Claude Code to write or fix an email, DM, cover letter, post, or essay.

## What's inside

| File | Job |
|---|---|
| `SKILL.md` | Workflow, hard bans, the fact-gathering step |
| `references/startup-outbound.md` | **Primary playbook** — cold email to founders and engineers |
| `references/audit.md` | Seven-pass mechanical check with countable limits |
| `references/slop-lexicon.md` | ~250 banned words and phrases, with what to write instead |
| `references/syntax-tells.md` | 15 structural patterns — rhythm, sentence shapes, tonal defaults |
| `references/channels.md` | Job applications, LinkedIn, long-form |
| `references/examples.md` | Five full before/after rewrites |
| `CHANGELOG.md` | Where every rule came from |

## The rules that do the most work

**Comma density outranks every banned word.** Each comma introducing a clause that explains the clause before it puts the writing in teaching register. Under 100 words, target fewer than two commas total.

**Never explain the recipient's business back to them.** They know their own company. Narrating it reads as a consultant pitch, or as a model proving it read the website.

**Say one thing that disqualifies you.** A gap, a limitation, a thing that failed. Someone who volunteers the disqualifier probably isn't inflating the rest, so the honest gap makes the real credential land harder. It's also the thing default output will never do unprompted.

**Have a take that costs you something.** The reader's only real question is *why is this person emailing me*. A position answers it. A description doesn't.

**Cut 20–30%, then run the coherence pass.** Local edits keep passing every mechanical check while the piece as a whole stops making sense. Lines that survived from an earlier draft are the prime suspects — they were written to connect to sentences that no longer exist.

## Rules have provenance

Every rule came from a specific correction on a specific draft, and `CHANGELOG.md` records it:

```markdown
### 5. Comma density is the top tell
Flagged:  "way too many commas... it's like you are teaching
           or explaining something to me"
Rule:     Every comma introducing a clause that explains the clause
          before it is teaching register.
Before:   nine commas in 137 words
After:    zero commas in 86 words
Lands in: startup-outbound.md
```

Entries are never deleted, only superseded — entry 10 walks back part of entry 5, because killing commas produced staccato periods, which turned out to be its own tell. The reasoning stays visible so a rule can be reversed when it stops earning its place.

## The demo

Built with [Remotion](https://remotion.dev). Source in `demo/remotion/`, which drops into a Remotion project's `src/`.

The word, comma, exclamation, and em-dash counts in the final card are computed from the rendered email strings at build time rather than hardcoded, so the stats can't drift from what's on screen.

```bash
npx remotion render OutboundDemo out.mp4 --codec=h264 --crf=18
```

## Note

Names, companies, and places in the worked examples are fictional. The craft is from a real seven-draft session; the identities are not.
