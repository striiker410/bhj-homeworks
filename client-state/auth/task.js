//Задание №1

const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcomePage = document.getElementById('welcome');
const getId = localStorage.getItem('user_id');


const outBtn = document.createElement('button');
outBtn.textContent = 'Выйти';
outBtn.classList.add('outBtn');
outBtn.style= 'display: none';
document.querySelector('.card').prepend(outBtn);

document.querySelector('.outBtn').addEventListener('click', () => {
    localStorage.removeItem('user_id');
    location.reload();
})

if(getId) {
   signin.classList.remove('signin_active');  
   welcomePage.classList.add('welcome_active');
   document.querySelector('#user_id').textContent = getId; 
   outBtn.style.removeProperty('display');
}
 
form.addEventListener('submit', (i) => {
  i.preventDefault();
  
  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.send(formData);

  xhr.onload = () => {
    if(xhr.status < 200 || xhr.status > 299) {
       alert(JSON.parse(xhr.response).message); 
    } else if (JSON.parse(xhr.response).success == false) {
       alert('Неверный логин/пароль');
    } else {
       signin.classList.remove('signin_active');  
       welcomePage.classList.add('welcome_active');
       outBtn.style= '';
       document.querySelector('#user_id').textContent = JSON.parse(xhr.response).user_id;
       localStorage.setItem('user_id', JSON.parse(xhr.response).user_id);
    }
  }
})