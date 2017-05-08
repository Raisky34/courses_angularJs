var app = angular.module('myApp');

app.provider("testProvider", function() {
    var privateVar = "private";

    return {
        setPrivate: function(newVal) {
            privateVar = newVal;
        },
        $get: function() {
            function getPrivate() {
                return privateVar;
            }
            return {
                someVar: "var",
                getPrivate: getPrivate
        }
        }
    }
})
