import { connect } from 'react-redux';
import NewStory from '../components/NewStory/NewStory';
import { addPages, prevPage, nextPage } from '../actions';

const dispatchAddPage = dispatch => (textA, textB, contents, audioUrl) => {
  dispatch(addPages(textA, textB, contents, audioUrl));
};

const dispatchPrevPage = dispatch => (pageNumber, textA, textB, contents, audioUrl) => {
  dispatch(prevPage(pageNumber, textA, textB, contents, audioUrl));
};

const dispatchNextPage = dispatch => (pageNumber, textA, textB, contents, audioUrl) => {
  dispatch(nextPage(pageNumber, textA, textB, contents, audioUrl));
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
  onNextClick: dispatchNextPage(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStory);
