import { connect } from 'react-redux';
import SponsorBookPage from './sponsor_books';


const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SponsorBookPage);
