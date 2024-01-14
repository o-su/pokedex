import { useMutation, useQuery } from "@apollo/client";
import { useCallback } from "react";

import { pokemonsFavoriteMutation, pokemonsQuery } from "./pokemonsQueries";

export function usePokemons(query: { favorite: boolean }) {
  const result = useQuery(pokemonsQuery, {
    variables: {
      query: {
        search: "",
        filter: { isFavorite: query.favorite },
      },
    },
  });

  const [markAsFavorite, { loading, error }] = useMutation(
    pokemonsFavoriteMutation
  );

  const markPokemonAsFavorite = useCallback(
    (pokemonId: string) => {
      markAsFavorite({ variables: { id: pokemonId } });
    },
    [markAsFavorite]
  );

  return { ...result, markPokemonAsFavorite };
}
