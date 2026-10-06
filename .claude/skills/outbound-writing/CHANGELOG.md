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

**Versioning.** Semver, kept in three places that must agree: the `version:` field in `SKILL.md`, a git tag (`v1.1.0`), and a GitHub Release. Major = new audience or scope change. Minor = a batch of folded-in corrections. Patch = wording fixes with no new rule. A playbook marked unverified ships as a prerelease (`-beta.N`) until its rules have survived real drafts.

---

## v2.0 — 2026-10-06 (branch: enterprise-email)

Scope change, so a major bump: a second audience. Added `references/enterprise-email.md` for email to senior people at established companies.

**Unlike every entry in v1.1, these rules have no provenance yet.** They are priors, not corrections. The playbook is marked v0 until its rules have survived real drafts. Log corrections below as numbered entries starting at 39, same format as before, and remove the v0 marker once the playbook has been rebuilt from them.

What it inverts from `startup-outbound.md`: sentence case, kept periods, normal comma use, full signature block, employer and title always included (entry 26 reversed for this audience), no slang, no Mode 2 subjects, a time-bound meeting ask, one expected follow-up, and the disqualifier reframed as scoping rather than confession.

What it keeps: the entire anti-slop core, plain CTAs (entry 25), no narrated moves (37), no explaining their business back (6), and `hi` over `hey` (31).

---

### 39. No time-boxed meeting ask — it reads as a sales pitch
**Flagged:** "the worst sin is the 'Would you have 15 minutes' which is a instant killer and makes it seem like a sales pitch"
**Rule:** Overturns the v0 prior. Senior readers get "15 minutes next week?" from every vendor alive, so the format itself marks you as one. When the goal is a relationship, ask for the relationship: coffee, sometime, somewhere real.
**Before:** `Would you have 15 minutes in the next few weeks? I'm glad to come by the westside or keep it to a call, whichever is easier.`
**After:** `Would be great to grab coffee in the westside sometime.`
**Lands in:** `enterprise-email.md`

### 40. Enterprise outbound is relationship-building, so give first
**Flagged:** "the purpose of this reaching out is to build a network and relationship and in return i can share the ai insights that i got from working at northwind"
**Rule:** Overturns the v0 framing of the email as a meeting request. State what you can offer them, plainly, as an offer rather than a credential.
**After:** `I spent the last few months at Northwind building integrations for AI agents and I'm happy to share what I saw there.`
**Lands in:** `enterprise-email.md`

### 41. The hook is genuine interest in their company and their position
**Flagged:** "the key to writing a great outbound email to people is to take the research you do on their company and their position and then reaching out to them because of genuine interest in what they do"
**Rule:** Research both the company and the person's role, then write the interest at the place they intersect. An IT program director owns internal rollouts, so the interest is in how Brightwell's an enterprise AI assistant rollout actually went, not in Brightwell's AI toys.
**Lands in:** `enterprise-email.md`

### 42. Comma density applies to enterprise too, and so does the lexicon
**Flagged:** "there's also a lot of commas and random shit in there" / "our internal teams are starting to build and run is a clear AI tell" / "I can tell by the period and the word value"
**Rule:** Overturns the v0 prior of "normal comma amounts." Sentence case and periods stay, but explainer clauses and comma chains are as fatal to a 50-year-old as to a 28-year-old. Add `value` (`I'd value hearing`) to the lexicon. Its plain form is `I'd like to hear`. Subjectless-adjacent padding like `our teams are starting to build and run` falls under entries 30 and 33.
**Before:** `Most of my work is getting Meridian's security systems ready for the AI agents our internal teams are starting to build and run. I saw that Brightwell rolled out an enterprise AI assistant to its teams, and I'd value hearing how a rollout like that looks from the program side.`
**After:** `I read that Brightwell rolled out an enterprise AI assistant to its teams after its AI partnership. I'd like to hear how that actually went on the IT side since getting employees onto AI safely is most of my job right now.`
**Lands in:** `enterprise-email.md`, `slop-lexicon.md`

