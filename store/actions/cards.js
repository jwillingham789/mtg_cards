import ProcessRequest from "../../assets/helpers/ProcessRequest";
import * as types from "../types";

export const getPosts = channel_id => async (dispatch, getState) => {
  try {
    const res = await ProcessRequest(
      getState,
      `/channels/${channel_id}/posts/`
    );
    dispatch({ type: types.SET_POSTS, posts: res });
  } catch (error) {
    dispatch(handleError(error));
  }
};
export const clearPosts = () => {
  return {
    type: types.CLEAR_CHANNEL_POSTS
  };
};
