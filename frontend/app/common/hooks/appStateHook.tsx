import { useCallback, useContext } from "react";

import { AppStateActionType, AppStateContext, ThemeId } from "@/app/appState";

export function useAppState() {
  const { state, dispatch } = useContext(AppStateContext);
  const theme = state.theme;

  const toggleTheme = useCallback(() => {
    dispatch({
      type: AppStateActionType.SetTheme,
      theme: theme === ThemeId.Dark ? ThemeId.Light : ThemeId.Dark,
    });
  }, [theme, dispatch]);

  return { theme, toggleTheme };
}
