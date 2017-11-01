import { combineReducers } from 'redux';
import errors from "./errors_reducer";
import session from './session_reducer';
import quotes from './quotes_reducer';
import books from './books_reducer';
import users from './users_reducer';

const rootReducer = combineReducers({
  errors,
  session,
  quotes,
  books,
  users,
});

export default rootReducer;
