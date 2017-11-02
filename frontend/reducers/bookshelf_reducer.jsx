import merge from 'lodash/merge';
import {
  RECEIVE_BOOKSHELF,
  DESTROY_BOOKSHELF } from '../actions/bookshelf_actions';

const bookshelfReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case (RECEIVE_BOOKSHELF):
      return merge({}, { [action.bookshelf.id]: action.bookshelf });
    case (DESTROY_BOOKSHELF):
      return merge({}, action.bookshelfId);
    default:
      return state;
  }
}

export default bookshelfReducer;
