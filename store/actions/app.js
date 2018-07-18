import * as types from "../types";

export const handleError = error => async dispatch => {
  console.log("ERROR", error);
  if (typeof error === "object") {
    if (error.status === 403) {
    } else {
    }
  } else {
  }
};
