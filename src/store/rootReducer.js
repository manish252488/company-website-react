import { combineReducers } from "redux";
import AuthReducer from "./reducers/AuthReducer";
import LanguageReducers from "./reducers/languageReducers";
import MessageBarReducer from "./reducers/MessageBarReducer";
const createReducer = (asyncReducers) =>
  combineReducers({
    MessageBar: MessageBarReducer,
    Auth: AuthReducer,
    language: LanguageReducers,
    ...asyncReducers,
  });

export default createReducer;
