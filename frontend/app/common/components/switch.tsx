"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Switch as CarbonSwitch } from "@carbon/react";

export type SwitchProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "name" | "onClick" | "onKeyDown"
> & {
  /**
   * Provide child elements to be rendered inside of the Switch
   */
  children?: ReactNode;
  /**
   * Specify an optional className to be added to your Switch
   */
  className?: string;
  /**
   * Specify whether or not the Switch should be disabled
   */
  disabled?: boolean;
  /**
   * The index of your Switch in your ContentSwitcher that is used for event handlers.
   * Reserved for usage in ContentSwitcher
   */
  index?: number;
  /**
   * Provide the name of your Switch that is used for event handlers
   */
  name?: string | number;
  /**
   * A handler that is invoked when a user clicks on the control.
   * Reserved for usage in ContentSwitcher
   */
  onClick?: (params: SwitchEventHandlersParams) => void;
  /**
   * A handler that is invoked on the key down event for the control.
   * Reserved for usage in ContentSwitcher
   */
  onKeyDown?: (params: SwitchEventHandlersParams) => void;
  /**
   * Whether your Switch is selected. Reserved for usage in ContentSwitcher
   */
  selected?: boolean;
  /**
   * Provide the contents of your Switch
   */
  text?: string;
};

type SwitchEventHandlersParams = {
  index?: number;
  name?: string | number;
  text?: string;
  key?: string | number;
};

export function Switch(props: SwitchProps): JSX.Element {
  return <CarbonSwitch {...props} />;
}
