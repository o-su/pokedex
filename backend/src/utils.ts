import _ from "lodash";
import { Favorites } from "./favorites";

import {
  PokemonConnection,
  PokemonEvolution,
  PokemonsApiQueryData,
} from "./types";

export async function filterPokemons(
  query: PokemonsApiQueryData,
  favorites: Favorites,
  pokemonsData
): Promise<PokemonConnection> {
  const favoritePokemons = await favorites.getFavoritePokemons();
  const { limit, offset, search, filter } = query;
  let pokemons = pokemonsData;

  if (search) {
    const regex = new RegExp(search, "i");
    pokemons = _.filter(pokemons, (p) => p.name.match(regex));
  }

  if (filter) {
    if (filter.type) {
      const regex = new RegExp(filter.type, "i");

      pokemons = _.filter(pokemons, (p) =>
        _.some(p.types, (t) => t.match(regex))
      );
    }

    if (filter.isFavorite) {
      pokemons = _.filter(pokemons, (p) => favoritePokemons.includes(p.id));
    }
  }

  const count = pokemons.length;
  const edges = pokemons.slice(offset, offset + limit);

  return {
    limit,
    offset,
    count,
    edges,
  };
}

export function resolveImageUrl(pokemonName: string): string {
  return `https://img.pokemondb.net/artwork/${pokemonName
    .toLowerCase()
    .replace(/[&\\/\\\\#,+()$~%.'":*?<>{}]/g, "")
    .replace(" ", "-")}.jpg`;
}

export function prepareEvolutions(
  pokemonEvolutions: PokemonEvolution[]
): PokemonEvolution[] {
  return _.map(pokemonEvolutions || [], (ev) => ({
    ...ev,
    id: _.padStart(ev.id, 3, "0"),
  }));
}
