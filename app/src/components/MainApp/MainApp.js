import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchPage from '../SearchPage';
import NavBar from '../NavBar';
import ProfilePage from '../ProfilePage';
import SpotifyPlayer from '../SpotifyPlayer';
import TrackDetails from '../TrackDetails';
import SpotifyReAuth from '../minorComps/SpotifyReAuth';

import { getUserData, testToken } from '../../actions';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class MainApp extends Component {
  componentDidMount() {
    this.props.getUserData();
  }

  checkToken = () => {
    const maybeToken = localStorage.getItem('accessToken');
    console.log(maybeToken)
    if (maybeToken) {
      this.props.testToken(maybeToken);
      return null;
    } else {
      // prompt SpotifyReauth if no accessToken found in local storage
      return <SpotifyReAuth />;
    }
  };

  render() {
    return (
      <Router>
        <>
          <NavBar />
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route path="/track/:id" component={TrackDetails} />
          {/* if needAuth is true, render SpotifyReauth, otherwise, check if
              the token is valid*/}
          {this.props.needAuth ? <SpotifyReAuth /> : this.checkToken()}
          <SpotifyPlayer />
        </>
      </Router>
    );
  }
}

const mstp = state => {
  return {
    needAuth: state.track.needAuth
  };
};

export default connect(
  mstp,
  { getUserData, testToken }
)(MainApp);

