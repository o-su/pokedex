import { useQuery } from "@apollo/client";

import { PokemonsQueryInput } from "../gql/graphql";
import { pokemonsQuery } from "../common/queries/pokemonsQueries";
import { useCallback } from "react";

export function usePokemons(query: PokemonsQueryInput) {
  const result = useQuery(pokemonsQuery, {
    variables: {
      query,
    },
  });

  const loadMorePokemons = useCallback(
    (newQuery: PokemonsQueryInput) => {
      result.fetchMore({
        variables: { query: newQuery },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newEntries = fetchMoreResult.pokemons.edges;

          return {
            pokemons: {
              edges: [...previousResult.pokemons.edges, ...newEntries],
            },
          };
        },
      });
    },
    [result]
  );

  return { ...result, loadMorePokemons };
}
