# Changelog

Every rule in this skill came from a specific correction. This file records who asked for what, when, and why, so a rule can be traced back to the draft that motivated it and reversed if it stops earning its place.

## Convention

When Archit flags something in a draft, add an entry under the current unreleased version:

```markdown
### N. Short rule name
**Flagged:** what he said, quoted or close to it
**Rule:** the generalized rule, one line
**Before:** the offending text
**After:** the fix
**Lands in:** file the rule was written into
```

Bump the minor version when a batch of suggestions gets folded in. Bump major on a scope change (new audience, new channel set). Date every version. Never delete an entry — supersede it with a later one and note which entry it replaces.

---

## v1.1 — 2026-08-16

Refocused the skill around **startup outbound to technical people**. Added `references/startup-outbound.md` as the primary playbook. All sixteen entries below came from iterating one cold email to the CEO of a defense-tech company through six drafts.

### 1. Opening questions are rhetorical setup
**Flagged:** "I would honestly get rid of the first question it sounds way too AI-like"
**Rule:** Do not open with a question about the recipient's architecture or business. It poses as curiosity while actually staging your own answer.
**Before:** `How do you scope what any one of those is allowed to do once it's connected?`
**After:** *(cut, no replacement)*
**Lands in:** `startup-outbound.md`

### 2. Colon-reveal appositives
**Flagged:** "way too botty the first part of the sentence"
**Rule:** Never define your work with `X, a Y that does Z:` — appositive plus colon is a product-page construction.
**Before:** `I built Zen, a coding-agent system with the same shape: a long-running control plane...`
**After:** `i build the system that creates and tests and repairs our integrations`
**Lands in:** `startup-outbound.md`, `syntax-tells.md`

### 3. Manufactured transitions
**Flagged:** "also way too botty"
**Rule:** Cut constructed connectives (`Under it,` `That said,` `Which is why`). Let adjacent sentences sit next to each other.
**Before:** `Under it, disposable Modal sandboxes hold only the capabilities leased to that exact generation.`
**After:** *(merged into the preceding line)*
**Lands in:** `startup-outbound.md`

### 4. Compressed antithesis
**Flagged:** "also way too botty"
**Rule:** `Different X, same Y` is the same family as `it's not just X, it's Y` — a compressed antithesis. Cap zero, same as the parent pattern.
**Before:** `Different domain, same trust boundary.`
**After:** *(cut)*
**Lands in:** `syntax-tells.md`
**Note:** This one existed in the skill as a banned pattern and I wrote it anyway. The short form evades the check because it doesn't contain "not just."

### 5. Comma density is the top tell
**Flagged:** "way too many commas, the tone of the sentence is just weird it's like you are teaching or explaining something to me"
**Rule:** Every comma introducing a clause that explains the clause before it is teaching register. Target under two commas per sub-100-word email.
**Before:** nine commas in 137 words
**After:** zero commas in 86 words
**Lands in:** `startup-outbound.md`
**Note:** Highest-signal rule in this batch. Outranks every word-level ban.

### 6. Never explain their business back to them
**Flagged:** "straight trash i can easily tell that's AI slop writing" / "from sam's perspective he is going to be reading all these different things right"
**Rule:** Do not narrate the recipient's company, scale, or stakes to them. Describe your own work and let a technical reader make the connection.
**Before:** `Kestrel has a harder version of the same problem. 100+ vendor systems on one platform, and much worse consequences for getting it wrong.`
**After:** *(cut entirely)*
**Lands in:** `startup-outbound.md`

### 7. Parentheses over comma-appositives
**Flagged:** "weird phrasing instantly can tell it's AI... honestly better would be parenthesis like (we manage tool calls for agents)"
**Rule:** `X, doing Y` and `X, our Y` become `X (Y)`.
**Before:** `I work at Northwind, doing integrations for AI agents`
**After:** `i work at northwind (we manage tool calls for agents)`
**Lands in:** `startup-outbound.md`

