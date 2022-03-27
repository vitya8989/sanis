new Swiper('.main_slider', {
    speed: 1000,
    slidesPerView: 1,
    navigation: {
        nextEl: '.main_slider__btn-next',
        prevEl: '.main_slider__btn-prev'
    },
    pagination: {
        el: '.main_slider__pagination',
        clickable: true,
    },
    autoplay: {
        delay: 6850,
    },
});