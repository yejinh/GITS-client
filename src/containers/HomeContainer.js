import { connect } from 'react-redux';
import axios from 'axios';
import Home from '../components/Home/Home';
import { isLoading, fetchUserData, logout } from '../actions';

const dispatchFetchUserData = dispatch => async() => {
  try {
    dispatch(isLoading(true));

    const token = localStorage.getItem('ACCESS_TOKEN');
    const res = await axios.get(`${process.env.REACT_APP_HOST_URL}/api/users`, {
      headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }});

    dispatch(fetchUserData(res.data.user));
    dispatch(isLoading(false));
  } catch(err) {
    console.log(err);
  }
};

const dispatchLogout = dispatch => () => {
  dispatch(logout());
};

const mapStateToProps = state => ({
  isLoading: state.userData.isLoading,
  user: state.userData.user
});

const mapDispatchToProps = dispatch => ({
  fatchUserData: dispatchFetchUserData(dispatch),
  logout: dispatchLogout(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
