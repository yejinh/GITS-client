import {
  LOGIN,
  LOGOUT,
  IS_LOADING,
  FETCH_USER_DATA
} from '../constants/actionType';
import { camelCaseConvertor } from '../utils';

const token = localStorage.getItem('ACCESS_TOKEN');
const initialState = {
  isLoggedIn: token ? true : false,
  isLoading: true,
  user: {},
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

    default:
      return state;
  }
};

export default userReducer;
