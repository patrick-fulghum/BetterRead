import { connect } from 'react-redux';
import BookShowPage from './book_show';
import { fetchBook } from '../../actions/book_actions';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    books: state.books[ownProps.match.params.bookId],
    users: state.users
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // const action = ownProps.match
  return ({
    fetchBook: bookId => dispatch(fetchBook(bookId)),
    fetchUsers: () => dispatch(fetchUsers()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShowPage);
