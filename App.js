import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import appReducer from "./store/reducers";
import AppNavigator from "./navigation";

console.disableYellowBox = true;

const middleware = [thunkMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
