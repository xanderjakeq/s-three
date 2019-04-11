import React, {Component} from 'react';
import {connect} from 'react-redux';
import {debounce} from 'underscore';

import Track from './Track';
import {SongsContainer, SearchBar, Illustration} from './StyledComps';

import gogglesIllustration from '../illustrations/goggles.png';

import {searchTrack, testToken} from '../actions';

class SearchPage extends Component {

	state = {
		searchTerm: ''
	};

	render(){
		return (
			<>
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
				{this.props.searchResults.length === 0 && 
							<div style = {{marginTop: '30px'}}>
								<Illustration src={gogglesIllustration} alt="Goggles Illustration"/>
								<p>Get Searchin</p>
							</div> }
			</>
		);
	}

	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});

		this.debounceSearchTrack(e.target.value);
	}

	debounceSearchTrack = debounce(value => {
		this.props.searchTrack(value, this.props.accessToken);
	}, 1000)
}

const mstp = state => {
	return {
		accessToken: state.track.accessToken,
		searchResults: state.track.searchResults
	};
};

export default connect(mstp, {searchTrack, testToken})(SearchPage);