# Startup outbound to technical people

The primary playbook. Use it for cold email and DMs to founders, engineers, CTOs, and early employees at startups — especially AI, infra, and hard tech.

This audience reads more cold outbound than almost anyone alive and has the sharpest detector for generated text, because they ship the models. One synthetic sentence and the rest of the email is discounted. The register below is not a stylistic preference; it is the price of being read.

Everything in `slop-lexicon.md` and `syntax-tells.md` still applies. This file adds what's specific to the audience, and it **overrides the general channel guidance in `channels.md` whenever they conflict.**

---

## The register

**Lowercase.** Sentence-initial lowercase throughout, including the greeting. Keep initialisms uppercase (`LA`, `API`, `GPU`) because lowercase `la` reads as a word, not a place. This signals peer-to-peer rather than applicant-to-authority, and among founders it is the default, not an affectation.

**Short, but not staccato.** Terse sentences are right. A machine-gun run of four-word declaratives is not — it reads as generated compression. Join clauses with `and` / `so` / `but` and let thoughts run.

**Nonchalant about everything except the ask.** Understate your work. Do not brand your internal project at a stranger. Do not credential yourself. Then be direct and specific about what you want. The contrast is the whole voice: low-effort about status, high-clarity about the request.

**Assume shared context.** A technical reader does not need "control plane" defined. Defining it is the tell.

---

## Punctuation is the highest-signal tell

Higher than any banned word. A draft can pass the entire lexicon and still read as generated because of its comma count.

### Comma density

Every comma that introduces a subordinate clause explaining the clause before it is **teaching register**. Stack three and the email sounds like documentation.

- ❌ `i work at northwind, doing integrations for AI agents. you're building the same layer for defense hardware, which is why i'm writing.`
- ✅ `i build integrations at northwind and the system that tests and repairs them`

Target: **under two commas in a sub-100-word email.** Zero is achievable and reads best.

### Parentheses, not comma-appositives

`X, our Y` and `X, doing Y` are instant tells. The same content in parens reads as an aside a person tossed in.

- ❌ `i work at northwind, doing integrations for AI agents`
- ❌ `i built zen, our sandboxing layer`
- ✅ `(and it took three tries)` — an actual aside

**But never put company boilerplate in them.** A positioning one-liner is sales register no matter what punctuation holds it, and parens don't launder it.

- ❌ `i work at northwind (we manage tool calls for agents)`
- ✅ `i build integrations at northwind`

Name the employer and your role in it, nothing more. A technical reader looks up the company if they care, and declining to explain is the nonchalant move. The best version of this line often has no parens at all — check whether restructuring beats the aside.

### Polysyndeton, not comma lists

Comma-separated lists of what a system does are spec-sheet shape. Repeat `and` instead. Same content, spoken rhythm.

- ❌ `i build the system that creates, tests, and repairs our integrations`
- ✅ `i build the system that creates and tests and repairs our integrations`

This also dissolves the tricolon problem — three items joined by repeated `and` don't scan as a rhetorical triad.

### Terminal periods

In short outbound to this audience, **drop them.** One thought per line, line breaks do the work. A body with zero periods and zero commas reads unmistakably human because no generator produces it.

Keep periods in anything over ~150 words or when writing to someone senior outside the startup world.

### Never use

Em-dashes, semicolons, colon-reveals (`the thing: a result`). All three are writing-desk punctuation and none of them appear in how people actually type to each other.

---

## Never explain their business back to them

The single worst move available, and the most common one.

- ❌ `kestrel has a harder version of the same problem. 100+ vendor systems on one platform, and much worse consequences for getting it wrong.`
- ❌ `you are building the same layer for defense hardware`
- ✅ *(cut entirely — say your thing and let them make the connection)*

They know their own company. Narrating it back reads as either a consultant pitch or a language model demonstrating that it read the website. Describe **your** work plainly and trust a technical reader to see the overlap in half a second. If the overlap is too obscure for them to catch unaided, the email has a relevance problem that no sentence will fix.

Corollary: never tell them their stakes ("much worse consequences for getting it wrong"). A stranger assessing the gravity of your work is presumptuous even when correct.

