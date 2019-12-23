import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Icon from '../Icon.Styled';
import LIKE from './src/like.png';
import { StyledNav } from './Nav.styled';
import { logout } from '../../actions';

function Nav({ isOpen, user, logout }) {
  return (
    <StyledNav isOpen={isOpen}>
      <section>
        <div className="like">
          <Link to={{
            pathname: "/new-story/options",
            state: {
              user: user,
              isOpen: isOpen
            }}}>
            <Icon
              icon={LIKE}
              size={"32"} />
          </Link>
        </div>
        <span style={{ backgroundImage: `url(${user.profilePhoto})` }}/>
        <div>{user.name}</div>
        <div>{user.email}</div>
      </section>
      <section>
        <Link to="/">
          <span className="bar-left first" />
            Home
          <span className="bar-right first" />
        </Link>
        <Link to="/my-stories">
          <span className="bar-left second" />
            My Stories
          <span className="bar-right second" />
        </Link>
        <Link to={{
          pathname: "/new-story/options",
          state: {
            user: user
          }}}>
          <span className="bar-left third" />
            New Story
          <span className="bar-right third" />
        </Link>
      </section>
      <section>
        <Link
          to="/"
          className="logout"
          onClick={logout}
        >로그아웃</Link>
      </section>
    </StyledNav>
  );
}

const mapStateToProps = state => ({
  user: state.userData.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
