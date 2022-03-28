ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.752648, 37.603846],
        zoom: 17
    });
    var placemark = new ymaps.Placemark([55.752648, 37.603846], {
            iconColor: 'blue'
        }
    );
    myMap.geoObjects.add(placemark);
}