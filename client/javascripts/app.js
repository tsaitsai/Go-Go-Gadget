app = angular.module('goGoGadget', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', '$locationProvider', '$httpProvider', '$mdThemingProvider',
    function ($routeProvider, $locationProvider, $httpProvider, $mdThemingProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/home', {
                templateUrl: '/views/gadgethome.html',
                controller: 'gadgetGameRep'
            }).
            when('/game', {
                templateUrl: '/views/gadgetreport.html',
                controller: 'gadgetGameRep'
            }).

            when('/automation', {
                templateUrl: '/views/gadgetauto.html',
                controller: 'gadgetAutomation'
            }).
            when('/testroutes', {
                templateUrl: '/views/testroutes.html',
                controller: 'testRoutes'
            }).
            otherwise({
                redirectTo: '/home'
            });

        $mdThemingProvider.theme('default')
            .primaryPalette('light-blue')
            .accentPalette('orange');
    }]);

