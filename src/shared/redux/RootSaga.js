import { all, fork } from "redux-saga/effects";
import LandingPageWatcher from "./landing-page/Saga";

export default function* RootSaga() {
  yield all([
    fork(LandingPageWatcher),
  ]);
}