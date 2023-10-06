/** @format */

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { SearchForm, SearchInput, SearchButton } from '../Styled/Movies.styled';

const SearchFormRender = ({ onSubmitForm, queryString }) => {
	const [value, setValue] = useState('');

	useEffect(() => {
		setValue(queryString);
	}, [queryString]);

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) {
			return;
		}
		onSubmitForm(value, 1);
	};

	return (
		<SearchForm onSubmit={handleSubmit}>
			<SearchInput
				type='text'
				value={value}
				placeholder='Search movies'
				onChange={({ target }) => setValue(target.value)}
			/>
			<SearchButton type='submit'>Search</SearchButton>
		</SearchForm>
	);
};

SearchFormRender.propTypes = {
	onSubmitForm: PropTypes.func.isRequired,
};

export default SearchFormRender;