---

## Have a take

The reader's only real question is *why is this person emailing me*. A position answers it; a description doesn't.

The best takes are ones that **cost you something** — a claim that's awkward given where you work, a bet you've made, an opinion you'd have to defend.

- ✅ `i build integrations at northwind` / `i think saas is dead though and hard tech is where i want to be`

Working at a SaaS company and saying that is a real position with skin attached. No generator volunteers a stance against its own employer.

Avoid takes that are just flattery in disguise (`i think what you're building is the future`). That's not a position, it's a compliment wearing a hat.

---

## Say the thing that disqualifies you

Carried over from the core skill, and it matters more here than anywhere. Name the gap in the same breath as the credential.

- ✅ `no defense background and none of what i've done has ever run near anything classified so not going to larp otherwise`

Calibration reads as confidence. Someone who volunteers the disqualifier is probably not inflating the rest, so the honest gap makes the real credential land harder. Say `none of what i've done` rather than `none of this` — a vague demonstrative pointing at a whole paragraph is its own tell.

---

## Vocabulary

In-group terms, used sparingly. These are load-bearing when they replace an earnest sentence with a shorter one, and cringe when they're decoration.

| Term | Means | Good use |
|---|---|---|
| `larp` | posturing, pretending to be something | `not going to larp otherwise` — replaces a whole paragraph of hedging about lacking a background |
| `gmi` | gonna make it | Rare in cold outbound. Fits in follow-ups and replies. |
| `ngmi` | not gonna make it | Only about a category or trend, **never about a person or their company.** |
| `cooked` | doomed, in trouble | Same constraint as ngmi. |
| `ship` / `shipped` | released | Always over "delivered", "launched", "executed on" |

**Hard rule: at most one per email.** Three slang terms in eighty words is try-hard, and try-hard breaks the nonchalance the register depends on. Pick the one that replaces the most earnest sentence and drop the rest.

**Never** aim `ngmi` or `cooked` at the recipient, their company, or their market. Outlandish is fine, rude is not.

---

## Subject lines

Two modes. Nothing else works.

### Mode 1 — reference something real *(default)*

Two sub-modes, and the first one is better.

**1a. Recent company news — the strongest play available.** A partnership, a contract, a launch, a program selection.

- `saw the nato selection news`
- `four exercises in two months`
- `the orion integration`

**Freshest beats biggest.** Rank candidate news by date, not by size, and start from the top. Anything over ~10 weeks old is stale.

**Skip the funding round.** It is almost always the largest and most-covered item, which means every recruiter, vendor, and founder in their inbox referenced it the week it landed. Using it puts you in exactly the pile you're trying to escape. A $45M Series A is a worse hook than an obscure program selection from six weeks later.

**News is cheap to make true.** A partnership announcement takes sixty seconds to actually read before sending, so the claim is honest at almost no cost. That's what makes 1a safer than 1b.

**1b. Something they personally made.** A podcast episode, a post, a phrase of theirs.

- `saw ur drone ultimatum ep`
- `ur stovepipe translator thing`

Note `ur`, not `your`. Consistent with the register.

**Expensive to make true.** A 90-minute episode costs 90 minutes, and skipping it plants a lie with a fuse on it — it detonates the moment they ask what you thought. Only use 1b for something genuinely consumed. When you haven't, 1a gets you the same specificity for a minute of reading.

Mode 1 wins on **reply rate** either way. It proves this isn't a mass send.

### Mode 2 — outlandish but not rude *(fallback)*

Use when there's no recent news and nothing of theirs you've actually read.

Absurd, self-deprecating, confident. Zero information. Cannot be falsified.

- `defector from saas`
- `the magical man from northwind`
- `emissary from the dying world of saas`
- `taco enjoyer from northwind`

Wins on **open rate**, and it's the safer play because there's no claim in it to check.

The line between outlandish and rude: the joke lands on **you**, never on them. `defector from saas` mocks the sender. Anything mocking their company, market, or funding is a different email.

### Rules for both

