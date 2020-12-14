import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/stores/store.js";
import { Provider } from "react-redux";
import { BrowserRouter as Router} from "react-router-dom";
import rootSaga from "./redux/sagas/mainSaga.js";
import createSagaMiddleware from 'redux-saga';
import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import rootReducer from './redux/reducers/RootReducers';

const sagaMiddleware = createSagaMiddleware();

const allEnhancer = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ 
  ? window.__REDUX_DEVTOOLS_EXTENSION__() :  f => f
);

export default function Index() {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
}

ReactDOM.render(
  <Index />,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
