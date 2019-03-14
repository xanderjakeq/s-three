import React, {Component} from 'react'
import RadarChart from './RadarChart'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {logout} from '../actions'


class ProfilePage extends Component{

    handleLogOut = () => {
        this.props.history.push('/')
        this.props.logout()
    }
    render(){
        return(
            <>
                {this.props.userMusicTaste && <RadarChart audioFeatures = {[this.props.userMusicTaste]}/>}
                <h1>You</h1>
                <button onClick = {this.handleLogOut}>Signout</button>
            </>
        )
    }
}

const mstp = state => {
    return {
        likedTracks: state.auth.userData.likedTracks,
        userMusicTaste: state.auth.userMusicTaste
    }
}

export default withRouter(connect(mstp, {logout})(ProfilePage))



