import axios from "axios";
import isFunction from "../../../../../utils/Utils";
export const GET_DATA = "[HIGHCHART] GET DATA";

export function getData(onSuccess, onFailure) {
    return dispatch =>
        axios.get('https://api.github.com/repositories/19438/issues')
            .then(res => {
                dispatch({
                    type: GET_DATA,
                    payload: res.data
                })
                if (isFunction(onSuccess)) onSuccess();
            }).catch(error => {
                if (isFunction(onFailure)) onFailure(error);
            })
}