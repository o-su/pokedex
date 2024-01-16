"use client";
import Link from "next/link";

import { Button } from "./common/components/button";
import { PokemonIcon } from "./common/components/icon";
import { Container } from "./common/components/layout/container";
import { StackLayout } from "./common/components/layout/stackLayout";
import { Logo } from "./common/components/logo";
import { Route } from "./common/constants/routeConstants";

export default function HomePage(): JSX.Element {
  return (
    <Container>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <StackLayout size={15}>
          <Link href={Route.Pokemons}>
            <div
              style={{
                animation: "bounce 1s 3 ease",
                width: 100,
                margin: "auto",
                marginTop: 30,
              }}
            >
              <Logo width={100} height={100} />
            </div>
          </Link>
          <h1>Pokédex</h1>

          <p>
            The Pokédex is your ultimate guide to the fascinating world of
            Pokémon. Explore and discover the characteristics of diverse Pokémon
            species, their habitats, and evolution paths with this essential
            electronic device. Unleash your inner Pokémon Trainer and embark on
            an exciting journey by getting your own Pokédex today. Gotta catch
            'em all!
          </p>

          <div>
            <Button href={Route.Pokemons} size="lg" renderIcon={PokemonIcon}>
              Catch &apos;Em All
            </Button>
          </div>
        </StackLayout>
      </div>
    </Container>
  );
}
