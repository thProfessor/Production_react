import { themes } from "./types";

export const setTheme = (theme) => (dispatch) => {
  dispatch({
    type: themes.SET_THEME,
    payload: theme,
  });
};
