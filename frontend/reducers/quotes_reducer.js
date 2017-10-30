import merge from 'lodash/merge';
import { RECEIVE_QUOTE, RECEIVE_QUOTES } from '../actions/quote_actions';

const quotesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case (RECEIVE_QUOTE):
      return merge({}, { [action.quote.id]: action.quote });
    case (RECEIVE_QUOTES):
      return merge({}, action.quotes);
    default:
      return state;
  }
};

export default quotesReducer;
