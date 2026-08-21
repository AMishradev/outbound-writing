# Syntax and structure tells

Word-level bans only get you partway. A draft can contain zero banned words and still read as generated, because the *shapes* are wrong. This file covers sentence architecture, rhythm, paragraph structure, and tonal defaults.

These are harder to grep for and matter more.

---

## 1. Negative parallelism (the biggest one)

The single most recognizable AI sentence shape:

> It's not just about the tools — it's about the culture.
> This isn't a productivity problem. It's a priority problem.
> Not because it's easy, but because it's right.
> More than just a database, it's a platform.
> The question isn't whether X. It's when.

The move sets up a strawman ("just the tools") only to knock it down, which feels like insight while asserting almost nothing. Readers now register it instantly.

**Cap: zero per piece.** No exceptions in short outbound.

### The compressed form

Same pattern with the verb removed, which is how it slips past the check above — it contains no "not just," so a grep never sees it:

> Different domain, same trust boundary.
> Same problem, new market.
> Less ceremony, more shipping.
> Not a product, a protocol.

Any two-beat antithesis balanced on a comma. It feels like compression and reads like a tagline. **Same family, same cap of zero.** If the two halves are both true and both load-bearing, they deserve a real sentence each.

**Fix:** state the claim without the contrast.

- ❌ "It's not just about writing code — it's about building trust."
- ✅ "Most of the job turned out to be getting four teams to agree on an interface."

If the contrast is genuinely doing work, make it concrete and asymmetric so it doesn't scan as the template:

- ✅ "I expected the hard part to be sharding. It was the reporting queries."

That works because both halves are specific and it reports a real surprise.

## 2. The tricolon

Three parallel items, especially three adjectives or three short clauses:

> faster, cheaper, and more reliable
> Clear. Concise. Human.
> We build tools that are simple, powerful, and delightful.
> Ship small. Ship often. Ship together.

Three is the rhetorical default and the model reaches for it constantly, including when there are really only two ideas and the third is padding.

**Cap: one per piece**, and only when all three items carry distinct information.

**Fix:** cut to two, expand to four, or break the parallelism.

- ❌ "robust, scalable, and maintainable systems"
- ✅ "systems that survive a bad deploy" (one specific beats three vague)

## 2b. Comma density

The highest-signal structural tell, and the one that survives every word-level edit.

Model prose attaches an explanatory clause to the end of a sentence that was already finished. Each one is grammatical. Three in a row and the reader is being taught rather than talked to.

> I work at Northwind, doing integrations for AI agents.
> You're building the same layer for defense hardware, which is why I'm writing.
> Each sandbox is disposable and gets leased only the capabilities that one run needs, so nothing inside can reach further than the job requires.

Nine commas in 137 words. Every one of them is a small lecture.

**Diagnostic:** count commas, divide by words. Above ~1 per 15 words in short outbound and the register has slipped.

**Three fixes:**

| Pattern | Fix | Example |
|---|---|---|
| Comma-appositive (`X, our Y`) | Parens, or restructure | `i build integrations at northwind` |
| Comma list (`a, b, and c`) | Repeat "and" | `creates and tests and repairs` |
| Trailing explainer (`…, which is why…`) | Delete it | *(the sentence was done)* |

**Watch the overcorrection.** Removing commas without merging clauses produces staccato — a run of short declaratives, each ending in a period, which reads as generated compression and is its own tell. Join with `and` / `so` / `but` instead of stacking periods.

> ❌ `Control plane holds auth and session state. Each sandbox is disposable. It only gets what that run needs.`
> ✅ `control plane holds auth and session state and each sandbox only gets the capabilities its run needs`

## 2c. Manufactured hesitation

A transition that performs a mental state in order to earn the sentence after it:

> the part i keep going back and forth on is X
> the thing i keep coming back to is X
> what i'm still chewing on is X
> what struck me was X
> i've been thinking a lot about X
> i'm curious how you think about X

