import { CSSProperties } from "react";

import { Color } from "../constants/colorConstants";
import { appHeaderHeight } from "../constants/layoutConstants";

export function AppHeader(): JSX.Element {
  return <div style={headerStyle}></div>;
}

const headerStyle: CSSProperties = {
  width: "100%",
  height: appHeaderHeight,
  background: Color.PhilippineGray,
};
