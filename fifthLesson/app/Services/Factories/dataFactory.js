var app = angular.module('myApp');

app.factory("dataFactory", function(){
    function getSum (test) {
        var arr = [];
        if(test.indexOf(" ") !== -1){
            arr = test.split(" ")
        }else {
            arr = test.split("");
        }
        return arr.reduce(function (prevValue, item) {
            if(isFinite(parseInt(item))){
                prevValue += parseInt(item)
            }
            return prevValue
        }, 0);
    }

    function User(name, surname){
        this.name = name;
        this.surname = surname;
    }

    return {
        getSumExport: getSum,
        buildUser: User
    }
});
