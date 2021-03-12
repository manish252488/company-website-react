import * as Actions from "../actions";

const initialState = {
  user: {
    name: "john doe",
    email: "some@domain.com",
    token: "wertyui4567890jdhasdfu8cn489c439c83c",
  },
  isAuthenticated: false,
  role: "guest",
};
function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.SHOW_MESSAGE:
      return {
        ...state,
        show: true,
        message: action.payload.message,
        type: action.payload.type,
      };
    case Actions.HIDE_MESSAGE:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
}
export default AuthReducer;
