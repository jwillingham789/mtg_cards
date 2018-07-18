import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import appReducer from "./store/reducers";
import AppNavigator from "./navigation";

const middleware = [thunkMiddleware];

export const store = createStore(appReducer, applyMiddleware(...middleware));

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
