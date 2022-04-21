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

let onlyLetterRus = document.querySelectorAll('.only_letter_rus');
let onlyNumber = document.querySelectorAll('.only_number');

for (let i = 0; i < onlyLetterRus.length; i++) {
    onlyLetterRus[i].addEventListener('keyup', function () {
        this.value = this.value.replace(/[\w]/g, '');
    });
}

for (let i = 0; i < onlyNumber.length; i++) {
    onlyNumber[i].addEventListener('keyup', function () {
        this.value = this.value.replace(/[^0-9,\s,+]/g, "");
    });
}

let feedbackFormInputs = document.querySelectorAll('.feedback_form__input');

feedbackForm.onsubmit = function (e) {
    e.preventDefault();
    for (let i = 0; i < feedbackFormInputs.length; i++) {
        if (feedbackFormInputs[i].value == '') {
            feedbackFormInputs[i].classList.add('error-input');
            feedbackFormInputs[i].previousElementSibling.classList.add('error-input');
        }
    }
}

for (let i = 0; i < feedbackFormInputs.length; i++) {
    feedbackFormInputs[i].onfocus = () => {
        feedbackFormInputs[i].classList.remove('error-input');
        feedbackFormInputs[i].previousElementSibling.classList.remove('error-input');
    }
}