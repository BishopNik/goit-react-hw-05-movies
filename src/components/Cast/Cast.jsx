/** @format */

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieOption, apiKey } from '../utils/fetch_api';
import { Title, ContentList, CastItem, ErrorMessage, Img } from '../Styled/Additional.styled';

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
			<Title>Cast</Title>
			<ContentList>
				{option.cast?.length > 0 ? (
					option.cast?.map(item => {
						const path = item.profile_path
							? `https://image.tmdb.org/t/p/w500${item.profile_path}?api_key=${apiKey}`
							: `https://previews.123rf.com/images/yupiramos/yupiramos1802/yupiramos180216203/95810236-best-actor-award-vector-illustration.jpg`;

						return (
							<CastItem key={item.id}>
								<span>{item.name}</span>
								<span>{item.chracter}</span>
								{path ? <Img src={path} alt={item.name} /> : null}
							</CastItem>
						);
					})
				) : (
					<ErrorMessage>Cast not found</ErrorMessage>
				)}
			</ContentList>
		</div>
	);
};

export default Cast;
