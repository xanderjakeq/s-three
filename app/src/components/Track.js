import React from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'

import {play, getFeatures} from '../actions'

import {TrackPreview} from './StyledComps'

const Track = (props) => {
    if(!props.trackData){
        // don't know if this would be the best user xp
        props.history.push('/')
        return null
    }
    return(
        <TrackPreview>
            <img src={props.trackData.album.images[1].url} alt="" onClick ={() => props.play(props.trackData.id)}/>
            <Link to = {`/track/${props.trackData.id}`} onClick = {() => props.getFeatures(props.trackData, this.props.accessToken)}>
                <h1>{props.trackData.name}</h1>
                <h2>{props.trackData.artists.map(artist => `${artist.name}, `)}</h2>
            </Link>
        </TrackPreview>
    )
}

const mstp = state => {
    return {
        accessToken: state.track.accessToken
    }
}

export default withRouter(connect(null, {play, getFeatures})(Track))