import { CSSProperties, PropsWithChildren } from "react";

import { maxContentWidth } from "../../constants/layoutConstants";

export function Container({ children }: PropsWithChildren): JSX.Element {
  return <div style={containerStyle}>{children}</div>;
}

const containerStyle: CSSProperties = {
  width: "100%",
  maxWidth: maxContentWidth,
  margin: "auto",
  padding: "0px 5px",
};
