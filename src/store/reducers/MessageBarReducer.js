import { HIDE_MESSAGE, SHOW_MESSAGE } from "../actions/actionTypes";

const initialState = {
  show: false,
  message: "",
  type: "",
};
function MessageBarReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        ...state,
        show: true,
        message: action.payload.message,
        type: action.payload.type,
      };
    case HIDE_MESSAGE:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
}
export default MessageBarReducer;
