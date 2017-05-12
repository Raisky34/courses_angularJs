var app = angular.module('myApp');

app.controller('calculateController', function($scope, calculateFactory){
    $scope.inputString = '';
    $scope.result = 0;
    function inputNumber(key) {
        $scope.inputString += key;
        $scope.result = calculateFactory.reversePolishNotationExport($scope.inputString);
    }
    function inputVariable(key) {
        $scope.result = calculateFactory.reversePolishNotationExport($scope.inputString);
        $scope.inputString += ' ' + key + ' ';
    }
    $scope.inputZero = inputNumber;
    $scope.inputOne = inputNumber;
    $scope.inputTwo = inputNumber;
    $scope.inputThree = inputNumber;
    $scope.inputFour = inputNumber;
    $scope.inputFive = inputNumber;
    $scope.inputSix = inputNumber;
    $scope.inputSeven = inputNumber;
    $scope.inputEight = inputNumber;
    $scope.inputNine = inputNumber;

    $scope.inputPlus = inputVariable;
    $scope.inputMinus = inputVariable;
    $scope.inputDelete = inputVariable;
    $scope.inputMult = inputVariable;

});