import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

import RadarChart from './RadarChart'
import Track from './Track'
import {DesktopFlex, ListContainer, Logout} from './StyledComps'

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
        if(trackIds.length > 0){
            this.props.getTracks(trackIds, this.props.accessToken).then(res => {
                this.setState({
                    fetchingLikedTracks: false,
                    likedTracksWithSpotifyData: res.data.tracks
                })
            })
        }else{
            this.setState({
                fetchingLikedTracks: false
            })
        }
    }


    handleLogOut = () => {
        this.props.history.push('/')
        this.props.logout()
    }
    render(){
        return(
            <DesktopFlex>
                <div style = {{flexGrow: '1'}}>
                    {this.props.userMusicTaste && <RadarChart audioFeatures = {[this.props.userMusicTaste]}/>}
                    <h1>You</h1>
                    {this.props.likedTracks.length === 0 && <p>get likin to develop your 'taste'</p>}
                    <Logout onClick = {this.handleLogOut}>Signout</Logout>
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