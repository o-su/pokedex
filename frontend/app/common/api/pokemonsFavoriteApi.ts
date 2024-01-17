import { useCallback } from "react";
import { useMutation } from "@apollo/client";

import {
  pokemonsMarkFavoriteMutation,
  pokemonsUnmarkFavoriteMutation,
} from "../queries/pokemonsQueries";
import { useNotifications } from "../hooks/notificationsHook";
import { graphqlClient } from "../services/graphqlClient";

export function usePokemonsFavorite() {
  const { addNotification } = useNotifications();

  const [markAsFavorite, { loading: markAsFavoriteLoading }] = useMutation(
    pokemonsMarkFavoriteMutation
  );

  const [unmarkAsFavorite, { loading: unmarkAsFavoriteLoading }] = useMutation(
    pokemonsUnmarkFavoriteMutation
  );

  const refetchPokemons = useCallback(() => {
    graphqlClient.refetchQueries({
      include: ["pokemons"],
    });
  }, []);

  const markPokemonAsFavorite = useCallback(
    async (pokemonId: string) => {
      try {
        await markAsFavorite({ variables: { id: pokemonId } });
        refetchPokemons();
        addNotification({
          kind: "success",
          message: "Marked pokemon as favorite",
        });
      } catch {
        addNotification({
          kind: "error",
          message: "Failed to mark pokemon as favorite",
        });
      }
    },
    [markAsFavorite, addNotification, refetchPokemons]
  );

  const unmarkPokemonAsFavorite = useCallback(
    async (pokemonId: string) => {
      try {
        await unmarkAsFavorite({ variables: { id: pokemonId } });
        refetchPokemons();
        addNotification({
          kind: "success",
          message: "Unmarked pokemon as favorite",
        });
      } catch {
        addNotification({
          kind: "error",
          message: "Failed to unmark pokemon as favorite",
        });
      }
    },
    [unmarkAsFavorite, addNotification, refetchPokemons]
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
