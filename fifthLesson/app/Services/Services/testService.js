var app = angular.module('myApp');

app.service("testService", testConstructor);

function testConstructor () {
    var privateVar = "testService";
    this.number = 33;
    this.getPrivate = function () {
        return privateVar;
    };
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}