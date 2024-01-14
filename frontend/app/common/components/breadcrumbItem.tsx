"use client";
import {
  BreadcrumbItem as CarbonBreadcrumbItem,
  BreadcrumbItemProps,
} from "@carbon/react";

export function BreadcrumbItem(props: BreadcrumbItemProps): JSX.Element {
  return <CarbonBreadcrumbItem {...props} />;
}
