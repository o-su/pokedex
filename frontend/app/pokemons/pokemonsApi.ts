import { useQuery } from "@apollo/client";

import { PokemonsQueryInput } from "../gql/graphql";
import { pokemonsQuery } from "../common/queries/pokemonsQueries";

export function usePokemons(query: PokemonsQueryInput) {
  const result = useQuery(pokemonsQuery, {
    variables: {
      query,
    },
  });

  return result;
}
