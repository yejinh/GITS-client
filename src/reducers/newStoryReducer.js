import {
  ADD_PAGES
} from '../constants/actionType';

const initialState = {
  pages: []
};

const newStoryReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PAGES:
      return {
        pages: state.pages.concat(action.pageData)
      };

    default:
      return state;
  }
};

export default newStoryReducer;
