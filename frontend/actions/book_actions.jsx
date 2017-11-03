import * as APIUtil from '../api_util/books_api_util';

export const RECEIVE_BOOK = "RECEIVE_BOOK";
export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const RECEIVE_BOOK_ERRORS = "RECEIVE_BOOK_ERRORS";

const receiveBook = (book) => ({
  type: RECEIVE_BOOK,
  book,
});
const receiveBooks = (books) => ({
  type: RECEIVE_BOOKS,
  books,
});
const receiveErrors = (errors) => ({
  type: RECEIVE_BOOK_ERRORS,
  errors,
})

export const fetchBook = bookId => dispatch => (
  APIUtil.fetchBook(bookId).then(book => dispatch(receiveBook(book)))
);
export const fetchBooks = () => dispatch => (
  APIUtil.fetchBooks().then(books => dispatch(receiveBooks(books)))
);
export const createBook = thisBook => dispatch => (
  APIUtil.createBook(thisBook).then(book => (
    dispatch(receiveBook(book))
  ), error => {
    debugger
    return dispatch(receiveErrors(error.responseJSON))
  })
);
export const updateBook = thisBook => dispatch => (
  APIUtil.updateBook(thisBook).then(book => dispatch(receiveBook(book)))
);
