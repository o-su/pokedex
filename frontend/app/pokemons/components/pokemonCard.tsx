"use client";
import Image from "@/node_modules/next/image";
import { Tile as CarbonTile } from "@carbon/react";

export type PokemonCardProps = {
  name: string;
  image: string;
  types: string[];
};

export function PokemonCard({
  name,
  image,
  types,
}: PokemonCardProps): JSX.Element {
  return (
    <CarbonTile>
      <Image
        src={image}
        width={100}
        height={100}
        alt={name}
        style={{ display: "block" }}
      />
      <div style={{ fontWeight: "bold" }}>{name}</div>
      <div>{types.join(", ")}</div>
    </CarbonTile>
  );
}
