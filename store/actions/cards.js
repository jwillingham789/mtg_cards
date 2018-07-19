import queryString from "query-string";
import ProcessRequest from "../../assets/helpers/ProcessRequest";
import * as types from "../types";
import { handleError } from "./app";

export const getAllCards = params => async (dispatch, getState) => {
  try {
    const search = queryString.stringify({ ...params, pageSize: 51 });
    const res = await ProcessRequest(`/cards?${search}`);
    const payload = await res.json();
    const state = getState();
    if (params.page > state.cards.page)
      dispatch(setNextCards(payload.cards, res.headers.map, params.page));
    else dispatch(setAllCards(payload.cards, res.headers.map));
  } catch (error) {
    dispatch(handleError(error));
  }
};
export const setNextCards = (cards, headers, page) => {
  return {
    type: types.SET_NEXT_CARDS,
    cards,
    headers,
    page
  };
};
export const setAllCards = (cards, headers) => {
  return {
    type: types.SET_ALL_CARDS,
    cards,
    headers
  };
};
