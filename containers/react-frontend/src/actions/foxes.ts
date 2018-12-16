import { FoxViewModel } from "../components/Foxes";

export enum ActionKeys {
  FETCH_BIGIN = "foxes/fetch_begin",
  FETCH_SUCCESS = "foxes/fetch_success",
  FETCH_FAILURE = "foxes/fetch_failure"
}

interface FetchBiginAction {
  readonly type: ActionKeys.FETCH_BIGIN;
}

interface FetchSuccessAction {
  readonly type: ActionKeys.FETCH_SUCCESS;
  payload: { foxes: FoxViewModel[] };
}

interface FetchFailureAction {
  readonly type: ActionKeys.FETCH_FAILURE;
  payload: { error: Error };
}

export type Action = FetchBiginAction | FetchSuccessAction | FetchFailureAction;

export const fetchBegin = (): FetchBiginAction => ({
  type: ActionKeys.FETCH_BIGIN
});

export const fetchSuccess = (foxes: FoxViewModel[]): FetchSuccessAction => ({
  type: ActionKeys.FETCH_SUCCESS,
  payload: { foxes }
});

export const fetchFailure = (error: Error): FetchFailureAction => ({
  type: ActionKeys.FETCH_FAILURE,
  payload: { error }
});
