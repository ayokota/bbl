import * as authActionTypes from "../actionTypes/auth-action-types.js";

export function setAuthenticationStatus(payload) {
    return {type: authActionTypes.SET_AUTHENTICATION_STATUS, payload}
}