"use client";
import { Button as CarbonButton, ButtonProps } from "@carbon/react";

export function Button(props: ButtonProps): JSX.Element {
  return <CarbonButton {...props} />;
}
