import { connect } from 'react-redux';
import BookFormPage from './book_form';
import { createBook } from '../../actions/book_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    books: state.books[ownProps.match.params.bookId],
    users: state.users,
    errors: state.errors.session,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // const action = ownProps.match
  return ({
    createBook: book => dispatch(createBook(book)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BookFormPage);
