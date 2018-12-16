import { Action, ActionKeys } from "../actions/foxes";
import { FoxViewModel } from "../components/Foxes";

export interface State {
  isLoading: boolean;
  isLoaded: boolean;
  foxes: FoxViewModel[];
  error?: Error;
}

export const initialState: State = {
  isLoading: false,
  isLoaded: false,
  foxes: [],
  error: undefined
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionKeys.FETCH_BIGIN:
      return {
        ...state,
        isLoading: true
      };
    case ActionKeys.FETCH_SUCCESS:
      const { foxes } = action.payload;
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        foxes
      };
    case ActionKeys.FETCH_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        error
      };
    default:
      return state;
  }
};
