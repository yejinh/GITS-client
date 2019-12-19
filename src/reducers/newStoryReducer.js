import {
  ADD_PAGES,
  PREV_PAGE,
  NEXT_PAGE
} from '../constants/actionType';

const initialState = {
  pages: [],
  curPage: null,
  curPageNumber: 0
};

const newStoryReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PAGES:
      return {
        pages: state.pages.concat(action.pageData),
        curPageNumber: state.curPageNumber + 1
      };

    case PREV_PAGE:
      action.pageData && state.pages.splice(action.pageNumber + 1, 1, action.pageData);

      return {
        ...state,
        pages: state.pages,
        curPage: state.pages[action.pageNumber],
        curPageNumber: action.pageNumber
      };

    case NEXT_PAGE:
      state.pages.splice(action.pageNumber - 1, 1, action.pageData);

      return {
        ...state,
        pages: state.pages,
        curPage: state.pages[action.pageNumber],
        curPageNumber: action.pageNumber
      };

    default:
      return state;
  }
};

export default newStoryReducer;
