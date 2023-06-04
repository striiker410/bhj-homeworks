//Задание №3

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab__content");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", (event) => {
    let tabsChildren = event.target.parentElement.children;
    for (let i = 0; i < tabsChildren.length; i++) {
      tabsChildren[i].classList.remove("tab_active");
    }
    tabs[i].classList.add("tab_active");
    let tabContentChildren =
      event.target.parentElement.nextElementSibling.children;
    for (let i = 0; i < tabContentChildren.length; i++) {
      tabContentChildren[i].classList.remove("tab__content_active");
    }
    contents[i].classList.add("tab__content_active");
  });
}