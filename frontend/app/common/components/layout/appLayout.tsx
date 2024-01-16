import { CSSProperties, PropsWithChildren, ReactNode } from "react";

import {
  appHeaderHeight,
  mainContentId,
} from "../../constants/layoutConstants";

export type AppLayoutProps = PropsWithChildren<{
  header: ReactNode;
}>;

export function AppLayout({ header, children }: AppLayoutProps): JSX.Element {
  return (
    <div style={appStyle}>
      <div style={headerWrapperStyle}>{header}</div>
      <div style={mainContentWrapperStyle} id={mainContentId}>
        {children}
      </div>
    </div>
  );
}

const appStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
};

const headerWrapperStyle: CSSProperties = {
  width: "100%",
  height: appHeaderHeight,
};

const mainContentWrapperStyle: CSSProperties = {
  width: "100%",
  flexGrow: 1,
  overflow: "auto",
};
