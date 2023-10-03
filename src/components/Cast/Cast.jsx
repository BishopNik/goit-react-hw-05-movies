/** @format */

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieOption, apiKey } from '../utils/fetch_api';

const Cast = () => {
	const { id } = useParams();
	const [option, setOption] = useState([]);

	useEffect(() => {
		fetchMovieOption(id, 'credits')
			.then(({ data }) => setOption(data))
			.catch(error => console.log(error));
	}, [id]);

	return (
		<div>
			<p>Cast</p>
			<ul>
				{option.cast?.length > 0 ? (
					option.cast?.map(item => {
						const path = item.profile_path
							? `https://image.tmdb.org/t/p/w500${item.profile_path}?api_key=${apiKey}`
							: `https://klike.net/uploads/posts/2019-03/1551511818_27.jpg`;

						return (
							<li key={item.id}>
								<span>{item.name}</span>
								<span>{item.chracter}</span>
								{path ? <img src={path} alt={item.name} width='100px' /> : null}
							</li>
						);
					})
				) : (
					<p>Cast not found</p>
				)}
			</ul>
		</div>
	);
};

export default Cast;
