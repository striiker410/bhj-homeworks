//Задание №3
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i < 10; i++) {
    const hole = getHole(i);
    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent++
        }

        else {
            lost.textContent++;
        }

        if (dead.textContent ==10) {
            alert('Победа!');
            dead.textContent = 0;
            lost.textContent = 0;
        }

        else if (lost.textContent == 5) {
            alert('Вы проиграли');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
}