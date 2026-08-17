import { AbsoluteFill, Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { C, mono, sans } from "../theme";

export const TitleScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Title"
      style={{
        backgroundColor: C.bg,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 140,
        paddingRight: 140,
      }}
    >
      <Interactive.Div
        name="Eyebrow"
        style={{
          fontFamily: mono,
          fontSize: 30,
          color: C.accent,
          letterSpacing: 4,
          marginBottom: 28,
          opacity: interpolate(frame, [0, 14], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        CLAUDE CODE SKILL
      </Interactive.Div>

      <Interactive.Div
        name="Headline"
        style={{
          fontFamily: mono,
          fontSize: 150,
          fontWeight: 700,
          color: C.bright,
          letterSpacing: -4,
          opacity: interpolate(frame, [6, 24], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [6, 30], ["0px 26px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        outbound-writing
      </Interactive.Div>

      <Interactive.Div
        name="Subhead"
        style={{
          fontFamily: sans,
          fontSize: 52,
          color: C.dim,
          marginTop: 26,
          opacity: interpolate(frame, [18, 38], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: interpolate(frame, [18, 42], ["0px 20px", "0px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        strips the AI tells out of cold email
      </Interactive.Div>
    </AbsoluteFill>
  );
};
