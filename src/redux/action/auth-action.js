import * as authActionTypes from "../actionTypes/auth-action-types.js";

export function checkAuthentication(payload) {
    return {type: authActionTypes.CHECK_AUTHENTICATE, payload}
}