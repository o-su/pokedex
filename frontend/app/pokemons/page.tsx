"use client";
import { useCallback, useState } from "react";
import Link from "next/link";

import { ContentSwitcher } from "../common/components/contentSwitcher";
import { CatalogIcon, FavoriteFilledIcon } from "../common/components/icon";
import { Switch } from "../common/components/switch";
import { PokemonCategory } from "./pokemonsTypes";
import { PokemonCard } from "./components/pokemonCard";
import { usePokemons } from "./pokemonsApi";
import { Container } from "../common/components/layout/container";

export default function PokemonsPage(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<PokemonCategory>(
    PokemonCategory.All
  );
  const { loading, error, data, togglePokemonFavorite } = usePokemons({
    favorite: selectedCategory === PokemonCategory.Favorite,
  });

  const changeCategory = useCallback((category) => {
    setSelectedCategory(category.name);
  }, []);

  return (
    <Container>
      <ContentSwitcher onChange={changeCategory}>
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
          <FavoriteFilledIcon /> Favorites
        </Switch>
      </ContentSwitcher>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "5px 5px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {data?.pokemons.edges.map((pokemon) => (
          <Link
            href={`/pokemon/${encodeURIComponent(pokemon.name)}`}
            key={pokemon.id}
          >
            <PokemonCard
              name={pokemon.name}
              image={pokemon.image}
              types={pokemon.types}
              favorite={pokemon.isFavorite}
              onToggleFavorite={() =>
                togglePokemonFavorite(pokemon.id, pokemon.isFavorite)
              }
            />
          </Link>
        ))}
      </div>
    </Container>
  );
}
