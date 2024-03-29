"use client";

import { ReactNode } from "react";
import { Dropdown } from "@carbon/react";
import { UseSelectProps } from "downshift";
import { ReactAttr } from "@carbon/react/lib/types/common";
import { ReactNodeLike } from "@carbon/react/lib/components/DatePickerInput/DatePickerInput";
import { ListBoxSize, ListBoxType } from "@carbon/react/lib/components/ListBox";

export type DropdownProps<ItemType> = Omit<
  ReactAttr<HTMLDivElement>,
  ExcludedAttributes
> & {
  /**
   * Specify a label to be read by screen readers on the container node
   * 'aria-label' of the ListBox component.
   */
  ["aria-label"]?: string;
  /**
   * Specify the direction of the dropdown. Can be either top or bottom.
   */
  direction?: "top" | "bottom";
  /**
   * Disable the control
   */
  disabled?: boolean;
  /**
   * Additional props passed to Downshift
   */
  downshiftProps?: Partial<UseSelectProps<ItemType>>;
  /**
   * Provide helper text that is used alongside the control label for
   * additional help
   */
  helperText?: React.ReactNode;
  /**
   * Specify whether the title text should be hidden or not
   */
  hideLabel?: boolean;
  /**
   * Specify a custom `id`
   */
  id: string;
  /**
   * Allow users to pass in an arbitrary item or a string (in case their items are an array of strings)
   * from their collection that are pre-selected
   */
  initialSelectedItem?: ItemType;
  /**
   * Specify if the currently selected value is invalid.
   */
  invalid?: boolean;
  /**
   * Message which is displayed if the value is invalid.
   */
  invalidText?: React.ReactNode;
  /**
   * Function to render items as custom components instead of strings.
   * Defaults to null and is overridden by a getter
   */
  itemToElement?: React.JSXElementConstructor<ItemType> | null;
  /**
   * Helper function passed to downshift that allows the library to render a
   * given item to a string label. By default, it extracts the `label` field
   * from a given item to serve as the item label in the list.
   */
  itemToString?(item: ItemType | null): string;
  /**
   * We try to stay as generic as possible here to allow individuals to pass
   * in a collection of whatever kind of data structure they prefer
   */
  items: ItemType[];
  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  label: NonNullable<ReactNode>;
  /**
   * `onChange` is a utility for this controlled component to communicate to a
   * consuming component what kind of internal state changes are occurring.
   */
  onChange?(data: OnChangeData<ItemType>): void;
  /**
   * Whether or not the Dropdown is readonly
   */
  readOnly?: boolean;
  /**
   * An optional callback to render the currently selected item as a react element instead of only
   * as a string.
   */
  renderSelectedItem?(
    item: ItemType
  ): React.JSXElementConstructor<ItemType> | null;
  /**
   * In the case you want to control the dropdown selection entirely.
   */
  selectedItem?: ItemType;
  /**
   * Specify the size of the ListBox. Currently supports either `sm`, `md` or `lg` as an option.
   */
  size?: ListBoxSize;
  /**
   * **Experimental**: Provide a `Slug` component to be rendered inside the `Dropdown` component
   */
  slug?: ReactNodeLike;
  /**
   * Provide the title text that will be read by a screen reader when
   * visiting this control
   */
  titleText?: React.ReactNode;
  /**
   * Callback function for translating ListBoxMenuIcon SVG title
   */
  translateWithId?(messageId: string, args?: Record<string, unknown>): string;
  /**
   * The dropdown type, `default` or `inline`
   */
  type?: ListBoxType;
  /**
   * Specify whether the control is currently in warning state
   */
  warn?: boolean;
  /**
   * Provide the text that is displayed when the control is in warning state
   */
  warnText?: React.ReactNode;
};

type ExcludedAttributes = "id" | "onChange";

type DropdownComponentProps<ItemType> = React.PropsWithoutRef<
  React.PropsWithChildren<DropdownProps<ItemType>> &
    React.RefAttributes<HTMLButtonElement>
>;

export type OnChangeData<ItemType> = {
  selectedItem: ItemType | null;
};

export function Select<T>(props: DropdownComponentProps<T>): JSX.Element {
  return <Dropdown {...props} />;
}
