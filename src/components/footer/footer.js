let footerCopyright = document.querySelectorAll('.footer__copyright');
let footerSocial = document.querySelectorAll('.footer__social');
let footerContent = document.querySelectorAll('.footer__content');
let footerMenuSocial = document.querySelectorAll('.footer__menu_social');

// if (window.innerWidth < 959) {
//     for (let i = 0; i < footerContent.length; i++) {
//         footerContent[i].append(footerCopyright[i]);
//         footerContent[i].append(footerSocial[i]);
//     }
// }
//
// window.addEventListener('resize', () => {
//     if (window.innerWidth < 959) {
//         for (let i = 0; i < footerContent.length; i++) {
//             footerContent[i].append(footerCopyright[i]);
//             footerContent[i].append(footerSocial[i]);
//         }
//     } else {
//         for (let i = 0; i < footerContent.length; i++) {
//             footerMenuSocial[i].append(footerCopyright[i]);
//             footerMenuSocial[i].append(footerSocial[i]);
//         }
//     }
// });