### 8. Spell out "you are"
**Flagged:** "You're??? just say You are that's so clearly AI"
**Rule:** Author preference. Do not contract `you are` in outbound.
**Lands in:** `startup-outbound.md`
**Note:** Runs against the usual heuristic that contractions read more human. It's his voice, applied as stated. Revisit only if he raises it.

### 9. Lowercase register
**Flagged:** "angling myself with a lowercase and shorter briefer sentences with these ai startup founders is high meta"
**Rule:** Sentence-initial lowercase throughout including the greeting. Initialisms stay uppercase (`LA` not `la`).
**Lands in:** `startup-outbound.md`

### 10. Periods are a red flag
**Flagged:** "the periods are kind of a red flag that this is ai slop" / "i don't like the periods there"
**Rule:** Drop terminal periods in short outbound. One thought per line, line breaks carry the structure. Keep periods above ~150 words.
**Before:** `Control plane holds auth and session state. Each sandbox is disposable and only gets the capabilities that one run needs.`
**After:** single line, no terminal period
**Lands in:** `startup-outbound.md`
**Note:** Supersedes the over-correction in entry 5 — killing commas produced staccato periods, which is its own tell. Fix both together with `and` / `so` / `but` joins.

### 11. Polysyndeton over comma lists
**Flagged:** "i generally believe that the phrasing of something like built x, into y, into z with all those commas is weird and is ai slop"
**Rule:** Repeat `and` instead of comma-separating what a system does. Also dissolves the tricolon problem.
**Before:** `creates, tests, and repairs`
**After:** `creates and tests and repairs`
**Lands in:** `startup-outbound.md`

### 12. In-group vocabulary
**Flagged:** "i want to start outbounding some slang terms like gmi(gonna make it), ngmi(not gonna make it), larp"
**Rule:** `larp`, `gmi`, `ngmi`, `cooked`, `ship`. Max one per email. Never aim `ngmi` or `cooked` at the recipient or their company.
**Before:** `so parts of this probably don't transfer`
**After:** `so not going to larp otherwise`
**Lands in:** `startup-outbound.md`

### 13. Bold on the ask, nonchalant elsewhere
**Flagged:** "be bold in asking for a meeting but be nonchalant around other things"
**Rule:** Understate your work, don't brand internal projects at strangers, don't self-credential. Then be direct and specific about the ask. The contrast is the voice.
**Lands in:** `startup-outbound.md`

### 14. Social CTA over routing CTA
**Flagged:** "who on your integrations team should i be talking to? clear AI slop CTA, no reason for that"
**Rule:** Propose a specific human thing at a specific real place. A routing request lands in a queue; a lunch proposal is a thing a person does.
**Before:** `who on your integrations team should i be talking to?`
**After:** `would love to grab al pastor tacos at the leo's with someone from your integrations team and learn more about the hard tech space`
**Lands in:** `startup-outbound.md`

### 15. Two subject-line modes
**Flagged:** "it should almost always be something like saw ur post on xyz, or something extremely outlandish and silly but not rude, for example the magical man from northwind"
**Rule:** Mode 1 references real consumed content (`saw ur drone ultimatum ep`) and wins reply rate. Mode 2 is absurd and unfalsifiable (`defector from saas`) and wins open rate. Lowercase, under six words, must not collide with the first line. Mode 1 only for content actually consumed.
**Lands in:** `startup-outbound.md`

### 16. Vague demonstratives
**Flagged:** his own rewrite, `none of what i've done` replacing `none of this`
**Rule:** Replace `this` / `that` pointing at a whole preceding idea with the concrete referent.
**Before:** `none of this has ever run near anything classified`
**After:** `none of what i've done has ever run near anything classified`
**Lands in:** `startup-outbound.md`, `syntax-tells.md`

