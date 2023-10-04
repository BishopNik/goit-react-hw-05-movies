/** @format */

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesItems = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 30px;
	width: 80%;
	font-size: 18px;
	margin-top: 40px;
	margin-left: auto;
	margin-right: auto;
`;

export const MovieLink = styled(Link)`
	display: flex;
	justify-content: left;
	align-items: center;
	width: 40%;
	padding: 20px 50px;
	border: 1px solid lightgray;
	border-radius: 6px;
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		background-color: #ffe4c453;
		transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	}
`;
