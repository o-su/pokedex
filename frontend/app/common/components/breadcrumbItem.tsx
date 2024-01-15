"use client";
import { AriaAttributes } from "react";
import { BreadcrumbItem as CarbonBreadcrumbItem } from "@carbon/react";

export interface BreadcrumbItemProps
  extends React.HTMLAttributes<HTMLLIElement> {
  "aria-current"?: AriaAttributes["aria-current"];
  /**
   * Specify an optional className to be applied to the container node
   */
  className?: string;
  /**
   * Optional string representing the link location for the BreadcrumbItem
   */
  href?: string;
  /**
   * Provide if this breadcrumb item represents the current page
   */
  isCurrentPage?: boolean;
}

export function BreadcrumbItem(props: BreadcrumbItemProps): JSX.Element {
  return <CarbonBreadcrumbItem {...props} />;
}
