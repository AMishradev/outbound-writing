# Enterprise email

For email to senior people at established companies: directors, VPs, SVPs, C-suite. Mostly Gen X and older millennials. Load this **instead of** `startup-outbound.md` when the reader works somewhere with a procurement department.

> **Status: v0, unverified.** Every rule in `startup-outbound.md` came from a correction on a real draft. The rules below are starting priors that have not been tested against a single flagged draft yet. Treat them as hypotheses, and log each correction in `CHANGELOG.md` as it arrives, the same way the founder playbook was built.

---

## What carries over unchanged

The anti-slop core is audience-independent. All of it still applies:

- The lexicon and the hard bans in `SKILL.md`
- No negative parallelism, compressed or full
- Never explain their business back to them
- Never narrate the move you're making
- No manufactured hesitation, no subjectless capability declarations, no clever compliments
- Plain CTAs: if you can explain the strategy behind the ask, it's dead
- The coherence pass after every edit
- `hi`, never `hey`

The out-loud test adapts slightly: **would you say this to them in a meeting?** Not to a friend. Same instinct, more formal room.

---

## What inverts

The founder playbook's register reads as peer-level to a 28-year-old CTO. To a 52-year-old SVP the same choices read as careless. Most of the punctuation and formatting rules flip.

| | Startup founders | Enterprise seniors |
|---|---|---|
| Case | lowercase | **Sentence case** |
| Periods | dropped | **Kept** |
| Commas | under two | **Still minimal** (entry 42). Sentence case and periods stay, comma chains don't |
| Greeting | `hi sam` | **`Hi Dana,`** with comma and line break |
| Sign-off | first name | **Full signature block** |
| Length | 70–90 words | **75–150 words** |
| Your employer | drop if it means nothing | **Always include, with your title** |
| Slang | one `larp` allowed | **None** |
| Subject Mode 2 (outlandish) | allowed fallback | **Never** |
| Ask | coffee, a plain question | **Coffee, sometime, somewhere real** (entry 39). Never a timeboxed meeting |
| Follow-up | rare | **Expected, once** |
| Purpose | a reply | **A relationship, and you give first** (entry 40) |

### Why the employer and title come back

Entry 26 dropped the company name because a founder judges you on what you build. A senior enterprise reader is also judging institutional risk: who you work for, what your role is, whether a meeting with you is defensible to their own boss. Title and company are information to them, not boilerplate. One line, early.

### Describe an employer they won't know

**Entry 45.** If your company isn't a household name, add one plain clause: the kind of company, the city, and what it does. `Northwind, an AI startup in San Francisco that works as an MCP gateway and integrator for AI agents`. To this reader, the descriptor is information. To a founder, it would be boilerplate.

### Why the signature block matters

They will look you up before replying. A full block (name, title, company, phone) saves them a search and signals you are a real person at a real organization. It's the enterprise equivalent of a GitHub link.

```
Best,

Dana Whitfield
Director of Platform Engineering, Northwind
(415) 555-0142
```

---

## Structure

```
Subject: <plain, descriptive, under eight words>

Hi <first name>,

<Why them, one sentence, tied to something they said or published.>

<Who you are and the one relevant thing, two sentences max.>

<The ask: specific, time-bound, easy to say yes to.>

Best,

<signature block>
```

### The opening line

Senior people respond to their own stated priorities. The strongest source is something they said on the record: an earnings call, an investor day, a conference talk, an interview, an annual letter. Quote or paraphrase it accurately and say why it's why you're writing.

A mutual connection beats all of it. If one exists, it goes in the subject and the first line: `Mark Chen suggested I reach out`.

### The ask

**Corrected by entry 39.** The time-boxed meeting ask was the v0 prior and it failed its first test. Every vendor sends senior readers "15 minutes next week?", so the format marks you as one.

When the goal is a relationship, ask for one. Plainly, with no timebox:

- ✅ `Would be great to grab coffee in the westside sometime.`
- ❌ `Would you have 15 minutes in the next few weeks?`
- ❌ `Would Tuesday or Thursday afternoon work for a short call?`
- ❌ Calendar links in a first email.

