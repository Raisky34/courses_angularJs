var inputString = "sadfasdfasdfGFJJK123";

function stringToOnject(string) {
  var stringArray = string.split("");
  return stringArray.reduce(function(prevObject, currentItem, index) {
    if (prevObject[currentItem]) {
      prevObject[currentItem]++;
    } else {
      prevObject[currentItem] = 1;
    }
    return prevObject;
  }, {});
};

console.log("inputString => " + inputString);
console.log("result Object => ");
console.log(stringToOnject(inputString));
