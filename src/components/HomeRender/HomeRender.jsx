/** @format */

import { useState, useEffect } from 'react';
import MoviesRender from '../MoviesRender';
import { fetchDayTrendingMovies } from '../utils/fetch_api';
import { MoviesItems } from '../Styled/Home.styled';
import { ErrorMessage } from '../Styled/Additional.styled';
import { toastWindow } from '../utils/toastwindow.js';

const HomeRender = () => {
	const [movies, setMovies] = useState(null);

	useEffect(() => {
		fetchDayTrendingMovies()
			.then(({ results }) => setMovies(results))
			.catch(error => toastWindow(`Error loading trending movies (${error})`));
	}, []);

	return (
		<MoviesItems>
			{movies !== null ? (
				movies.length ? (
					<MoviesRender movies={movies} />
				) : (
					<ErrorMessage>No movies day tranding</ErrorMessage>
				)
			) : null}
		</MoviesItems>
	);
};

export default HomeRender;
