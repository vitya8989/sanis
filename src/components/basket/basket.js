let clickAccordion = $('.js_click_accordion');
let accordionBody = $('.js_accordion_body');
let basketBody = $('.basket__body');

accordionBody.slideUp();
basketBody.on('click', '.js_click_accordion', function (e) {
    e.preventDefault();
    let accordion = $(this).closest('.js_accordion');
    accordion.find(clickAccordion).toggleClass('rotate');
    accordion.find(accordionBody).slideToggle();
})
let bodyTableWr = document.querySelectorAll('.js_body_table_wr');
let bodyTable = document.querySelectorAll('.js_body_table');
if (bodyTableWr.length > 0) {
    for (let i = 0; i < bodyTableWr.length; i++) {
        let bodyTableClose = bodyTableWr[i].querySelector('.basket__body_table_close');
        bodyTableClose.addEventListener('click',() => {
            bodyTableWr[i].style.display = 'none';
        });
    }
}
if (bodyTable.length > 0) {
    for (let i = 0; i < bodyTable.length; i++) {
        let bodyTableValueNum = 0;
        let bodyTableMinus = bodyTable[i].querySelector('.basket__body_table_group_item_minus');
        let bodyTablePlus = bodyTable[i].querySelector('.basket__body_table_group_item_plus');
        let bodyTableValue = bodyTable[i].querySelector('.basket__body_table_group_item_value');
        let bodyTableClose = bodyTable[i].querySelector('.basket__body_table_close');


        bodyTableMinus.onclick = () => {
            bodyTableValueNum--;
            if (bodyTableValueNum <= 0) {
                bodyTableValueNum = 0;
            }
            bodyTableValue.textContent = bodyTableValueNum;
        }
        bodyTablePlus.onclick = () => {
            bodyTableValueNum++;
            bodyTableValue.textContent = bodyTableValueNum;
        }
        bodyTableClose.addEventListener('click',() => {
            bodyTable[i].style.display = 'none';
        });
    }
}