### 43. Count the I's
**Flagged:** "the repeated phrasing of 'I' over and over again is not great"
**Rule:** Six I's in five sentences makes every paragraph about you. Cap at about two per email. Fix by dropping the subject the way people do in real email (`Born and raised in Palms`, `Saw that...`, `Spent the last few months...`) and by letting the question about them stand alone.
**Before:** `I grew up... I now work... I read... I'd like to hear... I spent... I'm happy to share`
**After:** one `I`
**Lands in:** `enterprise-email.md`, `audit.md` (Pass 1 count)

### 44. Don't justify your interest with your own job
**Flagged:** "this line 'I'd like to hear how that actually went on the IT side since getting employees onto AI safely is most of my job right now.' is super salesy"
**Rule:** A question about their work stops being curiosity the moment it ends in `since that's what I do`. The trailing justification turns the question into a setup for your pitch. Ask the question and end the sentence there.
**Before:** `I'd like to hear how that actually went on the IT side since getting employees onto AI safely is most of my job right now.`
**After:** `Saw that Brightwell rolled out an enterprise AI assistant after its AI partnership and would like to hear how it went on the IT side.`
**Lands in:** `enterprise-email.md`
**Note:** Related to entry 38, but in the opposite direction. Entry 38 says an observation needs a first-person reason. This says a *question* must not get one, because there the reason reads as an agenda.

### 45. Name what an unknown employer is, for senior readers
**Flagged:** "it gives credibility to these boomers when the Northwind is called an AI startup in SF acting as a MCP gateway and integrator"
**Rule:** Reverses entries 18 and 26 for the enterprise audience. A founder looks the company up or already knows it. A senior enterprise reader judges institutional credibility, and an unknown company name gives them nothing to judge. Add one plain descriptor: what kind of company it is, where it is, and what it does in their terms.
**Before:** `Spent the last few months at Northwind building integrations for AI agents.`
**After:** `Spent the last few months at Northwind, an AI startup in San Francisco that works as an MCP gateway and integrator for AI agents.`
**Lands in:** `enterprise-email.md`
**Note:** Still not boilerplate. It's one clause, with no adjectives about how good the company is. The location and category do the work.

### 46. Lead with the real reason, and never reuse a skeleton
**Flagged:** "the vibes of it are just off it doesn't feel natural, remember the point of reaching out to dale is to learn from him on how Brightwell is dealing with agentic security, he is probably getting a thousand of these emails today"
**Rule:** Two failures in one draft. First, the email reused the previous recipient's skeleton (bio, company news, offer, coffee) with the nouns swapped, and a reused skeleton reads as a template even when every sentence passes audit. Second, it buried the actual reason for writing. When the goal is learning, open with what you're trying to learn and why this person is worth learning it from. Biography becomes context and location becomes logistics at the close.
**Before:** `Born and raised in Palms... Saw that Brightwell rolled out an enterprise AI assistant... Happy to share... coffee`
**After:** `I work on AI security at Meridian, and most of my days now go to agents that never do the same thing twice. A lot of what's written about securing them comes from vendors, so the best way to learn has been talking to people running security operations at real companies.`
**Lands in:** `enterprise-email.md`
**Note:** The why-them line doubles as vendor differentiation. Saying vendors are the problem tells a reader who gets a thousand vendor emails that you are not one of them, without announcing it (entry 37).

### 47. Enterprise subject lines carry your strongest name, not a topic
**Flagged:** "the subject line right now is pretty weak" (on `Agent security at Brightwell`)
**Rule:** A topic-only subject is how vendor emails are titled, and it tells the reader nothing about who is writing. With no mutual connection and no fresh news, lead with your most recognizable institutional name and say what kind of email it is. `Question` signals an ask, not a pitch.
**Before:** `Agent security at Brightwell`
**After:** `Question from AI security at Meridian`
**Lands in:** `enterprise-email.md`

### 48. "Your background in X caught my eye"
**Flagged:** "the most AI signaling phrase I've ever seen"
**Rule:** Banned outright, along with its family: `caught my eye`, `stood out to me`, `really resonated`, `piqued my interest`. State the observation plainly and give your reason for caring (entry 38).
**Before:** `Your background in enterprise architecture caught my eye, since...`
**After:** `Saw you came over from enterprise architecture. Feels like the right background for this, since...`
**Lands in:** `slop-lexicon.md`, `enterprise-email.md`

