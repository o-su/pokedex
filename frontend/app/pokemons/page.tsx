"use client";
import { useState } from "react";

import { PokemonCategory } from "./pokemonsTypes";
import { Container } from "../common/components/layout/container";
import { usePokemonTypes } from "./pokemonTypesApi";
import { Layout } from "../common/types/layoutTypes";
import { Padding } from "../common/components/layout/padding";
import { PokemonsFilter } from "./parts/pokemonsFilter";
import { usePokemonsFavorite } from "../common/api/pokemonsFavoriteApi";
import { PokemonsContent } from "./parts/pokemonsContent";

export default function PokemonsPage(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<PokemonCategory>(
    PokemonCategory.All
  );
  const [search, setSearch] = useState<string>("");
  const [pokemonType, setPokemonType] = useState<string>("");
  const { data: pokemonTypesData } = usePokemonTypes();
  const [layout, setLayout] = useState<Layout>(Layout.Grid);

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

      <Padding top={10} bottom={5}>
        <PokemonsContent
          layout={layout}
          query={{
            filter: {
              isFavorite: selectedCategory === PokemonCategory.Favorite,
              type: pokemonType,
            },
            search,
          }}
        />
      </Padding>
    </Container>
  );
}
