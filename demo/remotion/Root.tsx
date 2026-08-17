import "./index.css";
import { Composition, Folder } from "remotion";
import { OutboundDemo } from "./demo/OutboundDemo";
import { TitleScene } from "./demo/scenes/TitleScene";
import { SlopScene } from "./demo/scenes/SlopScene";
import { FinalScene } from "./demo/scenes/FinalScene";
import { StatsScene } from "./demo/scenes/StatsScene";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="OutboundDemo"
        component={OutboundDemo}
        durationInFrames={730}
        fps={30}
        width={1920}
        height={1080}
      />
      <Folder name="Scenes">
        <Composition
          id="Title"
          component={TitleScene}
          durationInFrames={60}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Draft1"
          component={SlopScene}
          durationInFrames={355}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Final"
          component={FinalScene}
          durationInFrames={250}
          fps={30}
          width={1920}
          height={1080}
        />
        <Composition
          id="Stats"
          component={StatsScene}
          durationInFrames={110}
          fps={30}
          width={1920}
          height={1080}
        />
      </Folder>
    </>
  );
};
