"use client";

import { PropsWithChildren } from "react";
import { ApolloProvider } from "@apollo/client";

import { graphqlClient } from "./common/services/graphqlClient";

export function Providers({ children }: PropsWithChildren<{}>) {
  return <ApolloProvider client={graphqlClient}>{children}</ApolloProvider>;
}
