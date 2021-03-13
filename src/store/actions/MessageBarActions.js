import { SHOW_MESSAGE, HIDE_MESSAGE } from "./actionTypes";
//type: "success" || "error" || "warning" || "info",
export const openMessageBar = (data) => {
  return (dispatch) =>
    dispatch({
      type: SHOW_MESSAGE,
      payload: data,
    });
};

export const hideMessageBar = () => {
  return (dispatch) =>
    dispatch({
      type: HIDE_MESSAGE,
    });
};
