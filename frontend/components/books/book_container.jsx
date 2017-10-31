import { connect } from 'react-redux';
import BookShowPage from './books';

const mapStateToProps = (state, ownProps) => {
  return ({
    books: state.books[ownProps.match.params.bookId],
  });
};

const mapDispatchToProps = (state, ownProps) => {
  return ({

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(BookShowPage);
