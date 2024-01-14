"use client";
import { useCallback, useState } from "react";
import { useQuery } from "@apollo/client";

import { ContentSwitcher } from "../common/components/contentSwitcher";
import { CatalogIcon, FavoriteIcon } from "../common/components/icon";
import { Switch } from "../common/components/switch";
import { pokemonsQuery } from "./pokemonsApi";
import { PokemonCategory } from "./pokemonsTypes";
import { PokemonCard } from "./components/pokemonCard";

export default function PokemonsPage(): JSX.Element {
  const { loading, error, data } = useQuery(pokemonsQuery);
  const [selectedCategory, setSelectedCategory] = useState<PokemonCategory>(
    PokemonCategory.All
  );

  const onCategoryChange = useCallback((category) => {
    setSelectedCategory(category.name);
  }, []);

  return (
    <div>
      <ContentSwitcher onChange={onCategoryChange}>
        <Switch
          name={PokemonCategory.All}
          selected={selectedCategory === PokemonCategory.All}
        >
          <CatalogIcon /> All
        </Switch>
        <Switch
          name={PokemonCategory.Favorite}
          selected={selectedCategory === PokemonCategory.Favorite}
        >
          <FavoriteIcon /> Favorites
        </Switch>
      </ContentSwitcher>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "5px 5px",
          width: "100%",
        }}
      >
        {data?.pokemons.edges.map((pokemon: any) => (
          <PokemonCard
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
            key={pokemon.id}
          />
        ))}
      </div>
    </div>
  );
}
