import { combineReducers } from "redux";

import cardsReducer from "./cards";

const appReducer = combineReducers({
  cards: cardsReducer
});

export default appReducer;
