import { InlineLoader } from "@/app/common/components/inlineLoader";
import { PokemonDetail } from "@/app/common/components/pokemonDetail";
import { usePokemon } from "@/app/pokemon/[name]/pokemonApi";

export type PokemonPreviewProps = {
  pokemonName: string;
};

export function PokemonPreview({
  pokemonName,
}: PokemonPreviewProps): JSX.Element {
  const { data } = usePokemon(pokemonName);
  const pokemon = data?.pokemonByName;

  if (pokemon) {
    return <PokemonDetail pokemon={pokemon} />;
  } else {
    return <InlineLoader />;
  }
}
