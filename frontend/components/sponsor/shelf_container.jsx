import { connect } from 'react-redux';
import SponsorShelfPage from './sponsor_shelves';

const mapStateToProps = (state, ownProps) => ({
  books: state.books
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SponsorShelfPage);
