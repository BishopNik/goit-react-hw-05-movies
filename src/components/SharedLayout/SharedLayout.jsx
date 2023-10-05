/** @format */

import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader';
import { NavMenu } from '../Styled/App.styled';

const SharedLayout = () => {
	return (
		<>
			<NavMenu>
				<NavLink to='/' end>
					Home
				</NavLink>
				<NavLink to='/movies'>Movies</NavLink>
			</NavMenu>
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
		</>
	);
};

export default SharedLayout;
