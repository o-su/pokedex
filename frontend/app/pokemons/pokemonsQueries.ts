import { gql } from "../gql";

export const pokemonsQuery = gql(`
  query pokemons($query: PokemonsQueryInput!) {
    pokemons(query: $query) {
      edges {
        id
        name
        image
        types
      }
    }
  }
`);

export const pokemonsFavoriteMutation = gql(`
  mutation favoritePokemon($id: ID!) {
    favoritePokemon(id: $id) {
      id
    }
  }
`);
