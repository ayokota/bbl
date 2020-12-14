import { takeEvery } from "redux-saga/effects";
import {call, put, all} from "redux-saga/effects";
import * as authActionTypes from "../actionTypes/auth-action-types.js";
import * as authService from "../../services/LoginService.js";

export default function* authSaga() {
    yield takeEvery(authActionTypes.AUTHENTICATE, authenticate);
}

function* authenticate(action) {
    try {
        let isAuthenticated = authService.isLoggedIn();
        console.log("saga!");
        yield put({type: authActionTypes.SET_AUTHENTICATION_STATUS, payload: isAuthenticated});
    } catch (e) {
        console.error(e);
    }
}