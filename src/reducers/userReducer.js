import {
  LOGIN,
  LOGOUT,
  IS_LOADING,
  FETCH_USER_DATA,
  FETCH_MY_STORIES
} from '../constants/actionType';
import { camelCaseConvertor } from '../utils';

const token = localStorage.getItem('ACCESS_TOKEN');
const initialState = {
  isLoggedIn: token ? true : false,
  isLoading: true,
  user: {},
  stories: []
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
        localStorage.setItem('ACCESS_TOKEN', action.token);
        localStorage.setItem('USER_ID', action.userId);

      return {
        ...state,
        isLoggedIn: true
      };

    case LOGOUT:
      localStorage.removeItem('ACCESS_TOKEN');
      localStorage.removeItem('USER_ID');

      return {
        ...state,
        isLoggedIn: false
      };

    case IS_LOADING:
      return {
        ...state,
        isLoading: action.data
      };

    case FETCH_USER_DATA:
      return {
        ...state,
        user: camelCaseConvertor(action.userData),
        isLoggedIn: true
      };

    case FETCH_MY_STORIES:
      return {
        ...state,
        stories: action.stories
      };

    default:
      return state;
  }
};

export default userReducer;
