import { Center } from "./layout/center";
import { Loader } from "./loader";

export function InlineLoader(): JSX.Element {
  return (
    <Center>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <Loader
          withOverlay={false}
          small
          style={{ display: "inline-block", marginRight: 5 }}
        />
        loading...
      </div>
    </Center>
  );
}
