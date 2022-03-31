// Кнопка "Показать всех"

let partnersBtn = document.querySelector('.partners__btn');
let partnersItems = document.querySelector('.partners__items');

partnersBtn.onclick = () => {
    partnersItems.classList.remove('this--limited');
    partnersBtn.classList.add('this--hidden');
}