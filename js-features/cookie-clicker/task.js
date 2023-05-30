//Задание №2
const click = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

cookie.onclick = function() {
    if (cookie.width == 200) {
        cookie.width = 190;
        click.textContent ++;
    }

    else if (cookie.width == 190) {
        cookie.width = 200;
        click.textContent ++;
    }
}