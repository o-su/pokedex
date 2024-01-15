"use client";
import { HTMLAttributes, ReactElement } from "react";
import { ContentSwitcher as CarbonContentSwitcher } from "@carbon/react";

export interface ContentSwitcherProps
  extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  /**
   * Pass in Switch components to be rendered in the ContentSwitcher
   */
  children?: ReactElement[];
  /**
   * Specify an optional className to be added to the container node
   */
  className?: string;
  /**
   * `true` to use the light version.
   *
   * @deprecated The `light` prop for `ContentSwitcher` has
   *     been deprecated in favor of the new `Layer` component. It will be removed in the next major release.
   */
  light?: boolean;
  /**
   * Specify an `onChange` handler that is called whenever the ContentSwitcher
   * changes which item is selected
   */
  onChange: (params: SwitchEventHandlersParams) => void;
  /**
   * Specify a selected index for the initially selected content
   */
  selectedIndex: number;
  /**
   * Choose whether or not to automatically change selection on focus
   */
  selectionMode?: "automatic" | "manual";
  /**
   * Specify the size of the Content Switcher. Currently supports either `sm`, 'md' (default) or 'lg` as an option.
   */
  size: "sm" | "md" | "lg";
}

type SwitchEventHandlersParams = {
  index?: number;
  name?: string | number;
  text?: string;
  key?: string | number;
};

export function ContentSwitcher(props: ContentSwitcherProps): JSX.Element {
  return <CarbonContentSwitcher {...props} />;
}
