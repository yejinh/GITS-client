import { connect } from 'react-redux';
import axios from 'axios';
import NewStorySubmit from '../components/NewStorySubmit/NewStorySubmit';
// import { submitNewStory } from '../actions';

const dispatchSubmit = dispatch => async(userId, title, cover, pages) => {
  try {
    console.log(pages);
    const data = new FormData();
    data.append('title', title);
    data.append('cover', cover);
    pages.forEach(page => {
      data.append('audioUrls', page.audioUrl);
      data.append('pages[]', page.contents[0]);
      data.append('pages[]', page.contents[1]);
      data.append('texts', page.texts[0]);
      data.append('texts', page.texts[1]);
    });
    data.append('date', new Date().toISOString());

    const token = localStorage.getItem('ACCESS_TOKEN');

    const res = await axios.post(`${process.env.REACT_APP_HOST_URL}/api/users/${userId}/stories`,
      data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`
      }
    });

    console.log(res.data);

    // dispatch(submitNewStory(title, cover, newStoryPages));
  } catch(err) {
    console.log(err);
  }
};

const mapStateToProps = state => ({
  user: state.userData.user,
  newStoryPages: state.newStoryData.pages
});

const mapDispatchToProps = dispatch => ({
  onNewStorySubmit: dispatchSubmit(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStorySubmit);
