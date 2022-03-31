let aboutSlider = new Swiper('.about__slider', {
    speed: 1000,
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
        nextEl: '.about_slider__btn-next',
        prevEl: '.about_slider__btn-prev'
    },
    breakpoints: {
        960: {
            spaceBetween: 30,
            slidesPerView: 1,
        }
    }
});

let aboutDatesPoints = document.querySelectorAll('.about__dates_point');
let aboutDatesBlackLine = document.querySelector('.about__dates_black_line');
let aboutDates = document.querySelector('.about__dates');
let aboutDatesLine = document.querySelector('.about__dates_line');


for (let i = 0; i < aboutDatesPoints.length; i++) {
    aboutDatesPoints[i].onclick = () => {
        aboutSlider.slideTo(i);
        for (let k = 0; k < aboutDatesPoints.length; k++) {
            aboutDatesPoints[k].classList.remove('active');
        }
        for (let j = 0; j <= i; j++) {
            aboutDatesPoints[j].classList.add('active');
        }
        let blackLineWidth = (100 / aboutDatesPoints.length) * i + 8;
        let pointsWidth = i * 7;
        if (i === aboutDatesPoints.length - 1) {
            aboutDatesBlackLine.style.width = `calc(100% - 45px)`;
        } else {
            aboutDatesBlackLine.style.width = `calc(${blackLineWidth}% + ${pointsWidth}px - 20px)`;
        }
    }
}
console.log(aboutDatesLine.offsetWidth);
aboutSlider.on('slideNextTransitionStart', function () {
    for (let k = 0; k < aboutDatesPoints.length; k++) {
        aboutDatesPoints[k].classList.remove('active');
    }
    for (let j = 0; j <= aboutSlider.activeIndex; j++) {
        aboutDatesPoints[j].classList.add('active');
    }
    if (aboutSlider.activeIndex > 2) {
        aboutDates.scrollLeft += aboutDatesLine.offsetWidth / 9;
    }
    let blackLineWidth = (100 / aboutDatesPoints.length) * aboutSlider.activeIndex + 8;
    let pointsWidth = aboutSlider.activeIndex * 7;
    if (aboutSlider.activeIndex === aboutDatesPoints.length - 1) {
        aboutDatesBlackLine.style.width = `calc(100% - 45px)`;
    } else {
        aboutDatesBlackLine.style.width = `calc(${blackLineWidth}% + ${pointsWidth}px - 20px)`;
    }
});

aboutSlider.on('slidePrevTransitionStart', function () {
    for (let k = 0; k < aboutDatesPoints.length; k++) {
        aboutDatesPoints[k].classList.remove('active');
    }
    for (let j = 0; j <= aboutSlider.activeIndex; j++) {
        aboutDatesPoints[j].classList.add('active');
    }
    if (aboutSlider.activeIndex < 7) {
        aboutDates.scrollLeft -= aboutDatesLine.offsetWidth / 9;
    }
    let blackLineWidth = (100 / aboutDatesPoints.length) * aboutSlider.activeIndex + 8;
    let pointsWidth = aboutSlider.activeIndex * 7;
    if (aboutSlider.activeIndex === aboutDatesPoints.length - 1) {
        aboutDatesBlackLine.style.width = `calc(100% - 45px)`;
    } else {
        aboutDatesBlackLine.style.width = `calc(${blackLineWidth}% + ${pointsWidth}px - 20px)`;
    }
});