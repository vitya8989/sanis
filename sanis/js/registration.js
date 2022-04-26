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
let preloader = document.querySelector('.preloader');

setTimeout(() => {
    preloader.classList.add('this--hidden');
}, 100);;
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

let validateInputs = document.querySelectorAll('.js_validate');
let registrationForm = document.querySelector('.registration_form');
registrationForm.onsubmit = (e) => {
    e.preventDefault();
    validateForm(validateInputs);
}
unErrorForm(validateInputs);