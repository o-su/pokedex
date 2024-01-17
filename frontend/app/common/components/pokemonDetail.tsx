"use client";
import { StackLayout } from "@/app/common/components/layout/stackLayout";
import { ProgressBar } from "@/app/common/components/progressBar";
import { Grid } from "@/app/common/components/layout/grid";
import { Column } from "@/app/common/components/layout/column";
import { PokemonImage } from "@/app/common/components/pokemonImage";
import { Center } from "@/app/common/components/layout/center";
import { SoundIcon } from "@/app/common/components/icon";
import { getNativeApi } from "@/app/common/services/nativeApi";
import { Padding } from "./layout/padding";
import { PokemonByNameQuery } from "@/app/gql/graphql";

export type PokemonDetailProps = {
  pokemon: NonNullable<PokemonByNameQuery["pokemonByName"]>;
};

export function PokemonDetail({ pokemon }: PokemonDetailProps): JSX.Element {
  return (
    <Grid condensed style={{ paddingInline: 0, width: "100%" }}>
      <Column span={8} sm={16} md={8} lg={8}>
        <div style={{ float: "left", position: "relative" }}>
          <PokemonImage
            src={pokemon.image}
            size={280}
            alt={pokemon.name}
            padding={10}
          />
          <SoundIcon
            onClick={() => getNativeApi().playAudio(pokemon.sound)}
            style={{
              position: "absolute",
              bottom: 10,
              left: 10,
              cursor: "pointer",
            }}
          />
        </div>
      </Column>
      <Column span={8} sm={16} md={8} lg={8}>
        <Padding left={5}>
          <StackLayout size={5}>
            <h1>{pokemon.name}</h1>
            {pokemon.types}
            <ProgressBar
              label=""
              helperText={`CP: ${pokemon.maxCP}`}
              value={pokemon.maxCP / 100}
            />
            <ProgressBar
              label=""
              helperText={`HP: ${pokemon.maxHP}`}
              value={pokemon.maxHP / 100}
            />

            <Grid condensed style={{ width: "100%" }}>
              <Column span={4} sm={8} md={4} lg={4}>
                <Center>
                  <div style={{ fontWeight: "bold", marginBottom: 5 }}>
                    Weight
                  </div>
                  {pokemon.weight.minimum} - {pokemon.weight.maximum}
                </Center>
              </Column>
              <Column span={4} sm={8} md={4} lg={4}>
                <Center>
                  <div style={{ fontWeight: "bold", marginBottom: 5 }}>
                    Height
                  </div>
                  {pokemon.height.minimum} - {pokemon.height.maximum}
                </Center>
              </Column>
            </Grid>
          </StackLayout>
        </Padding>
      </Column>
    </Grid>
  );
}
