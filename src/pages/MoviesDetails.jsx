/** @format */

import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useRef } from 'react';
import MovieDetailsRender from '../components/MovieDetailsRender';
import { BackLink, BackCont } from '../components/Styled/Additional.styled';

const MoviesDetails = () => {
	const location = useLocation();
	const locationMain = useRef(location.state?.from ?? '/movies');
	return (
		<>
			<BackCont>
				<BackLink to={locationMain.current}>Back to ...</BackLink>
			</BackCont>

			<MovieDetailsRender />
			<Outlet />
		</>
	);
};

export default MoviesDetails;
