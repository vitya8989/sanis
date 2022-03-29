
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

let scriptMap = document.createElement('script');
scriptMap.src = 'https://api-maps.yandex.ru/2.1/?apikey=dd0f5e76-e8bb-42be-b558-f7af3b491cd2&lang=ru_RU';
setTimeout(() => document.head.append(scriptMap), 0);
scriptMap.onload = function () {
    ymaps.ready(init);
};

function init() {
    var myMap = new ymaps.Map("main_map", {
        center: [59.972205, 30.410512],
        zoom: 12
    });
    var coords = [
        [60.001523, 30.299438],
        [59.944440, 30.491597],
        [59.935818, 30.325300]
    ];
    var myCollection = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: '/img/main/map_point.svg',
        iconImageSize: [31, 40],
        iconImageOffset: [-13, -42]
    });

    for (var i = 0; i < coords.length; i++) {
        var myPlacemark = new ymaps.Placemark(coords[i], {}, {});
        myCollection.add(myPlacemark);
    }
    myMap.geoObjects.add(myCollection);
}