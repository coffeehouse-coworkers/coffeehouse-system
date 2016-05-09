angular.module('CoffeeHouseCoworkers', [
    'ui.router',
    'CoffeeHouseCoworkers.radio.controllers',
    'CoffeeHouseCoworkers.radio.services'
])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "home/home.html"
        })
        .state('radio', {
            url: "/radio",
            templateUrl: "radio/radio.html",
            controller: "RadioCtrl"
        });
}]);