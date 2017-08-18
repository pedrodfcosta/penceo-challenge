'use strict';

app.controller('UsersController', ['$scope', '$stateParams', function($scope, $stateParams) {

    $scope.user = $stateParams.user;

}]);