import * as APIUtil from '../api_util/quotes_api_util';

export const RECEIVE_QUOTE = "RECEIVE_QUOTE";
export const RECEIVE_QUOTES = "RECEIVE_QUOTES";

const receiveQuote = (quote) => ({
  type: RECEIVE_QUOTE,
  quote,
});

const receiveQuotes = (quotes) => ({
  type: RECEIVE_QUOTES,
  quotes,
});

export const fetchQuote = otherQuote => dispatch => (
  APIUtil.fetchQuote(otherQuote).then(quote => (
    dispatch(fetchQuote(quote))
  ))
);

export const fetchQuotes = () => dispatch => (
  APIUtil.fetchQuotes().then(quotes => dispatch(receiveQuotes(quotes)))
);
