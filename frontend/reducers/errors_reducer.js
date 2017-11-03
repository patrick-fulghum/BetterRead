import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import book from './book_error_reducer';

const ErrorsReducer = combineReducers({
  session,
  book,
});

export default ErrorsReducer;
