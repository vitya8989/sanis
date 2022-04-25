@@include('../components/header/header.js');
@@include('../components/preloader/preloader.js');
@@include('./form.js');
@@include('../components/footer/footer.js');
@@include('../components/feedback_popup/feedback_popup.js');

let orderingProfilesInputs = document.querySelectorAll('.ordering_profiles__input');
let orderingProfilesBtn = document.querySelector('.ordering_profiles__btn');
let oldValues = [];
let newValues;

for (let i = 0; i < orderingProfilesInputs.length; i++) {
    oldValues.push(orderingProfilesInputs[i].value);
    orderingProfilesInputs[i].onchange = () => {
        newValues = [];
        for (let j = 0; j < orderingProfilesInputs.length; j++) {
            newValues.push(orderingProfilesInputs[j].value);
        }
        if (JSON.stringify(newValues) != JSON.stringify(oldValues)) {
            orderingProfilesBtn.classList.remove('this--disabled');
        } else {
            orderingProfilesBtn.classList.add('this--disabled');
        }
    }
}
