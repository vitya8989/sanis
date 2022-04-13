new Swiper('.certificates_slider', {
    speed: 600,
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        nextEl: '.certificates_slider__btn-next',
        prevEl: '.certificates_slider__btn-prev'
    },
    pagination: {
        el: '.certificates_slider__pagination',
        clickable: true,
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

let header = document.querySelector('.header');
let scrollBarWidth = window.innerWidth - header.offsetWidth + "px";

Fancybox.bind("[data-fancybox]", {
    on: {
        load: (fancybox) => {
            header.style.paddingRight = scrollBarWidth;
        },
        destroy: (fancybox) => {
            header.style.paddingRight = '0';
        }
    },
});
