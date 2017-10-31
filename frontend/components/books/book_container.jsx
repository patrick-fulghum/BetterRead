import { connect } from 'react-redux';
import BookShowPage from './book_show';
import { fetchBook } from '../../actions/book_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    books: state.books[ownProps.match.params.bookId],
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // const action = ownProps.match
  return ({
    fetchBook: bookId => dispatch(fetchBook(bookId)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShowPage);
