import { all } from "redux-saga/effects";
import { saga as foxesSaga } from "./foxes";

export function* rootSaga() {
  yield all([foxesSaga]);
};