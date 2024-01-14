import { CSSProperties, PropsWithChildren } from "react";

import { SpaceSize } from "../../types/layoutTypes";

export type StackLayoutProps = PropsWithChildren<{
  size: SpaceSize;
}>;

export function StackLayout({ size, children }: StackLayoutProps): JSX.Element {
  return <div style={getStackStyle(size)}>{children}</div>;
}

function getStackStyle(size: number): CSSProperties {
  return {
    display: "flex",
    flexDirection: "column",
    rowGap: size,
    flexWrap: "wrap",
  };
}
