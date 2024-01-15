import { useCallback } from "react";
import { useMutation } from "@apollo/client";

import {
  pokemonsMarkFavoriteMutation,
  pokemonsUnmarkFavoriteMutation,
} from "../queries/pokemonsQueries";

export function usePokemonsFavorite() {
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
    favoriteLoading: markAsFavoriteLoading || unmarkAsFavoriteLoading,
    markPokemonAsFavorite,
    unmarkPokemonAsFavorite,
    togglePokemonFavorite,
  };
}
