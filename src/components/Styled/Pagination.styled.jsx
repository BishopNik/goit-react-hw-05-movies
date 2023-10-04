/** @format */

import styled from 'styled-components';

const ButtonBox = styled.div`
	display: flex;
	justify-content: center;
	gap: 30px;
`;

const ButtonStyled = styled.button`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 80px;
	height: 30px;
	border-radius: 6px;
	border: 0.5px solid gray;
	cursor: pointer;
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		background-color: #ffe4c453;
		transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	}
`;

const StatusBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 100px;
	width: 100vw;
	padding: 30px 0;
`;

const StatContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 25px;
	font-size: 16px;
	width: 180px;
	height: 30px;
	border-radius: 6px;
	border: 0.5px solid gray;
	background-color: #d3d3d35b;
`;

export { ButtonStyled, ButtonBox, StatusBox, StatContainer };
