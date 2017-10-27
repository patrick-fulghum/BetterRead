import { combineReducers } from 'redux';
import errors from "./errors_reducer";
import session from './session_reducer';
import quotes from './quotes_reducer';

const rootReducer = combineReducers({
  errors,
  session,
  quotes,
});

export default rootReducer;
