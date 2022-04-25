@@include('../components/header/header.js');
@@include('../components/preloader/preloader.js');
@@include('./form.js');
@@include('../components/footer/footer.js');
@@include('../components/feedback_popup/feedback_popup.js');

let validateInputs = document.querySelectorAll('.js_validate');
let registrationForm = document.querySelector('.organization_profile__form');
registrationForm.onsubmit = (e) => {
    e.preventDefault();
    validateForm(validateInputs);
}
unErrorForm(validateInputs);