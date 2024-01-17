import { ThemeId } from "@/app/appState";
import Image from "next/image";

import { Color } from "../constants/colorConstants";
import { useTheme } from "../hooks/themeHook";

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
    <div style={getPokemonImageStyle(padding, theme)}>
      <Image src={src} width={size} height={size} alt={alt} />
    </div>
  );
}

function getPokemonImageStyle(
  padding: string | number | undefined,
  theme: ThemeId
) {
  return {
    padding,
    background: Color.White,
    filter: theme === ThemeId.Dark ? "brightness(70%)" : undefined,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  };
}
