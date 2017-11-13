import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
} from '../actions/user';

const initState = {
  id: 0,
  name: {
    first: '',
    middle: '',
    last: ''
  },
  email: ''
};

export default function (state = initState, { type, payload }) {
  switch (type) {
    case LOGIN_USER_SUCCESS:
      return payload;
    case LOGIN_USER_FAILURE:
      return state;
    case UPDATE_USER_SUCCESS:
      return Object.assign({}, state, payload);
    case UPDATE_USER_FAILURE:
      return state;
    default:
      return state;
  }
}