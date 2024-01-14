import Link from "next/link";
import { CSSProperties } from "react";

import { Color } from "../constants/colorConstants";
import { appHeaderHeight } from "../constants/layoutConstants";
import { Route } from "../constants/routeConstants";
import { Container } from "./layout/container";
import { Logo } from "./logo";

export function AppHeader(): JSX.Element {
  return (
    <div style={headerStyle}>
      <Container>
        <div
          style={{
            height: appHeaderHeight,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link href={Route.Home}>
            <Logo width={30} height={30} />
          </Link>
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
