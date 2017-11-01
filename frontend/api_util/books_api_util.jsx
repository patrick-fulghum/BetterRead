export const fetchBook = (bookId) => {
  return $.ajax({
    method: "GET",
    url: `api/books/${bookId}`
  });
};

export const createBook = (book) => {
  return $.ajax({
    method: "POST",
    url: `api/books`,
    data: { book },
  });
};

export const updateBook = (book) => {
  return $.ajax({
    method: "PATCH",
    url: `api/books/${book.id}`,
    data: { book },
  });
};

export const fetchBooks = () => {
  return $.ajax({
    method: "GET",
    url: `api/books`,
  });
};
