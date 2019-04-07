import React from 'react';
import {User} from 'react-feather';
import {NavLink} from 'react-router-dom';

import {Nav} from './StyledComps';
import Logo from '../components/minorComps/Logo';

const NavBar = (props) => {
	return(
		<Nav>
			<NavLink to='/'><Logo/></NavLink>
			<NavLink to='/profile'><User color = 'black' size = {30}/></NavLink>
		</Nav>
	);
}

export default (NavBar);