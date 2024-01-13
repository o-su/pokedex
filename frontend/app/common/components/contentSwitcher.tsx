"use client";
import {
  ContentSwitcher as CarbonContentSwitcher,
  ContentSwitcherProps,
} from "@carbon/react";

export function ContentSwitcher(props: ContentSwitcherProps): JSX.Element {
  return <CarbonContentSwitcher {...props} />;
}