### 17. Recent company news is the default subject
**Flagged:** "i think between the two subject lines referencing news about the company very recently is the most interesting play to be honest"
**Rule:** Mode 1 is the default and Mode 2 is the fallback. Within Mode 1, recent *company news* (1a) outranks *something they personally made* (1b). Rank candidates by date not size; anything over ~10 weeks is stale. **Skip the funding round** — it's the most-covered item and everyone else already used it. News is cheap to make true (60 seconds of reading) where a podcast reference costs 90 minutes, so 1a carries far less falsification risk than 1b.
**Before:** `defector from saas` (Mode 2, unfalsifiable but generic)
**After:** `saw the nato selection news` (program selection from 6 weeks prior)
**Lands in:** `startup-outbound.md`
**Refines:** entry 15, which presented the two modes as equal and ranked Mode 2 as the recommended pick.

### 18. No company boilerplate, even in parentheses
**Flagged:** "it sounds like i'm trying to sell him something"
**Rule:** Parens are for asides, not for positioning statements. A company one-liner is sales register regardless of the punctuation around it. Name the employer and your role in it, nothing more — a technical reader will look up the company if they care, and not explaining is the nonchalant move.
**Before:** `i work at northwind (we manage tool calls for agents) and i build the system that creates and tests and repairs our integrations`
**After:** `i build integrations at northwind and the system that tests and repairs them`
**Lands in:** `startup-outbound.md`
**Refines:** entry 7, which introduced parens as the fix for comma-appositives without bounding what belongs inside them.

### 19. Coherence pass after every edit
**Flagged:** "you should check through the lines and see if they actually make sense instead of just like writing stuff and then keeping it from the last version even though it doesn't connect to the other lines"
**Rule:** After any revision, re-read the whole piece start to finish and check that each line connects to the ones around it. Lines that survived from an earlier draft are the prime suspects — they were written to connect to sentences that no longer exist. Delete orphans rather than leaving them because they read fine in isolation.
**Before:** five disconnected lines — `though` pivoting off a job description with no bridge, `have been following what you guys are building` attached to nothing, `larp` referring to defense while the prior line was about saas, `hard tech space` in the CTA with no setup, and two consecutive lines doing location
**After:** an explicit spine — build integrations → saas is dead, want hard tech → but no defense background → in town → food. Each line feeds the next.
**Lands in:** `audit.md` (Pass 7), `startup-outbound.md`
**Note:** This is a process failure, not a style one. Local edits kept passing every mechanical check while the piece as a whole stopped making sense. No word-level rule catches it.

### 20. LinkedIn DMs get their own playbook
**Flagged:** "this going to be a linkedin dm so you can create a fork or a diff version"
**Rule:** `linkedin-dm.md` forks `startup-outbound.md` rather than copying it. Register is identical; the container is not. No subject line, so line one *is* the preview. No sign-off, because the name is already on the message. No credentialing, because the profile is one tap away. No links in message one. 40–70 words instead of 70–90. The ask must be answerable in a single line, since that is how people reply from a phone. Adds connection-request notes (300 chars, everything in the note) and warm re-connects (lead with the thing that happened, never "not sure if you remember me").
**Lands in:** `linkedin-dm.md`, referenced from `SKILL.md`
**Note:** Kept as a fork, not a merge. The two channels share the voice and disagree on nearly every structural rule, so one file with conditionals would be harder to follow than two.

### 21. Never volunteer a gap against a nice-to-have
**Flagged:** "get rid of the I don't know MSHA that makes me look weak"
**Rule:** The gap paragraph only earns its place against a stated **must-have** the résumé visibly fails, where the reader reaches the objection on their own and the sentence reframes it. Against a nice-to-have it manufactures a rejection reason that was never going to form. And never name the specific credential or acronym you lack: an abstract gap fades, `MSHA` is concrete and memorable and greppable against you.
**Before:** `I've never worked in mining and I don't know MSHA. Honda and Skechers are manufacturing and retail supply chain, not a working mine, so I'd be learning the domain from operators on site rather than arriving with it.`
**After:** *(cut, no replacement)*
**Lands in:** `channels.md` (job applications)
**Note:** Narrows the standing "the gap paragraph is the differentiator" claim, which was written with no must-have/nice-to-have distinction and so read as unconditional. Realm listed mining and MSHA expertise under "Nice-to-Have Qualifications."

