let onlyLetterRus = document.querySelectorAll('.only_letter_rus');
let onlyNumber = document.querySelectorAll('.only_number');

if (onlyLetterRus) {
    for (let i = 0; i < onlyLetterRus.length; i++) {
        onlyLetterRus[i].addEventListener('keyup', function () {
            this.value = this.value.replace(/[\w]/g, '');
        });
    }

}
if (onlyNumber) {
    for (let i = 0; i < onlyNumber.length; i++) {
        onlyNumber[i].addEventListener('keyup', function () {
            this.value = this.value.replace(/[^0-9,\s,+]/g, "");
        });
    }
}

$('.select').SumoSelect();

function validateForm(inputs) {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            inputs[i].classList.add('error-input');
            inputs[i].previousElementSibling.classList.add('error-input');
        }
    }
}
function unErrorForm(inputs) {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].onfocus = () => {
            inputs[i].classList.remove('error-input');
            inputs[i].previousElementSibling.classList.remove('error-input');
        }
    }
}

let textareaWr = document.querySelector('.textarea_wr');

if (textareaWr) {
    let textareaForm = textareaWr.querySelector('.textarea');
    textareaForm.addEventListener('focus', () => {
        textareaWr.classList.add('focus');
    });
    textareaForm.addEventListener('blur', () => {
        textareaWr.classList.remove('focus');
    });
}
