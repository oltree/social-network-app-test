import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";

import * as actions from "../actions";

const initialState = {
  users: [],
};

export const usersListReducer = handleActions(
  {
    [actions.GET_USERS]: (state) => {
      const usersCopy = [...state.users];

      const newUser = {
        id: uuid(),
        firstName: "Oleg",
        lastName: "Melekh",
        status: "I'm new user",
        location: {
          country: "Belarus",
          town: "Minsk",
        },
        followed: true,
      };

      usersCopy.push(newUser);

      return {
        ...state,
        users: usersCopy,
      };
    },
    [actions.FOLLOW_UNFOLLOW]: (state, { payload: id }) => {
      const usersCopy = [...state.users];

      const foundUser = usersCopy.find((user) => user.id === id);

      foundUser.followed = !foundUser.followed;

      return {
        ...state,
        users: usersCopy,
      };
    },
  },
  initialState
);
