"use client";
import Image from "@/node_modules/next/image";
import { FavoriteIcon } from "@/app/common/components/icon";
import { Color } from "@/app/common/constants/colorConstants";

export type PokemonCardProps = {
  name: string;
  image: string;
  types: string[];
  onFavorite: () => void;
};

export function PokemonCard({
  name,
  image,
  types,
  onFavorite,
}: PokemonCardProps): JSX.Element {
  return (
    <div
      style={{
        border: `1px solid ${Color.PhilippineGray}`,
        background: Color.BrightGray,
      }}
    >
      <div
        style={{
          paddingTop: 30,
          paddingBottom: 30,
          background: Color.White,
        }}
      >
        <Image src={image} width={124} height={124} alt={name} />
      </div>

      <div style={{ padding: 5 }}>
        <div style={{ fontWeight: "bold" }}>{name}</div>
        <FavoriteIcon
          style={{ float: "right" }}
          color={Color.Red}
          onClick={onFavorite}
        />
        <div style={{ fontSize: 15 }}>{types.join(", ")}</div>
      </div>
    </div>
  );
}
