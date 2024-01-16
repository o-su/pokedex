"use client";
import {
  ComponentProps,
  ComponentType,
  InputHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";
import { ComboBox } from "@carbon/react";
import Downshift from "downshift";
import { ReactNodeLike } from "@carbon/react/lib/components/DatePickerInput/DatePickerInput";
import { ListBoxSize } from "@carbon/react/lib/components/ListBox";

export type ComboBoxProps<ItemType> = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  ExcludedAttributes
> & {
  /**
   * Specify whether or not the ComboBox should allow a value that is
   * not in the list to be entered in the input
   */
  allowCustomValue?: boolean;
  /**
   * Specify a label to be read by screen readers on the container node
   * 'aria-label' of the ListBox component.
   */
  ["aria-label"]?: string;
  /**
   * An optional className to add to the container node
   */
  className?: string;
  /**
   * Specify the direction of the combobox dropdown. Can be either top or bottom.
   */
  direction?: "top" | "bottom";
  /**
   * Specify if the control should be disabled, or not
   */
  disabled?: boolean;
  /**
   * Additional props passed to Downshift
   */
  downshiftProps?: ComponentProps<typeof Downshift<ItemType>>;
  /**
   * Provide helper text that is used alongside the control label for
   * additional help
   */
  helperText?: ReactNode;
  /**
   * Specify a custom `id` for the input
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
  invalidText?: ReactNode;
  /**
   * Optional function to render items as custom components instead of strings.
   * Defaults to null and is overridden by a getter
   */
  itemToElement?: ComponentType<ItemType> | null;
  /**
   * Helper function passed to downshift that allows the library to render a
   * given item to a string label. By default, it extracts the `label` field
   * from a given item to serve as the item label in the list
   */
  itemToString?: ItemToStringHandler<ItemType>;
  /**
   * We try to stay as generic as possible here to allow individuals to pass
   * in a collection of whatever kind of data structure they prefer
   */
  items: ItemType[];
  /**
     * `onChange` is a utility for this controlled component to communicate to a
     * consuming component when a specific dropdown item is selected.
     * `({ selectedItem }) => void`
    //  * @param {{ selectedItem }}
     */
  onChange: (data: OnChangeData<ItemType>) => void;
  /**
   * Callback function to notify consumer when the text input changes.
   * This provides support to change available items based on the text.
   * `(inputText) => void`
   * @param {string} inputText
   */
  onInputChange?: (inputText: string) => void;
  /**
   * Callback function that fires when the combobox menu toggle is clicked
   * `(evt) => void`
   * @param {MouseEvent} event
   */
  onToggleClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
  /**
   * Used to provide a placeholder text node before a user enters any input.
   * This is only present if the control has no items selected
   */
  placeholder?: string;
  /**
   * Is the ComboBox readonly?
   */
  readOnly?: boolean;
  /**
   * For full control of the selection
   */
  selectedItem?: ItemType | null;
  /**
   * Specify your own filtering logic by passing in a `shouldFilterItem`
   * function that takes in the current input and an item and passes back
   * whether or not the item should be filtered.
   */
  shouldFilterItem?: (input: {
    item: ItemType;
    itemToString?: ItemToStringHandler<ItemType>;
    inputValue: string | null;
  }) => boolean;
  /**
   * Specify the size of the ListBox. Currently supports either `sm`, `md` or `lg` as an option.
   */
  size?: ListBoxSize;
  /**
   * **Experimental**: Provide a `Slug` component to be rendered inside the `ComboBox` component
   */
  slug?: ReactNodeLike;
  /**
   * Provide text to be used in a `<label>` element that is tied to the
   * combobox via ARIA attributes.
   */
  titleText?: ReactNode;
  /**
   * Specify a custom translation function that takes in a message identifier
   * and returns the localized string for the message
   */
  translateWithId?: (id: string) => string;
  /**
   * Specify whether the control is currently in warning state
   */
  warn?: boolean;
  /**
   * Provide the text that is displayed when the control is in warning state
   */
  warnText?: ReactNode;
};

type ExcludedAttributes = "id" | "onChange" | "onClick" | "type" | "size";
type OnChangeData<ItemType> = {
  selectedItem: ItemType | null | undefined;
  inputValue?: string | null;
};
type ItemToStringHandler<ItemType> = (item: ItemType | null) => string;

export function Select<T>(props: ComboBoxProps<T>): JSX.Element {
  return <ComboBox {...props} />;
}
