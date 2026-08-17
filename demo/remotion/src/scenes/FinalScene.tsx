import { EmailScene } from "../EmailScene";
import { FINAL, GOODS } from "../content";

export const FinalScene: React.FC = () => {
  return (
    <EmailScene
      lines={FINAL}
      items={GOODS}
      variant="final"
      label="FINAL  ·  AFTER THE SKILL"
      start={26}
      step={46}
    />
  );
};
