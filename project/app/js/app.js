var app = angular.module('marakuyaApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/main", {
        templateUrl : "views/main.html"
    })
    .when("/red", {
        templateUrl : "views/training.html"
    })
    .otherwise({
        redirectTo: '/main'
    });
});

