import { connect } from 'react-redux';
import NewStory from '../components/NewStory/NewStory';
import { addPages, submitNewStory } from '../actions';

const dispatchNextPage = dispatch => (textA, textB, contents) => {
  dispatch(addPages(textA, textB, contents));
};

const dispatchSubmit = dispatch => newStory => {
  console.log(newStory);
  dispatch(submitNewStory(newStory));
};

const mapStateToProps = state => ({
  user: state.userData.user,
  newStoryPages: state.newStoryData.pages
});

const mapDispatchToProps = dispatch => ({
  addPages: dispatchNextPage(dispatch),
  submitNewStory: dispatchSubmit(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStory);
