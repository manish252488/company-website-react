import Auth from "../../api/auth";
import { HIDE_AUTH, SET_USER, SHOW_AUTH, SIGN_OUT } from "./actionTypes";
import { isFunction } from "../../config/Utils";
export const signUp = (data, onSuccess, onFailure) => (dispatch) => {
  Auth.signup(data)
    .then((data) => {
      dispatch({
        type: SET_USER,
        payload: data,
      });
      if (isFunction(onSuccess)) onSuccess();
    })
    .catch((err) => {
      console.log("error sign up", err);
      if (isFunction(onFailure)) onFailure(err.message);
    });
};

export const login = (
  data = { email: "", password: "" },
  onSuccess,
  onFailure
) => (dispatch) => {
  Auth.login(data)
    .then((data) => {
      dispatch({
        type: SET_USER,
        payload: data,
      });
      if (isFunction(onSuccess)) onSuccess();
    })
    .catch((err) => {
      console.log("error sign up", err);
      if (isFunction(onFailure)) onFailure(err.message);
    });
};

export const checkJWT = (onSuccess, onFailure) => (dispatch) => {
  Auth.checkAuth()
    .then((data) => {
      dispatch({
        type: SET_USER,
        payload: data,
      });
      if (isFunction(onSuccess)) onSuccess();
    })
    .catch((err) => {
      console.log("error sign up", err);
      if (isFunction(onFailure)) onFailure(err.message);
    });
};

export const signOut = (onSuccess, onFailure) => (dispatch) => {
  Auth.signOut()
    .then((data) => {
      dispatch({
        type: SIGN_OUT,
      });
      if (isFunction(onSuccess)) onSuccess();
    })
    .catch((err) => {
      console.log("error sign up", err);
      if (isFunction(onFailure)) onFailure(err.message);
    });
};

export const showAuthPage = () => {
  return (dispatch) =>
    dispatch({
      type: SHOW_AUTH,
    });
};
export const hideAuthPage = () => {
  return (dispatch) =>
    dispatch({
      type: HIDE_AUTH,
    });
};
