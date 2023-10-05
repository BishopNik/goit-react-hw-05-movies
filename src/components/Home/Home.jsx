/** @format */

import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieDetails from '../MovieDetails';
import { fetchDayTrendingMovies } from '../utils/fetch_api';
import { MoviesItems, MovieLink } from '../Styled/Home.styled';
import { ErrorMessage } from '../Styled/Additional.styled';
import { toastWindow } from '../utils/toastwindow.js';

const Home = () => {
	const location = useLocation();
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetchDayTrendingMovies()
			.then(({ results }) => setMovies(results))
			.catch(error => toastWindow(`Error loading trending movies (${error})`));
	}, []);

	return (
		<MoviesItems>
			{movies.length ? (
				movies.map(movie => (
					<MovieLink
						key={movie.id}
						to={`/movies/${movie.id}`}
						element={<MovieDetails />}
						state={{ from: location }}
					>
						{movie.name ?? movie.original_title}
					</MovieLink>
				))
			) : (
				<ErrorMessage>No movies day tranding</ErrorMessage>
			)}
		</MoviesItems>
	);
};

export default Home;
