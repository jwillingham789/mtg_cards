import * as types from "../types";

const initialState = {
  posts: [],
  posts_pinned: []
};

export default function channelReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_POSTS: {
      return {
        ...state,
        posts: action.posts.posts.filter(p => !p.pinned),
        posts_pinned: action.posts.posts.filter(p => p.pinned)
      };
    }

    case types.CLEAR_CHANNEL_POSTS: {
      return {
        ...state,
        posts: [],
        posts_pinned: []
      };
    }

    default:
      return state;
  }
}
