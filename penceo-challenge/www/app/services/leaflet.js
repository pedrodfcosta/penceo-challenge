// initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
})

L.tileLayer('http://{s}.tile.mapbox.com/v3/ianmule.bg2v5cdi/{z}/{x}/{y}.png', {
    attribution: 'Mapbox'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

var someFeatures = [{
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "show_on_map": true
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "Busch Field",
        "show_on_map": true
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-37.3159, 81.1496]
    }
}];

L.geoJSON(usersList, {
    filter: function(feature, layer) {
        return feature.properties.show_on_map;
    }
}).addTo(map);