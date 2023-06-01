//Задание №2

let links = document.querySelectorAll('.menu__link');
links.forEach((link) => {
    link.onclick = function (event)  {
        let parents = this.closest('.menu__item');
        let submenu = parents.querySelector('.menu_sub');
        if (submenu) {
            event.preventDefault();
            submenu.classList.toggle('menu_active');
        }
        
    }
}); 