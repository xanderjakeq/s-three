import React from 'react'

const SpotifyReAuth = (props) => {
    return(
        <div>
            <p>Session Expired</p>
            <a href = {'https://damp-island-94750.herokuapp.com/login' || 'https://spotify-ss.firebaseapp.com/login'}>New Sesh</a>
        </div>
    )
}

export default SpotifyReAuth