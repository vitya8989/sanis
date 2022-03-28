let mainVideoVideo = document.querySelector('.main_video__video');
let mainVideoBtn = document.querySelector('.main_video__btn');

mainVideoBtn.onclick = () => {
    mainVideoVideo.play();
    mainVideoBtn.classList.add('this--hidden');
}
mainVideoVideo.onclick = () => {
    mainVideoVideo.pause();
    mainVideoBtn.classList.remove('this--hidden');
}
mainVideoVideo.onended = () => {
    mainVideoBtn.classList.remove('this--hidden');
}