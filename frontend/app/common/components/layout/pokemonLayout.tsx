import { PropsWithChildren } from "react";

import { Layout } from "../../types/layoutTypes";

export type PokemonLayoutProps = PropsWithChildren<{
  layout: Layout;
  align?: "left" | "center" | "right";
}>;

export function PokemonLayout({
  layout,
  align,
  children,
}: PokemonLayoutProps): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: layout === Layout.Grid ? "row" : "column",
        flexWrap: "wrap",
        gap: "10px 10px",
        width: "100%",
        justifyContent: align || "center",
      }}
    >
      {children}
    </div>
  );
}
