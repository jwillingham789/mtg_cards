import * as types from "../types";

const initialState = {
  allCards: [],
  totalCount: 0,
  page: 1
};

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_ALL_CARDS: {
      const { cards, headers } = action;
      return {
        ...state,
        allCards: cards,
        totalCount: headers["total-count"][0]
      };
    }
    case types.SET_NEXT_CARDS: {
      const { cards, headers, page } = action;
      return {
        ...state,
        allCards: state.allCards.concat(cards),
        totalCount: headers["total-count"][0],
        page: page
      };
    }

    default:
      return state;
  }
}
