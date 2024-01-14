import { useQuery } from "@apollo/client";

import { pokemonTypesQuery } from "./pokemonsQueries";

export function usePokemonTypes() {
  const result = useQuery(pokemonTypesQuery);

  return result;
}
