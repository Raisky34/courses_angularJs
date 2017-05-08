var app = angular.module('myApp');

app.controller("getWomanController", function($scope, peopleFactory) {
    var manNames = ["Lusi", "Jesi", "Ola", "Renata"];
    var manSurnames = ["Manikay", "Sidarenko","Liserta", "Poreti"];

    $scope.count = 0;
    $scope.womanArray = [];

    $scope.generateWomans = function(count) {
        $scope.womanArray = peopleFactory.getPeopleExport(manNames, manSurnames, count);
    }
});