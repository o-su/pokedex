"use client";
import { Breadcrumb } from "@/app/common/components/breadcrumb";
import { BreadcrumbItem } from "@/app/common/components/breadcrumbItem";
import { Center } from "@/app/common/components/layout/center";
import { Container } from "@/app/common/components/layout/container";
import { StackLayout } from "@/app/common/components/layout/stackLayout";
import { ProgressBar } from "@/app/common/components/progressBar";
import { PokemonCard } from "@/app/common/components/pokemonCard";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import { usePokemon } from "./pokemonApi";
import { Route } from "@/app/common/constants/routeConstants";
import { Padding } from "@/app/common/components/layout/padding";

export default function PokemonPage(): JSX.Element {
  const { name } = useParams();
  const { data } = usePokemon(name as string);
  const pokemon = data?.pokemonByName;

  if (pokemon) {
    return (
      <Container>
        <Padding top={10}>
          <StackLayout size={5}>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link href={Route.Pokemons}>Pokémons</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>{pokemon.name}</BreadcrumbItem>
            </Breadcrumb>

            <Center>
              <Image
                src={pokemon.image}
                width={280}
                height={280}
                alt={pokemon.name}
              />
            </Center>
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
            <div>
              Evolutions
              {pokemon.evolutions.map((evolution) => (
                <PokemonCard
                  key={evolution.id}
                  name={evolution.name}
                  image={evolution.image}
                  favorite={evolution.isFavorite}
                  onToggleFavorite={() => undefined} // TODO: implement
                />
              ))}
            </div>
          </StackLayout>
        </Padding>
      </Container>
    );
  } else {
    return <div>Loading</div>;
  }
}
