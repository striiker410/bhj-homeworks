//Задание №3

const tooltipElements = document.querySelectorAll('.has-tooltip');

const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

function elementClick(event) {
	event.preventDefault();

	const tooltipText = event.target.getAttribute('title');

	const { top, left, height } = event.target.getBoundingClientRect();
	tooltip.style.top = `${top + height}px`;
	tooltip.style.left = `${left}px`;

	tooltip.textContent = tooltipText;
	tooltip.classList.add('tooltip_active');

	window.addEventListener('scroll', hideTooltip);
}

function hideTooltip() {
	tooltip.classList.remove('tooltip_active');
}

tooltipElements.forEach((element) => {
	element.addEventListener('click', elementClick);
});