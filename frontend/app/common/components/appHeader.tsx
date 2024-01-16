"use client";
import { CSSProperties } from "react";
import { ThemeId } from "@/app/appState";
import Link from "next/link";

import { Color } from "../constants/colorConstants";
import { appHeaderHeight } from "../constants/layoutConstants";
import { Route } from "../constants/routeConstants";
import { MoonIcon, SunIcon } from "./icon";
import { Container } from "./layout/container";
import { Logo } from "./logo";
import { useTheme } from "../hooks/themeHook";

export function AppHeader(): JSX.Element {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={headerStyle}>
      <Container>
        <div
          style={{
            height: appHeaderHeight,
            display: "flex",
            alignItems: "center",
            float: "left",
          }}
        >
          <Link href={Route.Home}>
            <Logo width={30} height={30} />
          </Link>
        </div>
        <div
          id="theme-switch"
          style={{
            float: "right",
            cursor: "pointer",
            lineHeight: `${appHeaderHeight}px`,
            color: Color.White,
            paddingLeft: 10,
            paddingRight: 10,
          }}
          onClick={toggleTheme}
        >
          {theme === ThemeId.Dark ? <SunIcon /> : <MoonIcon />}
        </div>
      </Container>
    </div>
  );
}

const headerStyle: CSSProperties = {
  width: "100%",
  height: appHeaderHeight,
  background: Color.DarkGunmetal,
};