### 49. Grand reframing sentences
**Flagged:** "a pretty AI sounding sentence, the content is good but... a human would never say that"
**Rule:** `X has turned my job into Y` and `my work has become about Z` are reframes. They narrate your life as a thesis. Say what you do the way you'd say it across a table, with `lately that mostly means`.
**Before:** `agents have turned most of my job into securing systems that never do the same thing twice`
**After:** `lately that mostly means figuring out how to lock down AI agents`
**Lands in:** `syntax-tells.md`

### 50. Never frame a senior person as the new or unproven one
**Flagged:** "'would like to hear how you're sizing it up a month into the role' sounds a bit disrespectful"
**Rule:** Research can tell you someone is new in a role. Do not say it back to them in a way that puts them under evaluation. Ask to learn, which puts you in the student seat.
**Before:** `Would like to hear how you're sizing it up a month into the role.`
**After:** `Would like to learn how you think about it.`
**Lands in:** `enterprise-email.md`

### 51. For enterprise readers, name the technical terms they know
**Flagged:** "might be better when talking to these enterprise folks to just specify like MCP or A2A or buzzwords that are relevant to him"
**Rule:** In the give line, name the specific protocols or systems the reader's job touches. To a senior technical reader, `MCP and A2A` is concrete signal. `agent integrations` is vague. This applies only to terms relevant to *their* role.
**Before:** `Happy to share what I saw building agent integrations at Northwind`
**After:** `Happy to share what I've seen with MCP and A2A from my time at Northwind`
**Lands in:** `enterprise-email.md`

### 52. Quirk in the subject, professionalism in the body (confirmed)
**Flagged:** "the subject line is actually fantastic" / "grammar is important... but the actual content itself being quirky and very unique"
**Rule:** The first confirmed *positive* rule for enterprise. Use one quirky, specific detail, ideally a callback to the person's own words, then write a clean, professional body. `Congrats on making it to the Funhouse` called back to his own "journey to the Funhouse" post. Also confirmed: logistics as the close (`Grew up in Palms, so the westside is an easy drive if coffee ever works`). Grammar must be correct throughout. `from AI security at Meridian` failed because it treated a department as a person.
**Lands in:** `enterprise-email.md`
**Note:** Partly supersedes entry 47. Leading with an institutional name is the fallback when no personal specific exists.

### 53. Career-recap openers, and stock phrases repeated across recipients
**Flagged:** "the phrase 'Saw you went from x to y. Would like to learn how your team thinks about x' is terrible dude thats the most AI signal phrasing ever"
**Rule:** Two failures. First, never open by summarizing someone's career path back to them. `Saw you went from X to Y` is a LinkedIn-scrape tell. Second, `would like to learn how` had appeared in three consecutive emails. A stock phrase reused across recipients is a template even when each email passes on its own (entry 46). Ask the real question directly, as a question.
**Before:** `Saw you went from leading migrations at <prior employer> to running voice technology at <insurer>. Would like to learn how your team thinks about securing voice agents...`
**After:** `How is a company like <insurer> planning for agents getting access to real systems?`
**Lands in:** `enterprise-email.md`

### 54. For enterprise, your youth is the value prop, so say it plainly
**Flagged:** "the value prop... is that I've been on the extreme edge frontier of how agentic integrations and MCP servers are being created and i bring the perspective of a young fresh person and i'm genuinely very curious about how an established company... is going to be handling agentic security"
**Rule:** To a senior reader, being early in your career and close to the frontier is an asset, so say it in plain words (`I'm early in my career and spent the last few months building MCP servers`). Pair it with an honest admission of what you don't know yet (`Startups get to skip most of that question, so it's the part of the job I know least about`). For this audience that reads as respect, not weakness.
**Lands in:** `enterprise-email.md`
**Note:** Also confirmed again: a quirky local subject (`Hello from the other end of the 405`) and a reason-for-writing tied to location (`Noticed you're based in <county>`).

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
**Before:** `Under it, disposable <vendor> sandboxes hold only the capabilities leased to that exact generation.`
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

