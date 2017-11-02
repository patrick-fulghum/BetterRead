import merge from 'lodash/merge';
import { RECEIVE_REVIEW, DESTROY_REVIEW } from '../actions/review_actions';

const reviewReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case (RECEIVE_REVIEW):
      return merge({}, { [action.review.id]: action.review })
    case (DESTROY_REVIEW):
      return merge({}, action.reviewId);
    default:
      return state;
  }
}

export default reviewReducer;
