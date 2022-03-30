setTimeout(() => {
    let mainSlider = new Swiper('.main_slider', {
        speed: 1000,
        slidesPerView: 1,
        autoHeight: true,
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
}, 200);
setTimeout(() => { mainSlider.updateAutoHeight() }, 350);