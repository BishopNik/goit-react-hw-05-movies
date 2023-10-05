/** @format */

import { useEffect, useState } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { toastWindow, toastInfo } from '../utils/toastwindow.js';
import { fetchFilmsItems } from '../utils/fetch_api';
import MovieDetails from '../MovieDetails';
import Pagination from '../Pagination';
import { MoviesItems } from '../Styled/Home.styled';
import { BackLink, BackCont, ErrorMessage } from '../Styled/Additional.styled';
import { SearchForm, SearchInput, SearchButton } from '../Styled/Movies.styled';
import { MovieLink } from '../Styled/Home.styled';

const Movies = () => {
	const location = useLocation();

	const [value, setValue] = useState('');
	const [queryValue, setQueryValue] = useSearchParams();
	const [movies, setMovies] = useState([]);
	const [totalPages, setTotalPages] = useState(null);
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
			.catch(error => toastWindow(`Error loading movies (${error})`));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [queryValue]);

	const updateQueryString = (query, page) => {
		const nextQuery = query !== '' ? { query, page } : {};
		setQueryValue(nextQuery);
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) {
			return;
		}
		updateQueryString(value, 1);
	};

	const onClickFirstPageButton = () => {
		updateQueryString(value, 1);
		toastInfo('First page');
	};

	const onClickLastPageButton = () => {
		updateQueryString(value, totalPages);
		toastInfo('Last page');
	};

	const onClickChangePage = pg => {
		const currentPage = parseInt(queryValue.get('page'));

		switch (pg) {
			case -1:
				if (currentPage > 1) {
					updateQueryString(value, currentPage - 1);
				} else toastInfo('First page');
				break;

			case 1:
				if (currentPage < totalPages) {
					updateQueryString(value, currentPage + 1);
				} else toastInfo('Last page');
				break;

			default:
				break;
		}
	};

	return (
		<>
			<BackCont>
				<BackLink to={backLink}>Back to ...</BackLink>
			</BackCont>

			<SearchForm onSubmit={handleSubmit}>
				<SearchInput
					type='text'
					value={value}
					placeholder='Search movies'
					onChange={({ target }) => setValue(target.value)}
				/>
				<SearchButton type='submit'>Search</SearchButton>
			</SearchForm>

			<MoviesItems>
				{movies?.length ? (
					movies.map(movie => (
						<MovieLink
							key={movie.id}
							to={`/movies/${movie.id}`}
							element={<MovieDetails />}
							state={{ from: location }}
						>
							{movie.title ?? movie.original_title}
						</MovieLink>
					))
				) : queryValue.get('query') && totalPages !== null ? (
					<ErrorMessage>Movies not found</ErrorMessage>
				) : null}
			</MoviesItems>

			<Pagination
				page={queryValue.get('page')}
				countPage={totalPages}
				onClickFirstPageButton={onClickFirstPageButton}
				onClickLastPageButton={onClickLastPageButton}
				onClickChangePage={onClickChangePage}
			/>
			<Outlet />
		</>
	);
};

export default Movies;
