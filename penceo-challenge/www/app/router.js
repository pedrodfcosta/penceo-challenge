app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
        .state('main', {
            url: "",
            templateUrl: "app/components/main.html",
            controller: "MainController"
        });
});
