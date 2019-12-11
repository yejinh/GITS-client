import * as actionTypes from '../constants/actionType';

export const login = token => ({
  type: actionTypes.LOGIN,
  token
});

export const isLoading = data => ({
  type: actionTypes.IS_LOADING,
  data
});

export const fetchUserData = userData => ({
  type: actionTypes.FETCH_USER_DATA,
  userData
});

export const addPages = (textA, textB, contents) => ({
  type: actionTypes.ADD_PAGES,
  pageData: {
    pageA: [textA, contents[0]],
    pageB: [textB, contents[1]]
  }
});
