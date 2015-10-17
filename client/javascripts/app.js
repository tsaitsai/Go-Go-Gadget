app = angular.module('goGoGadget', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', '$locationProvider', '$httpProvider',
    function ($routeProvider, $locationProvider, $httpProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/', {
                templateUrl: '/views/gadgetreport.html',
                controller: 'gadgetGameRep'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
