"use client";
import { useCallback, useEffect, useMemo, useState } from "react";

import { PokemonCategory } from "./pokemonsTypes";
import { Container } from "../common/components/layout/container";
import { usePokemonTypes } from "./pokemonTypesApi";
import { Layout } from "../common/types/layoutTypes";
import { Padding } from "../common/components/layout/padding";
import { defaultPokemonType, PokemonsFilter } from "./parts/pokemonsFilter";
import { PokemonsContent } from "./parts/pokemonsContent";
import { usePokemons } from "./pokemonsApi";
import { mainContentId } from "../common/constants/layoutConstants";
import { PokemonModal } from "./parts/pokemonModal";

const pokemonsPerPage = 20;

export default function PokemonsPage(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<PokemonCategory>(
    PokemonCategory.All
  );
  const [search, setSearch] = useState<string>("");
  const [pokemonType, setPokemonType] = useState<string>("");
  const { data: pokemonTypesData } = usePokemonTypes();
  const sortedPokemonTypes = useMemo(
    () =>
      pokemonTypesData
        ? [...pokemonTypesData.pokemonTypes].sort((current, next) =>
            current.localeCompare(next)
          )
        : undefined,
    [pokemonTypesData]
  );
  const [layout, setLayout] = useState<Layout>(Layout.Grid);
  const [page, setPage] = useState<number>(0);
  const [previewOpened, setPreviewOpened] = useState<boolean>(false);
  const [selectedPokemon, setSelectedPokemon] = useState<string | undefined>(
    undefined
  );
  const query = useMemo(
    () => ({
      limit: pokemonsPerPage,
      offset: 0,
      filter: {
        isFavorite: selectedCategory === PokemonCategory.Favorite,
        type: pokemonType !== defaultPokemonType ? pokemonType : undefined,
      },
      search,
    }),
    [selectedCategory, pokemonType, search]
  );
  const { data, loadMorePokemons } = usePokemons(query);

  const loadMore = useCallback(
    (page: number, scrollArea: HTMLDivElement | null) => {
      if (
        scrollArea &&
        scrollArea.scrollTop ===
          scrollArea.scrollHeight - scrollArea.offsetHeight
      ) {
        const newPage = page + 1;

        setPage(newPage);
        loadMorePokemons({
          ...query,
          offset: newPage * pokemonsPerPage,
        });
      }
    },
    [query, loadMorePokemons]
  );

  useEffect(() => {
    const mainContent = document.getElementById(
      mainContentId
    ) as HTMLDivElement | null;
    const loadMoreCallback = () => loadMore(page, mainContent);

    mainContent?.addEventListener("scroll", loadMoreCallback);

    return () => mainContent?.removeEventListener("scroll", loadMoreCallback);
  }, [page, loadMore]);

  return (
    <Container>
      <PokemonsFilter
        selectedCategory={selectedCategory}
        pokemonTypes={sortedPokemonTypes}
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
          pokemons={data?.pokemons.edges}
          onPreviewOpened={(pokemonName: string) => {
            setPreviewOpened(true);
            setSelectedPokemon(pokemonName);
          }}
        />
      </Padding>
      {selectedPokemon && (
        <PokemonModal
          pokemonName={selectedPokemon}
          opened={previewOpened}
          onClose={() => setPreviewOpened(false)}
        />
      )}
    </Container>
  );
}
