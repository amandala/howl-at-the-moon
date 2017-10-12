import { combineReducers } from "redux";

import moonReducer from "./reducers/moon";

export function createReducers(asyncReducers) {
  return combineReducers({ moon: moonReducer });
}