### 30. Subjectless capability declarations
**Flagged:** "this middle line is so wack it just seems super manufactured and ai-generated... these declarative statements are so clear ai model slop"
**Rule:** A sentence with no subject and no active verb that describes what a system does is a feature bullet, not speech. Markers: two parallel clauses joined by `and`, participles or gerunds carrying the behavior, no `we`, perfect balance. It reads as a landing page because that is where the form comes from.
**Before:** `credentials never touching the model and each run only getting the scopes it needs`
**After:** `we do the same thing with creds` — or cut it, if another line already proves the point
**Lands in:** `syntax-tells.md`, `startup-outbound.md`
**Note:** Extends entry 11, which fixed comma-lists of capabilities. This covers the subjectless form regardless of punctuation.

### The governing test

Entries 11, 25, 28 and 30 are all the same failure in different clothing — a spec-sheet list, an engineered CTA, a manufactured hesitation, a subjectless declaration. Each is a construction that reads as *authored* rather than *spoken*.

**One test covers all of them: would you say this out loud to a peer?**

If the line only works written down, it is slop, however clean it reads. Say it aloud, type what you said, then stop editing it toward sounding better — every pass toward "better" is a pass toward the four patterns above.

### 31. The greeting is "hi", never "hey"
**Flagged:** "change the opening from hey to hi i hate the word hey"
**Rule:** Author preference. `hi <name>` in every channel, email and DM alike. No `hey`, no `hey there`, no `yo`.
**Lands in:** `linkedin-dm.md`, `startup-outbound.md`
**Note:** The one surviving `hey` in `channels.md` is the ❌ example of fake familiarity (`"Hey! Long time!"` to a stranger) and stays as a bad-practice illustration.

### 32. Never source a question to secondhand chatter
**Flagged:** wanting to ask a founder whether his product was "just a wrapper," based on what a vendor's team said at an event the night before.
**Rule:** If a question came from something someone told you in passing, ask it on your own standing and leave the source out. Citing it does three bad things at once: it exposes whoever talked, it puts the recipient on the defensive about a characterization rather than the facts, and it converts a fair technical question into a report of what people say behind their back. If you have no standing of your own, that is a signal not to send it.
**Before:** `the <vendor> team mentioned you might just be a wrapper`
**After:** `i built a smaller version of this for myself, control plane plus disposable <vendor> sandboxes` + `how much of the runtime is yours vs off the shelf`
**Lands in:** `startup-outbound.md`
**Note:** Also reframe loaded questions so they can be answered with pride instead of defended. "How much is yours vs off the shelf" and "are you just a wrapper" ask for the same information; only one of them gets answered.

### 33. "X plus Y" joins and "the X part" labels
**Flagged:** "the plus wording is a dead giveaway this is AI" / "got it working but the environment setup was always the brittle part is weird"
**Rule:** Two nominalizations, same root failure. **`plus`** joining noun phrases is spec-sheet grammar — nobody says "a control plane plus disposable sandboxes" out loud, they say "and" or restructure around a verb. **`the X part`** turns something that happened into a labeled category — "the brittle part", "the hard part", "the tricky bit". Say what it did instead.
**Before:** `control plane plus disposable sandboxes running claude code against a repo` / `got it working but the environment setup was always the brittle part`
**After:** `basically sandboxes running claude code against a repo` / `never got the environment setup to stop breaking`
**Lands in:** `syntax-tells.md` (2d), `startup-outbound.md`
**Note:** Extends entry 30. Whenever a detail forces one of these constructions, check whether the detail is load-bearing at all — dropping the control plane removed the need for the `plus` entirely.

### 34. Performed craft: one aphorism per paragraph
**Flagged:** a cold email that had no ordinary slop in it — real numbers, a genuine disqualifier, no corporate verbs — and still read as generated, because every paragraph landed a line.
**Rule:** High-effort slop is a distinct failure from lazy slop and a louder one. Its signature is a **closing flourish in every paragraph**: a superlative, an aphorism, a fragment kicker, a reframe. Each is defensible alone; three in four paragraphs is a performance. Cap **one** memorable line per piece, and only if it arrived by accident.
**Before:** `the most disciplined prose pipeline I've read this year and it terminates in a channel where the discipline is the only thing you own. On a phone call nobody counts your commas.`
**After:** `outbound-factory runs five review gates and then sends a Slack DM.`
**Lands in:** `syntax-tells.md`, `startup-outbound.md`
**Note:** The bare fact beats the interpretation. Stating the observation and stopping lets the reader reach the conclusion themselves, which is entry 6 applied to a compliment rather than a criticism. Related trap: writing to demonstrate you have absorbed a style guide produces worse prose than ignoring it, because every flourish is evidence of effort and effort is the thing being detected.

