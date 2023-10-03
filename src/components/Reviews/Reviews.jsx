/** @format */

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieOption } from '../utils/fetch_api';

const Reviews = () => {
	const { id } = useParams();
	const [option, setOption] = useState({});

	useEffect(() => {
		fetchMovieOption(id, 'reviews')
			.then(({ data }) => setOption(data))
			.catch(error => console.log(error));
	}, [id]);
	return (
		<main>
			<h1>Reviews</h1>
		</main>
	);
};

export default Reviews;
