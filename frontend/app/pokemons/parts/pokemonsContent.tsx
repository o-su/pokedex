import { usePokemonsFavorite } from "@/app/common/api/pokemonsFavoriteApi";
import { InlineLoader } from "@/app/common/components/inlineLoader";
import { PokemonLayout } from "@/app/common/components/layout/pokemonLayout";
import { Loader } from "@/app/common/components/loader";
import { NoContent } from "@/app/common/components/noContent";
import { PokemonCard } from "@/app/common/components/pokemonCard";
import { Layout } from "@/app/common/types/layoutTypes";
import { PokemonsQueryInput } from "@/app/gql/graphql";
import { usePokemons } from "../pokemonsApi";

export type PokemonsContentProps = {
  layout: Layout;
  query: PokemonsQueryInput;
};

export function PokemonsContent({
  layout,
  query,
}: PokemonsContentProps): JSX.Element {
  const { data } = usePokemons(query);
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
