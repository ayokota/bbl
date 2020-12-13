import {combineReducers} from 'redux';
import authReducer from "./AuthReducer.js";

const rootReducer = combineReducers({
    authState : authReducer
});

export default rootReducer;

