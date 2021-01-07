import * as Actions from '../actions';

const initialState = {
    role: "",
    user: {},
    isAuthenticated: {
        status: false,
        error: {}
    }
}
function LoginReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.LOGIN_ACTION:
            return {
                ...state,
                user: action.payload.user,
                role: action.payload.role,
                isAuthenticated: {
                    status: true
                }
            }
        case Actions.LOGIN_FAILED:
            return {
                ...state,
                role: "user",
                isAuthenticated: {
                    status: false,
                    error: action.payload
                }
            }
        default: return state;
    }
}
export default LoginReducer;