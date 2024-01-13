"use client";
import { useQuery } from "@apollo/client";

import { pokemonsQuery } from "./pokemonsApi";

export default function PokemonsPage(): JSX.Element {
  const { loading, error, data } = useQuery(pokemonsQuery);

  return (
    <div>
      Pokemons
      {data?.pokemons.edges.map((pokemon: any) => pokemon.name)}
    </div>
  );
}
