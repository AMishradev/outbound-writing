# Before and after

Full rewrites. Read these when the rules feel abstract. The "before" versions are not strawmen — they are what default output actually looks like, and each would pass a grammar check.

---

## 1. Cold email

### Before (154 words)

> **Subject:** Quick question
>
> Hi Sarah,
>
> I hope this email finds you well! I came across your profile on LinkedIn and was truly impressed by your incredible work leading the platform team at Nomad.
>
> I'm reaching out because I'm passionate about the intersection of developer tooling and infrastructure, and your recent post about migrating to a monorepo really resonated with me. It's not just about the tooling — it's about the culture shift that makes it work.
>
> I'd love to hop on a quick 15-minute call to learn more about your journey and explore how we might be able to collaborate. I know your time is incredibly valuable, so I'll keep it brief!
>
> Looking forward to hearing from you!
>
> Best regards,
> Alex

**What's wrong:** Subject teases instead of informing. Opener is a template. The compliment names no work. "Intersection of," "resonated," "passionate about," "incredible," "truly." One negative-parallelism construction. The ask costs Sarah 15 minutes and offers her nothing. Two apologies for existing. Nothing here couldn't be sent to 200 other people.

### After (81 words)

> **Subject:** your monorepo post — the CI part
>
> Hi Sarah,
>
> You wrote that the migration took eight months and six of them were CI. I'm starting the same thing at a 40-engineer company next month and my plan budgets two.
>
> What made CI the long pole — the build graph, or getting people to stop running the full suite locally?
>
> Happy to trade notes. We solved remote cache invalidation in a way that might save you some of that six months if you're still on it.
>
> Alex

**What changed:** The subject names the topic. The first line proves Alex read the post and has a stake. The question is specific enough that answering it takes 30 seconds, and it's flattering in the only way that works — it treats her as someone who knows something. The offer is real. No sign-off padding.

---

## 2. Cover letter

### Before (198 words)

> Dear Hiring Manager,
>
> I am writing to express my enthusiastic interest in the Backend Engineer position at Verve. As a passionate software engineer with over five years of experience building robust, scalable systems, I am thrilled at the prospect of contributing to your innovative team.
>
> Throughout my career, I have consistently demonstrated a proven track record of delivering impactful results. In my current role at Datum, I spearheaded numerous initiatives that significantly improved system performance and drove meaningful outcomes for the business. I pride myself on being a detail-oriented team player who thrives in fast-paced environments.
>
> What truly excites me about Verve is your commitment to pushing the boundaries of what's possible in fintech. Your mission deeply resonates with my own values, and I would love the opportunity to bring my unique blend of technical expertise and collaborative spirit to your organization.
>
> Thank you for considering my application. I look forward to the possibility of discussing how I can contribute to Verve's continued success.
>
> Sincerely,
> Jordan

**What's wrong:** Not one verifiable fact in 198 words. Swap "Verve" for any company and it still works, which means it's worth nothing. Every résumé cliché in the catalog. Three paragraphs about Jordan's feelings.

### After (233 words)

> Hi,
>
> I'm applying for the Backend Engineer role. Three things that seem relevant:
>
> For the last two years I've owned Datum's payments reconciliation service — the job that matches our ledger against processor settlement files every night. About 400k transactions a day. Last March our mismatch rate went from 0.02% to 0.3% and I ran that investigation: a race between refunds and pending captures that only showed up when settlement files arrived late. Took nine days to find, one line to fix.
>
> Your posting mentions moving off a single Postgres primary. I did that migration at Datum — sharded by merchant, dual-wrote for six weeks, cut over in January. The sharding was the easy part. The expensive part was every internal report that assumed a global view, and I'd want to know how many of those you have before anyone estimates the work.
>
> The gap: I have no PCI compliance experience. Datum's scope was handled by a separate team and I never touched it. If that's a meaningful part of this role, it's a real gap and I'd rather say so now.
>
> Résumé attached. Happy to go deeper on any of these.
>
> Jordan

**What changed:** Every paragraph contains something checkable. The second one shows Jordan read the job post and has an *opinion* about their problem, which is the strongest available signal. The gap paragraph is the piece nobody else sends — it makes the other two paragraphs more believable, because a person willing to say the third thing is probably not exaggerating the first two.

---

## 3. LinkedIn post

### Before (128 words)

> 🚀 Excited to share some big news!
>
> After 3 incredible years at Datum, I'm thrilled to announce that I'm joining Verve as a Senior Backend Engineer!
>
> To my amazing team at Datum: thank you for everything. You taught me that great engineering isn't just about writing code — it's about building trust, shipping fast, and never losing sight of the customer.
>
> Here are 3 lessons I'm taking with me:
> ✅ Ship small, ship often
> ✅ The best architecture is the one your team understands
> ✅ Culture eats strategy for breakfast
>
> Grateful for the journey and excited for what's next! 🙏
>
> \#NewBeginnings #Engineering #Grateful #Blessed

