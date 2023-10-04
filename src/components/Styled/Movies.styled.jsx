/** @format */

import styled from 'styled-components';

const SearchForm = styled.form`
	text-align: center;
`;

const SearchInput = styled.input`
	width: 500px;
	height: 50px;
	border-radius: 6px;
	outline: none;
	padding: 5px 15px;
	font-size: 18px;
`;

const SearchButton = styled.button`
	width: 100px;
	height: 50px;
	border-radius: 6px;
	margin-left: 35px;
	padding: 5px 15px;
	font-size: 18px;
	cursor: pointer;
	transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
		background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		color: peru;
		background-color: #ffe4c453;
		transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
			background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	}
`;

export { SearchForm, SearchInput, SearchButton };
