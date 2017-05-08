var app = angular.module('myApp');

app.factory("peopleFactory", function(){
    function getPeople (arrayNames, arraySurnames, count) {
        var peopleArray = [];
        var i = 0;
        for (i; i < count; i++) {
            peopleArray.push({
                name:  arrayNames[randomIteger(0, arrayNames.length - 1)],
                surname:  arraySurnames[randomIteger(0, arraySurnames.length - 1)]
            });
        }

        return peopleArray;
    }

    function randomIteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }

    return {
        getPeopleExport: getPeople
    }
});
