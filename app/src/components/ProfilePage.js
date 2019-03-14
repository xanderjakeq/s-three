import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

import RadarChart from './RadarChart'
import Track from './Track'
import {DesktopFlex, ListContainer} from './StyledComps'

import {logout, getTracks} from '../actions'


class ProfilePage extends Component{
    constructor(props){
        super(props)

        this.state = {
            fetchingLikedTracks: false,
            likedTracksWithSpotifyData: []
        }
    }

    componentDidMount(){
        if(this.props.likedTracks) {
            this.getLikedTracks()
        }
    }

    getLikedTracks = () => {
        this.setState({
            fetchingLikedTracks: true,
            likedTracksWithSpotifyData: []
        })
        let trackIds = (this.props.likedTracks).map(track => track.track_id).join(',')
        this.props.getTracks(trackIds, this.props.accessToken).then(res => {
            this.setState({
                fetchingLikedTracks: false,
                likedTracksWithSpotifyData: res.data.tracks
            })
        })
    }


    handleLogOut = () => {
        this.props.history.push('/')
        this.props.logout()
    }
    render(){
        return(
            <DesktopFlex>
                <div>
                    {this.props.userMusicTaste && <RadarChart audioFeatures = {[this.props.userMusicTaste]}/>}
                    <h1>You</h1>
                    <button onClick = {this.handleLogOut}>Signout</button>
                </div>
                <ListContainer>
                    <p>most recent likes</p>
                    {this.state.fetchingLikedTracks && <p>fetching liked tracks</p>}
                    {this.state.likedTracksWithSpotifyData.map(track => <Track key = {track.id} trackData = {track}/>)}
                </ListContainer>
            </DesktopFlex>
        )
    }
}

const mstp = state => {
    return {
        likedTracks: state.auth.userData.likedTracks,
        userMusicTaste: state.auth.userMusicTaste,
        accessToken: state.track.accessToken
    }
}

export default withRouter(connect(mstp, {logout, getTracks})(ProfilePage))