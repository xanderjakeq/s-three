import React from 'react'
import {connect} from 'react-redux'

import {play} from '../actions'

import {TrackPreview} from './StyledComps'

const Track = (props) => {
    console.log(props)
    return(
        <TrackPreview>
            <img src={props.album.images[1].url} alt="" onClick ={() => props.play(props.id)}/>
            <div>
                <h1>{props.name}</h1>
                <h2>{props.artists.map(artist => `${artist.name}, `)}</h2>
                {/* <audio src={props.preview_url} controls controlsList = 'nodownload'></audio> */}
            </div>
        </TrackPreview>
    )
}

const mstp = state => {
    return {
        track: state.track.currentTrack
    }
}
export default connect(mstp, {play})(Track)