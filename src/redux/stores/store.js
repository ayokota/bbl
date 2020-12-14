import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/RootReducers.js";
import { mainMiddleWare } from "../middleware/mainMiddleWare.js";
import createSagaMiddleware from "redux-saga";
import mainSaga from "../sagas/mainSaga";

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhancers(
        applyMiddleware( mainMiddleWare, initialiseSagaMiddleware)
    )
);

initialiseSagaMiddleware.run(mainSaga);


window.store = store;
export default store;