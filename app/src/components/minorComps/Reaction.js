import React from 'react';
import { connect } from 'react-redux';

import { Smile, Frown } from 'react-feather'; 

import {like,disLike} from '../../actions'

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
          color={props.likedTracks.includes(props.trackId) ? '#33cc33' : 'grey'}
          onClick={() => {
                                      // if its not liked, check if disliked, else its neutral
            props.like(props.trackId, props.likedTracks.includes(props.trackId) ? 'liked' : props.dislikedTracks.includes(props.trackId) ? 'disliked' : 'neutral', props.uid)
          }}
        />
      </div>
      <div style = {{cursor: 'pointer'}}>
        <Frown
          size={30}
          color={props.dislikedTracks.includes(props.trackId) ? 'red' : 'grey'}
          style = {{hover: {cursor: 'pointer'}}}
          onClick={() => {
                                       // if its not liked, check if disliked, else its neutral
            props.disLike(props.trackId, props.likedTracks.includes(props.trackId) ? 'liked' : props.dislikedTracks.includes(props.trackId) ? 'disliked' : 'neutral', props.uid)
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
  };
};

export default connect(mstp, {like, disLike})(Reaction);
