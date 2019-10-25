import { Reducer } from "redux";
import { ThemeActions, ThemeType } from "./types";
import { lightTheme, darkTheme } from "./themes";

const INITIAL_STATE: ThemeType = lightTheme;

const reducer: Reducer<ThemeType> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemeActions.CHANGE_THEME:
      document.body.style.backgroundColor = action.payload.secondaryColor;
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
