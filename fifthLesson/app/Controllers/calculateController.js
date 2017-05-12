var app = angular.module('myApp');

app.controller('calculateController', function($scope, calculateFactory){
    $scope.inputString = '';
    $scope.result = 0;

    function inputNumber(key) {
        $scope.inputString += key;
        $scope.result = calculateFactory.calculateExport($scope.inputString);
    }
    function inputVariable(key) {
        $scope.result = calculateFactory.calculateExport($scope.inputString);
        $scope.inputString += ' ' + key + ' ';
    }
    function reset() {
        $scope.inputString = '';
        $scope.result = 0;
    }

    $scope.inputNumber = inputNumber;
    $scope.inputVariable = inputVariable;
    $scope.reset = reset;

});