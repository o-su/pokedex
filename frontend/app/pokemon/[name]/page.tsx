"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

import { Breadcrumb } from "@/app/common/components/breadcrumb";
import { BreadcrumbItem } from "@/app/common/components/breadcrumbItem";
import { Container } from "@/app/common/components/layout/container";
import { StackLayout } from "@/app/common/components/layout/stackLayout";
import { PokemonCard } from "@/app/common/components/pokemonCard";
import { usePokemon } from "./pokemonApi";
import { Route } from "@/app/common/constants/routeConstants";
import { Padding } from "@/app/common/components/layout/padding";
import { PokemonLayout } from "@/app/common/components/layout/pokemonLayout";
import { Layout } from "@/app/common/types/layoutTypes";
import { usePokemonsFavorite } from "@/app/common/api/pokemonsFavoriteApi";
import { NoContent } from "@/app/common/components/noContent";
import { InlineLoader } from "@/app/common/components/inlineLoader";
import { PokemonDetail } from "@/app/common/components/pokemonDetail";

export default function PokemonPage(): JSX.Element {
  const { name } = useParams();
  const { togglePokemonFavorite } = usePokemonsFavorite();
  const { data } = usePokemon(name as string);
  const pokemon = data?.pokemonByName;

  if (pokemon) {
    return (
      <Container>
        <Padding top={10}>
          <StackLayout size={10}>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link href={Route.Pokemons}>Pokémons</Link>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>{pokemon.name}</BreadcrumbItem>
            </Breadcrumb>

            <PokemonDetail pokemon={pokemon} />

            <div>
              <h2>Evolutions</h2>

              {pokemon.evolutions.length > 0 ? (
                <PokemonLayout layout={Layout.Grid} align="left">
                  {pokemon.evolutions.map((evolution) => (
                    <PokemonCard
                      key={evolution.id}
                      name={evolution.name}
                      image={evolution.image}
                      favorite={evolution.isFavorite}
                      onToggleFavorite={(event) => {
                        event.preventDefault();
                        togglePokemonFavorite(
                          evolution.id,
                          evolution.isFavorite
                        );
                      }}
                    />
                  ))}
                </PokemonLayout>
              ) : (
                <Padding top={10}>
                  <NoContent align="left">
                    This Pokémon has no higher evolutionary stages.
                  </NoContent>
                </Padding>
              )}
            </div>
          </StackLayout>
        </Padding>
      </Container>
    );
  } else {
    return (
      <Padding top={10}>
        <InlineLoader />
      </Padding>
    );
  }
}
