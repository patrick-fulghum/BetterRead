export const fetchBook = (bookId) => {
  return $.ajax({
    method: "GET",
    url: `api/books/${bookId}`
  });
};

export const createBook = (formData) => {
  return $.ajax({
    method: "POST",
    url: `api/books`,
    dataType: "json",
    contentType: false,
    processData: false,
    data: { formData },
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
