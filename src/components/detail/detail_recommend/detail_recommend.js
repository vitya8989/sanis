new Swiper('.detail_recommend_slider', {
    speed: 600,
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        nextEl: '.detail_recommend_slider__btn-next',
        prevEl: '.detail_recommend_slider__btn-prev'
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 4,
        },
        1600: {

            slidesPerView: 5,
        }
    }
});