import * as actionTypes from '../constants/actionType';

export const login = token => ({
  type: actionTypes.LOGIN,
  token
});

export const logout = () => ({
  type: actionTypes.LOGOUT
});

export const isLoading = data => ({
  type: actionTypes.IS_LOADING,
  data
});

export const fetchUserData = userData => ({
  type: actionTypes.FETCH_USER_DATA,
  userData
});

export const addPages = (textA, textB, contents, audioUrl) => ({
  type: actionTypes.ADD_PAGES,
  pageData: {
    texts: [textA, textB],
    contents: contents,
    audioUrl: audioUrl
  }
});

export const prevPage = pageNumber => ({
  type: actionTypes.PREV_PAGE,
  pageNumber
});

export const nextPage = pageNumber => ({
  type: actionTypes.NEXT_PAGE,
  pageNumber
});

export const submitNewStory = newStory => ({
  type: actionTypes.SUBMIT_STORY,
  newStory
});
