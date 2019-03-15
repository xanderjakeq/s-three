import React from 'react';
import { connect } from 'react-redux';

import {
  upthumbTrack,
  downthumbTrack,
  deleteUpthumbTrack,
  deleteDownthumbTrack
} from '../../actions';

import { Smile, Frown } from 'react-feather';

const Reaction = ({
  upthumbTrack,
  downthumbTrack,
  thumbedUp,
  thumbedDown,
  deleteUpthumbTrack,
  deleteDownthumbTrack,
  toggleReacting
}) => {
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
          color={thumbedUp ? 'green' : 'grey'}
          onClick={() => {
            if (thumbedUp) {
              deleteUpthumbTrack().then(toggleReacting);
            } else {
              upthumbTrack().then(toggleReacting);
            }
          }}
        />
      </div>
      <div style = {{cursor: 'pointer'}}>
        <Frown
          color={thumbedDown ? 'red' : 'grey'}
          size={30}
          style = {{hover: {cursor: 'pointer'}}}
          onClick={() => {
            if (thumbedDown) {
              deleteDownthumbTrack().then(toggleReacting);
            } else {
              downthumbTrack().then(toggleReacting);
            }
          }}
        />
      </div>
    </div>
  );
};

// Map State to Props, find out if this track is upthumbed/downthumbed
// based on id and checking for id in those arrays
const mstp = (state, ownProps) => {
  const id = ownProps.trackId;

  // destructure uppedIds and downedIds from state.thumbs (thumbReducer)
  const { uppedIds, downedIds } = state.thumbs;

  // if uppedIds includes this track, assume this track has been upthumbed
  const thumbedUp = uppedIds.indexOf(id) > -1 ? 1 : 0;

  // same for down
  const thumbedDown = !thumbedUp && downedIds.indexOf(id) > -1 ? 1 : 0;
  // return those as props
  return {
    state: { ...state },
    thumbedUp,
    thumbedDown
  };
};

// Map dispatch to props, send the ids here from ownProps
const mdtp = (dispatch, ownProps) => {
  const userId = localStorage.getItem('userID');
  return {
    upthumbTrack: () => dispatch(upthumbTrack(ownProps.trackId, userId)),
    downthumbTrack: () => dispatch(downthumbTrack(ownProps.trackId, userId)),
    deleteUpthumbTrack: () => dispatch(deleteUpthumbTrack(ownProps.trackId)),
    deleteDownthumbTrack: () => dispatch(deleteDownthumbTrack(ownProps.trackId))
  };
};

export default connect(
  mstp,
  mdtp
)(Reaction);
