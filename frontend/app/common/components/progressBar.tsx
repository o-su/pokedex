"use client";
import {
  ProgressBar as CarbonProgressBar,
  ProgressBarProps,
} from "@carbon/react";

export function ProgressBar(props: ProgressBarProps): JSX.Element {
  return <CarbonProgressBar {...props} />;
}
