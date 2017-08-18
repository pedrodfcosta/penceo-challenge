'use strict';

app.controller("MapsController", [ '$scope', '$http', 'UserCollection', function($scope, $http, UserCollection) {
    angular.extend($scope, {
        defaults: {
            scrollWheelZoom: false
        }
    });

    // Get the countries geojson data from a JSON
    $http.get("http://jsonplaceholder.typicode.com/users").then(function(result) {
        angular.extend($scope, {
            geojson: {
                data: result.data,
                style: {
                    fillColor: "green",
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    dashArray: '3',
                    fillOpacity: 0.7
                }
            }
        });
    });

    // Not working properly :(

//    function showUsers (user, layer) {
//        layer.bindPopup('<h2>Hi, my name is' + user.name + '</h2>');
//    }
//
//    var usersList = {};
//    UserCollection.getUsers().then(function(result) {
//        usersList = result.data;
//    })
//
//    L.geoJSON(usersList, {
//
//        onEachFeature: showUsers
//
//    }).addTo(map);


}]);