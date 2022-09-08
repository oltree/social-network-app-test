import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  users: [],
};

export const usersListReducer = handleActions(
  {
    [actions.GET_USERS]: (state) => {},
  },
  initialState
);
