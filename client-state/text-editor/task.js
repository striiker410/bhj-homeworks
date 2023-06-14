//Задание №3

const textArea = document.querySelector('#editor');
const clearText = document.querySelector('#button');
const storedText = localStorage.getItem('textInTextarea');

if(storedText) {
   textArea.value = storedText;  
  }

textArea.onkeyup = () => {
  localStorage.setItem('textInTextarea', textArea.value); 
}

clearText.addEventListener('click', () => {
  localStorage.removeItem('textInTextarea');
  textArea.value = '';
})