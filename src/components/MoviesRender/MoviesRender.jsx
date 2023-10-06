/** @format */

import { useLocation } from 'react-router-dom';
import MovieDetails from '../MovieDetailsRender';
import { MovieLink } from '../Styled/Home.styled';

const MoviesRender = ({ movies }) => {
	const location = useLocation();
	return movies.map(movie => (
		<MovieLink
			key={movie.id}
			to={`/movies/${movie.id}`}
			element={<MovieDetails />}
			state={{ from: location }}
		>
			{movie.name ?? movie.title ?? movie.original_title}
		</MovieLink>
	));
};

export default MoviesRender;
