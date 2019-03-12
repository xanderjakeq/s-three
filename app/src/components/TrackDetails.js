import React, {Component} from 'react'
import {connect} from 'react-redux'

import Track from './Track'
import RadarChart from './RadarChart'

class TrackDetails extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    
    render(){
        return(
            <>
                <p>Track Details</p>
                {/* consistent in order */}

                <RadarChart comparison audioFeatures = {[this.props.expandedTrackAudioFeatures]} expandedTrack = {this.props.expandedTrack}/>
                <Track trackData = {this.props.expandedTrack}/>
            </>
        )
    }
}

const mstp = state => {
    return {
        expandedTrack: state.track.expandedTrack,
        expandedTrackAudioFeatures: state.track.expandedTrackAudioFeatures,
        hasError: state.auth.error
    }
}

export default connect(mstp, {})(TrackDetails)