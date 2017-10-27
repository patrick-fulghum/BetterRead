export const fetchQuote = (quoteId) => {
  return $.ajax({
    method: "GET",
    url: `api/quotes/${quoteId}`,
  });
};

export const fetchQuotes = () => {
  return $.ajax({
    method: "GET",
    url: `api/quotes`,
  });
};
