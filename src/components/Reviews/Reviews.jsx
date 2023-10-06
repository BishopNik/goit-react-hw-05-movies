/** @format */

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toastWindow } from '../utils/toastwindow.js';
import { fetchMovieOption } from '../utils/fetch_api';
import { dateToString } from '../utils/utils';

import {
	ContentBlock,
	AddItem,
	TextReview,
	Author,
	ErrorMessage,
	Title,
} from '../Styled/Additional.styled';

const Reviews = () => {
	const { id } = useParams();
	const [option, setOption] = useState(null);

	useEffect(() => {
		fetchMovieOption(id, 'reviews')
			.then(({ data }) => {
				setOption(data.results);
			})
			.catch(error => toastWindow(`Error loading reviews (${error})`));
	}, [id]);

	return (
		<>
			{option !== null ? (
				<>
					{option.length > 0 ? <Title>Reviews</Title> : null}
					<ContentBlock>
						{option.length > 0 ? (
							option.map(item => {
								const date = dateToString(item.created_at);
								return (
									<AddItem key={item.id}>
										<span>
											Write <Author>{item.author}</Author> at {date}
										</span>
										<TextReview>{item.content}</TextReview>
										<a href={item.url}>Original review</a>
									</AddItem>
								);
							})
						) : (
							<ErrorMessage>Reviews not found</ErrorMessage>
						)}
					</ContentBlock>
				</>
			) : null}
		</>
	);
};

export default Reviews;
