import { useCallback, useContext } from "react";

import { AppStateActionType, AppStateContext } from "@/app/appState";
import { NotificationData } from "../types/notificationTypes";
import { generateUuid } from "../utils/uuidUtils";

export function useNotifications() {
  const { state, dispatch } = useContext(AppStateContext);
  const notifications = state.notifications;

  const addNotification = useCallback(
    (notification: Omit<NotificationData, "id">) => {
      const notificationId = generateUuid();
      dispatch({
        type: AppStateActionType.AddNotification,
        notification: { ...notification, id: notificationId },
      });
      setTimeout(() => {
        dispatch({
          type: AppStateActionType.DeleteNotification,
          notificationId: notificationId,
        });
      }, 2_000);
    },
    [dispatch]
  );

  const deleteNotification = useCallback(
    (notificationId: string) => {
      dispatch({
        type: AppStateActionType.DeleteNotification,
        notificationId,
      });
    },
    [dispatch]
  );

  return { notifications, addNotification, deleteNotification };
}
