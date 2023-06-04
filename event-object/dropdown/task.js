//Задание №1

const clickMain = document.querySelector(".dropdown__value");
const list = document.querySelector(".dropdown__list");
const clickItem = Array.from(document.querySelectorAll(".dropdown__link"));

clickMain.addEventListener("click", () => {
  list.classList.toggle("dropdown__list_active");
});

[...clickItem].forEach((e) => {
  e.addEventListener("click", (a) => {
    a.preventDefault();
    clickMain.textContent = e.textContent;
    list.classList.remove("dropdown__list_active");
  });
});