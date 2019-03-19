import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import Track from './Track'
import RadarChart from './RadarChart'
import {DesktopFlex, ListContainer} from './StyledComps'

import {getTracks} from '../actions'

class TrackDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            similarTracks: [],
            fetchingSimilarTracks: false,
            error: null
        }
    }

    componentDidMount(){
        if(this.props.expandedTrackAudioFeatures !== {}) return
        this.getSimilarTracks(this.props.expandedTrackAudioFeatures)
    }

    componentDidUpdate(prevProps){
        if(prevProps.expandedTrackAudioFeatures !== this.props.expandedTrackAudioFeatures){
            this.getSimilarTracks(this.props.expandedTrackAudioFeatures)
        }
    }

    getSimilarTracks = (track) => {
        const {id} = track
        this.setState({
            fetchingSimilarTracks: true,
            similarTracks: []
        })
        axios.get(`https://api.spotify.com/v1/recommendations?&seed_tracks=${id}`,{
            headers: {
                Authorization: `Bearer ${this.props.accessToken}`
            }
        }).then(res => {
            this.setState({
                similarTracks: res.data.tracks.splice(1),
                fetchingSimilarTracks: false
            })
        }).catch(err => {
            this.setState({
                fetchingSimilarTracks: false,

                error: err.response.statusText
            })
        })
    }
    
    render(){
        return(
            <DesktopFlex>
                <div style = {{flexGrow:'1'}}>
                    <p>Track Details</p>
                    {/* consistent in order */}
                    <RadarChart comparison audioFeatures = {[this.props.expandedTrackAudioFeatures, this.props.userMusicTaste]} expandedTrack = {this.props.expandedTrack}/>
                    <Track expanded trackData = {this.props.expandedTrack}/>
                </div>
                <ListContainer>
                    <p>Similar Tracks</p>
                    {this.state.similarTracks.length > 0 && this.state.similarTracks.map(track => <Track key={track.track_id} trackData={track}/>)}
                    {this.state.fetchingSimilarTracks && <p>Fetching</p>}
                    {this.state.similarTracks.length === 0 && !this.state.fetchingSimilarTracks && <p>can't find similar tracks</p>}
                </ListContainer>
            </DesktopFlex>
        )
    }
}

const mstp = state => {
    return {
        accessToken: state.track.accessToken,
        expandedTrack: state.track.expandedTrack,
        expandedTrackAudioFeatures: state.track.expandedTrackAudioFeatures,
        hasError: state.auth.error,
        userMusicTaste: state.auth.userMusicTaste,
    }
}

export default connect(mstp, {getTracks})(TrackDetails)
