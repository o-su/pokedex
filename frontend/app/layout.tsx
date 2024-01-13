import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppHeader } from "./common/components/appHeader";
import { AppLayout } from "./common/components/layout/appLayout";

import "./globals.css";
import { Providers } from "./providers";

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
      <body className={inter.className}>
        <Providers>
          <AppLayout header={<AppHeader />}>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
