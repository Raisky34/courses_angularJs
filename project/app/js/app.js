var app = angular.module('marakuyaApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/main", {
        templateUrl : "views/main.html"
    })
    .when("/tranings", {
        templateUrl : "views/training.html"
    })
    .when("/sheduler", {
        templateUrl : "views/sheduler.html"
    })
    .otherwise({
        redirectTo: '/main'
    });
});

