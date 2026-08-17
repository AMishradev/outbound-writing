# Channel playbooks

Register follows the channel. Each section: what the reader is actually doing, the length target, the structure, and the specific way this channel fails.

---

## Cold email / outreach

**What the reader is doing:** deciding in about two seconds whether to archive. They have seen forty of these. They are not looking for a reason to reply; they are looking for a reason to stop reading.

**Length:** under 125 words. Under 90 is better. If it doesn't fit on a phone screen without scrolling, cut.

**Structure:**
1. **Subject line** — specific and lowercase-ish. It should name the actual topic, not tease. "your monorepo post — the CI part" beats "Quick question" or "Loved your post!"
2. **First line** — the specific thing. Not who you are, not why you're writing. The observation, the question, or the fact that only applies to them.
3. **One paragraph of substance** — the thing you noticed, the thing you're offering, the thing you know that they might not.
4. **The ask** — one sentence, specific, low-cost. "What made CI the long pole?" beats "I'd love to hop on a call to explore synergies."
5. **Sign-off** — first name. That's it.

**Rules:**
- Give before you ask. A correction, a data point, an intro, a link they'd actually want. If you have nothing to give, you're asking a stranger for a favor and you should say so plainly.
- One specific about them, maximum, and it must be about their *work*, not their credentials. "Your post said the migration took eight months" is specific. "Your impressive career at Google" is flattery.
- Never fake familiarity. "Hey! Long time!" to a stranger is worse than any amount of formality.
- No calendar links in a first email.
- No "circling back" follow-ups. If you follow up, add new information.

**How this channel fails:** the fake-personal opener. A generated compliment about their work reads worse than an honest "You don't know me, and this is a cold email" — because the reader can tell, and now they know you tried to trick them. If you genuinely have no specific reason to write this person, write a short honest generic note instead.

---

## Job applications and cover letters

**What the reader is doing:** scanning for evidence you can do the job, and for reasons to reject. They read hundreds. Enthusiasm is not evidence.

**Length:** 200–300 words. Nobody reads a full page.

**Structure:**
1. **What you're applying for**, one line. No "I am writing to express my enthusiastic interest."
2. **Two or three pieces of evidence** — each a specific thing you did, with the system named, the scale given, and the outcome stated. Not responsibilities. Things that happened.
3. **One connection to their actual situation** — something from the job post, their engineering blog, their product. Show you read it and formed an opinion.
4. **One honest gap, but only against a must-have.** "I don't have X" — where X is a real requirement you lack. Name it and say what's adjacent. Check their list first: if X sits under *nice-to-have*, cut the sentence. You would be manufacturing a rejection reason that was never going to form.
5. **Close** — one line. "Résumé attached, happy to walk through any of this."

**Rules:**
- Numbers or nothing. "Improved performance" is invisible; "cut p99 from 800ms to 120ms" is a reason to interview you.
- Name the actual systems. "the reconciliation job," "the Rails monolith," "our Airflow DAGs." Specificity is unfakeable.
- Never claim passion for the company's mission. Instead, show you understood a decision they made.
- Never say you're a "perfect fit," "great culture add," or "confident I would excel."
- Don't restate the résumé. Tell the one story the résumé can't hold.
- Interview follow-ups: reference one specific thing from the conversation, add one thing you thought of afterward, three sentences total.

**How this channel fails:** the piece is entirely about the applicant's feelings and contains no verifiable fact. Every sentence could be in anyone's cover letter for any job. Test: swap the company name and see if it still works. If it does, it's worthless.

**The gap paragraph is the differentiator, when it's aimed correctly.** Almost nobody does it, and it flips the read from "candidate performing confidence" to "candidate who evaluated themselves honestly." It works by front-running an objection the reader was *already going to reach on their own*. That condition is the whole rule. A gap they would never have formed is not honesty, it is a free reason to reject you, and it costs most when the missing thing has a name. "I've never worked in mining" fades on a second read. "I don't know MSHA" is a keyword that sticks and can be searched against you.

