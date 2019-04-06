import React from 'react';
import {connect} from 'react-redux';
import {Smile, Frown} from 'react-feather'; 

import {like,disLike} from '../../actions';

const Reaction = (props) => {
	// Liked
	// Disliked
	// Neutral
	return (
		<div style = {{
			display: 'flex',
			alignSelf: 'flex-end'
			}}>
			<div style = {{cursor: 'pointer'}}>
				<Smile
					size={30}
					color={props.likedTracks.filter(track => track.id === props.trackId).length > 0 ? '#33cc33' : 'grey'}
					onClick={() => {
						props.like(	props.expandedTrackAudioFeatures, 
									props.likedTracks.filter(track => track.id === props.trackId).length > 0 ? 'liked' : props.dislikedTracks.filter(track => track.id === props.trackId).length > 0 ? 'disliked' : 'neutral',
									props.uid);
					}}
				/>
			</div>
			<div style = {{cursor: 'pointer'}}>
				<Frown
					size={30}
					color={props.dislikedTracks.filter(track => track.id === props.trackId).length > 0 ? 'red' : 'grey'}
					style = {{hover: {cursor: 'pointer'}}}
					onClick={() => {
						props.disLike(	props.expandedTrackAudioFeatures, 
										props.likedTracks.filter(track => track.id === props.trackId).length > 0 ? 'liked' : props.dislikedTracks.filter(track => track.id === props.trackId).length > 0 ? 'disliked' : 'neutral', 
										props.uid);
					}}
				/>
			</div>
		</div>
	);
};

const mstp = state => {
	return {
		uid: state.auth.user.uid,
		likedTracks: state.auth.userData.likedTracks,
		dislikedTracks: state.auth.userData.dislikedTracks,
		expandedTrackAudioFeatures: state.track.expandedTrackAudioFeatures
	};
};

export default connect(mstp, {like, disLike})(Reaction);