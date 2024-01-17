"use client";

import { PropsWithChildren, createContext, Dispatch, useReducer } from "react";

import { NotificationData } from "./common/types/notificationTypes";

export enum ThemeId {
  Dark = "g100",
  Light = "white",
}

export type AppState = {
  theme: ThemeId;
  notifications: NotificationData[];
};

export enum AppStateActionType {
  SetTheme = "SetTheme",
  AddNotification = "AddNotification",
  DeleteNotification = "DeleteNotification",
}

export type AppStateAction =
  | {
      type: AppStateActionType.SetTheme;
      theme: ThemeId;
    }
  | {
      type: AppStateActionType.AddNotification;
      notification: NotificationData;
    }
  | {
      type: AppStateActionType.DeleteNotification;
      notificationId: string;
    };

const initialState: AppState = {
  theme: ThemeId.Light,
  notifications: [],
};

const reducer = (state: AppState, action: AppStateAction): AppState => {
  switch (action.type) {
    case AppStateActionType.SetTheme:
      return {
        ...state,
        theme: action.theme,
      };
    case AppStateActionType.AddNotification:
      return {
        ...state,
        notifications: [...state.notifications, action.notification],
      };
    case AppStateActionType.DeleteNotification:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.id !== action.notificationId
        ),
      };
    default:
      return state;
  }
};

export const AppStateContext = createContext<{
  state: AppState;
  dispatch: Dispatch<AppStateAction>;
}>({
  state: initialState,
  dispatch: () =>
    console.error("AppState Context can be used only inside component tree."),
});

AppStateContext.displayName = "AppState";

export const AppStateProvider = (props: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppStateContext.Provider>
  );
};
