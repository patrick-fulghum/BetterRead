import * as APIUtil from '../api_util/reviews_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const DELETE_REVIEW = "DESTROY_REVIEW";

const receiveReview = (bookId, review) => ({
  type: RECEIVE_REVIEW,
  bookId,
  review,
});

const destroyReview = (bookId, reviewId) => ({
  type: DELETE_REVIEW,
  bookId,
  reviewId,
});

export const createReview = (bookId, thisReview) => dispatch => (
  APIUtil.createReview(bookId, thisReview)
  .then((bookId, review) => dispatch(receiveReview(bookId, review)))
);

export const updateReview = (bookId, thisReview) => dispatch => (
  APIUtil.updateReview(bookId, thisReview)
  .then((bookId, review) => dispatch(receiveReview(bookId, review)))
);

export const deleteReview = (bookId, reviewId) => dispatch => (
  APIUtil.deleteReview(bookId, reviewId)
  .then(review => dispatch(destroyReview(review)))
);
