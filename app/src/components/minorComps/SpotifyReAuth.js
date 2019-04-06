import React from 'react';

import {FullScreenOverlay, Illustration} from '../StyledComps';

import swirl from '../../illustrations/swirl.png';

const SpotifyReAuth = (props) => {
	return(
		<FullScreenOverlay>
			<Illustration src = {swirl}/>
			<h3>Spotify</h3>
			<a href = {'https://damp-island-94750.herokuapp.com/login'}>New Sesh</a>
		</FullScreenOverlay>
	);
};

export default SpotifyReAuth;