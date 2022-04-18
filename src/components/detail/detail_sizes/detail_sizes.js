let detailSizesItem = document.querySelectorAll('.detail_sizes__item');
let detailForm = document.querySelector('.detail_sizes');
let detailFormBtn = document.querySelector('.detail_sizes__btn');

for (let i = 0; i < detailSizesItem.length; i++) {
    let itemMinus = detailSizesItem[i].querySelector('.detail_sizes__item_minus');
    let itemValue = detailSizesItem[i].querySelector('.detail_sizes__item_value');
    let itemPlus = detailSizesItem[i].querySelector('.detail_sizes__item_plus');
    let itemInput = detailSizesItem[i].querySelector('.detail_sizes__hidden_input');
    let itemOrderedCount = detailSizesItem[i].querySelector('.detail_sizes__item_ordered');
    let disabledBtn = true;
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
            disabledBtn = false;
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
        disabledBtn = true;

        for (let j = 0; j < detailSizesItem.length; j++) {
           if (detailSizesItem[j].querySelector('.detail_sizes__hidden_input').value > 0) {
               disabledBtn = false;
           }
        }

        console.log(disabledBtn);
        if (disabledBtn) {
            detailFormBtn.classList.add('this--disabled');
        }

        if (itemInput.value == 0) {
            detailSizesItem[i].classList.remove('ordered');
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


detailSizesMoreBtn.onclick = () => {
    detailSizesItems.classList.remove('this--limited');
    detailSizesMoreBtn.classList.add('this--hidden');
}
