'use strict';

var app = angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2'
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.when("/", {templateUrl: "/app/index.html"}).otherwise({redirectTo: '/view1'});
}]);