import { NoContentIcon } from "./icon";

export type NoContentProps = {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
};

export function NoContent({
  children,
  align = "center",
}: NoContentProps): JSX.Element {
  return (
    <div style={{ margin: "auto", textAlign: align }}>
      <NoContentIcon style={{ marginRight: 5 }} /> {children}
    </div>
  );
}
