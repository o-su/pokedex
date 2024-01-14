"use client";

import { Button } from "./common/components/button";
import { Container } from "./common/components/layout/container";
import { Logo } from "./common/components/logo";
import { Route } from "./common/constants/routeConstants";

export default function HomePage(): JSX.Element {
  return (
    <Container>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <div
          style={{
            animation: "spin 4s infinite linear",
            transformOrigin: "center",
            width: 100,
            margin: "auto",
            marginTop: 30,
          }}
        >
          <Logo width={100} height={100} />
        </div>
        <h1>Pokédex</h1>

        <Button href={Route.Pokemons}>Catch &apos;Em All</Button>
      </div>
    </Container>
  );
}
