import { connect } from 'react-redux';
import {login, logout, signup, clearErrors } from '../../actions/session_actions';
import { fetchBook } from '../../actions/book_actions';
import LandingPage from './landing_page';

const mapStateToProps = (state, ownProps) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const loginAction = login;
  const signupAction = signup;
  const logoutAction = logout;
  return {
    loginAction: user => dispatch(loginAction(user)),
    signupAction: user => dispatch(signupAction(user)),
    clearErrors: () => dispatch(clearErrors()),
    logoutAction: () => dispatch(logoutAction()),
    fetchBook: (bookId) => dispatch(fetchBook(bookId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
