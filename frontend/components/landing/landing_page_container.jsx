import { connect } from 'react-redux';
import {login, logout, signup, clearErrors } from '../../actions/session_actions';
import LandingPage from './landing_page';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const loginAction = login;
  const signupAction = signup;
  return {
    loginAction: user => dispatch(loginAction(user)),
    signupAction: user => dispatch(signupAction(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
