import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SearchPage from '../SearchPage';
import NavBar from '../NavBar';
import ProfilePage from '../ProfilePage';
import SpotifyPlayer from '../SpotifyPlayer';
import TrackDetails from '../TrackDetails';
import SpotifyReAuth from '../minorComps/SpotifyReAuth';

import { getUserData, testToken } from '../../actions';


class MainApp extends Component {

	render() {
		return (
			<Router>
				<>
					<NavBar />
					<Route exact path="/" component={SearchPage} />
					<Route exact path="/profile" component={ProfilePage} />
					<Route path="/track/:id" component={TrackDetails} />
					{this.props.needAuth ? <SpotifyReAuth /> : this.checkToken()}
					<SpotifyPlayer />
				</>
			</Router>
		);
	}

	componentDidMount() {
			const parsed = queryString.parse(window.location.search);
			if(parsed.access_token){
				this.props.testToken(parsed.access_token);
			}
	}

	checkToken = () => {
		const spotifyToken = localStorage.getItem('accessToken');
		if (spotifyToken) {
			this.props.testToken(spotifyToken);
			return null;
		} else {
			return <SpotifyReAuth />;
		}
	};
}

const mstp = state => {
	return {
		needAuth: state.track.needAuth
	};
};

export default connect(mstp,{getUserData, testToken })(MainApp);