import { combineReducers } from "redux";

import { profilePostsReducer } from "../pages/Profile/reducers";
import { dialogsMessagesReducer } from "../pages/Dialogs/reducers";

export const rootReducer = combineReducers({
  profilePosts: profilePostsReducer,
  dialogsMessages: dialogsMessagesReducer,
});
