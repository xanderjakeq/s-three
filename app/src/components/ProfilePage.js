import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import RadarChart from './RadarChart';
import Track from './Track';
import {DesktopFlex, ListContainer, Logout} from './StyledComps';

import {logout, getTracks, getUserData} from '../actions';

class ProfilePage extends Component {

	state = {
		fetchingLikedTracks: false,
		likedTracksWithSpotifyData: [],
		isReacting: false
	};

	render() {
		if (!this.props.likedTracks) return null;
		return (
			<DesktopFlex>
				<div style={{ flexGrow: '1' }}>
					{this.props.userMusicTaste && (
						<RadarChart audioFeatures={[this.props.userMusicTaste]} />
					)}
					<h1>Your Taste</h1>
					{this.props.likedTracks.length === 0 && (
						<p>get likin to develop your 'taste'</p>
					)}
					<Logout onClick={this.handleLogOut}>Signout</Logout>
				</div>
				<ListContainer>
					<p>most recent likes</p>
					{this.state.fetchingLikedTracks && <p>fetching liked tracks</p>}
					{this.state.likedTracksWithSpotifyData.map(track => (
						<Track
							key={track.id}
							trackData={track}
						/>
					))}
				</ListContainer>
			</DesktopFlex>
		);
	}

	componentDidMount() {
		this.getLikedTracks()
	}

	getLikedTracks = () => {
		this.setState({
			fetchingLikedTracks: true,
			likedTracksWithSpotifyData: []
		});

		const {likedTracks} = this.props;
		let likedTracksCopy;

		if(likedTracks){
			likedTracksCopy = JSON.parse(JSON.stringify(likedTracks.reverse()));
			let trackIds = likedTracksCopy.splice(0,50).map(track => track.id).join(',');

			if (trackIds.length > 0) {
				this.props.getTracks(trackIds, this.props.accessToken).then(res => {
					if (!res) return;

					const updatedTracks = res.data.tracks.map((track, i) => {
						return { ...track, ...likedTracks[i] };
					});

					this.setState(() => ({
						fetchingLikedTracks: false,
						likedTracksWithSpotifyData: updatedTracks
					}));
				});
			} else {
				this.setState({
					fetchingLikedTracks: false
				});

			}
		}
	};

	handleLogOut = () => {
		this.props.history.push('/');
		this.props.logout();
	};
}

const mstp = state => {
	return {
		likedTracks: state.auth.userData.likedTracks,
		userMusicTaste: state.auth.userMusicTaste,
		accessToken: state.track.accessToken
	};
};

export default withRouter(connect(mstp, {logout, getTracks, getUserData})(ProfilePage));