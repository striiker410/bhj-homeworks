//Задание №2

const fontSizes = document.querySelectorAll('.font-size');

fontSizes.forEach((fontSize) => {
	fontSize.addEventListener('click', (event) => {
		event.preventDefault();

		fontSizes.forEach((element) => {
			element.classList.remove('font-size_active');
		});

		fontSize.classList.add('font-size_active');

		const size = fontSize.getAttribute('data-size');

		const book = document.querySelector('#book');
		book.classList.remove('book_fs-small', 'book_fs-big');

		if (size === 'small') {
			book.classList.add('book_fs-small');
		} else if (size === 'big') {
			book.classList.add('book_fs-big');
		}
	});
});