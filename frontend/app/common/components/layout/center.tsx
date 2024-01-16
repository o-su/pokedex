import { PropsWithChildren } from "react";

import { centerStyle } from "../../styles.ts/layoutStyles";

export function Center({ children }: PropsWithChildren): JSX.Element {
  return <div style={centerStyle}>{children}</div>;
}
