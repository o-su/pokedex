"use client";
import { useState } from "react";

import { PokemonCategory } from "./pokemonsTypes";
import { PokemonCard } from "../common/components/pokemonCard";
import { usePokemons } from "../common/api/pokemonsApi";
import { Container } from "../common/components/layout/container";
import { usePokemonTypes } from "./pokemonTypesApi";
import { Layout } from "../common/types/layoutTypes";
import { Padding } from "../common/components/layout/padding";
import { PokemonsFilter } from "./parts/pokemonsFilter";
import { PokemonLayout } from "../common/components/layout/pokemonLayout";

export default function PokemonsPage(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<PokemonCategory>(
    PokemonCategory.All
  );
  const [search, setSearch] = useState<string>("");
  const [pokemonType, setPokemonType] = useState<string>("");
  const { data: pokemonTypesData } = usePokemonTypes();
  const [layout, setLayout] = useState<Layout>(Layout.Grid);
  const { loading, error, data, togglePokemonFavorite } = usePokemons({
    filter: {
      isFavorite: selectedCategory === PokemonCategory.Favorite,
      type: pokemonType,
    },
    search,
  });

  return (
    <Container>
      <PokemonsFilter
        selectedCategory={selectedCategory}
        pokemonTypes={pokemonTypesData?.pokemonTypes}
        pokemonType={pokemonType}
        search={search}
        layout={layout}
        changeCategory={setSelectedCategory}
        setPokemonType={setPokemonType}
        setSearch={setSearch}
        changeLayout={setLayout}
      />

      <Padding top={5} bottom={5}>
        <PokemonLayout layout={layout}>
          {data?.pokemons.edges.map((pokemon) => (
            <PokemonCard
              name={pokemon.name}
              key={pokemon.id}
              image={pokemon.image}
              types={pokemon.types}
              favorite={pokemon.isFavorite}
              condensed={layout === Layout.List}
              onToggleFavorite={(event) => {
                event.preventDefault();
                togglePokemonFavorite(pokemon.id, pokemon.isFavorite);
              }}
            />
          ))}
        </PokemonLayout>
      </Padding>
    </Container>
  );
}
