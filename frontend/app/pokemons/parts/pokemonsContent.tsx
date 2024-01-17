import { usePokemonsFavorite } from "@/app/common/api/pokemonsFavoriteApi";
import { InlineLoader } from "@/app/common/components/inlineLoader";
import { PokemonLayout } from "@/app/common/components/layout/pokemonLayout";
import { NoContent } from "@/app/common/components/noContent";
import { PokemonCard } from "@/app/common/components/pokemonCard";
import { Layout } from "@/app/common/types/layoutTypes";
import { PokemonsQuery } from "@/app/gql/graphql";

export type PokemonsContentProps = {
  layout: Layout;
  data: PokemonsQuery | undefined;
  onPreviewOpened?: (pokemonName: string) => void;
};

export function PokemonsContent({
  layout,
  data,
  onPreviewOpened,
}: PokemonsContentProps): JSX.Element {
  const pokemons = data?.pokemons.edges;
  const { togglePokemonFavorite } = usePokemonsFavorite();

  if (pokemons && pokemons.length > 0) {
    return (
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
            onPreviewOpened={() =>
              onPreviewOpened && onPreviewOpened(pokemon.name)
            }
          />
        ))}
      </PokemonLayout>
    );
  } else if (pokemons && pokemons.length === 0) {
    return (
      <NoContent>
        No Pokémon matching the given criteria could be found.
      </NoContent>
    );
  } else {
    return <InlineLoader />;
  }
}
