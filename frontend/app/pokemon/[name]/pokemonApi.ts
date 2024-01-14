import { useQuery } from "@apollo/client";

import { pokemonQuery } from "./pokemonQueries";

export function usePokemon(name: string) {
  const result = useQuery(pokemonQuery, {
    variables: {
      name,
    },
  });

  return result;
}
