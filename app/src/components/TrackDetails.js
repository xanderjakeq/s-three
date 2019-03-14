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
        if(!this.props.expandedTrack) return
        this.getSimilarTracks(this.props.expandedTrack.name)
    }

    componentDidUpdate(prevProps){
        if(prevProps.expandedTrack !== this.props.expandedTrack){
            this.getSimilarTracks(this.props.expandedTrack.name)
        }
    }

    getSimilarTracks = (track) => {
        this.setState({
            fetchingSimilarTracks: true,
            similarTracks: []
        })
        axios.get(`https://spotify-ss-backend.herokuapp.com/api/track/get_closest_tracks/${track}`).then(res => {
            let trackIds = res.data.tracks.splice(1,50).map(track => track.track_id).join(',')
            this.props.getTracks(trackIds, this.props.accessToken).then(res => {
                console.log('success ')
                this.setState({
                    similarTracks: res.data.tracks,
                    fetchingSimilarTracks: false
                })
            })
        }).catch(err => {
            console.log(err)
            this.setState({
                fetchingSimilarTracks: false,

                error: err.response.statusText
            })
        })
    }
    
    render(){
        console.log(this.state)
        return(
            <DesktopFlex>
                <div style = {{flexGrow:'1'}}>
                    <p>Track Details</p>
                    {/* consistent in order */}
                    <RadarChart comparison audioFeatures = {[this.props.expandedTrackAudioFeatures, this.props.userMusicTaste]} expandedTrack = {this.props.expandedTrack}/>
                    <Track trackData = {this.props.expandedTrack}/>
                </div>
                <ListContainer>
                    <p>Similar Tracks</p>
                    {this.state.similarTracks.map(track => <Track key = {track.id} trackData = {track}/>)}
                    {this.state.fetchingSimilarTracks && <p>Fetching</p>}
                    {this.state.error && <p>{this.state.error}</p>}
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
        userMusicTaste: state.auth.userMusicTaste
    }
}

export default connect(mstp, {getTracks})(TrackDetails)