Each one announces that thinking occurred rather than showing any. They're throat-clearing that sounds introspective, which is why they survive editing — they feel like voice.

**Fix:** delete it and ask the question, or replace it with a concrete fact that proves the work.

- ❌ `the part i keep going back and forth on is self healing` → `how do you decide a regenerated recipe is safe to ship`
- ✅ `credentials never touching the model and each run only getting the scopes it needs` → `how did yall decide a regenerated recipe is safe to ship`

Same test as the CTA rule: if you can explain why the line is there, it's technique and it shows.

## 2d. Subjectless capability declarations

A sentence with no subject and no active verb, describing what a system does:

> credentials never touching the model and each run only getting the scopes it needs
> every request scoped to a single tenant and nothing persisted between runs
> auth handled at the edge and secrets resolved at execution time

Markers: two clauses joined by `and`, participles or gerunds carrying the behavior, no `we`, perfect balance. This is landing-page grammar, because that is where the form comes from. Nobody has ever said one of these out loud.

**Fix:** give it a subject and an active verb, or cut it.

- ❌ `credentials never touching the model and each run only getting the scopes it needs`
- ✅ `we do the same thing with creds`

Cutting is usually right. These lines tend to appear where another sentence already made the point, and the declaration is just the same claim in a suit.

**Two nominalized forms of the same tell:**

`plus` joining noun phrases — `a control plane plus disposable sandboxes`, `auth plus routing`, `a queue plus a worker pool`. Nobody says "plus" out loud describing what they built. Use `and`, or restructure around a verb.

`the X part` labeling an experience — `the brittle part`, `the hard part`, `the tricky bit`. Say what it did: `never got the environment setup to stop breaking`.

When a detail forces either construction, first check whether the detail is load-bearing. It usually is not, and cutting it removes the problem.

---

### The governing test

Sections 2b, 2c and 2d, plus the CTA rules in `startup-outbound.md`, are one failure in four costumes: a spec-sheet list, a manufactured hesitation, a subjectless declaration, an engineered ask. Each reads as **authored** rather than **spoken**.

**Would you say this out loud to a peer?**

If the line only works written down, it's slop no matter how clean it reads. Say it aloud, type what you said, and stop there — every further pass toward "better" is a pass back toward these patterns.

## 3. Rhythm regularity

Model prose alternates long and short sentences on a metronome. Long setup, short punch. Long setup, short punch.

> The migration took eight months and touched every service we own. It was brutal.
> We rewrote the scheduler from scratch, twice, under a deadline. Nobody enjoyed it.

Two of these in a row is a signature.

**Diagnostic:** write down your sentence word-counts in order. `19, 4, 22, 5, 17, 3` is the tell. Real writing looks like `12, 9, 14, 28, 6, 11, 19`.

**Fix:** put three medium sentences in a row. End a paragraph on a medium sentence rather than a punchy fragment. Let one sentence run genuinely long with a subordinate clause or two, because real people do that when they're thinking through something and don't stop to break it up.

## 4. The fragment kicker

Ending a paragraph with a one- or two-word fragment for emphasis:

> Every time.
> Not anymore.
> That's it.
> Full stop.
> And it worked.

Fine once. Twice in a piece is a tell. Three times is a parody.

## 5. Participial tails

Sentences that end with a comma and an `-ing` clause summarizing their own significance:

> We shipped the new pipeline in March, cutting build times by half.
> The team adopted it quickly, transforming how they collaborate.
> He left in 2019, paving the way for a new generation of tooling.

The tail is usually the model explaining its own sentence back to you.

**Fix:** make it a separate sentence with a subject, or delete it.

- ✅ "We shipped the new pipeline in March. Builds went from 20 minutes to 9."

## 6. The colon reveal

> The result: a 40% lift in conversion.
> The problem: nobody owned it.
> The best part? It took a weekend.

Once is fine. It's a tell in aggregate, and the `?`-variant ("The best part?") is heavily overused.

## 7. Vague demonstratives

Sentences starting with "This," "That," "These," or "It" pointing at an entire preceding paragraph:

