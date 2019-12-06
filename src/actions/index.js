import * as actionTypes from '../constants/actionType';

export const login = token => ({
  type: actionTypes.LOGIN,
  token
});

export const fetchUserData = userData => ({
  type: actionTypes.FETCH_USER_DATA,
  userData
});
