import * as APIUtil from '../api_util/books_api_util';

export const RECEIVE_BOOK = "RECEIVE_BOOK";
export const RECEIVE_BOOKS = "RECEIVE_BOOKS";

const receiveBook = (book) => ({
  type: RECEIVE_BOOK,
  book,
});
const receiveBooks = (books) => ({
  type: RECEIVE_BOOKS,
  books,
});

export const fetchBook = bookId => dispatch => (
  APIUtil.fetchBook(bookId).then(book => dispatch(receiveBook(book)))
);
export const fetchBooks = () => dispatch => (
  APIUtil.fetchBooks().then(books => dispatch(receiveBooks(books)))
);
export const createBook = thisBook => dispatch => (
  APIUtil.createBook(thisBook).then(book => dispatch(receiveBook(book)))
);
export const updateBook = thisBook => dispatch => (
  APIUtil.updateBook(thisBook).then(book => dispatch(receiveBook(book)))
);
