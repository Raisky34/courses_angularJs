var app = angular.module('myApp');

app.controller("getSumController", function ($scope, dataFactory, testService, testProvider) {
    $scope.name = "Fred";
    $scope.test = "getSum";
    $scope.result = 0;

    $scope.func = function(){
        $scope.result = dataFactory.getSumExport($scope.test);
    };

    $scope.myService = testService;
    $scope.privateVarOfService = testService.getPrivate();
    $scope.privateValueOfProv = testProvider.getPrivate();
    $scope.user = new dataFactory.buildUser("Nik", "Smith");
});

