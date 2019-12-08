import { connect } from 'react-redux';
import NewStory from '../components/NewStory/NewStory';

const mapStateToProps = state => ({
  user: state.userData.user
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewStory);
