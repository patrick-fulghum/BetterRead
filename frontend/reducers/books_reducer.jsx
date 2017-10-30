import merge from 'lodash/merge';
import { RECEIVE_BOOK, RECEIVE_BOOKS } from '../actions/book_actions';

const bookReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case (RECEIVE_BOOK):
      return merge({}, { [action.book.id]: action.book });
    case (RECEIVE_BOOKS):
      return merge({}, action.books);
    default:
      return state;
  }
};

export default bookReducer;
