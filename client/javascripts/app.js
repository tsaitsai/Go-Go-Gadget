app = angular.module('goGoGadget', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', '$locationProvider', '$httpProvider',
    function ($routeProvider, $locationProvider, $httpProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/home', {
                templateUrl: '/views/gadgethome.html',
                controller: 'landing'
            }).
            when('/game', {
                templateUrl: '/views/gadgetreport.html',
                controller: 'gadgetGameRep'
            }).
            when('/automation', {
                templateUrl: '/views/gadgetauto.html',
                controller: 'gadgetAutomation'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);
