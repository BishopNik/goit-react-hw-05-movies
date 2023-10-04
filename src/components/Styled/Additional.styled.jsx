/** @format */

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContentList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	width: 80%;
	justify-content: space-evenly;
	margin-left: auto;
	margin-right: auto;
	list-style: none;
	padding: 0;
`;

export const ContentBlock = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 80%;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	list-style: none;
	padding: 0;
`;

export const Title = styled.li`
	font-weight: 600;
	margin-top: 30px;
	margin-bottom: 30px;
	padding: 20px;
	text-align: center;
	list-style: none;
	font-size: 35px;
	border-top: 1px solid black;
`;

export const CastItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	padding: 10px;
	font-size: 20px;
	border: 1px solid gray;
	box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
	border-radius: 6px;
`;

export const AddItem = styled.li`
	display: flex;
	flex-direction: column;
	padding: 10px;
	font-size: 20px;
	border: 1px solid gray;
	box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
	border-radius: 6px;
`;

export const TextReview = styled.p`
	text-align: justify;
`;

export const Author = styled.span`
	color: #8c485e;
	font-weight: 600;
`;

export const Img = styled.img`
	object-fit: cover;
	width: 200px;
	height: 300px;
`;

export const ErrorMessage = styled.p`
	padding: 40px;
	text-align: center;
	font-size: 36px;
	color: black;
	font-weight: 600;
	border-top: 1px solid black;
`;

export const BackCont = styled.div`
	display: flex;
	padding: 0 30px;
`;

export const BackLink = styled(Link)`
	padding: 3px 15px;
	border: 1px solid gray;
	border-radius: 6px;
	background-color: #d3d3d362;
`;
