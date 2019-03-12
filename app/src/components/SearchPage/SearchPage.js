import React, {Component} from 'react'
import Track from '../Track/Track'
import styled from 'styled-components'

// import spotifyData from '../../AudioData/spotifyAudioFeaturesNov2018.json'
import spotifySearch from '../../MockData/spotifySearchResponse'

let mockData = spotifySearch.tracks.items

const SongsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export default class extends Component {
    constructor(props){
        super(props)

        this.state = {
            searchTerm: ''
        }
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <div>
                <form onSubmit = {e => e.preventDefault()}>
                <input  type='text' 
                        name='searchTerm'
                        placeholder = 'Search Song'
                        value = {this.state.searchTerm}
                        onChange = {this.onChange}/>    
                </form>
                <SongsContainer>
                {mockData.map(track => <Track key = {track.id} {...track}/>)}
                </SongsContainer>
            </div>
        )
    }
}