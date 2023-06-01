//Задание №1

let modalMain = document.querySelector('#modal_main');
let modalClose = document.querySelectorAll('.modal__close');
let showSuccess = document.querySelector('.show-success');
let modalSuccess = document.querySelector('#modal_success');

modalMain.classList.add('modal_active');

modalClose.forEach((btn) => {
    btn.addEventListener('click', () => {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    })
} )


showSuccess.addEventListener('click', (event) => {
    event.preventDefault();
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
})

