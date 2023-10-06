/** @format */

import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SharedLayout from './SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MoviesDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path='/movies' element={<Movies />} />
					<Route path='/movies/:id' element={<MovieDetails />}>
						<Route path='cast' element={<Cast />} />
						<Route path='reviews' element={<Reviews />} />
					</Route>
				</Route>
			</Routes>
			<ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} />
		</>
	);
};
