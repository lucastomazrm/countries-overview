import { Reducer } from "redux";
import { ThemeActions, ThemeType } from "./types";
import { lightTheme } from "./themes";

const INITIAL_STATE: ThemeType = lightTheme;

const reducer: Reducer<ThemeType> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemeActions.CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
