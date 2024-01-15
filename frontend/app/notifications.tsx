"use client";

import { StackLayout } from "./common/components/layout/stackLayout";
import { Notification } from "./common/components/notification";
import { appHeaderHeight } from "./common/constants/layoutConstants";
import { useNotifications } from "./common/hooks/notificationsHook";

export function Notifications(): JSX.Element {
  const { notifications, deleteNotification } = useNotifications();

  return (
    <div
      style={{
        position: "absolute",
        right: 10,
        top: appHeaderHeight + 10,
        zIndex: 4,
      }}
    >
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
