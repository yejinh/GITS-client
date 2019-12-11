import { connect } from 'react-redux';
import NewStory from '../components/NewStory/NewStory';
import { addPages } from '../actions';

const dispatchNextPage = dispatch => (textA, textB, contents) => {
  dispatch(addPages(textA, textB, contents));
};

const mapStateToProps = state => ({
  user: state.userData.user,
  newStoryPages: state.newStoryData.pages
});

const mapDispatchToProps = dispatch => ({
  onNextPageClick: dispatchNextPage(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStory);
