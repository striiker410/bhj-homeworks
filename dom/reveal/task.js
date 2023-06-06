//Задание №3

const revealElement = document.querySelectorAll('.reveal');

function isVisible(element) {
	const { top, bottom } = element.getBoundingClientRect();
	if (bottom < 0) {
		return false;
	}
	if (top > window.innerHeight) {
		return false;
	}
	return true;
}

function handleScroll() {
	revealElement.forEach(element => {
		if (isVisible(element)) {
			element.classList.add('reveal_active');
		}
	});
}

window.addEventListener('scroll', handleScroll);

handleScroll();