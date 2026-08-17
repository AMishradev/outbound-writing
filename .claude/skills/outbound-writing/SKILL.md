---
name: outbound-writing
description: Write or edit anything a human will read and judge, with a primary focus on startup outbound to technical people — cold emails and DMs to founders, engineers, and CTOs — plus LinkedIn posts, cover letters, job applications, essays, announcements, bios, and messages to real people. Strips the AI tells (em-dash habit, "it's not just X, it's Y", tricolons, "I hope this finds you well", delve/leverage/robust, unearned enthusiasm, the summary paragraph that adds nothing) and forces specifics. Load BEFORE drafting, not after. Also use when asked to make writing sound human, less AI, less corporate, or to de-slop existing text.
---

# Outbound Writing

Default model prose is detectable, and not because it's ungrammatical. The problem is that it's *evenly* good. Same rhythm, same hedges, same three-item lists, same warmth applied at the same temperature to every recipient. Readers who see it all day now discount anything that pattern-matches to it, including the true parts.

This skill removes that signature. It does not install a personality.

## The root cause

Slop is what fills the space where content should be. Almost every AI tell is a *substitute for a fact*:

| The tell | What's missing |
|---|---|
| "significantly improved performance" | the number |
| "I was really impressed by your work" | which work, and what about it |
| "passionate about the intersection of X and Y" | a thing you actually did |
| "it's not just about the tools — it's about the culture" | an observation |
| "navigating an ever-evolving landscape" | anything at all |

So the fix is upstream of style. **Get facts first.** A draft written from specifics comes out 70% clean on its own; a draft written from nothing cannot be rescued by word substitution, because deleting the slop leaves an empty page.

## Workflow

### 1. Gather before drafting

If you don't have enough to write something only this sender could send to only this recipient, stop and ask. Ask in one batch, keep it to 3–5 questions, and make them answerable in a sentence each.

What you almost always need:
- **Who is receiving this**, specifically. Name, role, and one real thing about them or their work.
- **The actual ask.** One sentence. If it can't be stated in one sentence, the piece has no shape yet.
- **Why this person, not a list of 200.** If there's no answer, the honest move is a shorter, plainly generic note, not a fake-personal one. Fake-personal is worse than generic.
- **Concrete evidence.** Numbers, dates, names of systems, what broke, what you shipped. Round numbers ("over 5 years", "significant growth") are a smell; get the real ones or drop the claim.
- **What the sender is actually like.** If they've written anything, ask for a sample and match its rhythm.

Never invent a specific. If a number is unknown, write around it or leave a `[X]` placeholder and say so. A fabricated metric in a cover letter is a real-world liability, not a style choice.

### 2. Draft under constraint

- **Lead with the load-bearing sentence.** Whatever the reader needs to know, put it first. No throat-clearing, no context ramp, no "I wanted to reach out because."
- **Give before you ask**, in outreach. Information, a correction, a useful pointer. Something they'd keep even if they never reply.
- **One idea per paragraph. Two to four sentences.** Then stop.
- **Vary sentence length on purpose.** Slop rhythm is long-short-long-short forever. Real writing runs three medium sentences together, then a long one, then a fragment. Let some paragraphs be one sentence and others be five.
- **Concrete nouns over abstractions.** "the reconciliation job" beats "our systems." "Tuesday" beats "in a timely manner."
- **Say one thing that isn't flattering.** A limitation, a gap, a thing that didn't work, a disagreement. This single move does more for credibility than any other edit in this file. It is also the thing default prose will not do unprompted.
- **Let the reader do some work.** Not every implication needs to be stated. Cutting the "here's why that matters" sentence usually improves the paragraph.

### 3. Audit

Run `references/audit.md` line by line. It's mechanical and takes a minute. Do not skip it on short pieces. Cold emails are where the tells cost most.

### 4. Cut 20–30%

Non-negotiable, and do it last. Delete every sentence that doesn't carry a fact, an ask, or a turn in the argument. The closing paragraph that restates the piece goes first; it is almost always pure padding.

---

## Hard bans

These cover most of the distance. Full catalogs in `references/slop-lexicon.md` (words and phrases) and `references/syntax-tells.md` (structures).

**Openers.** "I hope this email finds you well." "I hope you're doing well." "I wanted to reach out." "I'm reaching out because." "I came across your profile." "My name is X and I am." "In today's fast-paced world." "In an era of." "In the ever-evolving landscape of." Start at the point instead.

**The negative-parallelism reflex.** "It's not just X — it's Y." "This isn't about X. It's about Y." "Not because X, but because Y." "More than just a X." This is the single most recognizable AI sentence shape in existence. Cap: **zero per piece.** Say the thing you mean directly; the contrast is almost never doing real work.

