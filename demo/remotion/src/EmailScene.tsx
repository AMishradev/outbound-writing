import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { EmailBlock } from "./EmailBlock";
import type { Line } from "./content";
import { C, mono, sans } from "./theme";

type Item = { name: string; note: string };

type Props = {
  lines: Line[];
  items: Item[];
  variant: "slop" | "final";
  label: string;
  /** frame the first callout appears */
  start: number;
  /** frames each callout holds */
  step: number;
};

export const EmailScene: React.FC<Props> = ({
  lines,
  items,
  variant,
  label,
  start,
  step,
}) => {
  const frame = useCurrentFrame();
  const hot = variant === "slop" ? C.red : C.green;

  const idx = Math.floor((frame - start) / step);
  const active = frame < start ? -1 : Math.min(idx, items.length - 1);
  const local = frame - (start + active * step);
  const progress =
    active < 0
      ? 0
      : interpolate(local, [0, 11], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        });

  const item = active >= 0 ? items[active] : null;

  return (
    <AbsoluteFill
      name={variant === "slop" ? "SlopEmail" : "FinalEmail"}
      style={{ backgroundColor: C.bg, flexDirection: "row" }}
    >
      {/* left: the email */}
      <div
        style={{
          width: 1130,
          paddingLeft: 120,
          paddingTop: 70,
          paddingBottom: 70,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontFamily: mono,
            fontSize: 26,
            color: hot,
            letterSpacing: 3,
            marginBottom: 34,
            opacity: interpolate(frame, [0, 12], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          {label}
        </div>
        <div
          style={{
            opacity: interpolate(frame, [2, 18], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(frame, [2, 22], ["0px 16px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
          }}
        >
          <EmailBlock
            lines={lines}
            active={active}
            progress={progress}
            variant={variant}
          />
        </div>
      </div>

      {/* right: the callout */}
      <div
        style={{
          flex: 1,
          paddingRight: 110,
          paddingLeft: 40,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {item ? (
          <div
            key={active}
            style={{
              backgroundColor: C.panel,
              border: `2px solid ${C.panelEdge}`,
              borderLeft: `8px solid ${hot}`,
              borderRadius: 14,
              padding: "38px 40px",
              opacity: interpolate(progress, [0, 0.45], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(
                progress,
                [0, 1],
                ["26px 0px", "0px 0px"],
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
                fontFamily: mono,
                fontSize: 24,
                color: hot,
                letterSpacing: 2,
                marginBottom: 16,
              }}
            >
              {variant === "slop"
                ? `TELL ${active + 1}/${items.length}`
                : `KEEP ${active + 1}/${items.length}`}
            </div>
            <div
              style={{
                fontFamily: sans,
                fontSize: 46,
                fontWeight: 600,
                color: C.bright,
                lineHeight: 1.15,
                marginBottom: 18,
              }}
            >
              {item.name}
            </div>
            <div
              style={{
                fontFamily: sans,
                fontSize: 30,
                color: C.dim,
                lineHeight: 1.35,
              }}
            >
              {item.note}
            </div>
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