### Quirky content, professional writing

**Entries 48-52.** Grammar stays correct and the tone stays professional. The *content* should be specific and a little quirky. Put one quirky detail in the subject, ideally a callback to their own words (`Congrats on making it to the Funhouse`), and keep the body plain. Research the person as well as the company. Use the detail that connects to your reason for writing. Skip the ones that make it look like you studied them, such as their thesis or their hobbies, unless you genuinely share the interest.

Never: `caught my eye`, `stood out`, reframes like `X has turned my job into Y`, or anything that puts a senior person under evaluation (`a month into the role`). In the give line, name the protocols their job touches (`MCP and A2A`).

### Ask directly, and use your youth

**Entries 53-54.** Don't open with a recap of their career (`Saw you went from X to Y`). Don't reuse stock phrases across recipients. Ask the real question as a question. If you're early in your career and close to the frontier, say so plainly and admit what you don't know yet. Senior readers take that as respect.

### Observations, not discovery questions

**Entry 55.** Narrow either/or questions about their operations sound like a sales discovery call. Share an observation from your world that they'll have a view on, and let them react. A contrast between their known work and what you've seen works for subjects too.

### Lead with the real reason

**Entry 46.** Open with why you're writing. If the goal is learning, say what you're trying to learn and why this person is worth learning it from. Your role is context and your location is logistics, so both move later. Never reuse a previous recipient's skeleton with the nouns swapped. A template shows through even when every sentence passes the audit.

### Keep yourself out of most sentences

**Entries 43 and 44.** Cap the email at about two I's. Drop the subject the way real email does (`Saw that...`, `Spent the last few months...`). When you ask about their work, end the sentence at the question. Tacking on `since that's what I do` turns curiosity into a pitch.

### Give before you ask

**Entry 40.** Say what you can offer them, as an offer. `I'm happy to share what I saw there` beats any amount of credentialing.

### The hook

**Entry 41.** Research the company and the person's role, and write your interest where they intersect. An IT program director owns internal rollouts, so ask about the internal rollout and not the product news.

### Subject lines

Mode 1a (recent company news) still works, phrased plainly: `Your Q3 comments on vendor consolidation`. A mutual connection is the strongest subject available: `Introduction via Mark Chen`. Mode 2 (`defector from saas`) does not exist in this playbook.

With no mutual connection and no fresh news, **lead with your strongest institutional name** (entry 47). `Question from AI security at Meridian` beats `Agent security at Brightwell`. A topic-only subject is how vendors title their emails.

### The disqualifier

Handle with care. To a founder, volunteering a gap reads as calibration. To some senior readers it reads as a reason to delegate the email downward. Prefer **scoping** over confessing: say who this is and isn't relevant for, rather than what you lack.

- Founder version: `no healthcare background`
- Enterprise version: `This is most relevant if your team is already running agents in production.`

Same honesty, framed as respect for their time.

### Follow-ups

Expected, and silence is not a no. Send one after five to seven business days, and add something new: a relevant number, a short case, an answer to the obvious objection. `Just bumping this to the top of your inbox` adds nothing and is the most common follow-up there is. After the one follow-up, stop.

---

## Before and after

### Before

> Subject: Quick question
>
> Hi Dana, I hope this email finds you well! I came across your profile and was truly impressed by your leadership in platform engineering. I'd love to connect and explore how we might be able to collaborate on some exciting opportunities. Would you be open to a quick chat?

### After

> Subject: Your comments on integration debt at re:Invent
>
> Hi Dana,
>
> At re:Invent you said integration maintenance now takes more of your platform team's time than new work. That's the problem I spend my days on.
>
> I'm an engineer at Northwind, where I built the system that tests and repairs our agent integrations automatically when upstream APIs change. It's most relevant if your team is already running agents against internal tools.
>
> Would you have 20 minutes the week of the 14th? Happy to work around your calendar.
>
> Best,
>
> Alex Rivera
> Software Engineer, Northwind
> (415) 555-0199

The opening line is the whole email. It proves you listened to them specifically, it is their priority rather than your pitch, and it makes the rest of the email the answer to a problem they already said out loud.
