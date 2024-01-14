import { PropsWithChildren } from "react";

import { SpaceSize } from "../../types/layoutTypes";

export type PaddingProps = PropsWithChildren<{
  padding?: SpaceSize;
  top?: SpaceSize;
  right?: SpaceSize;
  bottom?: SpaceSize;
  left?: SpaceSize;
  height?: string | number;
}>;

export function Padding({
  padding,
  top,
  right,
  bottom,
  left,
  height,
  children,
}: PaddingProps): JSX.Element {
  return (
    <div
      style={{
        padding,
        height,
        paddingTop: top,
        paddingRight: right,
        paddingBottom: bottom,
        paddingLeft: left,
      }}
    >
      {children}
    </div>
  );
}
