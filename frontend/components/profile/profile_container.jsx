import { connect } from 'react-redux';
import ProfilePage from './profile';
import { fetchUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    users: state.users,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchUsers: () => dispatch(fetchUsers()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