> This is why the migration mattered.
> That's the real lesson here.
> It's the kind of thing that changes how you think.

The referent is fuzzy, which makes the sentence feel meaningful without being checkable.

**Fix:** name the noun. "The dual-write window is why the migration mattered."

## 8. Rhetorical questions as transitions

> So what does this mean for you?
> Why does this matter?
> Sound familiar?
> What changed?

The model uses these to fake a conversational turn. Real writers mostly just make the next statement.

**Cap: one per essay, zero in email.**

## 9. List-ification

Converting prose into bullets with bolded lead-ins:

> - **Speed:** The new system is faster.
> - **Reliability:** Fewer outages.
> - **Cost:** Cheaper to run.

Lists are for things that are genuinely enumerable and non-sequential — steps, options, requirements. They are not for three related observations that belong in a paragraph. Bulleting an argument destroys the connective tissue that made it an argument.

**Rules:**
- Zero lists in emails under 200 words
- No list of exactly three items with bolded one-word labels
- If the items have a logical relationship (this causes that, this then that), write prose

## 10. Paragraph uniformity

Model paragraphs are all 3–4 sentences and all roughly the same length, producing a visually even block wall. Human writing has a one-sentence paragraph next to a seven-sentence one.

**Fix:** deliberately vary. Let the most important point sit alone in a short paragraph. Let a piece of reasoning run long.

## 11. The summary close

The last paragraph restates the piece:

> Ultimately, building great software comes down to understanding your users, iterating quickly, and never losing sight of the bigger picture.

This paragraph contains zero new information and exists because the model was taught to conclude. **Delete it.** End on the last real thing you had to say, or on the ask.

Same for essays: the "so what does this all mean" wrap-up is almost always the weakest paragraph. Cut it and the piece ends on something concrete, which is stronger.

## 12. Balanced-concern symmetry

> While remote work offers flexibility, it also presents challenges around collaboration.
> There are strong arguments on both sides.
> The truth likely lies somewhere in the middle.

Reflexive both-sidesing reads as having no position. If a tradeoff is real, say which side you land on and what it costs you.

- ✅ "Remote worked for us and the thing we lost was junior onboarding. We never solved that."

## 13. Explaining the joke

The model states an implication the reader already got:

> We shipped it in a weekend. That speed was only possible because the team was small.

The second sentence is the model checking its work. Cut it and trust the reader.

Related: never follow a concrete anecdote with a sentence that extracts its lesson. The anecdote *was* the lesson.

## 14. Tonal defaults to override

These aren't sentence shapes, they're dispositions baked into default output. Each needs conscious reversal.

| Default | Override |
|---|---|
| Enthusiastic about everything | Be neutral by default; save intensity for one thing |
| Never disagrees with the recipient | Include one point of friction where honest |
| Flatters, then asks | Give something useful, then ask |
| Emphasizes upside | Name a cost, a limit, or a thing that failed |
| Wraps everything up cleanly | Leave a loose end if there is one |
| Uniformly warm to everyone | Match warmth to the actual relationship |
| Hedges rather than committing | Commit; hedge only where uncertainty is real |
| Apologizes for taking up space | Don't |
| Sounds equally interested in every topic | It's okay to sound more interested in one part |

The highest-leverage of these is the fourth. **One honest negative — a gap, a failure, a limitation, a thing you don't know — does more for perceived humanity than every other technique in this file combined.** It is also the thing default output will never do on its own, because it optimizes for sounding good rather than sounding true.

## 15. Information density

A human writing to a specific person includes details that serve no rhetorical purpose — a date, a name, a small aside, a thing that's slightly beside the point. Generated prose is uniformly on-topic and uniformly load-bearing, which is itself unnatural.

- ❌ "I worked on the payments system and improved its reliability."
- ✅ "I worked on the payments reconciliation job — the thing that matches our ledger against Stripe's settlement file every night at 2am. It broke a lot."

The "every night at 2am" earns nothing argumentatively. That's why it reads as real.
