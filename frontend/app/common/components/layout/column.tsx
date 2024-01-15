"use client";
import { Column as CarbonColumn, ColumnProps } from "@carbon/react";

export function Column(props: ColumnProps): JSX.Element {
  return <CarbonColumn {...props} />;
}
