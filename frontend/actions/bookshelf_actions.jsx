import * as APIUtil from '../api_util/bookshelves_api_util';

export const RECEIVE_BOOKSHELF = "RECEIVE_BOOKSHELF";
export const DESTROY_BOOKSHELF = "DESTROY_BOOKSHELF";

const receiveBookshelf = (userId, bookshelf) => ({
  type: RECEIVE_BOOKSHELF,
  userId,
  bookshelf,
});

const destroyBookshelf = (userId, bookshelfId) => ({
  type: DESTROY_BOOKSHELF,
  userId,
  bookshelfId,
});

export const createBookshelf = (userId, bookshelf) => dispatch => (
  APIUtil.createBookshelf(userId, bookshelf)
  .then((userId, bookshelf) => dispatch(receiveBookshelf(userId, bookshelf)))
);

export const deleteBookshelf = (userId, bookshelfId) => dispatch => (
  APIUtil.deleteBookshelf(userId, bookshelfId)
  .then((userId, bookshelfId) => dispatch(destroyBookshelf(userId, bookshelfId)))
);
