app.controller('MainController', function($rootScope, $scope, $http, $state) {
    $http.get('http://jsonplaceholder.typicode.com/users').then(function(result) {
        $scope.users = result.data;
    });

    $scope.userDetails = function(user) {
        $state.go('users', {user:user});
    }

});