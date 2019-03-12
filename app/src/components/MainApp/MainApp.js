import React from 'react'
import SearchPage from '../SearchPage'
import NavBar from '../NavBar'
import ProfilePage from '../ProfilePage'

import {BrowserRouter as Router, Route} from 'react-router-dom'

export default (props) => {
    return (
        <Router>
            <>
            <NavBar/>
            <Route exact path = '/' component = {SearchPage} />
            <Route exact path = '/profile' component = {ProfilePage} />
            </>
        </Router>
    )
}