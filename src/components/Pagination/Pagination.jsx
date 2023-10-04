/** @format */

import PropTypes from 'prop-types';
import {
	BsFillSkipForwardFill,
	BsFillSkipBackwardFill,
	BsArrowRightSquareFill,
	BsArrowLeftSquareFill,
} from 'react-icons/bs';
import Button from '../Button';
import { ButtonBox, StatusBox, StatContainer } from '../Styled/Pagination.styled';

function Pagination({
	page,
	countPage,
	onClickFirstPageButton,
	onClickLastPageButton,
	onClickChangePage,
}) {
	return (
		<StatusBox>
			{page > 0 && countPage > 1 && (
				<StatContainer>
					page: {page} / {countPage}
				</StatContainer>
			)}
			{page > 0 && countPage > 1 && (
				<ButtonBox>
					<Button className={'loadmore'} type={'button'} onClick={onClickFirstPageButton}>
						<BsFillSkipBackwardFill />
					</Button>
					<Button
						className={'loadmore'}
						type={'button'}
						onClick={() => onClickChangePage(-1)}
					>
						<BsArrowLeftSquareFill />
					</Button>
					{page !== countPage && (
						<>
							<Button
								className={'loadmore'}
								type={'button'}
								onClick={() => onClickChangePage(+1)}
							>
								<BsArrowRightSquareFill />
							</Button>
							<Button
								className={'loadmore'}
								type={'button'}
								onClick={onClickLastPageButton}
							>
								<BsFillSkipForwardFill />
							</Button>
						</>
					)}
				</ButtonBox>
			)}
		</StatusBox>
	);
}

Pagination.propTypes = {
	page: PropTypes.string,
	countPage: PropTypes.number,
	onClickFirstPageButton: PropTypes.func.isRequired,
	onClickLastPageButton: PropTypes.func.isRequired,
	onClickChangePage: PropTypes.func.isRequired,
};

export default Pagination;
