import * as actionTypes from '../constants/actionType';

export const login = (token, userId) => ({
  type: actionTypes.LOGIN,
  token,
  userId
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

export const prevPage = (pageNumber, textA, textB, contents, audioUrl) => {
  if (textA) {
    return {
      type: actionTypes.PREV_PAGE,
      pageNumber,
      pageData: {
        texts: [textA, textB],
        contents: contents,
        audioUrl: audioUrl
      }
    };
  }

  return {
    type: actionTypes.PREV_PAGE,
    pageNumber
  };
};

export const nextPage = (pageNumber, textA, textB, contents, audioUrl) => ({
  type: actionTypes.NEXT_PAGE,
  pageNumber,
  pageData: {
    texts: [textA, textB],
    contents: contents,
    audioUrl: audioUrl
  }
});

export const submitNewStory = newStory => ({
  type: actionTypes.SUBMIT_STORY,
  newStory
});
