@@include('../components/header/header.js');
@@include('../components/preloader/preloader.js');
@@include('./form.js');
@@include('../components/footer/footer.js');

let validateInputs = document.querySelectorAll('.js_validate');
let registrationForm = document.querySelector('.ordering_form');
registrationForm.onsubmit = (e) => {
    e.preventDefault();
    validateForm(validateInputs);
}
unErrorForm(validateInputs);