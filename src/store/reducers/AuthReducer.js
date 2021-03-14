import {
  HIDE_AUTH,
  SHOW_AUTH,
  SET_USER,
  SIGN_OUT,
} from "../actions/actionTypes";

const initialState = {
  user: {
    name: "john doe",
    email: "some@domain.com",
  },
  token: "wertyui4567890jdhasdfu8cn489c439c83c",
  isAuthenticated: false,
  role: "",
  showAuthPage: true,
};
function AuthReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        role: action.payload.role,
        showAuthPage: false,
      };
    case SIGN_OUT:
      return {
        ...initialState,
        showAuthPage: true,
      };
    case SHOW_AUTH:
      return {
        ...state,
        showAuthPage: true,
      };
    case HIDE_AUTH:
      return {
        ...state,
        showAuthPage: false,
      };
    default:
      return state;
  }
}
export default AuthReducer;
