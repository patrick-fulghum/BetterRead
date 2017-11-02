export const createReview = (bookId, review) => {
  return $.ajax({
    method: "POST",
    url: `api/books/${bookId}/reviews`,
    data: review,
  });
};

export const deleteReview = (bookId, reviewId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/books/${bookId}/reviews/${reviewId}`,
  });
};

export const updateReview = (bookId, review) => {
  return $.ajax({
    method: "PATCH",
    url: `api/books/${bookId}/reviews/${review.id}`,
    data: review,
  });
};
