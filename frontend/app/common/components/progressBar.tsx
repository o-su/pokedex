"use client";
import { ProgressBar as CarbonProgressBar } from "@carbon/react";

type ProgressBarProps = {
  /**
   * Additional CSS class names.
   */
  className?: string;
  /**
   * The current progress as a textual representation.
   */
  helperText?: string;
  /**
   * Whether the label should be visually hidden.
   */
  hideLabel?: boolean;
  /**
   * A label describing the progress bar.
   */
  label: string;
  /**
   * The maximum value.
   */
  max?: number;
  /**
   * Specify the size of the progress bar.
   */
  size?: "small" | "big";
  /**
   * Specify the status.
   */
  status?: "active" | "finished" | "error";
  /**
   * Defines the alignment variant of the progress bar.
   */
  type?: "default" | "inline" | "indented";
  /**
   * The current value.
   */
  value?: number;
};

export function ProgressBar(props: ProgressBarProps): JSX.Element {
  return <CarbonProgressBar {...props} />;
}
