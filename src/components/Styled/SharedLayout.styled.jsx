/** @format */

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
	background-color: white;
	color: darkblue;
	text-decoration: none;
	transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	padding: 7px 12px;
	border-radius: 5px;

	&.active {
		color: white;
		background-color: blue;
	}

	&:hover {
		color: red;
		transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	&.active:hover {
		color: #f74845;
		transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	}
`;

export const NavMenu = styled.nav`
	display: flex;
	gap: 50px;
	margin-bottom: 20px;
	padding: 14px 60px;
	border-bottom: 1px solid black;
	box-shadow: 0px 0px 5px 0px gray;
	font-size: 24px;
	font-weight: 600;
	color: darkblue;
`;
