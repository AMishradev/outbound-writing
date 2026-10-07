import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { EmailScene } from "../EmailScene";
import { StatsScene } from "../scenes/StatsScene";
import { TitleScene } from "../scenes/TitleScene";
import { DRAFT, EMAIL_STATS, FLAGS, KEEPS, SENT } from "./content";

export const EMAIL_DEMO_FRAMES = 60 + 300 + 250 + 110 - 3 * 15;

export const EmailDemo: React.FC = () => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={60} name="Title">
        <TitleScene
          eyebrow="CLAUDE CODE SKILL  ·  V2.0"
          subhead="now for email to people at big companies"
        />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 15 })}
      />

      <TransitionSeries.Sequence durationInFrames={300} name="First draft">
        <EmailScene
          lines={DRAFT}
          items={FLAGS}
          variant="slop"
          label="FIRST DRAFT  ·  TO A NEW GRAD AT HALCYON"
          start={26}
          step={50}
          tags={["FLAG", "KEEP"]}
        />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 15 })}
      />

      <TransitionSeries.Sequence durationInFrames={250} name="Sent">
        <EmailScene
          lines={SENT}
          items={KEEPS}
          variant="final"
          label="SENT  ·  TO ANOTHER NEW GRAD THERE"
          start={26}
          step={52}
        />
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 15 })}
      />

      <TransitionSeries.Sequence durationInFrames={110} name="Stats">
        <StatsScene title="two sent emails, nine corrections" stats={EMAIL_STATS} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
