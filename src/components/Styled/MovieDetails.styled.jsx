/** @format */

import styled from 'styled-components';

const MovieContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 70%;
	margin-left: auto;
	margin-right: auto;
`;
const MovieTitle = styled.h1`
	font-size: 40px;
	font-weight: 700;
`;

const MovieUl = styled.ul`
	display: flex;
	gap: 50px;
	list-style: none;
	font-size: 18px;
`;

const MovieContext = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const MovieItem = styled.li`
	padding: 0 15px;
	font-weight: 600;
`;

const MovieLi = styled.li`
	padding: 8px 0;
	font-weight: 400;
`;

const MovieSpan = styled.span`
	padding: 0 15px;
	font-weight: 400;
`;

const MovieOverview = styled.p`
	padding: 10px 15px;
	font-weight: 400;
`;

const MovieHomepage = styled.a`
	padding: 10px 15px;
	font-weight: 400;
`;

const MovieImg = styled.img`
	max-width: 600px;
`;

export {
	MovieContainer,
	MovieUl,
	MovieContext,
	MovieTitle,
	MovieItem,
	MovieLi,
	MovieOverview,
	MovieSpan,
	MovieHomepage,
	MovieImg,
};
