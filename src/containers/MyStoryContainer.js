import { connect } from 'react-redux';
import axios from 'axios';
import MyStory from '../components/MyStory/MyStory';

const dispatchFetchMyStories = dispatch => async() => {
  try {
    const token = localStorage.getItem('ACCESS_TOKEN');
    const userId = localStorage.getItem('USER_ID');

    const res = await axios.get(`${process.env.REACT_APP_HOST_URL}/api/users/${userId}/stories`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }});

    console.log(res.data);
  } catch(err) {
    console.log(err);
  }
};

const mapStateToProps = state => ({
  user: state.userData.user,
});

const mapDispatchToProps = dispatch => ({
  fetchMyStories: dispatchFetchMyStories(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyStory);
