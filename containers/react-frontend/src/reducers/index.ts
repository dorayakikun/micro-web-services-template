import { combineReducers } from "redux";
import { reducer as foxes, State as FoxesState } from "./foxes";

export interface State {
  foxes: FoxesState;
}

export const reducers = combineReducers({
  foxes
});
