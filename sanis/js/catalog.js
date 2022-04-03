let preloader = document.querySelector('.preloader');

setTimeout(() => {
    preloader.classList.add('this--hidden');
}, 100);;
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
// аккордеоны фильтра

$('.filter__item_title_wr').next().slideUp();

$('.filter__item_title_wr').each(function() {
    if ($( this ).next().hasClass('opened')) {
        $( this ).next().slideDown();
    }
});

$('.filter__item_title_wr').click(function() {
    $(this).next().slideToggle().toggleClass("opened");
    $(this).find('.filter__item_arrow').toggleClass("rotate");
    filterFloatButton.classList.add('this--hidden');
});

// высплывабщая кнопка фильтра и нижние кнопки

let catalogMobileFilterBtnCount = document.querySelector('.catalog__mobile_filter_btn_count');
let filter = document.querySelector('.catalog__filter');
let filterBody = document.querySelector('.filter__body');
let checkboxes = filterBody.querySelectorAll('input[type="checkbox"]');
let filterFloatButton = filterBody.querySelector('.filter__float_button');
let filterBtnsWr = document.querySelector('.filter__btns_wr');
let timer;
let activeCheckboxes = 0;
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', () => {
       if (checkboxes[i].checked) {
           let topOfFloatButton = checkboxes[i].offsetTop - 13;
           filterFloatButton.style.top = `${topOfFloatButton}px`;
           filterFloatButton.classList.remove('this--hidden');
           if(typeof(timer) != 'undefined') {
               clearTimeout(timer);
           }

           timer = setTimeout(() => {
               filterFloatButton.classList.add('this--hidden');
           }, 10000);

           activeCheckboxes++;
       } else {
           activeCheckboxes--;
       }
       if (activeCheckboxes >= 1 && !filterBtnsWr.classList.contains('show'))  {
           filterBtnsWr.classList.add('show');
           filterBody.classList.add('this--big_pb');
           catalogMobileFilterBtnCount.textContent = activeCheckboxes + 1;
       } else if (activeCheckboxes === 0) {
           filterBtnsWr.classList.remove('show');
           filterBody.classList.remove('this--big_pb');
           catalogMobileFilterBtnCount.classList.remove('show');
       }
        if (activeCheckboxes >= 1) {
            catalogMobileFilterBtnCount.classList.add('show');
            catalogMobileFilterBtnCount.textContent = activeCheckboxes;
        }
    });
}

let filterPriceInput = document.querySelectorAll('.filter__price_input');
let filterPriceInputFlag = false;

for (let i = 0; i < filterPriceInput.length; i++) {
    filterPriceInput[i].oninput = () => {
        let topOfFloatButton = filterPriceInput[i].offsetTop - 13;
        filterFloatButton.style.top = `${topOfFloatButton}px`;
        filterFloatButton.classList.remove('this--hidden');
        if(typeof(timer) != 'undefined') {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            filterFloatButton.classList.add('this--hidden');
        }, 10000);
        if (!filterPriceInputFlag) {
            activeCheckboxes++;
            catalogMobileFilterBtnCount.textContent = activeCheckboxes;
            catalogMobileFilterBtnCount.classList.add('show');
            filterPriceInputFlag = true;
        }
        filterBtnsWr.classList.add('show');
        filterBody.classList.add('this--big_pb');
    };
}

// слайдер диапазона цены
let initialMinimumValue = 10000;
let initialMaximumValue = 1000000;
$('#price_slider').slider({
    min: 0,
    max: 1000000,
    range: true,
    step: 10000,
    values: [10000, 1000000],
    stop: function(event, ui) {
        $("input#minCost").val($('#price_slider').slider("values",0));
        $("input#maxCost").val($('#price_slider').slider("values",1));
        let topOfFloatButton = $('#price_slider')[0].offsetTop - 27;
        filterFloatButton.style.top = `${topOfFloatButton}px`;
        filterFloatButton.classList.remove('this--hidden');
        if(typeof(timer) != 'undefined') {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            filterFloatButton.classList.add('this--hidden');
        }, 10000);
        if (!filterPriceInputFlag) {
            activeCheckboxes++;
            catalogMobileFilterBtnCount.textContent = activeCheckboxes;
            catalogMobileFilterBtnCount.classList.add('show');
            filterPriceInputFlag = true;
        }
        filterBtnsWr.classList.add('show');
        filterBody.classList.add('this--big_pb');
    },
    slide: function(event, ui){
        $("input#minCost").val($('#price_slider').slider("values",0));
        $("input#maxCost").val($('#price_slider').slider("values",1));
    }
})

