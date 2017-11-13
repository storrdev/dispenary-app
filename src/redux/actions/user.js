export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export function login(email, password) {
  // TODO: add login API call
  let user = {
    id: 1,
    name: {
      first: 'Stephen',
      middle: 'Alexander',
      last: 'Orr'
    },
    email: 'stephenaorr@gmail.com'
  };

  return {
    type: LOGIN_USER_SUCCESS,
    payload: user
  };
}

export function updateUser(user) {
  // TODO: add updateUser API call

  return {
    type: UPDATE_USER_SUCCESS,
    payload: user
  };
}