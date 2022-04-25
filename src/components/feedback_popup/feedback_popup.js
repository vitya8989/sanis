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

unErrorForm(feedbackFormInputs);