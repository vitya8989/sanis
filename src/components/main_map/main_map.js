// кнопки вывода офисов и магазинов на карте

let mainMapShops = document.querySelector('.main_map__shops');
let mainMapOffices = document.querySelector('.main_map__offices');

mainMapShops.onclick = () => {
    mainMapShops.classList.add('active');
    mainMapOffices.classList.remove('active');
}
mainMapOffices.onclick = () => {
    mainMapOffices.classList.add('active');
    mainMapShops.classList.remove('active');
}

// инициализация селекта карты

$('.select').SumoSelect();

// адреса в списке карты

let mainMapListAddress = document.querySelectorAll('.main_map__list_address');

for (let i = 0; i < mainMapListAddress.length; i++) {
    mainMapListAddress[i].onclick = (e) => {
        e.preventDefault();
        if (mainMapListAddress[i].classList.contains('active_address')) {
            mainMapListAddress[i].classList.remove('active_address');
        } else {
            for (let j = 0; j < mainMapListAddress.length; j++) {
                mainMapListAddress[j].classList.remove('active_address');
            }
            mainMapListAddress[i].classList.add('active_address');
        }
    }
}

// табы карты

let onMapBtn = document.querySelector('.on_map_btn');
let onListBtn = document.querySelector('.on_list_btn');
let onMapBody = document.querySelector('.on_map_body');
let onListBody = document.querySelector('.on_list_body');

onMapBtn.onclick = () => {
    onMapBtn.classList.add('active_tab');
    onMapBody.classList.add('active_tab');
    onListBtn.classList.remove('active_tab');
    onListBody.classList.remove('active_tab');
}
onListBtn.onclick = () => {
    onListBtn.classList.add('active_tab');
    onListBody.classList.add('active_tab');
    onMapBtn.classList.remove('active_tab');
    onMapBody.classList.remove('active_tab');
}

// перенос карты и списка на адаптиве

let mainMapMap = document.querySelector('.main_map__map');
let mainMapListBottom = document.querySelector('.main_map__list_bottom');
let mainMapContent = document.querySelector('.main_map__content');
let mainMapList = document.querySelector('.main_map__list');

if (window.innerWidth <= 959) {
    onMapBody.append(mainMapMap);
    onListBody.append(mainMapListBottom);
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 959) {
        onMapBody.append(mainMapMap);
        onListBody.append(mainMapListBottom);
    } else {
        mainMapContent.append(mainMapMap);
        mainMapList.append(mainMapListBottom);
    }
});
// удаление активного адреса на планшете

let mainMapMobileActiveAddress = document.querySelector('.main_map__mobile_active_address');
let closeActiveAddress = document.querySelector('.close_active_address');

closeActiveAddress.onclick = () => {
    mainMapMobileActiveAddress.classList.remove('active');
}

// карта

let scriptMap = document.createElement('script');
scriptMap.src = 'https://api-maps.yandex.ru/2.1/?apikey=dd0f5e76-e8bb-42be-b558-f7af3b491cd2&lang=ru_RU';
setTimeout(() => document.head.append(scriptMap), 0);
scriptMap.onload = function () {
    ymaps.ready(init);
};

function init() {
    var myMap = new ymaps.Map("main_map", {
        center: [59.972205, 30.410512],
        zoom: 11,
        controls: []
    });
    myMap.controls.add('zoomControl', {
        float: 'none',
        position: {
            top: '40px',
            right: '20px'
        }
    });
    var coords = [
        [60.001523, 30.299438],
        [59.944440, 30.491597],
        [59.935818, 30.325300]
    ];



    for (var i = 0; i < coords.length; i++) {
        var myPlacemark = new ymaps.Placemark(coords[i], {}, {
            iconLayout: 'default#image',
            iconImageHref: '/img/main/map_point.svg',
            iconImageSize: [31, 40],
            iconImageOffset: [-13, -42]
        });
        myMap.geoObjects.add(myPlacemark);
    }


}