import { themes } from "../actions/types";

const initialState = {
  theme: "light",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case themes.SET_THEME:
      return {
        theme: action.payload,
      };
    default:
      return state;
  }
}
