import React from 'react'
import SearchPage from '../SearchPage'
import NavBar from '../NavBar'
import ProfilePage from '../ProfilePage'
import SpotifyPlayer from '../SpotifyPlayer'
import TrackDetails from '../TrackDetails'

import {BrowserRouter as Router, Route} from 'react-router-dom'

export default (props) => {
    return (
        <Router>
            <>
            <NavBar/>
            <Route exact path = '/' component = {SearchPage} />
            <Route exact path = '/profile' component = {ProfilePage} />
            <Route path = '/track/:id' component = {TrackDetails} />
            <SpotifyPlayer/>
            </>
        </Router>
    )
}