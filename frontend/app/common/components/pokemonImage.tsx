import { ThemeId } from "@/app/appState";
import { useTheme } from "@carbon/react";
import Image from "next/image";

import { Color } from "../constants/colorConstants";

export type PokemonImageProps = {
  src: string;
  size: number;
  alt: string;
  padding?: string | number;
};

export function PokemonImage({
  src,
  size,
  alt,
  padding,
}: PokemonImageProps): JSX.Element {
  const { theme } = useTheme();

  return (
    <div
      style={{
        padding,
        background: Color.White,
        filter: theme === ThemeId.Dark ? "brightness(70%)" : undefined,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
      }}
    >
      <Image src={src} width={size} height={size} alt={alt} />
    </div>
  );
}
