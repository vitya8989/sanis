// Появление формы поиска

let headerSearchBtn = document.querySelector('.header__search_btn');
let headerSearchForm = document.querySelector('.header__search_form');
let headerSearchInput = document.querySelector('.header__search');
let wrapper = document.querySelector('.wrapper');

headerSearchBtn.onclick = (e) => {
    e.preventDefault();
    headerSearchForm.classList.toggle('this--hidden');
    headerSearchBtn.classList.toggle('active');
    if (!headerSearchForm.classList.contains('this--hidden')) {
        setTimeout(() => { headerSearchInput.focus();}, 30);
    } else {
        headerSearchInput.blur();
        headerSearchInput.value = '';
    }
};

// Убираем поиск по клику на проивольное место

wrapper.onclick = (e) => {
    if (!e.target.closest('.header__search') && !e.target.closest('.header__search_btn') && !headerSearchForm.classList.contains('this--hidden')) {
        headerSearchForm.classList.add('this--hidden');
        headerSearchBtn.classList.remove('active');
        headerSearchInput.value = '';
    }
}

// Добавляем активный класс кнопкам

let headerProfileBtn = document.querySelector('.header__profile_btn');
let headerBasketBtn = document.querySelector('.header__basket_btn');

headerProfileBtn.onclick = (e) => {
    e.preventDefault();
    headerProfileBtn.classList.toggle('active');
};

headerBasketBtn.onclick = (e) => {
    e.preventDefault();
    headerBasketBtn.classList.toggle('active');
};

// Бургер и мобильное меню

let headerBurger = document.querySelector('.header__burger');
let mobileMenu = document.querySelector('.header__bottom_menu ');

headerBurger.onclick = function () {
    document.body.classList.toggle('this--overflow');
    headerBurger.classList.toggle('burger-open');
    mobileMenu.classList.toggle('menu-open');
}

//Переносим элементы в мобильное меню

let headerCounts = document.querySelector('.header__counts');
let headerCountsMobWr = document.querySelector('.header__counts_mob_wr');
let headerSearchMobWr = document.querySelector('.header__search_mob_wr');
let headerSearchWr = document.querySelector('.header__search_wr');

if (window.innerWidth < 959) {
    headerCountsMobWr.append(headerCounts);
    headerSearchMobWr.append(headerSearchForm);
};

window.addEventListener('resize', () => {
    if (window.innerWidth < 959) {
        headerCountsMobWr.append(headerCounts);
        headerSearchMobWr.append(headerSearchForm);
    } else {
        headerSearchWr.append(headerSearchForm);
        document.querySelector('.header__bottom_content').insertBefore(headerCounts, document.querySelector('.header__icons_search'));
    }
});;
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
});;
// Кнопка "Показать всех"

let partnersBtn = document.querySelector('.partners__btn');
let partnersItems = document.querySelector('.partners__items');

partnersBtn.onclick = () => {
    partnersItems.classList.remove('this--limited');
    partnersBtn.classList.add('this--hidden');
};
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
            aboutDatesBlackLine.style.width = `calc(100% - 40px)`;
        } else {
            aboutDatesBlackLine.style.width = `calc(${blackLineWidth}% + ${pointsWidth}px - 20px)`;
        }
    }
}

aboutSlider.on('slideNextTransitionStart', function () {
    for (let k = 0; k < aboutDatesPoints.length; k++) {
        aboutDatesPoints[k].classList.remove('active');
    }
    for (let j = 0; j <= aboutSlider.activeIndex; j++) {
        aboutDatesPoints[j].classList.add('active');
    }
    let blackLineWidth = (100 / aboutDatesPoints.length) * aboutSlider.activeIndex + 8;
    let pointsWidth = aboutSlider.activeIndex * 7;
    if (aboutSlider.activeIndex === aboutDatesPoints.length - 1) {
        aboutDatesBlackLine.style.width = `calc(100% - 40px)`;
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
    let blackLineWidth = (100 / aboutDatesPoints.length) * aboutSlider.activeIndex + 8;
    let pointsWidth = aboutSlider.activeIndex * 7;
    if (aboutSlider.activeIndex === aboutDatesPoints.length - 1) {
        aboutDatesBlackLine.style.width = `calc(100% - 40px)`;
    } else {
        aboutDatesBlackLine.style.width = `calc(${blackLineWidth}% + ${pointsWidth}px - 20px)`;
    }
});;
let mainVideoVideo = document.querySelector('.main_video__video');
let mainVideoBtn = document.querySelector('.main_video__btn');

mainVideoBtn.onclick = () => {
    mainVideoVideo.play();
    mainVideoBtn.classList.add('this--hidden');
}
mainVideoVideo.onclick = () => {
    mainVideoVideo.pause();
    mainVideoBtn.classList.remove('this--hidden');
}
mainVideoVideo.onended = () => {
    mainVideoBtn.classList.remove('this--hidden');
};
new Swiper('.novelties_slider', {
    speed: 600,
    slidesPerView: 'auto',
    spaceBetween: 10,
    navigation: {
        nextEl: '.novelties_slider__btn-next',
        prevEl: '.novelties_slider__btn-prev'
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
});;
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.752648, 37.603846],
        zoom: 17
    });
    var placemark = new ymaps.Placemark([55.752648, 37.603846], {
            iconColor: 'blue'
        }
    );
    myMap.geoObjects.add(placemark);
};
let footerCopyright = document.querySelectorAll('.footer__copyright');
let footerSocial = document.querySelectorAll('.footer__social');
let footerContent = document.querySelectorAll('.footer__content');
let footerMenuSocial = document.querySelectorAll('.footer__menu_social');

if (window.innerWidth < 959) {
    for (let i = 0; i < footerContent.length; i++) {
        footerContent[i].append(footerCopyright[i]);
        footerContent[i].append(footerSocial[i]);
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 959) {
        for (let i = 0; i < footerContent.length; i++) {
            footerContent[i].append(footerCopyright[i]);
            footerContent[i].append(footerSocial[i]);
        }
    } else {
        for (let i = 0; i < footerContent.length; i++) {
            footerMenuSocial[i].append(footerCopyright[i]);
            footerMenuSocial[i].append(footerSocial[i]);
        }
    }
});;
