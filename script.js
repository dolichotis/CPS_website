const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        0: {spaceBetween: 16,
            cssMode: true},
        768: {spaceBetween: 0},
    },

});

let element = document.querySelector('.swiper-slide')

if (window.innerWidth >= 768) {
    let wrapSize = document.querySelector('.brandsSwiper');
    let wrap = document.querySelector('.swiper-wrapper');
    let wrapSlide = wrap.querySelector('.contentCard');

    wrap.classList.add("grid");
    wrap.classList.add("grid--hidden");
    wrapSize.classList.remove('swiper');
    wrap.classList.remove('swiper-wrapper');
    wrapSize.classList.add('swiper--size');
    wrapSlide.classList.remove('swiper-slide');


    let buttonSwiper = wrapSize.querySelector('.brandsSwiper__button');

    buttonSwiper.addEventListener('click', function () {
        if (wrapSize.querySelector('.buttonMore')) {
            wrap.classList.add('grid--visible');
            wrap.classList.remove('grid--hidden');
            wrapSize.style.height = 'auto';
            buttonSwiper.textContent = 'Скрыть';
            buttonSwiper.classList.add('buttonLess');
            buttonSwiper.classList.remove('buttonMore');
        } else if (wrapSize.querySelector('.buttonLess')) {
            wrap.classList.add('grid--hidden');
            wrap.classList.remove('grid--visible');
            buttonSwiper.textContent = 'Показать все';
            buttonSwiper.classList.add('buttonMore');
            buttonSwiper.classList.remove('buttonLess');
        }
    });
}





