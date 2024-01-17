"use client";

import { CSSProperties } from "react";

import { StackLayout } from "./common/components/layout/stackLayout";
import { Notification } from "./common/components/notification";
import { appHeaderHeight } from "./common/constants/layoutConstants";
import { useNotifications } from "./common/hooks/notificationsHook";

export function Notifications(): JSX.Element {
  const { notifications, deleteNotification } = useNotifications();

  return (
    <div style={notificationsStyle}>
      <StackLayout size={5}>
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            aria-label="closes notification"
            kind={notification.kind}
            onClose={() => deleteNotification(notification.id)}
            onCloseButtonClick={() => deleteNotification(notification.id)}
            statusIconDescription={notification.kind}
            title={notification.title}
            subtitle={notification.message}
          />
        ))}
      </StackLayout>
    </div>
  );
}

const notificationsStyle: CSSProperties = {
  position: "absolute",
  top: appHeaderHeight + 10,
  right: 10,
  zIndex: 4, // carbon content switch has z-index 3
};
