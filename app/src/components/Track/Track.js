import React from 'react'
import styled from 'styled-components'

const imgWidth = 30
const fontSize = 1
const TrackPreview = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 300px;
    margin: 5px 0;
    h1{
        font-size: ${fontSize}em;
        text-align: left;
    }
    h2{
        font-size: ${fontSize/1.5}em;
        text-align: left;
    }
    div{
        min-width: 200px;
        margin: 0 0 10px;
        margin-left: 10px;
    }
    img{
        width: ${imgWidth}%;
        height: ${imgWidth}%;
    }
`

export default (props) => {
    console.log(props)
    return(
        <TrackPreview>
            <img src={props.album.images[1].url} alt=""/>
            <div>
                <h1>{props.name}</h1>
                <h2>{props.artists.map(artist => `${artist.name}, `)}</h2>
                {/* <audio src={props.preview_url} controls controlsList = 'nodownload'></audio> */}
            </div>
        </TrackPreview>
    )
}