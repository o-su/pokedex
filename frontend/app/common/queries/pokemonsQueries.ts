import { gql } from "../../gql";

export const pokemonsQuery = gql(`
  query pokemons($query: PokemonsQueryInput!) {
    pokemons(query: $query) {
      edges {
        id
        name
        image
        types
        isFavorite
      }
    }
  }
`);

export const pokemonTypesQuery = gql(`
  query pokemonTypes {
    pokemonTypes
  }
`);

export const pokemonsMarkFavoriteMutation = gql(`
  mutation favoritePokemon($id: ID!) {
    favoritePokemon(id: $id) {
      id
      isFavorite
    }
  }
`);

export const pokemonsUnmarkFavoriteMutation = gql(`
  mutation unFavoritePokemon($id: ID!) {
    unFavoritePokemon(id: $id) {
      id
      isFavorite
    }
  }
`);
