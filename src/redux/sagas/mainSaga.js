import {all, fork} from "redux-saga/effects";
import authSaga from "./authSaga.js";

export default function* mainSaga() {
    yield all([
        fork(authSaga)
    ])
}