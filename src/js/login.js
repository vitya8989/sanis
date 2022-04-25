@@include('../components/header/header.js');
@@include('../components/preloader/preloader.js');
@@include('./form.js');
@@include('../components/footer/footer.js');

let validateInputs = document.querySelectorAll('.js_validate');
let loginForm = document.querySelector('.login_form');
loginForm.onsubmit = (e) => {
    e.preventDefault();
    validateForm(validateInputs);
}
unErrorForm(validateInputs);