let itemInput = document.querySelector('.detail_form__hidden_input');
let itemValue = document.querySelector('.detail_form__item_value');
let itemMinus = document.querySelector('.detail_form__item_minus');
let itemPlus = document.querySelector('.detail_form__item_plus');
let detailForm = document.querySelector('.detail_form');
let detailFormBtn = document.querySelector('.detail_form__btn');

itemPlus.onclick = (e) => {
    e.preventDefault();
    itemInput.value++;
    itemValue.textContent = itemInput.value;
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
    if (itemInput.value == 0) {
        detailFormBtn.classList.add('this--disabled');
    }
}

detailForm.onsubmit = (e) => {
    e.preventDefault();
    detailForm.reset();
    itemInput.value = 0;
    itemValue.textContent = itemInput.value;
    detailFormBtn.classList.add('this--disabled');
}