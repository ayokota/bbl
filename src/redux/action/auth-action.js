import * as authActionTypes from "../actionTypes/auth-action-types.js";

export function setAuthenticationStatus(payload) {
    return {type: authActionTypes.SET_AUTHENTICATION_STATUS, payload}
}

export function authenticate(payload) {
    return {type: authActionTypes.AUTHENTICATE, payload}
}

export function signup(payload) {
    return {type: authActionTypes.SIGNUP, payload}
}