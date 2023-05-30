//Задание №1
const timer = document.getElementById('timer');

const timerId = setInterval(() => {
    const value = timer.textContent;
    timer.textContent = value - 1;

    if (value == 1) {
        alert('Вы победили в конкурсе!');
        clearInterval(timerId);
    }
}, 100);