- Lowercase, no punctuation, under six words
- **Never collide with your first line.** Subject `saas is dead` above a body opening `i think saas is dead` wastes both. The subject should set up the body, not preview it.
- Never `Quick question`, `Following up`, `Opportunity`, or anything with `!`

---

## The CTA

**Bold on the ask, nonchalant everywhere else.** This is the one place to be direct.

**Social beats transactional.** A request for routing lands in a queue. A specific human proposal is a thing a person does.

- ❌ `who on your integrations team should i be talking to?`
- ❌ `any chance i could get 20 minutes`
- ❌ `i'd like to talk to someone about how you handle it`
- ✅ `would love to grab al pastor tacos at the leo's with someone from your integrations team and learn more about the hard tech space`

Why the food version wins: it names a real place, it's low-stakes, it gives whoever takes it a flattering and easy reason to say yes, and it reads as a person with a life rather than a pipeline stage.

**Include a real logistical detail** that costs nothing and proves you're local or actually traveling — `family's in palms so the westside is a short drive`. Details that earn nothing argumentatively are what make writing read as lived.

**Verify the local reference.** A wrong restaurant is worse than no restaurant. It's the one checkable fact in the whole email.

---

## Structure

Four lines, one thought each, no periods:

```
hi <first name>

<what you do, plainly — employer and role, no boilerplate>

<your take, and it must set up the ask>

<the gap you don't have, with larp or equivalent>

<when you're around, and why, in one line>

<social ask, specific place, specific team>

<first name>
```

Target **70–90 words.** Over 100 and the register breaks.

**Write the spine first.** One sentence naming the logical chain — *build integrations → saas is dead, want hard tech → no defense background → in town → food* — then check every line is a step on it. If a line isn't on the spine it goes, however well it reads alone. This is what separates five good sentences from an email.

---

## Worked example

Seven drafts of one cold email to a defense-tech founder, from a Northwind engineer. What each pass removed.

**Draft 1 → 2:** cut the opening rhetorical question (setup posing as curiosity), the colon-reveal appositive, the manufactured `under it,` transition, and `different domain, same trust boundary` (compressed antithesis, same family as *it's not just X, it's Y*).

**Draft 2 → 3:** cut every comma-appositive. Nine commas down to three.

**Draft 3 → 4:** lowercased everything. Cut the line explaining the recipient's own business back to him.

**Draft 4 → 5:** killed the staccato periods. Replaced the architecture spec sheet with a take (`saas is dead`). Swapped the routing CTA for the food CTA. Added `larp`.

**Draft 5 → 6:** restored the one fact that actually mattered — a system that tests and repairs integrations, which is the recipient's core maintenance burden — and swapped the Mode 2 subject for recent company news.

**Draft 6 → final:** ran the coherence pass for the first time. Cut the company-boilerplate parenthetical (sales register). Halved the opening line. Replaced the filler `have been following what you guys are building` with the take that actually sets up the CTA. Removed a duplicate `hard tech` and merged the two location lines.

### Final

```
subject: saw the nato selection news

hi sam

i build integrations at northwind and the system that tests and repairs them

i think saas is dead though and hard tech is where i want to be

no defense background and none of what i've done has ever run near anything classified so not going to larp otherwise

back in LA the week of aug 28 visiting my family in palms so the westside is a short drive

would love to grab al pastor tacos at the leo's with someone from your integrations team and learn more about the space

archit
```

78 words. Zero periods, zero commas, zero parentheses, one slang term, one take, one admitted gap, one social ask, one logistical detail.

**The spine:** build integrations → saas is dead, want hard tech → but no defense background → in town → food. Every line is a step on it. Line 1 earns the relevance, line 2 gives the motive, line 3 bounds the claim, line 4 makes it concrete, line 5 asks. Remove any one and the next stops making sense.

**The lesson from draft 5.** Cutting slop and cutting substance look identical while you're doing it. Draft 5 read beautifully and had lost the only fact that made the email worth sending. When a rewrite makes something shorter and cleaner, check what left with the noise — the relevant credential is usually the first casualty, because it's the part that was hardest to say plainly.
