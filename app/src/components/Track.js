import React from 'react'

import {TrackPreview} from './StyledComps'

export default (props) => {
    console.log(props)
    return(
        <TrackPreview>
            <img src={props.album.images[1].url} alt=""/>
            <div>
                <h1>{props.name}</h1>
                <h2>{props.artists.map(artist => `${artist.name}, `)}</h2>
                <audio src={props.preview_url} controls controlsList = 'nodownload novolume'></audio>
            </div>
        </TrackPreview>
    )
}