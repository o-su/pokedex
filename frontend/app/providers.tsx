"use client";

import { PropsWithChildren } from "react";
import { ApolloProvider } from "@apollo/client";

import { graphqlClient } from "./common/services/graphqlClient";
import { AppStateProvider } from "./appState";
import { ThemeProvider } from "./themeProvider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <AppStateProvider>
      <ApolloProvider client={graphqlClient}>
        <ThemeProvider>{children}</ThemeProvider>
      </ApolloProvider>
    </AppStateProvider>
  );
}
