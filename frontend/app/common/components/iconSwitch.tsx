"use client";
import { IconSwitch as CarbonIconSwitch } from "@carbon/react";

import { SwitchProps } from "./switch";

export function IconSwitch(props: SwitchProps): JSX.Element {
  return <CarbonIconSwitch {...props} />;
}
