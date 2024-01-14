import { gql } from "@/app/gql";

export const pokemonQuery = gql(`
  query pokemonByName($name: String!) {
    pokemonByName(name: $name) {
      id
      name
      image
      types
      isFavorite
      maxCP
      maxHP
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      evolutions {
        id
        name
        image
        isFavorite
      }
    }
  }
`);
