import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { STATS } from "../content";
import { C, mono, sans } from "../theme";

export const StatsScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Stats"
      style={{
        backgroundColor: C.bg,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontFamily: sans,
          fontSize: 74,
          fontWeight: 700,
          color: C.bright,
          marginBottom: 56,
          opacity: interpolate(frame, [0, 14], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        one email, seven drafts
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {STATS.map((s, i) => {
          const appear = 12 + i * 9;
          return (
            <div
              key={s.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 26,
                opacity: interpolate(frame, [appear, appear + 14], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.16, 1, 0.3, 1),
                }),
                translate: interpolate(
                  frame,
                  [appear, appear + 18],
                  ["0px 18px", "0px 0px"],
                  {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.bezier(0.16, 1, 0.3, 1),
                  },
                ),
              }}
            >
              <div
                style={{
                  fontFamily: sans,
                  fontSize: 40,
                  color: C.dim,
                  width: 300,
                  textAlign: "right",
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 58,
                  fontWeight: 700,
                  color: C.red,
                  width: 130,
                  textAlign: "right",
                  textDecoration: "line-through",
                  textDecorationThickness: 4,
                }}
              >
                {s.from}
              </div>
              <div style={{ fontFamily: mono, fontSize: 44, color: C.dim }}>
                →
              </div>
              <div
                style={{
                  fontFamily: mono,
                  fontSize: 58,
                  fontWeight: 700,
                  color: C.green,
                  width: 130,
                }}
              >
                {Math.round(
                  interpolate(
                    frame,
                    [appear + 8, appear + 26],
                    [s.from, s.to],
                    {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                      easing: Easing.bezier(0.16, 1, 0.3, 1),
                    },
                  ),
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          fontFamily: mono,
          fontSize: 32,
          color: C.accent,
          marginTop: 60,
          opacity: interpolate(frame, [62, 80], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
        }}
      >
        github.com/AMishraDev/outbound-writing
      </div>
    </AbsoluteFill>
  );
};
