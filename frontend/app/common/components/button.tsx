"use client";
import { Button as CarbonButton, ButtonProps } from "@carbon/react";

export function Button<T extends React.ElementType>(
  props: ButtonProps<T>
): JSX.Element {
  return <CarbonButton {...props} />;
}
