//Задание №3

let sliders = document.querySelectorAll('.slider__item');
let arrowNext = document.querySelector('.slider__arrow_prev');
let arrowPrev = document.querySelector('.slider__arrow_next');

let sliderShow = (index) => {
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].classList.remove('slider__item_active');



    }

    sliders[index].classList.add('slider__item_active');

}

let prevSlide = () => {

    let currentIndex = Array.from(sliders).findIndex(slider => slider.classList.contains('slider__item_active'));
    let newIndex  = (currentIndex + 1) % sliders.length;
    sliderShow(newIndex);

}

let nextSlide = () => {

    let currentIndex = Array.from(sliders).findIndex(slide => slide.classList.contains('slider__item_active'));
    let newIndex = (currentIndex - 1 + sliders.length) % sliders.length;
    sliderShow(newIndex);

}

arrowNext.addEventListener('click', nextSlide);
arrowPrev.addEventListener('click', prevSlide);
