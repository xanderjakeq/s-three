import React from 'react';
import { connect } from 'react-redux';

import { Smile, Frown } from 'react-feather'; 

import firebase from '../../firebaseApp'
import {like,disLike} from '../../actions'

const user = firebase.auth().currentUser

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
          color={props.likedTracks.includes(props.trackId) ? 'green' : 'grey'}
          onClick={() => {
            props.like(props.trackId, props.likedTracks.includes(props.trackId) ? 'liked' : props.dislikedTracks.includes(props.trackId) ? 'disliked' : 'neutral', props.uid)
          }}
        />
      </div>
      <div style = {{cursor: 'pointer'}}>
        <Frown
          // color={thumbedDown ? 'red' : 'grey'}
          size={30}
          style = {{hover: {cursor: 'pointer'}}}
          // onClick={() => {
          //   if (thumbedDown) {
          //     deleteDownthumbTrack().then(toggleReacting);
          //   } else {
          //     downthumbTrack().then(toggleReacting);
          //   }
          // }}
        />
      </div>
    </div>
  );
};

// Map State to Props, find out if this track is upthumbed/downthumbed
// based on id and checking for id in those arrays
const mstp = state => {
  return {
    uid: state.auth.user.uid,
    likedTracks: state.auth.userData.likedTracks,
    dislikedTracks: state.auth.userData.dislikedTracks,
  };
};


export default connect(mstp, {like})(Reaction);
