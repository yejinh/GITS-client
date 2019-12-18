import { connect } from 'react-redux';
import NewStorySubmit from '../components/NewStorySubmit/NewStorySubmit';

const mapStateToProps = state => ({
  user: state.userData.user,
  newStoryPages: state.newStoryData.pages
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStorySubmit);
