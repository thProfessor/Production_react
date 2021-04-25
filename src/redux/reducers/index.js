import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import storyReducer from "./storyReducer";

export default combineReducers({
  theme: themeReducer,
  stories: storyReducer,
});
