var app = angular.module('myApp');

app.factory("calculateFactory", function(){
    var cbSplit = function (str, separator, limit) {
        if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
            return cbSplit._nativeSplit.call(str, separator, limit);
        }

        var	output = [],
            lastLastIndex = 0,
            flags = (separator.ignoreCase ? "i" : "") +
                (separator.multiline  ? "m" : "") +
                (separator.sticky     ? "y" : ""),
            separator = RegExp(separator.source, flags + "g"),
            separator2, match, lastIndex, lastLength;

        str = str + "";
        if (!cbSplit._compliantExecNpcg) {
            separator2 = RegExp("^" + separator.source + "$(?!\\s)", flags);
        }
        if (limit === undefined || +limit < 0) {
            limit = Infinity;
        } else {
            limit = Math.floor(+limit);
            if (!limit) {
                return [];
            }
        }

        while (match = separator.exec(str)) {
            lastIndex = match.index + match[0].length;

            if (lastIndex > lastLastIndex) {
                output.push(str.slice(lastLastIndex, match.index));

                if (!cbSplit._compliantExecNpcg && match.length > 1) {
                    match[0].replace(separator2, function () {
                        for (var i = 1; i < arguments.length - 2; i++) {
                            if (arguments[i] === undefined) {
                                match[i] = undefined;
                            }
                        }
                    });
                }

                if (match.length > 1 && match.index < str.length) {
                    Array.prototype.push.apply(output, match.slice(1));
                }

                lastLength = match[0].length;
                lastLastIndex = lastIndex;

                if (output.length >= limit) {
                    break;
                }
            }

            if (separator.lastIndex === match.index) {
                separator.lastIndex++; // avoid an infinite loop
            }
        }

        if (lastLastIndex === str.length) {
            if (!separator.test("") || lastLength) {
                output.push("");
            }
        } else {
            output.push(str.slice(lastLastIndex));
        }

        return output.length > limit ? output.slice(0, limit) : output;
    };

    cbSplit._compliantExecNpcg = /()??/.exec("")[1] === undefined;
    cbSplit._nativeSplit = String.prototype.split;


    String.prototype.split = function (separator, limit) {
        return cbSplit(this, separator, limit);
    };

    var splitUpOperand = function(str) {
        str = str.replace(/\s/g, "");
        var vArr = str.split(/(^-\w)|(\()+(-\w)|([-\*\+/\(\)\^])/);
        var result = new Array();
        for (i in vArr) {
            if (vArr[i] != "" && typeof vArr[i] != "undefined") {
                result.push(vArr[i]);
            }
        }
        return result;
    };

    function reversePolishNotation(str) {
        str = splitUpOperand(str);
        var regexOperations = new RegExp(/[-\*\+/\(\)\^]/);
        var regexOperands = new RegExp(/\w/);
        var priority = {'(' : 0, ')' : 1, '+' : 2, '-' : 2, '*' : 3, '/' : 3, '^': 4};
        var stack = new Array();
        var result = new Array();

        for (var i = 0; i < str.length; i++) {
            if (str[i] == ')'){
                var ch;
                while (stack.length != 0 && (ch=stack.pop()) != '(') {
                    result.push(ch);
                }
            } else if (regexOperands.test(str[i]) ) {
                result.push(str[i]);
            } else if (str[i] == '(') {
                stack.push('(');
            } else if (regexOperations.test(str[i]) ) {
                if (stack.length == 0) {
                    stack.push(str[i]);
                } else {
                    if (priority[str[i]] > priority[stack[stack.length-1]] ) {
                        stack.push(str[i]);
                    } else {
                        while ( stack.length != 0 && priority[str[i]] <= priority[stack[stack.length-1]] ) {
                            result.push(stack.pop());
                        }
                        stack.push(str[i]);
                    }
                }
            }
        }
        while (stack.length != 0) {
            result.push(stack.pop());
        }
        return result;
    }

    return {
        reversePolishNotationExport: reversePolishNotation
    };
});
