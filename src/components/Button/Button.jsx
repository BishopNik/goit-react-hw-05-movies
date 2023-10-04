/** @format */

import PropTypes from 'prop-types';
import { ButtonStyled } from '../Styled/Pagination.styled';

function Button({ className, type, children, onClick }) {
	return (
		<ButtonStyled className={className} type={type} onClick={onClick}>
			{children}
		</ButtonStyled>
	);
}

Button.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
};

export default Button;
