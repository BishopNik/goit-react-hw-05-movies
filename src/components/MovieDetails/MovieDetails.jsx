/** @format */

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { fetchMovieDetails } from '../utils/fetch_api';

const MovieDetails = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState({});
	const location = useLocation();
	const locationMain = useRef(location.state?.from ?? '/movies');

	useEffect(() => {
		fetchMovieDetails(id)
			.then(({ data }) => setMovie(data))
			.catch(error => console.log(error));
	}, [id]);

	return (
		<>
			<Link to={locationMain.current}>Back to ...</Link>
			<h1>{movie.title ?? movie.original_title}</h1>
			<Link to='cast'>Cast</Link>
			<Link to='reviews'>Reviews</Link>
			<Outlet />
		</>
	);
};

export default MovieDetails;
