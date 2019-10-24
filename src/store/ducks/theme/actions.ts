import { action } from "typesafe-actions";
import { ThemeType, ThemeActions } from "./types";

export const changeTheme = (theme: ThemeType) =>
  action(ThemeActions.CHANGE_THEME, theme);