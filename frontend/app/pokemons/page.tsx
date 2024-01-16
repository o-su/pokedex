"use client";
import { useMemo, useState } from "react";

import { PokemonCategory } from "./pokemonsTypes";
import { Container } from "../common/components/layout/container";
import { usePokemonTypes } from "./pokemonTypesApi";
import { Layout } from "../common/types/layoutTypes";
import { Padding } from "../common/components/layout/padding";
import { PokemonsFilter } from "./parts/pokemonsFilter";
import { PokemonsContent } from "./parts/pokemonsContent";
import { usePokemons } from "./pokemonsApi";

const pokemonsPerPage = 20;

export default function PokemonsPage(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<PokemonCategory>(
    PokemonCategory.All
  );
  const [search, setSearch] = useState<string>("");
  const [pokemonType, setPokemonType] = useState<string>("");
  const { data: pokemonTypesData } = usePokemonTypes();
  const [layout, setLayout] = useState<Layout>(Layout.Grid);
  const [page, setPage] = useState<number>(0);
  const query = useMemo(
    () => ({
      limit: pokemonsPerPage,
      offset: 0,
      filter: {
        isFavorite: selectedCategory === PokemonCategory.Favorite,
        type: pokemonType,
      },
      search,
    }),
    [selectedCategory, pokemonType, search]
  );
  const { data, loadMorePokemons } = usePokemons(query);

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
        <PokemonsContent layout={layout} data={data} />
        <div
          onClick={() => {
            const newPage = page + 1;
            setPage(newPage);
            loadMorePokemons({
              ...query,
              offset: newPage * pokemonsPerPage,
            });
          }}
        >
          Load more
        </div>
      </Padding>
    </Container>
  );
}
