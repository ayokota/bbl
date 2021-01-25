import { takeEvery } from "redux-saga/effects";
import {call, put, all} from "redux-saga/effects";
import * as authActionTypes from "../actionTypes/auth-action-types.js";
import * as authService from "../../services/LoginService.js";
import * as AuthApis from "../../apis/authApis.js";

export default function* authSaga() {
    yield takeEvery(authActionTypes.AUTHENTICATE, authenticate);
}

function* authenticate(action) {
    try {
        let res = yield call(() => AuthApis.authenticate(action.payload))

        yield put({type: authActionTypes.SET_AUTHENTICATION_STATUS, payload: res.data.authenticated == 1});
    } catch (e) {
        console.error(e);
    }
}