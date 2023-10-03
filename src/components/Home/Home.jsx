/** @format */

import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieDetails from '../MovieDetails';
import { fetchDayTrendingMovies } from '../utils/fetch_api';
import { MoviesItems } from './Home.styled';

const Home = () => {
	const location = useLocation();
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetchDayTrendingMovies()
			.then(({ results }) => setMovies(results))
			.catch(error => console.log(error));
	}, []);

	return (
		<MoviesItems>
			{movies.length ? (
				movies.map(movie => (
					<Link
						key={movie.id}
						to={`/movies/${movie.id}`}
						element={<MovieDetails />}
						state={{ from: location }}
					>
						{movie.name ?? movie.original_title}
					</Link>
				))
			) : (
				<span>No movies day tranding</span>
			)}
		</MoviesItems>
	);
};

export default Home;
