import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

import firebase from '../../firebaseApp';
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
      // get spotify access token
      const parsed = queryString.parse(window.location.search);
      if(parsed.access_token){
        this.props.testToken(parsed.access_token);
      }
  }

  checkToken = () => {
    console.log('checking token');
    const spotifyToken = localStorage.getItem('accessToken');
    if (spotifyToken) {
      this.props.testToken(spotifyToken);
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

export default connect(mstp,{getUserData, testToken })(MainApp);