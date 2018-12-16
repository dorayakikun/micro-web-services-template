import { put, takeEvery } from "redux-saga/effects";
import { ActionKeys, fetchSuccess, fetchFailure } from "../actions/foxes";
import { FoxViewModel } from "../components/Foxes";

export const saga = takeEvery(ActionKeys.FETCH_BIGIN, function* () {
  try {
    const res: Response = yield fetch("/api/foxes", { method: "get" });
    const foxes: FoxViewModel[] = yield res.json();
    yield put(fetchSuccess(foxes));
  } catch (error){
    yield put(fetchFailure(error));
  }
})