### 35. The clever compliment
**Flagged:** "the phrase is what I'm stealing is pretty AI"
**Rule:** Cut compliments that flatter the sender too. `X is what I'm stealing`, `that's going on my wall`, `that one's going straight in my notes`, `I've been quoting this all week`. They praise the recipient while advertising that the sender is discerning enough to notice, so two people get complimented and only one was supposed to. Prove you read the thing by citing something specific from deep inside it; that does the same job without the flex.
**Before:** `Read outbound-writing, changelog included. The provenance format is what I'm stealing.`
**After:** `Read outbound-writing, changelog included. Then went through the rest of your github.` + a specific fact from a second repo
**Lands in:** `slop-lexicon.md`, `startup-outbound.md`
**Note:** Sits next to entry 34. Both are failures of *trying to write well* rather than failures of laziness. Showing the work always beats announcing that the work was worth reading.

### 36. Truncated absolute phrases
**Flagged:** "the word changelog included triggers AI vibes"
**Rule:** Tags appended to compress a second item into a noun phrase — `changelog included`, `caveats and all`, `complete with tests`, `warts and all`, `bonus points included`. They exist only in writing; speech uses a plain series. Unpack into `X, then Y` or `X and Y`.
**Before:** `Read outbound-writing, changelog included.`
**After:** `Read outbound-writing, then the changelog, then the rest of your github.`
**Lands in:** `syntax-tells.md` (2d), `slop-lexicon.md`
**Note:** Completes the compression family with entries 30 and 33 — subjectless declarations, `plus` joins and `the X part` labels, and now absolute-phrase tags. All four are written-only devices for packing two ideas into one phrase, and all four are caught by reading the line aloud. The unpacked version is usually better than a rewrite: here the plain series implies a rabbit hole and does the flattery that the compliment was supposed to do.

### 37. Never narrate the move you are making
**Flagged:** "the Ours first, since that's your rule makes no real sense, i like the paragraph but the phrasing gives total ai vibes"
**Rule:** Doing the thing and announcing the thing are mutually exclusive. `ours first, since that's your rule`, `to be blunt`, `here's my honest take`, `being direct here`, `since you value X`, `not to be that guy, but`. Every one converts a move into a technique, and a visible technique is dead on arrival. The disqualifier works **because** it arrives unannounced; framing it as compliance with the reader's own framework is worse than not doing it.
**Before:** `Ours first, since that's your rule: US carriers block outbound SMS...`
**After:** `US outbound SMS is the one that does not. Carriers block texts from unregistered numbers...`
**Lands in:** `startup-outbound.md`, `slop-lexicon.md`
**Note:** Same root as entries 25 and 34 — visible effort. Cutting the frame exposed a real structural bug: the limitation had been arriving before the reader knew what the product was, and the announcement was papering over the ordering problem. When removing a construction breaks the flow, the flow was already broken and the construction was hiding it.

### 38. An observation needs a first-person reason attached
**Flagged:** "it would have been smarter to mention a reasonable connection between the outbound-factory repo and dial, like saying something personal like I'm imagining the potential of combining your outbound factory with dial"
**Rule:** Entry 6 bans **narrating their work**. It does not ban **saying what you want to do with it**. An observation dropped as a bare fact floats — the reader has to guess why they are being told. Attach a first-person want and it becomes the reason for the email.
**Before:** `outbound-factory runs five review gates and then sends a Slack DM.` *(bare fact, no stated reason for mentioning it)*
**After:** `outbound-factory runs five review gates and then sends a Slack DM. I want to see that pipeline end in a text instead.`
**Lands in:** `startup-outbound.md`
**Refines:** entry 6, which I over-applied. Also bounds "let the reader do some work" — that applies to the implications of your own claims, never to *why you are in their inbox*. Leaving that implicit is not restraint, it is an omission.
**Note:** The test is grammatical person. `you have built X and it means Y` is a lecture. `I want to see X do Y` is a thought. Same observation, and only one of them is yours to have.

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
