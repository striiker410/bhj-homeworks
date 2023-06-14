//Задание №2

const openModal = document.querySelector('#subscribe-modal');
const closeModal = document.querySelector('.modal__close');

if(document.cookie.includes('closemodal') == false) {
   openModal.classList.add('modal_active');
}

closeModal.addEventListener('click', () => {
  openModal.classList.remove('modal_active');
  document.cookie = 'closemodal=true';
})