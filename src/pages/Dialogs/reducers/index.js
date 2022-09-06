import { handleActions } from "redux-actions";
import { v4 as uuid } from "uuid";

import * as actions from "../actions";

const initialState = {
  messages: [],
};

export const dialogsMessagesReducer = handleActions(
  {
    [actions.CREATE_MESSAGE]: (state, { payload: messageText }) => {
      const messagesCopy = [...state.messages];

      const newMessage = {
        id: uuid(),
        text: messageText,
      };

      messagesCopy.push(newMessage);

      return {
        ...state,
        messages: messagesCopy,
      };
    },
  },
  initialState
);
