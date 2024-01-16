"use client";
import { Loading } from "@carbon/react";
import { ReactAttr } from "@carbon/react/lib/types/common";

export type LoaderProps = ReactAttr<HTMLDivElement> & {
  /**
   * Specify whether you want the loading indicator to be spinning or not
   */
  active?: boolean;
  /**
   * Provide an optional className to be applied to the containing node
   */
  className?: string;
  /**
   * Specify whether you would like the small variant of <Loading>
   */
  small?: boolean;
  /**
   * Specify whether you want the loader to be applied with an overlay
   */
  withOverlay: boolean;
};

export function Loader(props: LoaderProps): JSX.Element {
  return (
    <Loading
      {...props}
      description="loading"
      style={{ display: "inline-block", marginRight: 5 }}
    />
  );
}
