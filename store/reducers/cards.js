import * as types from "../types";

const initialState = {
  allCards: []
};

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_ALL_CARDS: {
      return {
        ...state,
        allCards: action.cards
      };
    }

    default:
      return state;
  }
}
