import { EmailScene } from "../EmailScene";
import { SLOP, TELLS } from "../content";

export const SlopScene: React.FC = () => {
  return (
    <EmailScene
      lines={SLOP}
      items={TELLS}
      variant="slop"
      label="DRAFT 1  ·  WHAT THE MODEL WRITES BY DEFAULT"
      start={26}
      step={42}
    />
  );
};
