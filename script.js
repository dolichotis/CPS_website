const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        350: {
            slidesPerView: 1.25,
        },
        480: {
            slidesPerView: 1.75,
        },
        580: {
            slidesPerView: 2.25,
        },
        680: {
            slidesPerView: 2.5,
        }
    },

    touchRatio: 1,

    grabCursor: true,

    centeredSlides: true,

    freeMode: true,

    initialSlide: 0,

});