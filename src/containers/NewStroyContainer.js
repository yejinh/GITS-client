import { connect } from 'react-redux';
import NewStory from '../components/NewStory/NewStory';
import { addPages, prevPage, nextPage, submitNewStory } from '../actions';

const dispatchAddPage = dispatch => (textA, textB, contents, audioUrl) => {
  dispatch(addPages(textA, textB, contents, audioUrl));
};

const dispatchPrevPage = dispatch => pageNumber => {
  dispatch(prevPage(pageNumber));
};

const dispatchNextPage = dispatch => pageNumber => {
  dispatch(nextPage(pageNumber));
};

const dispatchSubmit = dispatch => newStory => {
  console.log(newStory);
  dispatch(submitNewStory(newStory));
};

const mapStateToProps = state => ({
  user: state.userData.user,
  curPage: state.newStoryData.curPage,
  curPageNumber: state.newStoryData.curPageNumber,
  newStoryPages: state.newStoryData.pages
});

const mapDispatchToProps = dispatch => ({
  onPagesAdd: dispatchAddPage(dispatch),
  onPrevClick: dispatchPrevPage(dispatch),
  onNextClick: dispatchNextPage(dispatch),
  onNewStorySubmit: dispatchSubmit(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStory);
