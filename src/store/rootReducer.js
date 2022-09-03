import { combineReducers } from "redux";

import { profilePostsReducer } from "../pages/Profile/reducers";

export const rootReducer = combineReducers({
  profilePosts: profilePostsReducer,
});
