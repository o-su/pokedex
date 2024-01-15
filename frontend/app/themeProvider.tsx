"use client";

import { PropsWithChildren } from "react";
import { Theme } from "@carbon/react";

import { useTheme } from "./common/hooks/themeHook";

export function ThemeProvider({ children }: PropsWithChildren<{}>) {
  const { theme } = useTheme();

  return (
    <Theme theme={theme} style={{ height: "100%" }}>
      {children}
    </Theme>
  );
}
