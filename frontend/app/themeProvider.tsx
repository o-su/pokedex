"use client";

import { PropsWithChildren } from "react";
import { Theme } from "@carbon/react";

import { useAppState } from "./common/hooks/appStateHook";

export function ThemeProvider({ children }: PropsWithChildren<{}>) {
  const { theme } = useAppState();

  return (
    <Theme theme={theme} style={{ height: "100%" }}>
      {children}
    </Theme>
  );
}
