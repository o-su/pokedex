import Image from "next/image";

export type LogoProps = {
  width: number;
  height: number;
};

export function Logo({ width, height }: LogoProps): JSX.Element {
  return (
    <Image
      src="/logo.svg"
      width={width}
      height={height}
      className="logo"
      alt="logo"
    />
  );
}
