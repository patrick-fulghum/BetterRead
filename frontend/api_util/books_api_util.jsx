export const fetchBook = (bookId) => {
  return $.ajax({
    method: "GET",
    url: `api/books/${bookId}`
  });
};

export const createBook = (formData) => {
  return $.ajax({
    url: `api/books`,
    method: "POST",
    contentType: false,
    processData: false,
    dataType: "json",
    data: formData,
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
