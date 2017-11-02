export const createBookshelf = (userId, bookshelf) => {
  return $.ajax({
    method: "POST",
    url: `api/users/${userId}/bookshelf`,
    data: bookshelf,
  });
};

export const deleteBookshelf = (userId, bookshelfId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/users/${userId}/bookshelf/${bookshelfId}`,
  });
};
