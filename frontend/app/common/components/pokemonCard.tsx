"use client";
import { MouseEvent, ReactSVGElement } from "react";
import { useTheme } from "@carbon/react";
import Link from "next/link";

import {
  FavoriteFilledIcon,
  FavoriteIcon,
  ViewIcon,
} from "@/app/common/components/icon";
import { Color } from "@/app/common/constants/colorConstants";
import { ThemeId } from "@/app/appState";
import { Route } from "../constants/routeConstants";
import { PokemonImage } from "./pokemonImage";

export type PokemonCardProps = {
  name: string;
  image: string;
  favorite: boolean;
  condensed?: boolean;
  types?: string[];
  onToggleFavorite: (event: MouseEvent<ReactSVGElement>) => void;
  onPreviewOpened?: () => void;
};

export function PokemonCard({
  name,
  image,
  types,
  favorite,
  condensed,
  onToggleFavorite,
  onPreviewOpened,
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
          borderRadius: 3,
          background:
            theme === ThemeId.Light ? Color.BrightGray : Color.PhilippineGray,
        }}
      >
        <div style={{ position: "relative" }}>
          <PokemonImage
            src={image}
            size={imageSize}
            alt={name}
            padding={condensed ? 5 : "20px 10px"}
          />
          {onPreviewOpened && (
            <ViewIcon
              style={{ position: "absolute", bottom: 5, right: 5 }}
              size={20}
              onClick={(event) => {
                event.preventDefault();
                onPreviewOpened();
              }}
            />
          )}
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
