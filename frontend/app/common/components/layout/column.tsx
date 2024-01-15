"use client";
import { Column as CarbonColumn } from "@carbon/react";
import { PolymorphicProps } from "@carbon/react/lib/types/common";

export type ColumnProps<T extends React.ElementType> = PolymorphicProps<
  T,
  {
    /**
     * Pass in content that will be rendered within the `Column`
     */
    children?: React.ReactNode;
    /**
     * Specify a custom className to be applied to the `Column`
     */
    className?: string;
    /**
     * Specify column span for the `lg` breakpoint (Default breakpoint up to 1312px)
     * This breakpoint supports 16 columns by default.
     *
     * @see https://www.carbondesignsystem.com/guidelines/layout#breakpoints
     */
    lg?: ColumnSpan;
    /**
     * Specify column span for the `max` breakpoint. This breakpoint supports 16
     * columns by default.
     *
     * @see https://www.carbondesignsystem.com/guidelines/layout#breakpoints
     */
    max?: ColumnSpan;
    /**
     * Specify column span for the `md` breakpoint (Default breakpoint up to 1056px)
     * This breakpoint supports 8 columns by default.
     *
     * @see https://www.carbondesignsystem.com/guidelines/layout#breakpoints
     */
    md?: ColumnSpan;
    /**
     * Specify column span for the `sm` breakpoint (Default breakpoint up to 672px)
     * This breakpoint supports 4 columns by default.
     *
     * @see https://www.carbondesignsystem.com/guidelines/layout#breakpoints
     */
    sm?: ColumnSpan;
    /**
     * Specify column span for the `xlg` breakpoint (Default breakpoint up to
     * 1584px) This breakpoint supports 16 columns by default.
     *
     * @see https://www.carbondesignsystem.com/guidelines/layout#breakpoints
     */
    xlg?: ColumnSpan;
    /**
     * Specify constant column span, start, or end values that will not change
     * based on breakpoint
     */
    span?: ColumnSpan;
  }
>;

type ColumnSpanPercent = "25%" | "50%" | "75%" | "100%";

type ColumnSpanSimple = boolean | number | ColumnSpanPercent;

interface ColumnSpanObject {
  span?: ColumnSpanSimple;
  offset?: number;
  start?: number;
  end?: number;
}

export type ColumnSpan = ColumnSpanSimple | ColumnSpanObject;

export function Column<T extends React.ElementType>(
  props: ColumnProps<T>
): JSX.Element {
  return <CarbonColumn {...props} />;
}
