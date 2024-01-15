"use client";
import { Breadcrumb as CarbonBreadcrumb } from "@carbon/react";

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Specify the label for the breadcrumb container
   */
  "aria-label"?: string;
  /**
   * Specify an optional className to be applied to the container node
   */
  className?: string;
  /**
   * Optional prop to omit the trailing slash for the breadcrumbs
   */
  noTrailingSlash?: boolean;
}

export function Breadcrumb(props: BreadcrumbProps): JSX.Element {
  return <CarbonBreadcrumb {...props} />;
}
