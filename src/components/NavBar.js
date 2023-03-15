import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink className={'index-link'} to={'/'}>
						LOGO
					</NavLink>
				</li>
				<li>
					<NavLink className={'home-link'} to={'/home'}>
						Home
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
