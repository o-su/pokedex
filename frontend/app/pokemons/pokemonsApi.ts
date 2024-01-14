import { useMutation, useQuery } from "@apollo/client";
import { useCallback } from "react";
import { PokemonsQueryInput } from "../gql/graphql";

import {
  pokemonsMarkFavoriteMutation,
  pokemonsQuery,
  pokemonsUnmarkFavoriteMutation,
} from "./pokemonsQueries";

export function usePokemons(query: PokemonsQueryInput) {
  const result = useQuery(pokemonsQuery, {
    variables: {
      query,
    },
  });

  const [
    markAsFavorite,
    { loading: markAsFavoriteLoading, error: markAsFavoriteError },
  ] = useMutation(pokemonsMarkFavoriteMutation);

  const [
    unmarkAsFavorite,
    { loading: unmarkAsFavoriteLoading, error: unmarkAsFavoriteError },
  ] = useMutation(pokemonsUnmarkFavoriteMutation);

  const markPokemonAsFavorite = useCallback(
    (pokemonId: string) => {
      markAsFavorite({ variables: { id: pokemonId } });
    },
    [markAsFavorite]
  );

  const unmarkPokemonAsFavorite = useCallback(
    (pokemonId: string) => {
      unmarkAsFavorite({ variables: { id: pokemonId } });
    },
    [unmarkAsFavorite]
  );

  const togglePokemonFavorite = useCallback(
    (pokemonId: string, favorite: boolean) => {
      if (favorite) {
        unmarkPokemonAsFavorite(pokemonId);
      } else {
        markPokemonAsFavorite(pokemonId);
      }
    },
    [unmarkPokemonAsFavorite, markPokemonAsFavorite]
  );

  return {
    ...result,
    favoriteLoading: markAsFavoriteLoading || unmarkAsFavoriteLoading,
    markPokemonAsFavorite,
    unmarkPokemonAsFavorite,
    togglePokemonFavorite,
  };
}
