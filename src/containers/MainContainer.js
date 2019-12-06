import { connect } from 'react-redux';
import axios from 'axios';
import Main from '../components/Main/Main';
import { fetchUserData } from '../actions';

const dispatchFetchUserData = dispatch => async() => {
  try {
    const token = localStorage.getItem('ACCESS_TOKEN');
    console.log(token);
    // const res = await axios.get(`${process.env.REACT_APP_HOST_URL}/api/users`, {
    //   headers: {
    //   'Content-Type': 'application/json',
    //   Authorization: `Bearer ${token}`
    // }});
  } catch(err) {
    console.log(err);
  }
};

const mapStateToProps = state => ({
  user: state.userData.user
});

const mapDispatchToProps = dispatch => ({
  fatchUserData: dispatchFetchUserData(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
