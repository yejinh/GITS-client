import {
  LOGIN,
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

      return {
        ...state,
        isLoggedIn: true
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
