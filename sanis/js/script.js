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
    speed: 700,
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
        disableOnInteraction: false,
    },
});
;
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
// кнопки вывода офисов и магазинов на карте

let mainMapShops = document.querySelector('.main_map__shops');
let mainMapOffices = document.querySelector('.main_map__offices');

mainMapShops.onclick = () => {
    mainMapShops.classList.add('active');
    mainMapOffices.classList.remove('active');
}
mainMapOffices.onclick = () => {
    mainMapOffices.classList.add('active');
    mainMapShops.classList.remove('active');
}

// адреса в списке карты

let mainMapListAddress = document.querySelectorAll('.main_map__list_address');

for (let i = 0; i < mainMapListAddress.length; i++) {
    mainMapListAddress[i].onclick = (e) => {
        e.preventDefault();
        if (mainMapListAddress[i].classList.contains('active_address')) {
            mainMapListAddress[i].classList.remove('active_address');
        } else {
            for (let j = 0; j < mainMapListAddress.length; j++) {
                mainMapListAddress[j].classList.remove('active_address');
            }
            mainMapListAddress[i].classList.add('active_address');
        }
    }
}

// табы карты

let onMapBtn = document.querySelector('.on_map_btn');
let onListBtn = document.querySelector('.on_list_btn');
let onMapBody = document.querySelector('.on_map_body');
let onListBody = document.querySelector('.on_list_body');

onMapBtn.onclick = () => {
    onMapBtn.classList.add('active_tab');
    onMapBody.classList.add('active_tab');
    onListBtn.classList.remove('active_tab');
    onListBody.classList.remove('active_tab');
}
onListBtn.onclick = () => {
    onListBtn.classList.add('active_tab');
    onListBody.classList.add('active_tab');
    onMapBtn.classList.remove('active_tab');
    onMapBody.classList.remove('active_tab');
}

// перенос карты и списка на адаптиве

let mainMapMap = document.querySelector('.main_map__map');
let mainMapListBottom = document.querySelector('.main_map__list_bottom');
let mainMapContent = document.querySelector('.main_map__content');
let mainMapList = document.querySelector('.main_map__list');

if (window.innerWidth <= 959) {
    onMapBody.append(mainMapMap);
    onListBody.append(mainMapListBottom);
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 959) {
        onMapBody.append(mainMapMap);
        onListBody.append(mainMapListBottom);
    } else {
        mainMapContent.append(mainMapMap);
        mainMapList.append(mainMapListBottom);
    }
});
// удаление активного адреса на планшете

let mainMapMobileActiveAddress = document.querySelector('.main_map__mobile_active_address');
let closeActiveAddress = document.querySelector('.close_active_address');

closeActiveAddress.onclick = () => {
    mainMapMobileActiveAddress.classList.remove('active');
}

// карта

let scriptMap = document.createElement('script');
scriptMap.src = 'https://api-maps.yandex.ru/2.1/?apikey=dd0f5e76-e8bb-42be-b558-f7af3b491cd2&lang=ru_RU';
setTimeout(() => document.head.append(scriptMap), 0);
scriptMap.onload = function () {
    ymaps.ready(init);
};

function init() {
    var myMap = new ymaps.Map("main_map", {
        center: [59.972205, 30.410512],
        zoom: 11,
        controls: []
    });
    myMap.controls.add('zoomControl', {
        float: 'none',
        position: {
            top: '40px',
            right: '20px'
        }
    });
    var coords = [
        [60.001523, 30.299438],
        [59.944440, 30.491597],
        [59.935818, 30.325300]
    ];



    for (var i = 0; i < coords.length; i++) {
        var myPlacemark = new ymaps.Placemark(coords[i], {}, {
            iconLayout: 'default#image',
            iconImageHref: '/img/main/map_point.svg',
            iconImageSize: [31, 40],
            iconImageOffset: [-13, -42]
        });
        myMap.geoObjects.add(myPlacemark);
    }


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
let itemCardFavorite = document.querySelectorAll('.item_card__favorite');

for (let i = 0; i < itemCardFavorite.length; i++) {
    itemCardFavorite[i].onclick = () => {
        itemCardFavorite[i].classList.toggle('added_to_favorite');
    }
};
let preloader = document.querySelector('.preloader');

setTimeout(() => {
    preloader.classList.add('this--hidden');
}, 100);;
let feedbackPopupOpen = document.querySelectorAll('.js_feedback_popup_open');
let feedbackPopup = document.querySelector('.feedback_popup');
let feedbackPopupClose = document.querySelectorAll('.js_feedback_popup_close');
let feedbackForm = document.querySelector('.feedback_form');

if (feedbackPopupOpen.length > 0) {
    for (let i = 0; i < feedbackPopupOpen.length; i++) {
        feedbackPopupOpen[i].onclick = () => {
            feedbackPopup.classList.add('show');
        };
        feedbackPopupClose[i].onclick = () => {
            feedbackPopup.classList.remove('show');
            feedbackForm.reset();
        };
    }
    feedbackPopup.onclick = (e) => {
        if (!e.target.closest('.feedback_popup__body')) {
            feedbackPopup.classList.remove('show');
            feedbackForm.reset();
        }
    }
}

let feedbackFormInputs = document.querySelectorAll('.feedback_form__input');

feedbackForm.onsubmit = function (e) {
    e.preventDefault();
    validateForm(feedbackFormInputs);
}

unErrorForm(feedbackFormInputs);;
let onlyLetterRus = document.querySelectorAll('.only_letter_rus');
let onlyNumber = document.querySelectorAll('.only_number');

if (onlyLetterRus) {
    for (let i = 0; i < onlyLetterRus.length; i++) {
        onlyLetterRus[i].addEventListener('keyup', function () {
            this.value = this.value.replace(/[\w]/g, '');
        });
    }

}
if (onlyNumber) {
    for (let i = 0; i < onlyNumber.length; i++) {
        onlyNumber[i].addEventListener('keyup', function () {
            this.value = this.value.replace(/[^0-9,\s,+]/g, "");
        });
    }
}

$('.select').SumoSelect();

function validateForm(inputs) {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            inputs[i].classList.add('error-input');
            inputs[i].previousElementSibling.classList.add('error-input');
        }
    }
}
function unErrorForm(inputs) {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].onfocus = () => {
            inputs[i].classList.remove('error-input');
            inputs[i].previousElementSibling.classList.remove('error-input');
        }
    }
}

let textareaWr = document.querySelector('.textarea_wr');

if (textareaWr) {
    let textareaForm = textareaWr.querySelector('.textarea');
    textareaForm.addEventListener('focus', () => {
        textareaWr.classList.add('focus');
    });
    textareaForm.addEventListener('blur', () => {
        textareaWr.classList.remove('focus');
    });
}
;



