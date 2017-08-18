app.factory('UserCollection', ['$http', function($http) {

    var userCollection = {};

    userCollection.getUsers = function() {
        $http.get("http://jsonplaceholder.typicode.com/users").then(function(result) {
            userCollection = result.data;
        }, function(error) {
            console.log(error)
        });
    }

    return userCollection;

}]);