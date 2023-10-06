/** @format */

import { useEffect, useState } from 'react';
import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { toastWindow, toastInfo } from '../components/utils/toastwindow.js';
import { fetchFilmsItems } from '../components/utils/fetch_api.js';
import MoviesRender from '../components/MoviesRender';
import SearchFormRender from '../components/SearchFormRender';
import Pagination from '../components/Pagination';
import { MoviesItems } from '../components/Styled/Home.styled.jsx';
import { BackLink, BackCont, ErrorMessage } from '../components/Styled/Additional.styled.jsx';

const Movies = () => {
	const location = useLocation();
	const [queryValue, setQueryValue] = useSearchParams();
	const backLink = location.state?.from ?? '/';

	const [movies, setMovies] = useState([]);
	const [totalPages, setTotalPages] = useState(null);

	useEffect(() => {
		const movieName = queryValue.get('query') ?? '';
		const curPage = queryValue.get('page');
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
	}, [queryValue]);

	const updateQueryString = (query, page) => {
		const nextQuery = query !== '' ? { query, page } : {};
		setQueryValue(nextQuery);
	};

	const onClickFirstPageButton = () => {
		const movieName = queryValue.get('query');
		updateQueryString(movieName, 1);
		toastInfo('First page');
	};

	const onClickLastPageButton = () => {
		const movieName = queryValue.get('query');
		updateQueryString(movieName, totalPages);
		toastInfo('Last page');
	};

	const onClickChangePage = pg => {
		const currentPage = parseInt(queryValue.get('page'));
		const movieName = queryValue.get('query');

		switch (pg) {
			case -1:
				if (currentPage > 1) {
					updateQueryString(movieName, currentPage - 1);
				} else toastInfo('First page');
				break;

			case 1:
				if (currentPage < totalPages) {
					updateQueryString(movieName, currentPage + 1);
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

			<SearchFormRender
				onSubmitForm={updateQueryString}
				queryString={queryValue.get('query')}
			/>

			<MoviesItems>
				{movies?.length ? (
					<MoviesRender movies={movies} />
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
