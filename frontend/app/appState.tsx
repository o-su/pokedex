"use client";
import { PropsWithChildren, createContext, Dispatch, useReducer } from "react";

export enum ThemeId {
  Dark = "g100",
  Light = "white",
}

export type AppState = {
  theme: ThemeId;
};

export enum AppStateActionType {
  SetTheme = "SetTheme",
}

export type AppStateAction = {
  type: AppStateActionType.SetTheme;
  theme: ThemeId;
};

const initialState: AppState = {
  theme: ThemeId.Light,
};

const reducer = (state: AppState, action: AppStateAction): AppState => {
  switch (action.type) {
    case AppStateActionType.SetTheme:
      return {
        ...state,
        theme: action.theme,
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

export const AppStateProvider = (props: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppStateContext.Provider>
  );
};
