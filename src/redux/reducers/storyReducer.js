import { stories } from "../actions/types";

const initialState = {
  stories: {},
  posts: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case stories.GET_STORIES:
      return {
        ...state,
        stories: { ...action.payload },
      };
    case stories.GET_POSTS:
      return {
        ...state,
        posts: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
}
