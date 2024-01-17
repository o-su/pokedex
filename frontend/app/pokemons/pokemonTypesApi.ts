import { useQuery } from "@apollo/client";

import { pokemonTypesQuery } from "../common/queries/pokemonsQueries";

export function usePokemonTypes() {
  return useQuery(pokemonTypesQuery);
}
