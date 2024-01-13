"use client";
import { useCallback, useState } from "react";
import { useQuery } from "@apollo/client";

import { ContentSwitcher } from "../common/components/contentSwitcher";
import { CatalogIcon, FavoriteIcon } from "../common/components/icon";
import { Switch } from "../common/components/switch";
import { pokemonsQuery } from "./pokemonsApi";
import { PokemonCategory } from "./pokemonsTypes";

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
      {data?.pokemons.edges.map((pokemon: any) => pokemon.name)}
    </div>
  );
}
