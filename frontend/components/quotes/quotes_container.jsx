import { connect } from 'react-redux';
import QuotePage from './quotes';
import { fetchQuotes, fetchQuote } from '../../actions/quote_actions';

const mapStateToProps = (state, ownProps) => ({
  quotes: state.quotes,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchQuotes: () => dispatch(fetchQuotes()),
  fetchQuote: (quoteId) => dispatch(fetchQuote(quoteId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuotePage);