### 21. A warm DM needs no relevance-proof
**Flagged:** "the i build the system at northwind that creates tests and repairs is so irrelevant that this shit is terrible, just say i like the work you guys are doing at tessel and i wanted to talk to you more about it"
**Rule:** Cold email earns the read by proving the overlap. A warm DM already has the read, so a block about what you build is résumé nobody asked for. State the honest reason: you're interested. This is the one place the "avoid flattery in disguise" rule is suspended — a stranger complimenting your work is buying goodwill, someone you've met saying it is just true.
**Before:** `i build the system at northwind that creates and tests and repairs our integrations, plus the sandboxing so a run only gets the scopes it needs`
**After:** `i like what you guys are building at tessel and wanted to hear more about it`
**Lands in:** `linkedin-dm.md`

### 22. Don't CTA the conversation itself
**Flagged:** "all you want from a linkedin dm is something interesting enough to spark a conversation worth their time but you never want to explicitly cta to that"
**Rule:** The goal is being worth a reply, not demonstrating anything. Never ask for the abstraction (`connect and exchange notes`, `start a dialogue`, `explore working together`) — nobody accepts an abstraction. Ask for the concrete thing (coffee, fifteen minutes, one answer) or ask for nothing.
**After:** `are you free to grab coffee this week`
**Lands in:** `linkedin-dm.md`
**Note:** `pick your brain` stays banned for cold DMs and is fine in a warm re-connect, where it reads as deference to someone you've actually met rather than a claim on a stranger's time.

### 23. No connection-request notes
**Flagged:** "this isn't a connection request note i never send those, i only ever send dms after someone connects"
**Rule:** Cut the 300-character connection-note format entirely. Every DM in this playbook assumes the connection already exists. Do not draft request notes unless explicitly asked.
**Lands in:** `linkedin-dm.md` (section removed)

### 24. Venue plus topic is the recall trigger
**Flagged:** his own line, `we chatted at the ice cream shop about gtm tooling for a bit`
**Rule:** The bad version isn't bad because it names the venue — the venue is the memory hook. It's bad because it has no subject. Name where *and* what you talked about. `for a bit` keeps the claim modest instead of inflating a short chat into a relationship. Quoting a position they took is an upgrade, not a requirement.
**Before:** `you were the one arguing internal tools are a permissions problem before they're a UI problem` *(overcorrected — demanded a quotable position)*
**After:** `we chatted at the ice cream shop about gtm tooling for a bit`
**Lands in:** `linkedin-dm.md`
**Note:** My first version of this rule banned naming the venue. Wrong. Venue plus topic is the working form.

### 25. Plain CTAs, never engineered ones
**Flagged:** "these ctas are just so bad they are so clearly salesy it's just terrible beyond belief"
**Rule:** The ask is the plainest possible statement of what you want. **If you can explain the strategy behind a CTA, it reads as strategy and it is dead.** Every engineered ask has failed: routing moves (`who on your integrations team should i be talking to?`), abstraction asks (`worth a conversation?`), and status plays (`what does the bar look like` — asking them to sell you is a sales-training move and reads like one). The asks that worked were plain: `would love to grab tacos at leo's`, `are you free to grab coffee this week`, `is it still open`. None of them are clever. That is why they work.
**Before:** `who's the client and what does the bar look like`
**After:** `is it still open` / `cv attached if it's still open`
**Lands in:** `startup-outbound.md`, `linkedin-dm.md`
**Note:** Supersedes the framing in entry 14. "Social beats transactional" was right about the *symptom* and wrong about the cause — tacos did not win because food is a clever device, it won because it was the plain version. Chasing "social" produced a new generation of engineered asks. Chase plain instead.

