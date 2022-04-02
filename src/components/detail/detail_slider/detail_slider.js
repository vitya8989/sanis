new Swiper('.detail_big_slider', {
    speed: 200,
    slidesPerView: 1,
    effect: 'fade',
    simulateTouch: true,
    allowTouchMove: true,
    loop: true,
    pagination: {
        el: '.detail_big_slider__pagination',
        clickable: true,
    },
    fadeEffect: {
        crossFade: true,
    },
    thumbs: {
        swiper: {
            el: '.detail_nav_slider',
            slidesPerView: 4,
            spaceBetween: 10,
        }
    },
    breakpoints: {
        960: {
            loop: false,
            allowTouchMove: false,
            simulateTouch: false,
        }
    }
});