Test before keeping it: find the requirement in their own list. Must-have you visibly fail, keep it. Nice-to-have, cut it. Not mentioned at all, cut it.

---

## LinkedIn

The channel where generated text is most obvious and most punished, because the entire feed is generated text and readers are saturated.

### Posts

**Length:** under 150 words. The "see more" fold is around 210 characters — everything before it decides whether anyone reads on.

**Structure:** one thing. Not three lessons, not a framework. One observation, one story, or one opinion.

**Rules:**
- No emoji bullets, no `✅`, no `🚀`.
- 0–2 hashtags if genuinely topical, otherwise none. Never `#Grateful #Blessed #Hustle`.
- No "Here are N lessons." If you have five lessons, post the one that isn't obvious.
- No one-line-per-paragraph dramatic formatting. It's a tell, and it makes short posts look like poetry slams.
- No engagement bait: "Agree?", "Thoughts?", "Repost if…"
- No aphorisms. "Culture eats strategy for breakfast" and everything in that family.
- Job-change posts: say the news in the first line, thank specific named people for specific things, skip the lessons list entirely.
- The best LinkedIn post is a specific technical or operational detail that most people in your field don't know. That's it. That's the format.

### DMs

**Length:** 40–70 words. Shorter than email — DMs are read on a phone, mid-scroll.

**Rules:**
- Say why you're in their inbox in the first sentence.
- No connection-request-then-pitch. If you're pitching, pitch in the request note.
- No "I'd love to pick your brain." Ask the actual question — a good question is a gift; a request for their time is a bill.
- No voice notes to strangers.

**How this channel fails:** performance. LinkedIn rewards the appearance of insight, so the default output is insight-shaped and content-free. The correction is to say something small and true rather than something big and empty.

---

## Essays, blog posts, long-form

**What the reader is doing:** deciding after two sentences whether you know something they don't.

**Length:** as long as the material supports. Most drafts are 30% too long, and the excess is almost entirely setup and summary.

**Structure:**
- **Open in the middle of something.** A specific scene, a number, a claim, a thing that happened. Never a definition, never historical context, never "In today's world."
- **Put the strongest idea early.** Burying the thesis under three paragraphs of setup loses everyone.
- **One argument, developed**, rather than five gestured at.
- **End on the last concrete thing.** Delete the concluding paragraph that summarizes. It's always the weakest.

**Rules:**
- Every abstract claim needs a specific instance within two sentences.
- Take a position that costs something. An essay nobody could disagree with wasn't worth writing.
- Include what you got wrong, what surprised you, or what you still don't understand.
- Section headers should be informative, not cute. "Why CI was the long pole," not "The Plot Thickens."
- Don't announce structure ("First, I'll explain X. Then Y."). Just do it.
- Details that serve no argumentative purpose are what make it read as lived rather than assembled. Keep a few.

**How this channel fails:** the piece is *about* a topic rather than *making a claim*. Symptoms: balanced coverage of all sides, no stakes, headers that name subjects rather than assertions, a conclusion that says the truth is nuanced. Fix by finding the sentence you'd defend in an argument and building around it.

---

## General writing (everything else)

Announcements, bios, README intros, Slack messages to people you don't know, apology emails, requests, updates.

Same core: **lead with the load-bearing sentence, be specific, cut the padding, say one true thing that isn't flattering.**

Two additions:

**Bad news and apologies.** Say what happened, say what you're doing, say when. No "we sincerely apologize for any inconvenience this may have caused." No passive voice hiding the actor ("mistakes were made"). No explaining how much you value the relationship. The apology is the facts plus the fix.

**Bios.** Third person, present tense, 2–3 sentences, concrete. What you do now, one thing you did before that's actually interesting, one specific detail. No "passionate about building products that make a difference."
