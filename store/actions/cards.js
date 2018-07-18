import ProcessRequest from "../../assets/helpers/ProcessRequest";
import * as types from "../types";
import { handleError } from "./app";

export const getAllCards = () => async dispatch => {
  try {
    const res = await ProcessRequest(`/cards`);
    dispatch(setAllCards(res.cards));
  } catch (error) {
    dispatch(handleError(error));
  }
};
export const setAllCards = cards => {
  return {
    type: types.SET_ALL_CARDS,
    cards
  };
};
