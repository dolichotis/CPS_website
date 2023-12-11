if (window.innerWidth < 768) {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        slidesPerView: 'auto',

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 16,

    });
}

if (window.innerWidth >= 768) {
    let brandsSwiper = document.querySelector('.brandsSwiper');
    let wrapperBrandsSwiper = brandsSwiper.querySelector('.brandsSwiper__wrapper');
    let contentCard = wrapperBrandsSwiper.querySelector('.contentCard');

    contentCard.classList.remove('swiper-slide');
    wrapperBrandsSwiper.classList.remove('swiper-wrapper');
    brandsSwiper.classList.remove('swiper');

    brandsSwiper.classList.add('brandsSwiper--margins');

    let buttonSwiper = brandsSwiper.querySelector('.brandsSwiper__button');

    buttonSwiper.addEventListener('click', function () {
        if (brandsSwiper.querySelector('.buttonMore')) {
            buttonSwiper.textContent = 'Скрыть';
            wrapperBrandsSwiper.style.overflow = 'visible';
            wrapperBrandsSwiper.style.height = 'auto';

            buttonSwiper.classList.add('buttonLess');
            buttonSwiper.classList.remove('buttonMore');
            console.log('ddfdgd');
        } else if (brandsSwiper.querySelector('.buttonLess')) {
            buttonSwiper.textContent = 'Показать все';
            wrapperBrandsSwiper.style.overflow = 'hidden';
            wrapperBrandsSwiper.style.height = '160px';

            buttonSwiper.classList.remove('buttonMore');
            buttonSwiper.classList.add('buttonLess');
        }
    });
}

/*
let element = document.querySelector('.swiper-slide')

if (window.innerWidth >= 768) {
    let wrapSize = document.querySelector('.brandsSwiper');
    let wrap = document.querySelector('.swiper-wrapper');
    let wrapSlide = wrap.querySelector('.contentCard');

    wrapSize.classList.remove('swiper');
    wrap.classList.add("grid");
    wrap.classList.add("grid--hidden");
    wrap.classList.remove('swiper-wrapper');
    wrapSize.classList.add('swiper--size');
    wrapSlide.classList.remove('swiper-slide');
    console.log(wrapSize);

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


 */




