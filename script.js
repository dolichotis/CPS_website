const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        0: {spaceBetween: 16},
        601: {spaceBetween: 0},
    },

    slidesPerView: 'auto',
    cssMode: true,

});

let element = document.querySelector('.swiper-slide')

if (window.innerWidth > 600) {
    let wrapSize = document.querySelector('.brandsSwiper');
    let wrap = document.querySelector('.swiper-wrapper');
    wrap.classList.add("grid");
    wrap.classList.add("grid--hidden");
    wrap.classList.remove('swiper-wrapper');
    wrapSize.classList.add('swiper--size');
    wrapSize.classList.remove('swiper');
    element.style.marginRight = '32px';

    console.log(wrap);
    console.log(wrapSize);

    let buttonM = wrapSize.querySelector('.buttonMore');
    let buttonL = wrapSize.querySelector('.buttonLess');

    if (buttonM) {
        buttonM.addEventListener('click', function() {
            wrap.classList.add('grid--visible');
            wrap.classList.remove('grid--hidden');
            wrapSize.style.height = 'auto';
            buttonM.textContent = 'Скрыть';
            buttonM.classList.add('buttonLess');
            buttonM.classList.remove('buttonMore');
        });
    } else if (buttonL) {
        buttonL.addEventListener('click', function() {
            wrap.classList.add('grid--hidden');
            wrap.classList.remove('grid--visible');
            buttonL.textContent = 'Показать все';
            buttonL.classList.add('buttonMore');
            buttonL.classList.remove('buttonLess');
        });
    }


}





