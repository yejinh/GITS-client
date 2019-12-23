import { connect } from 'react-redux';
import axios from 'axios';
import Home from '../components/Home/Home';
import { isLoading, fetchUserData, logout } from '../actions';

const dispatchFetchUserData = dispatch => async() => {
  try {
    dispatch(isLoading(true));

    const token = localStorage.getItem('ACCESS_TOKEN');
    const userId = localStorage.getItem('USER_ID');

    const res = await axios.get(`${process.env.REACT_APP_HOST_URL}/api/users/${userId}/stories`, {
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

const mapStateToProps = state => ({
  isLoading: state.userData.isLoading,
  user: state.userData.user
});

const mapDispatchToProps = dispatch => ({
  fatchUserData: dispatchFetchUserData(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
