"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { Breadcrumb } from "@/app/common/components/breadcrumb";
import { BreadcrumbItem } from "@/app/common/components/breadcrumbItem";
import { Container } from "@/app/common/components/layout/container";
import { StackLayout } from "@/app/common/components/layout/stackLayout";
import { ProgressBar } from "@/app/common/components/progressBar";
import { PokemonCard } from "@/app/common/components/pokemonCard";
import { usePokemon } from "./pokemonApi";
import { Route } from "@/app/common/constants/routeConstants";
import { Padding } from "@/app/common/components/layout/padding";
import { PokemonLayout } from "@/app/common/components/layout/pokemonLayout";
import { Layout } from "@/app/common/types/layoutTypes";
import { Grid } from "@/app/common/components/layout/grid";
import { Column } from "@/app/common/components/layout/column";
import { Color } from "@/app/common/constants/colorConstants";
import { PokemonImage } from "@/app/common/components/pokemonImage";

export default function PokemonPage(): JSX.Element {
  const { name } = useParams();
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

            <Grid condensed style={{ paddingInline: 0 }}>
              <Column span={16} sm={16} md={8}>
                <div style={{ float: "left" }}>
                  <PokemonImage
                    src={pokemon.image}
                    size={280}
                    alt={pokemon.name}
                    padding={10}
                  />
                </div>
              </Column>
              <Column span={16} sm={16} md={8}>
                <StackLayout size={5}>
                  <h1>{name}</h1>
                  {pokemon.types}
                  <ProgressBar
                    helperText={`CP: ${pokemon.maxCP}`}
                    value={pokemon.maxCP / 100}
                  />
                  <ProgressBar
                    helperText={`HP: ${pokemon.maxHP}`}
                    value={pokemon.maxHP / 100}
                  />
                  <div>
                    Weight {pokemon.weight.minimum} - {pokemon.weight.maximum}
                  </div>
                  <div>
                    Height {pokemon.height.minimum} - {pokemon.height.maximum}
                  </div>
                </StackLayout>
              </Column>
            </Grid>

            <div>
              <h2>Evolutions</h2>

              <PokemonLayout layout={Layout.Grid} align="left">
                {pokemon.evolutions.map((evolution) => (
                  <PokemonCard
                    key={evolution.id}
                    name={evolution.name}
                    image={evolution.image}
                    favorite={evolution.isFavorite}
                    onToggleFavorite={() => undefined} // TODO: implement
                  />
                ))}
              </PokemonLayout>
            </div>
          </StackLayout>
        </Padding>
      </Container>
    );
  } else {
    return <div>Loading</div>;
  }
}
