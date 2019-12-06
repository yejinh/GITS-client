import {
  LOGIN,
  FETCH_USER_DATA
} from '../constants/actionType';

const token = localStorage.getItem('ACCESS_TOKEN');
const initialState = {
  user: {},
  isLoggedIn: token ? true : false
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
        localStorage.setItem('ACCESS_TOKEN', action.token);

      return {
        ...state,
        isLoggedIn: true
      };

    case FETCH_USER_DATA:
      return {
        ...state,
        user: action.userData,
        isLoggedIn: true
      };

    default:
      return state;
  }
};

export default userReducer;
