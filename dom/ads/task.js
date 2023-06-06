//Задание №1

const cases = document.querySelectorAll('.rotator__case');

function rotateCases() {
	for (let i = 0; i < cases.length; i++) {
		if (cases[i].classList.contains('rotator__case_active')) {
			cases[i].classList.remove('rotator__case_active');

			const nextIndex = (i + 1) % cases.length;

			cases[nextIndex].classList.add('rotator__case_active');

			const speed = parseInt(cases[nextIndex].getAttribute('data-speed'));

			setTimeout(rotateCases, speed);
			break;
		}
	}
}

setTimeout(rotateCases, 1000);