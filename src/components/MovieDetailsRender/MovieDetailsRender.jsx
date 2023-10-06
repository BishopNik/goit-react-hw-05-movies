/** @format */

import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toastWindow } from '../utils/toastwindow.js';
import { fetchMovieDetails, apiKey } from '../utils/fetch_api.js';
import {
	MovieContainer,
	MovieUl,
	MovieContext,
	MovieTitle,
	MovieSpan,
	MovieItem,
	MovieOverview,
	MovieLi,
	MovieHomepage,
	MovieImg,
} from '../Styled/MovieDetails.styled.jsx';

const MovieDetailsRender = () => {
	const { id } = useParams(null);
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		if (!id) {
			return;
		}
		fetchMovieDetails(id)
			.then(({ data }) => setMovie(data))
			.catch(error => toastWindow(`Error loading movie details (${error})`));
	}, [id]);

	const path = movie?.poster_path
		? `https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key=${apiKey}`
		: `https://previews.123rf.com/images/yupiramos/yupiramos1802/yupiramos180216203/95810236-best-actor-award-vector-illustration.jpg`;

	return (
		<>
			{movie && (
				<MovieContainer key={movie.id}>
					<MovieTitle>{movie.title ?? movie.title ?? movie.original_title}</MovieTitle>
					<MovieUl>
						<li>
							<MovieImg src={path} alt={movie.title ?? movie.original_title} />
						</li>
						<li>
							<MovieContext>
								<MovieItem>
									{movie.release_date && (
										<p>
											Release date:
											<MovieSpan> {movie.release_date}</MovieSpan>
										</p>
									)}
								</MovieItem>
								<MovieItem>
									{movie.popularity && (
										<p>
											Popularity:<MovieSpan> {movie.popularity}</MovieSpan>
										</p>
									)}
								</MovieItem>
								<MovieItem>
									{movie.vote_average && (
										<p>
											Average<MovieSpan> {movie.vote_average}</MovieSpan>
										</p>
									)}
								</MovieItem>
								<MovieItem>
									<span>Production Countries:</span>
									<ul>
										{movie.production_countries &&
											movie.production_countries.map((item, idx) => (
												<MovieLi key={idx}>{item.name}</MovieLi>
											))}
									</ul>
								</MovieItem>
								<MovieItem>
									{movie.homepage && (
										<>
											<span>homepage:</span>
											<MovieHomepage href={movie.homepage}>
												{movie.homepage}
											</MovieHomepage>
										</>
									)}
								</MovieItem>
								<MovieItem>
									{movie.overview && (
										<>
											<span>Overview:</span>
											<MovieOverview>{movie.overview}</MovieOverview>
										</>
									)}
								</MovieItem>
								<MovieItem>
									<span>Genres:</span>
									<ul>
										{movie.genres &&
											movie.genres.map((item, idx) => (
												<MovieLi key={idx}>{item.name}</MovieLi>
											))}
									</ul>
								</MovieItem>
								<MovieItem>
									<Link to='cast'>Cast</Link>
								</MovieItem>
								<MovieItem>
									<Link to='reviews'>Reviews</Link>
								</MovieItem>
							</MovieContext>
						</li>
					</MovieUl>
				</MovieContainer>
			)}
		</>
	);
};

export default MovieDetailsRender;
