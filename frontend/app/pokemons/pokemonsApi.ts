import { gql } from "@apollo/client";

export const pokemonsQuery = gql`
  query pokemons {
    pokemons(query: { search: "" }) {
      edges {
        id
        name
        image
        types
      }
    }
  }
`;
