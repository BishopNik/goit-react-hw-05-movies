/** @format */

const dateToString = date => {
	const dateCreated = new Date(date);
	const year = dateCreated.getFullYear();
	const month = dateCreated.getMonth();
	const day = dateCreated.getDate();

	return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
};

export { dateToString };
