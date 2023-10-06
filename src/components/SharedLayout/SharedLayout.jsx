/** @format */

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader';
import { NavItem, NavMenu } from '../Styled/SharedLayout.styled';

const SharedLayout = () => {
	return (
		<>
			<NavMenu>
				<NavItem to='/' end>
					Home
				</NavItem>
				<NavItem to='/movies'>Movies</NavItem>
			</NavMenu>
			<Suspense fallback={<Loader />}>
				<Outlet />
			</Suspense>
		</>
	);
};

export default SharedLayout;
