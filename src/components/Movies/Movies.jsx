/** @format */

import { useEffect, useState } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import toastWindow from '../utils/toastwindow.js';
import { fetchFilmsItems } from '../utils/fetch_api';
import MovieDetails from '../MovieDetails';
import { MoviesItems } from '../Styled/Home.styled';
import { BackLink, BackCont, ErrorMessage } from '../Styled/Additional.styled';
import { SearchForm, SearchInput, SearchButton } from '../Styled/Movies.styled';
import { MovieLink } from '../Styled/Home.styled';
import Pagination from '../Pagination';

const Movies = () => {
	const location = useLocation();

	const [value, setValue] = useState('');
	const [queryValue, setQueryValue] = useSearchParams();
	const [movies, setMovies] = useState([]);
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
		toastWindow('First page');
		// Notify.info('First page');
	};

	const onClickLastPageButton = () => {
		updateQueryString(value, totalPages);
		toastWindow('Last page');
		// Notify.info('Last page');
	};

	const onClickChangePage = pg => {
		const currentPage = parseInt(queryValue.get('page'));

		switch (pg) {
			case -1:
				if (currentPage > 1) {
					updateQueryString(value, currentPage - 1);
					toastWindow('First page');
				} // else Notify.info('First page');
				break;

			case 1:
				if (currentPage < totalPages) {
					updateQueryString(value, currentPage + 1);
					toastWindow('Last page');
				} // else Notify.info('Last page');
				break;

			default:
				break;
		}
	};

	return (
		<div>
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
				) : queryValue.get('query') ? (
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
			<ToastContainer position='top-right' autoClose={5000} hideProgressBar={false} />
		</div>
	);
};

export default Movies;
