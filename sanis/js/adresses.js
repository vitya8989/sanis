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
let footerCopyright = document.querySelectorAll('.footer__copyright');
let footerSocial = document.querySelectorAll('.footer__social');
let footerContent = document.querySelectorAll('.footer__content');
let footerMenuSocial = document.querySelectorAll('.footer__menu_social');

// if (window.innerWidth < 959) {
//     for (let i = 0; i < footerContent.length; i++) {
//         footerContent[i].append(footerCopyright[i]);
//         footerContent[i].append(footerSocial[i]);
//     }
// }
//
// window.addEventListener('resize', () => {
//     if (window.innerWidth < 959) {
//         for (let i = 0; i < footerContent.length; i++) {
//             footerContent[i].append(footerCopyright[i]);
//             footerContent[i].append(footerSocial[i]);
//         }
//     } else {
//         for (let i = 0; i < footerContent.length; i++) {
//             footerMenuSocial[i].append(footerCopyright[i]);
//             footerMenuSocial[i].append(footerSocial[i]);
//         }
//     }
// });;
let preloader = document.querySelector('.preloader');

setTimeout(() => {
    preloader.classList.add('this--hidden');
}, 100);;
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
// Кнопка "Показать всех"

let partnersBtn = document.querySelector('.partners__btn');
let partnersItems = document.querySelector('.partners__items');

partnersBtn.onclick = () => {
    partnersItems.classList.remove('this--limited');
    partnersBtn.classList.add('this--hidden');
};