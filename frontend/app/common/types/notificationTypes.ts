export type NotificationData = {
  id: string;
  kind: "error" | "success" | "warning";
  message: string;
  title?: string;
};
