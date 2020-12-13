import * as authAction from "../action/auth-action.js";
import * as authActionTypes from "../actionTypes/auth-action-types.js";
import * as loginService from "../../services/LoginService.js";

const authState = {
    authenticated: false
}

export default function authReducer(state = authState, action) {
    switch(action.type) {
        case authActionTypes.CHECK_AUTHENTICATE:
            return {...state, authenticated: loginService.isLoggedIn()}
        default:
            return state;
    }
}