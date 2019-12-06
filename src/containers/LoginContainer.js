import { connect } from 'react-redux';
import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../config/firebase';
import Login from '../components/Login/Login';

const dispatchAuthenticate = dispatch => async(method) => {
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

  const provider = method === 'google'
    ? new firebase.auth.GoogleAuthProvider()
    : new firebase.auth.FacebookAuthProvider();
  const result = await firebase.auth().signInWithPopup(provider);
  const { email, displayName, photoURL } = result.user;
  const userName = displayName.split(' ');
  const name = userName.length > 2 ? `${userName[0]} ${userName[1]}` : displayName;

  const res = await axios.post(`${process.env.REACT_APP_HOST_URL}/api/authenticate`,
    {
      email: email,
      name: name,
      profilePhoto: photoURL
    },
    {
      headers: {'Content-Type': 'application/json'}
    }
  );
  console.log(res.data);
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  authenticate: dispatchAuthenticate(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
