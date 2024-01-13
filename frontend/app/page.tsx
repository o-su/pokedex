"use client";

import { gql, useQuery } from "@apollo/client";

import styles from "./page.module.css";

const pokemonsQuery = gql`
  query pokemons {
    pokemons(query: { search: "" }) {
      edges {
        name
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(pokemonsQuery);

  return (
    <main className={styles.main}>
      Pokedex {data?.pokemons.edges.map((pokemon: any) => pokemon.name)}
    </main>
  );
}
