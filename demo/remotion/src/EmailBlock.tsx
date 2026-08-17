import { interpolate } from "remotion";
import type { Line } from "./content";
import { C, FONT_SIZE, LINE_H, mono } from "./theme";

type Props = {
  lines: Line[];
  /** index of the currently revealed tell/good, -1 = none */
  active: number;
  /** how far into the current highlight, 0..1 */
  progress: number;
  variant: "slop" | "final";
};

export const EmailBlock: React.FC<Props> = ({
  lines,
  active,
  progress,
  variant,
}) => {
  const hot = variant === "slop" ? C.red : C.green;
  const glow = variant === "slop" ? C.redGlow : C.greenGlow;

  return (
    <div
      style={{
        fontFamily: mono,
        fontSize: FONT_SIZE,
        lineHeight: `${LINE_H}px`,
        color: C.text,
        whiteSpace: "pre",
      }}
    >
      {lines.map((segs, li) => (
        <div key={li} style={{ height: LINE_H }}>
          {segs.length === 0 ? " " : null}
          {segs.map((s, si) => {
            const mark = variant === "slop" ? s.tell : s.good;
            const isMarked = mark !== undefined;
            const isActive = isMarked && mark === active;
            const isPast = isMarked && mark !== undefined && mark < active;
            const on = isActive ? progress : isPast ? 1 : 0;

            return (
              <span
                key={si}
                style={{
                  color: interpolate(on, [0, 1], [0, 1]) > 0.35 ? hot : C.text,
                  backgroundColor: isMarked
                    ? on > 0.05
                      ? glow
                      : "transparent"
                    : "transparent",
                  textDecoration:
                    variant === "slop" && isMarked && on > 0.55
                      ? "line-through"
                      : "none",
                  textDecorationColor: hot,
                  textDecorationThickness: 3,
                  borderRadius: 4,
                  padding: isMarked ? "2px 0" : 0,
                  opacity: interpolate(
                    on,
                    [0, 0.5, 1],
                    [1, isMarked ? 0.85 : 1, 1],
                  ),
                }}
              >
                {s.t}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};
