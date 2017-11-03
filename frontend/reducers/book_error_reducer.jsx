import { RECEIVE_BOOK_ERRORS } from '../actions/book_actions';

const bookErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case (RECEIVE_BOOK_ERRORS):
      return action.errors;
    default:
      return state;
  }
};

export default bookErrorReducer;
