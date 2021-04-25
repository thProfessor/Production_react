import { stories } from "./types.js";
import AdminService from "../../services/AdminService";

export const getStories = () => {
  return async (dispatch) => {
    await AdminService.getStories()
      .then((res) => {
        dispatch({
          type: stories.GET_STORIES,
          payload: {
            res,
          },
        });
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
};

export const getPosts = () => {
  return async (dispatch) => {
    await AdminService.getPosts().then((res) => {
      dispatch({
        type: stories.GET_POSTS,
        payload: {
          res,
        },
      });
    });
  };
};
