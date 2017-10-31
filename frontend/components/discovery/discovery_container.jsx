import { connect } from 'react-redux';
import Discovery from './discovery';
import { fetchBooks } from '../../actions/book_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    books: state.books
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchBooks: () => dispatch(fetchBooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Discovery);