### 26. Name the employer only when it means something to this reader
**Flagged:** "you don't have to reference my company name, [he] probably doesn't give a fuck, you could say i build integrations for agents"
**Rule:** The credential is what you *do*, not where. If the recipient would not recognize the company or would not care, the name is noise taking up one of your sixty words. Drop it and describe the work. Keep it only when the name itself carries weight with that specific reader.
**Before:** `i build integrations at <company>`
**After:** `i build integrations for agents`
**Lands in:** `startup-outbound.md`
**Refines:** entry 18, which said "name the employer and your role, nothing more" — correct against boilerplate, but still one word too many when the reader has no reason to care about the employer.

### 27. Fold the hedge into the ask
**Flagged:** "the could easily be a small-company problem i am over-indexing on could be the last line changed to be a single question ask"
**Rule:** In short outbound, do not spend one line admitting the gap and another asking the question. Write one question that admits its own possible naivety. A standalone hedge line reads as performed modesty; a question carrying the same doubt is just a real question, and it costs half the words.
**Before:** `could easily be a small-company problem i am over-indexing on` + `does that flatten out at your scale or just get more expensive`
**After:** `is this just a small company problem or does it show up at your scale too`
**Lands in:** `startup-outbound.md`
**Refines:** entry 13 and the "say the thing that disqualifies you" rule. Both still hold at email length. Under ~60 words the disqualifier should ride inside the ask rather than occupy its own line.

### 28. Manufactured hesitation lines
**Flagged:** "the part i keep going back and forth on is self healing sounds like ai slop to be honest dude"
**Rule:** Cut any transition that performs a mental state to set up a question. `the part i keep going back and forth on is X`, `the thing i keep coming back to is X`, `what i'm still chewing on`, `what struck me was`, `i've been thinking a lot about`. They announce that you have thoughts instead of showing one, and they exist purely to make the next sentence feel earned. Ask the question directly, or replace the line with a concrete fact that proves you did the work.
**Before:** `the part i keep going back and forth on is self healing` + `how do you decide a regenerated recipe is safe to ship`
**After:** `credentials never touching the model and each run only getting the scopes it needs` + `how did yall decide a regenerated recipe is safe to ship`
**Lands in:** `syntax-tells.md`, `startup-outbound.md`
**Note:** Same family as entry 25. If you can explain why a line is there, it is technique and it shows.

### 29. Use "yall" when the work was a team's
**Flagged:** "or maybe yall because it might not be just him"
**Rule:** When asking about something a team built, `yall` beats `you`. It is more accurate, it avoids crediting one person for a group's work, and it reads warmer than `you all` or `your team`. Also prefer past tense for a shipped thing — `how did yall decide` over `how do you decide`, since it asks about a real decision they made rather than a hypothetical policy.
**Lands in:** `linkedin-dm.md`

### Process note, not a rule

Draft 5 cut the technical description as slop and lost the only fact that made the email worth sending — a system that creates and tests and repairs integrations, which is exactly the recipient's maintenance burden. Flagged: "you've missed on the fact that i've been building something that creates, tests, and repairs toolkits/integrations which is not larp."

Cutting slop and cutting substance look identical mid-edit. When a rewrite gets shorter and cleaner, check what left with the noise. Written into the worked example in `startup-outbound.md`.

---

## v1.0 — 2026-08-16

Initial build. Anti-slop engine with no voice profile, scoped to outbound and general writing.

- `SKILL.md` — workflow, hard bans, fact-gathering step
- `references/audit.md` — six-pass mechanical check with countable limits
- `references/slop-lexicon.md` — ~250 banned words and phrases with replacements
- `references/syntax-tells.md` — 15 structural patterns
- `references/channels.md` — cold email, job applications, LinkedIn, long-form
- `references/examples.md` — five before/after rewrites

Scope decisions: strong generic human default rather than a voice profile built from samples; register follows channel rather than a house style; the skill removes tells rather than installing a personality.
