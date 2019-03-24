import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { play, getFeatures } from '../actions';

import { TrackPreview } from './StyledComps';

import Reaction from './minorComps/Reaction';

const Track = props => {
  if (!props.trackData) {
    // don't know if this would be the best user xp
    props.history.push('/');
    return null;
  }
  return (
    <TrackPreview isExpanded = {props.expanded}>
      {props.trackData.album.images.length ? (
        <img
          src={props.trackData.album.images[0].url}
          alt=""
          onClick={() => props.play(props.trackData.id)}
        />
      ) : null}
      <Link
        to={`/track/${props.trackData.id}`}
        onClick={() => props.getFeatures(props.trackData, props.accessToken)}
      >
        <h1>{props.trackData.name}</h1>
        {props.trackData.artists.map(artist => <h2>{artist.name}</h2>)}
      </Link>
      <Reaction
        trackId={props.trackData.id}
        toggleReacting={props.toggleReacting}
      />
    </TrackPreview>
  );
};

const mstp = state => {
  return {
    accessToken: state.track.accessToken
  };
};

export default withRouter(
  connect(
    mstp,
    { play, getFeatures }
  )(Track)
);