Includes the **compressed form**, which evades the check because it contains no "not just": "Different domain, same trust boundary." "Same problem, new market." "Less X, more Y." Any two-beat antithesis with the verb removed. Same family, same cap.

**Comma density.** The highest-signal tell there is, above any banned word. Every comma introducing a clause that explains the clause before it puts the writing in teaching register. Stack three and it reads as documentation rather than a message to a person. In outbound under 100 words, target **fewer than two commas total.** Replace comma-appositives by restructuring (`i work at northwind, doing integrations` → `i build integrations at northwind`) and comma lists with repeated "and" (`creates and tests and repairs`). Parentheses work for a genuine aside, but never for company boilerplate — that's sales register whatever punctuation holds it.

**Explaining the recipient's business back to them.** "Kestrel has a harder version of the same problem, 100+ vendor systems on one platform." "You're building the same layer for defense hardware." They know. Narrating their own company at them reads as a consultant pitch or as a model proving it read the website. Describe your work and let them make the connection. Never assess their stakes for them.

**Tricolons.** "Faster, cheaper, and more reliable." "Clear. Concise. Human." Any three parallel items, especially adjectives. Cap: **one per piece, and only if the three items are genuinely distinct.** Two items is fine and reads human. Four is fine. Three parallel items is the tell.

**Em-dashes.** Cap: **one per ~400 words**, zero in anything under 150 words. Use a period, a comma, or a colon. (The em-dash isn't bad writing; the *density* is the tell.)

**Unearned enthusiasm.** "Thrilled." "Excited to share." "Incredible." "Amazing." "I'd love to." "Truly." "Deeply." "Passionate about." "Resonated with me." If a feeling is real, show the fact that caused it and let the reader infer the feeling.

**Corporate verbs and their nouns.** delve, leverage, utilize, foster, harness, spearhead, streamline, empower, elevate, unlock, unleash, curate, amplify, showcase, underscore, embark, navigate (figurative), align, resonate. And: robust, seamless, holistic, myriad, plethora, multifaceted, nuanced, pivotal, transformative, groundbreaking, cutting-edge, game-changing, impactful, meaningful, actionable, valuable insights, key takeaways, best-in-class, world-class, tapestry, testament, realm, landscape, journey, ecosystem.

**Hollow qualifiers.** "It's worth noting that." "It's important to note." "It's no secret that." "At the end of the day." "The reality is." "Here's the thing." "That said." "Ultimately." "In conclusion." Delete them; the sentence after is fine on its own.

**The vague demonstrative.** Sentences starting with "This" or "That" pointing back at a whole previous paragraph. Name the referent: not "This is why it matters," but "The refund race is why it matters."

**Closing padding.** "Looking forward to hearing from you!" "Thank you for your time and consideration." "I look forward to the possibility of discussing." "Excited for what's next!" End on the ask, or on the last real sentence. One short sign-off line maximum.

**Emoji bullets and hashtag stacks** in LinkedIn posts. ✅ 🚀 🙏 and `#Grateful #Blessed` read as automated even when a human types them.

---

## Register

Register follows the channel, not a house style. `references/channels.md` has the per-channel playbook for cold email, job applications, LinkedIn, and long-form, including length targets and the failure mode specific to each.

**If the reader is a founder or engineer at a startup, go straight to `references/startup-outbound.md` instead.** That audience gets lowercase, 70–90 words, no terminal periods, near-zero commas, one take, one admitted gap, and a social ask. It is the most common case and the one with the least tolerance for a synthetic sentence.

The constant across all of them: **plain, specific, and willing to be uninteresting.** Slop is what happens when writing tries to be interesting without having anything to be interesting about.

## References

- **`references/startup-outbound.md`** — **the primary playbook.** Load it for any cold email or DM to founders, engineers, or CTOs at startups. Overrides `channels.md` where they conflict.

Load the rest as needed:

- **`references/audit.md`** — the mechanical pass. Run every time, before delivering.
- **`references/slop-lexicon.md`** — full banned-phrase catalog with what to write instead. Grep it when a sentence feels off but you can't name why.
- **`references/syntax-tells.md`** — structural patterns: sentence shapes, rhythm, paragraph architecture, the tonal defaults that need overriding.
- **`references/channels.md`** — cold email, job applications, LinkedIn, essays.
- **`references/examples.md`** — full before/after rewrites, one per channel. Read these if the abstract rules aren't landing.
- **`CHANGELOG.md`** — where every rule came from. **When Archit flags something in a draft, add an entry** using the convention at the top of that file, then write the rule into the playbook it belongs in.

## When editing someone else's draft

Preserve their voice; remove the tells. Their odd word choices, their sentence quirks, their lack of parallelism: that's the signal, keep it. Cut the parts that sound like they were smoothed over.

Show the diff or the rewrite, and name the two or three biggest problems in one line each. Don't lecture, and don't rewrite a piece that's already fine just to demonstrate effort.
