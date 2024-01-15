"use client";
import { Grid as CarbonGrid } from "@carbon/react/";
import { PolymorphicProps } from "@carbon/react/lib/types/common";

export type GridProps<T extends React.ElementType> = PolymorphicProps<
  T,
  {
    /**
     * Pass in content that will be rendered within the `Grid`
     */
    children?: React.ReactNode;
    /**
     * Specify a custom className to be applied to the `Grid`
     */
    className?: string;
    /**
     * Collapse the gutter to 1px. Useful for fluid layouts.
     * Rows have 1px of margin between them to match gutter.
     */
    condensed?: boolean;
    /**
     * Remove the default max width that the grid has set
     */
    fullWidth?: boolean;
    /**
     * Container hangs 16px into the gutter. Useful for
     * typographic alignment with and without containers.
     */
    narrow?: boolean;
  }
>;

export function Grid<T extends React.ElementType>(
  props: GridProps<T>
): JSX.Element {
  return <CarbonGrid {...props} />;
}
