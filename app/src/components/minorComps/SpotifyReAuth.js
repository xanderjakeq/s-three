import React from 'react'

import {FullScreenOverlay} from '../StyledComps'

const SpotifyReAuth = (props) => {
    return(
        <FullScreenOverlay>
            <h3>Spotify</h3>
            <p>Session Expired</p>
            <a href = {'https://damp-island-94750.herokuapp.com/login' || 'https://spotify-ss.firebaseapp.com/login'}>New Sesh</a>
        </FullScreenOverlay>
    )
}

export default SpotifyReAuth