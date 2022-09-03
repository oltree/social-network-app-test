import { createAction } from "redux-actions";

export const CREATE_POST = createAction("CREATE_POST");
export const REMOVE_POST = createAction("REMOVE_POST");
export const INCREMENT_LIKE = createAction("INCREMENT_LIKE");
export const DECREMENT_LIKE = createAction("DECREMENT_LIKE");
