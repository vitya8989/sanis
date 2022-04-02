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
;
let detailSizesItem = document.querySelectorAll('.detail_sizes__item');
let detailForm = document.querySelector('.detail_sizes');
let detailFormBtn = document.querySelector('.detail_sizes__btn');

for (let i = 0; i < detailSizesItem.length; i++) {
    let itemMinus = detailSizesItem[i].querySelector('.detail_sizes__item_minus');
    let itemValue = detailSizesItem[i].querySelector('.detail_sizes__item_value');
    let itemPlus = detailSizesItem[i].querySelector('.detail_sizes__item_plus');
    let itemInput = detailSizesItem[i].querySelector('.detail_sizes__hidden_input');
    let itemOrderedCount = detailSizesItem[i].querySelector('.detail_sizes__item_ordered');

    itemPlus.onclick = (e) => {
        e.preventDefault();
        itemInput.value++;
        itemValue.textContent = itemInput.value;
        itemOrderedCount.textContent = itemInput.value;
        if (itemInput.value > 0 && !detailSizesItem[i].classList.contains('ordered')) {
            detailSizesItem[i].classList.add('ordered');
        }
        if (itemInput.value > 0 && detailFormBtn.classList.contains('this--disabled')) {
            detailFormBtn.classList.remove('this--disabled');
        }
    }
    itemMinus.onclick = (e) => {
        e.preventDefault();
        itemInput.value--;
        if (itemInput.value < 0) {
            itemInput.value = 0;
        }

        itemValue.textContent = itemInput.value;
        itemOrderedCount.textContent = itemInput.value;

        if (itemInput.value == 0) {
            detailSizesItem[i].classList.remove('ordered');
            detailFormBtn.classList.add('this--disabled');
        }
    }
}

detailForm.onsubmit = (e) => {
    e.preventDefault();
    detailForm.reset();
    for (let i = 0; i < detailSizesItem.length; i++) {
        detailSizesItem[i].classList.remove('ordered');
        let itemValue = detailSizesItem[i].querySelector('.detail_sizes__item_value');
        let itemInput = detailSizesItem[i].querySelector('.detail_sizes__hidden_input');
        let itemOrderedCount = detailSizesItem[i].querySelector('.detail_sizes__item_ordered');
        itemInput.value = 0;
        itemValue.textContent = itemInput.value;
        itemOrderedCount.textContent = itemInput.value;
        detailFormBtn.classList.add('this--disabled');
    }
}

let detailSizesItems = document.querySelector('.detail_sizes_items');
let detailSizesMoreBtn = document.querySelector('.detail_sizes__more_btn');

if (window.innerWidth < 1500) {
    detailSizesItems.classList.add('this--limited');
    detailSizesMoreBtn.classList.remove('this--hidden');
}
window.addEventListener('resize',  () => {
    if (window.innerWidth < 1500) {
        detailSizesItems.classList.add('this--limited');
        detailSizesMoreBtn.classList.remove('this--hidden');
    } else {
        detailSizesItems.classList.remove('this--limited');
        detailSizesMoreBtn.classList.add('this--hidden');
    }
});

detailSizesMoreBtn.onclick = () => {
    detailSizesItems.classList.remove('this--limited');
    detailSizesMoreBtn.classList.add('this--hidden');
}
;
let detailTabsNavItem = document.querySelectorAll('.detail_tabs__nav_item');
let detailTabsBody = document.querySelectorAll('.detail_tabs__body');

for (let i = 0; i < detailTabsNavItem.length; i++) {
    detailTabsNavItem[i].onclick = () => {
        for (let j = 0; j < detailTabsBody.length; j++) {
            detailTabsNavItem[j].classList.remove('active_tab');
            detailTabsBody[j].classList.remove('active_tab');
            if (detailTabsNavItem[i].dataset.id === detailTabsBody[j].dataset.id) {
                detailTabsNavItem[i].classList.add('active_tab');
                detailTabsBody[j].classList.add('active_tab');
            }
        }
    }
};
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
});;