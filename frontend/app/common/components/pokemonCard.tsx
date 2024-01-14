"use client";
import { MouseEvent, ReactSVGElement } from "react";
import Image from "@/node_modules/next/image";

import { FavoriteFilledIcon, FavoriteIcon } from "@/app/common/components/icon";
import { Color } from "@/app/common/constants/colorConstants";

export type PokemonCardProps = {
  name: string;
  image: string;
  favorite: boolean;
  types?: string[];
  onToggleFavorite: (event: MouseEvent<ReactSVGElement>) => void;
};

export function PokemonCard({
  name,
  image,
  types,
  favorite,
  onToggleFavorite,
}: PokemonCardProps): JSX.Element {
  const FavoriteActiveIcon = favorite ? FavoriteFilledIcon : FavoriteIcon;

  return (
    <div
      style={{
        border: `1px solid ${Color.PhilippineGray}`,
        background: Color.BrightGray,
      }}
    >
      <div
        style={{
          padding: "30px 10px",
          background: Color.White,
        }}
      >
        <Image src={image} width={120} height={120} alt={name} />
      </div>

      <div style={{ padding: 5 }}>
        <div style={{ fontWeight: "bold" }}>{name}</div>

        <FavoriteActiveIcon
          style={{ float: "right", cursor: "pointer" }}
          color={Color.Red}
          size={20}
          onClick={onToggleFavorite}
        />
        {types && <div style={{ fontSize: 15 }}>{types.join(", ")}</div>}
      </div>
    </div>
  );
}
