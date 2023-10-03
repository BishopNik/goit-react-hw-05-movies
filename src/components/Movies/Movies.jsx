/** @format */

import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { fetchFilmsItems } from '../utils/fetch_api';
import MovieDetails from '../MovieDetails';
import { MoviesItems } from '../Home/Home.styled';

const Movies = () => {
	const location = useLocation();

	const [value, setValue] = useState('');
	const [queryValue, setQueryValue] = useSearchParams();
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const backLink = location.state?.from ?? '/';

	useEffect(() => {
		const movieName = queryValue.get('query') ?? '';
		const curPage = queryValue.get('page');
		setValue(movieName);
		if (!movieName) {
			return;
		}
		const searchParam = {
			page: curPage,
			searchItem: movieName,
			include_adult: true,
			lang: 'en-US',
		};
		fetchFilmsItems(searchParam)
			.then(data => {
				setTotalPages(data.total_pages);
				setMovies(data.results);
			})
			.catch(error => console.log(error));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, queryValue]);

	const updateQueryString = (query, page) => {
		const nextQuery = query !== '' ? { query, page } : {};
		setQueryValue(nextQuery);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) {
			return;
		}
		setPage(1);
		updateQueryString(value, page);
	};

	const handleMorePage = () => {
		const movieName = queryValue.get('query');
		const currentPage = parseInt(queryValue.get('page'));
		if (currentPage <= totalPages) {
			const nextPage = currentPage + 1;
			setPage(nextPage);
			updateQueryString(movieName, nextPage);
		}
	};

	return (
		<main>
			<Link to={backLink}>Back to ...</Link>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={value}
					onChange={({ target }) => setValue(target.value)}
				/>
				<button type='submit'>Search</button>
			</form>

			<MoviesItems>
				{movies?.length ? (
					movies.map(movie => (
						<Link
							key={movie.id}
							to={`/movies/${movie.id}`}
							element={<MovieDetails />}
							state={{ from: location }}
						>
							{movie.title ?? movie.original_title}
						</Link>
					))
				) : (
					<span>No movies day tranding</span>
				)}
			</MoviesItems>

			<button type='button' onClick={handleMorePage}>
				next
			</button>

			<Outlet />
		</main>
	);
};

export default Movies;
