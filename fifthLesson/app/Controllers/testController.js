var app = angular.module('myApp');

app.controller("testController", function ($scope, dataFactory) {
    $scope.name = "Pet";
    $scope.test = "Test";
    $scope.result = 0;

    $scope.myFunc = function(){
        $scope.result = dataFactory.getSumExport($scope.test)
    };

    $scope.user = new dataFactory.buildUser("John", "Doe");
});
