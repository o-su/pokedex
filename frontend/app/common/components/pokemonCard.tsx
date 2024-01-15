"use client";
import { MouseEvent, ReactSVGElement } from "react";
import Image from "@/node_modules/next/image";
import { useTheme } from "@carbon/react";

import { FavoriteFilledIcon, FavoriteIcon } from "@/app/common/components/icon";
import { Color } from "@/app/common/constants/colorConstants";
import { ThemeId } from "@/app/appState";
import Link from "next/link";
import { Route } from "../constants/routeConstants";

export type PokemonCardProps = {
  name: string;
  image: string;
  favorite: boolean;
  condensed?: boolean;
  types?: string[];
  onToggleFavorite: (event: MouseEvent<ReactSVGElement>) => void;
};

export function PokemonCard({
  name,
  image,
  types,
  favorite,
  condensed,
  onToggleFavorite,
}: PokemonCardProps): JSX.Element {
  const { theme } = useTheme();
  const FavoriteActiveIcon = favorite ? FavoriteFilledIcon : FavoriteIcon;
  const imageSize = condensed ? 50 : 120;

  return (
    <Link href={Route.Pokemon + encodeURIComponent(name)}>
      <div
        style={{
          display: "flex",
          flexDirection: condensed ? "row" : "column",
          border: `1px solid ${Color.PhilippineGray}`,
          borderRadius: 3,
          background:
            theme === ThemeId.Light ? Color.BrightGray : Color.PhilippineGray,
        }}
      >
        <div
          style={{
            padding: condensed ? 5 : "30px 10px",
            background: Color.White,
            filter: theme === ThemeId.Dark ? "brightness(70%)" : undefined,
          }}
        >
          <Image src={image} width={imageSize} height={imageSize} alt={name} />
        </div>

        <div style={{ padding: 5, width: "100%" }}>
          <div style={{ float: "left" }}>
            <div style={{ fontWeight: "bold" }}>{name}</div>
            {types && <div style={{ fontSize: 15 }}>{types.join(", ")}</div>}
          </div>

          <FavoriteActiveIcon
            style={{ float: "right", cursor: "pointer" }}
            color={Color.Red}
            size={20}
            onClick={onToggleFavorite}
          />
        </div>
      </div>
    </Link>
  );
}
