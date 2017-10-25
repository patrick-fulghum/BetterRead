import { connect } from 'react-redux';
import {login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const determineForm = formType === 'login' ? login : signup;
  return {
    determineForm: user => dispatch(determineForm(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
