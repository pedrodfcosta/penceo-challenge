app.controller("MapsController", [ '$scope', '$http', function($scope, $http) {
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
}]);