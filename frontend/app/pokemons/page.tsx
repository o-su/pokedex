"use client";
import { useCallback, useState } from "react";
import Link from "next/link";

import { ContentSwitcher } from "../common/components/contentSwitcher";
import {
  CatalogIcon,
  FavoriteFilledIcon,
  GridIcon,
  ListIcon,
} from "../common/components/icon";
import { Switch } from "../common/components/switch";
import { PokemonCategory } from "./pokemonsTypes";
import { PokemonCard } from "../common/components/pokemonCard";
import { usePokemons } from "./pokemonsApi";
import { Container } from "../common/components/layout/container";
import { SearchInput } from "../common/components/searchInput";
import { Select } from "../common/components/select";
import { usePokemonTypes } from "./pokemonTypesApi";
import { Layout } from "../common/types/layoutTypes";
import { Route } from "../common/constants/routeConstants";
import { Padding } from "../common/components/layout/padding";
import { PokemonsFilter } from "./parts/pokemonsFilter";

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
      <Padding top={10}>
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

        <Padding top={10} bottom={10}>
          <div
            style={{
              display: "flex",
              flexDirection: layout === Layout.Grid ? "row" : "column",
              flexWrap: "wrap",
              gap: "5px 5px",
              width: "100%",
              justifyContent: "center",
            }}
          >
            {data?.pokemons.edges.map((pokemon) => (
              <Link
                href={Route.Pokemon + encodeURIComponent(pokemon.name)}
                key={pokemon.id}
              >
                <PokemonCard
                  name={pokemon.name}
                  image={pokemon.image}
                  types={pokemon.types}
                  favorite={pokemon.isFavorite}
                  onToggleFavorite={(event) => {
                    event.preventDefault();
                    togglePokemonFavorite(pokemon.id, pokemon.isFavorite);
                  }}
                />
              </Link>
            ))}
          </div>
        </Padding>
      </Padding>
    </Container>
  );
}
