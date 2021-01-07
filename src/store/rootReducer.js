import { combineReducers } from 'redux';
import MessageBarReducer from './reducers/MessageBarReducer';
const createReducer = asyncReducers =>
    combineReducers({
        MessageBar: MessageBarReducer,
        ...asyncReducers
    });

export default createReducer;