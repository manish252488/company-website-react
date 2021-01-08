import { auth } from "../../../../../config/auth";
import isFunction from "../../../../../utils/Utils";

export const LOGIN_ACTION = "[LOGIN] LOGIN ACTION";
export const LOGIN_FAILED = "[LOGIN] LOGIN FAILED";
export const LOGOUT = "[LOGOUT] LOGOUT";
export function login({ data, onSuccess, onFailure }) {
    return dispatch =>
        auth.signInWithEmail(data)
            .then(res => {
                console.log(res)
                dispatch({
                    type: LOGIN_ACTION,
                    payload: res
                })
                if (isFunction(onSuccess)) onSuccess();
            }).catch(err => {
                dispatch({
                    type: LOGIN_FAILED,
                    payload: err
                })
                if (isFunction(onFailure)) onFailure();
            })
}
export function logout() {
    return dispatch => {
        //console.log('log')
        // auth.logout();
        dispatch({
            type: LOGOUT,
            payload: null
        })
    }
}