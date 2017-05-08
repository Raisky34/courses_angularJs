var app = angular.module('myApp');

app.controller("getManController", function($scope, peopleFactory) {
    var manNames = ["Nik", "Don", "Zak", "Nikolos"];
    var manSurnames = ["Joe", "Rikcheter","Osmani", "Vanil"];

    $scope.count = 0;
    $scope.mansArray = [];

    $scope.generateMans = function(count) {
        $scope.mansArray = peopleFactory.getPeopleExport(manNames, manSurnames, count);

    }
});