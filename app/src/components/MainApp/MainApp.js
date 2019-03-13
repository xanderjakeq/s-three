import React from 'react'
import {connect} from 'react-redux'

import SearchPage from '../SearchPage'
import NavBar from '../NavBar'
import ProfilePage from '../ProfilePage'
import SpotifyPlayer from '../SpotifyPlayer'
import TrackDetails from '../TrackDetails'
import SpotifyReAuth from '../minorComps/SpotifyReAuth'

import {BrowserRouter as Router, Route} from 'react-router-dom'

const MainApp = (props) => {
    return (
        <Router>
            <>
            <NavBar/>
            <Route exact path = '/' component = {SearchPage} />
            <Route exact path = '/profile' component = {ProfilePage} />
            <Route path = '/track/:id' component = {TrackDetails} />
            {props.needAuth && <SpotifyReAuth/>}
            <SpotifyPlayer/>

            </>
        </Router>
    )
}

const mstp = state => {
    return {
        needAuth: state.track.needAuth
    }
}

export default connect(mstp, {})(MainApp)