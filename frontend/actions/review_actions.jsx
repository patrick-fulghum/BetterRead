import * as APIUtil from '../api_util/reviews_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const DELETE_REVIEW = "DESTROY_REVIEW";

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review,
});

const destroyReview = reviewId => ({
  type: DELETE_REVIEW,
  reviewId
});

export const createReview = (bookId, thisReview) => dispatch => (
  APIUtil.createReview(bookId, thisReview)
  .then(review => dispatch(receiveReview(review)))
);

export const updateReview = (bookId, thisReview) => dispatch => (
  APIUtil.updateReview(bookId, thisReview)
  .then(review => dispatch(receiveReview(review)))
);

export const deleteReview = (bookId, reviewId) => dispatch => (
  APIUtil.deleteReview(bookId, reviewId)
  .then(review => dispatch(destroyReview(review)))
);