$("input#minCost").change(function(){
    var value1=$("input#minCost").val();
    var value2=$("input#maxCost").val();
    if(parseInt(value1) > parseInt(value2)){
        value1 = value2;
        $("input#minCost").val(value1);
    }
    $('#price_slider').slider("values",0,value1);
});
$("input#maxCost").change(function(){
    var value1=$("input#minCost").val();
    var value2=$("input#maxCost").val();
    if (value2 > 1000000) { value2 = 1000000; $("input#maxCost").val(1000000)}
    if(parseInt(value1) > parseInt(value2)){
        value2 = value1;
        $("input#maxCost").val(value2);
    }
    $('#price_slider').slider("values",1,value2);
});

// кнопка очистки формы

let clearBtn = document.querySelector('.clear_btn');

clearBtn.onclick = (e) => {
    e.preventDefault();
    $('#price_slider').slider("values", 0, initialMinimumValue);
    $('#price_slider').slider("values", 1, initialMaximumValue);
    filterBody.reset();
    filterFloatButton.classList.add('this--hidden');
    filterBtnsWr.classList.remove('show');
    filterBody.classList.remove('this--big_pb');
    activeCheckboxes = 0;
    catalogMobileFilterBtnCount.textContent = activeCheckboxes;
    catalogMobileFilterBtnCount.classList.remove('show');
}
// открытие/закрытие мобильного фильтра

let catalogMobileFilterBtn = document.querySelector('.catalog__mobile_filter_btn');
let filterCloseBtn = document.querySelector('.filter__close_btn');

catalogMobileFilterBtn.onclick = () => {
    filter.classList.add('filter_open');
}


filterCloseBtn.onclick = () => {
    filter.classList.remove('filter_open');
};
// показать/скрыть сортировку

let catalogSortBtn = document.querySelector('.catalog__sort_btn ');
let catalogSortRadioGroup = document.querySelector('.catalog__sort_radio_group');
let catalogSortRadioLabel = document.querySelectorAll('.catalog__sort_radio_label');
let catalogSortBtnArrow = document.querySelector('.catalog__sort_btn_arrow');

for (let label of catalogSortRadioLabel) {
    label.onclick = () => {
        catalogSortRadioGroup.classList.add('this--hidden');
    }
}

catalogSortBtn.onclick = () => {
    catalogSortRadioGroup.classList.toggle('this--hidden');
    catalogSortBtnArrow.classList.toggle('rotate');
}

// радиокнопки сортировки

let sortRadioInputs = document.querySelectorAll('input[name="sort"]');
let catalogSortBtnValue = document.querySelector('.catalog__sort_btn_value');

for (let sort of sortRadioInputs) {
    sort.onchange = () => {
        if (sort.checked) {
            catalogSortBtnValue.textContent = sort.value;
        }
    }
}

// кнопки категорий

let catalogCategory = document.querySelectorAll('.catalog__category');

for (let  i = 0; i < catalogCategory.length; i++) {
    catalogCategory[i].onclick = () => {
        catalogCategory[i].classList.toggle('active');
    }
}
;
let itemCardFavorite = document.querySelectorAll('.item_card__favorite');

for (let i = 0; i < itemCardFavorite.length; i++) {
    itemCardFavorite[i].onclick = () => {
        itemCardFavorite[i].classList.toggle('added_to_favorite');
    }
};
