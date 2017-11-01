import merge from 'lodash/merge';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case (RECEIVE_USER):
      return merge({}, { [action.user.id]: action.user });
    case (RECEIVE_USERS):
      return merge({}, action.users)
    default:
      return state;
  }
};

export default userReducer;
