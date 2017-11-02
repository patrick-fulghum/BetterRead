import * as APIUtil from '../api_util/reviews_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const DELETE_REVIEW = "DESTROY_REVIEW";

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review,
});
