import { PropsWithChildren } from "react";
import { maxContentWidth } from "../../constants/layoutConstants";

export function Container({ children }: PropsWithChildren<{}>): JSX.Element {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: maxContentWidth,
        margin: "auto",
        padding: 5,
      }}
    >
      {children}
    </div>
  );
}
