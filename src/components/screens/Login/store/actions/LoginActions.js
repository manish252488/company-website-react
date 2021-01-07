import { auth } from "../../../../../config/auth";
import isFunction from "../../../../../utils/Utils";

export const LOGIN_ACTION = "[LOGIN] LOGIN ACTION";
export const LOGIN_FAILED = "[LOGIN] LOGIN FAILED";

export function login({ data, onSuccess, onFailure }) {
    return dispatch =>
        auth.signInWithEmail(data)
            .then(res => {
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