import React from 'react';
import {connect} from 'react-redux';

import {SpotifyPlayerFrame} from './StyledComps';

const SpotifyPlayer = (props) => {
  return (
    <SpotifyPlayerFrame title = 'SpotifyPlayer'src={`https://open.spotify.com/embed/track/${props.trackId}`} width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></SpotifyPlayerFrame>
  );
};

// get currently selected track
const mstp = state => {
  return {
    trackId: state.track.currentTrack
  };
};

export default connect(mstp, {})(SpotifyPlayer);