**What's wrong:** Emoji bullets, hashtag stack, negative parallelism, a tricolon inside it, three borrowed aphorisms that could be anyone's, and "thrilled/excited/incredible/amazing/grateful" in 128 words. Says nothing a stranger couldn't have written about a job they didn't have.

### After (117 words)

> I'm leaving Datum after three years to join Verve.
>
> The thing I'll actually miss is how we ran incident reviews. No template, no five-whys, no blameless-postmortem doc. Someone reads the timeline out loud, and anyone in the room can stop them and ask "wait — why did you think that at the time?"
>
> It's slower than writing a doc and considerably more uncomfortable, and it's the only postmortem format I've seen that changed what people did afterward. Most of the value was in the interruptions.
>
> I'm going to try to bring it with me. It probably won't survive contact with a team that didn't build it, but it's worth a try.
>
> Priya and Marcus ran most of those reviews and let me be wrong in public a lot. Thanks for that.

**What changed:** One idea, described concretely enough that a reader learns something they could use. The admission that it might not transfer is what makes it read as a person thinking rather than a person performing. Thanks are specific and last, not a generic block. No emoji, no hashtags, no lessons list.

---

## 4. Essay opening

### Before (97 words)

> In today's rapidly evolving digital landscape, the way we approach productivity has undergone a profound transformation. From the rise of remote work to the proliferation of AI-powered tools, professionals are navigating an unprecedented array of choices about how to structure their days.
>
> But amidst this sea of options, one question remains: are we actually getting more done?
>
> The answer, as with most things, is nuanced. While productivity systems offer clear benefits in terms of organization and focus, they also come with hidden costs that are rarely discussed.

**What's wrong:** Three paragraphs and zero information. "In today's landscape," a fake range ("from X to the proliferation of Y"), figurative "navigating," a rhetorical question as a transition, "the answer is nuanced," and reflexive both-sidesing. The reader has learned nothing and has no reason to continue.

### After (94 words)

> I tracked my hours for four months to find out whether any of my productivity systems were doing anything. The answer was no, with one exception, and the exception wasn't one of the systems.
>
> What I was running: time-blocking in Google Calendar, a Sunday weekly review, three task managers in sequence after abandoning the first two, and a rule about not opening email before 11am. I logged what I actually finished each day in a text file.
>
> The text file was the only part that worked. I didn't notice this for eleven weeks.

**What changed:** Opens inside the experiment. Gives the conclusion immediately — and the conclusion is specific and slightly self-deprecating, so the reader wants the mechanism. The list is concrete and includes an unflattering detail ("after abandoning the first two"). "I didn't notice this for eleven weeks" is a real admission that no summary-generator produces.

---

## 5. Bad news email

### Before (89 words)

> Hi team,
>
> I wanted to reach out regarding the launch timeline. Unfortunately, due to some unforeseen technical challenges, we've had to make the difficult decision to push the release date. Mistakes were made in our initial estimation process, and we're working diligently to get back on track.
>
> We sincerely apologize for any inconvenience this may have caused and appreciate your patience and understanding as we navigate this situation. Please don't hesitate to reach out with any questions.
>
> Best regards,
> Marcus

**What's wrong:** Never says the new date. Never says what broke. "Mistakes were made" hides who. "Unforeseen challenges" is a phrase that exists to avoid saying what happened. Two sentences of apology ritual doing the work that one fact would do better.

### After (76 words)

> Hi team,
>
> The launch is moving from March 3 to March 24.
>
> The auth migration didn't account for customers with multiple SSO providers — about 400 accounts, all enterprise. We found it in staging last Tuesday. Fixing it properly takes three weeks; the two-week version leaves those accounts in a state we'd have to clean up manually later, and I'd rather not.
>
> I estimated this in December without checking the SSO data. That's on me.
>
> Ping me if March 24 breaks something on your side.
>
> Marcus

**What changed:** New date in the first line, where someone skimming will find it. The cause is specific and scoped (400 accounts, enterprise). The tradeoff is stated so people can push back on it. Ownership is named rather than dissolved into passive voice. No apology ritual — the facts and the accountability do more than "we sincerely apologize" ever does.

---

## The pattern across all five

Every "after" does the same four things:

1. **Leads with the load-bearing fact** — the date, the news, the observation, the conclusion.
2. **Contains checkable specifics** — 400k transactions, eleven weeks, March 24, six of eight months.
3. **Says one thing that isn't flattering** — the PCI gap, "I didn't notice for eleven weeks," "that's on me," "it probably won't survive."
4. **Ends without a bow** — no summary, no "looking forward to," no lesson extracted from the anecdote.

And every "after" is shorter than its "before" except the cover letter, which is longer because the original had no content to be shorter than.
