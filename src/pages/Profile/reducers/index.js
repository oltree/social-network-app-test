import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";

import * as actions from "../actions";

const initialState = {
  posts: [],
};

export const profilePostsReducer = handleActions(
  {
    [actions.CREATE_POST]: (state, { payload: postText }) => {
      const postsCopy = [...state.posts];

      const newPost = {
        id: uuid(),
        text: postText,
        likes: null,
      };

      postsCopy.unshift(newPost);

      return {
        ...state,
        posts: postsCopy,
      };
    },
    [actions.REMOVE_POST]: (state, { payload: id }) => {
      const postsCopy = [...state.posts];

      const postIndexToRemove = postsCopy.findIndex((post) => post.id === id);

      postsCopy.splice(postIndexToRemove, 1);

      return {
        ...state,
        posts: postsCopy,
      };
    },
    [actions.INCREMENT_LIKE]: (state, { payload: id }) => {
      const postsCopy = [...state.posts];

      const foundPost = postsCopy.find((post) => post.id === id);

      foundPost.likes += 1;

      return {
        ...state,
        posts: postsCopy,
      };
    },
    [actions.DECREMENT_LIKE]: (state, { payload: id }) => {
      const postsCopy = [...state.posts];

      const foundPost = postsCopy.find((post) => post.id === id);

      if (foundPost.likes > 0) foundPost.likes -= 1;

      return {
        ...state,
        posts: postsCopy,
      };
    },
  },
  initialState
);
