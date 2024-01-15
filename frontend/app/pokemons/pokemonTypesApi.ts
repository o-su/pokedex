import { useQuery } from "@apollo/client";

import { pokemonTypesQuery } from "../common/queries/pokemonsQueries";

export function usePokemonTypes() {
  const result = useQuery(pokemonTypesQuery);

  return result;
}
