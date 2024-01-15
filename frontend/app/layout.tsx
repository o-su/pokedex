import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppHeader } from "./common/components/appHeader";
import { AppLayout } from "./common/components/layout/appLayout";
import "@carbon/react/index.scss";
import "@carbon/react/scss/_zone.scss";

import "./globals.css";
import { Providers } from "./providers";
import { Notifications } from "./notifications";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokédex",
  description:
    "The Pokédex is an encyclopedia, providing information about various Pokémon species encountered in the Pokémon world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className} style={{ height: "100%" }}>
        <Providers>
          <AppLayout header={<AppHeader />}>{children}</AppLayout>
          <Notifications />
        </Providers>
      </body>
    </html>
  );
}
