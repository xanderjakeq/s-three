import React, {Component} from 'react'
import {connect} from 'react-redux'
import {debounce} from 'underscore'

import {searchTrack} from '../actions'
import Track from './Track'
import {SongsContainer, SearchBar} from './StyledComps'

import spotifySearch from '../MockData/spotifySearchResponse'
let mockData = spotifySearch.tracks.items


class SearchPage extends Component {
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

        this.debounceSearchTrack(e.target.value)
    }

    debounceSearchTrack = debounce(value => {
        this.props.searchTrack(value)
    }, 1000)

    render(){
        return (
            <div>
                <SearchBar onSubmit = {e => e.preventDefault()}>
                <input  type='text' 
                        name='searchTerm'
                        placeholder = 'Search Song'
                        value = {this.state.searchTerm}
                        onChange = {this.onChange}/>    
                </SearchBar>
                <SongsContainer>
                    {this.props.searchResults.map(track => <Track key = {track.id} trackData = {track}/>)}
                </SongsContainer>
            </div>
        )
    }
}

const mstp = state => {
    return {
        searchResults: state.track.searchResults
    }
}

export default connect(mstp, {searchTrack})(SearchPage)