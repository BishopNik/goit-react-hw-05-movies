/** @format */

import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import { NavMenu } from './Styled/App.styled';

export const App = () => {
	const location = useLocation();
	return (
		<>
			<NavMenu>
				<NavLink to='/' end>
					Home
				</NavLink>
				<NavLink to='/movies'>Movies</NavLink>
			</NavMenu>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movies' element={<Movies />} state={{ from: location }} />
				<Route path='/movies/:id' element={<MovieDetails />}>
					<Route path='cast' element={<Cast />} />
					<Route path='reviews' element={<Reviews />} />
				</Route>
			</Routes>
		</>
	);
};
