// string-concatenation.js

var stringVar = 'abc'
console.log(stringVar + "text" + stringVar);
console.log(stringVar + 123 + 456);
console.log(123 + 456 + stringVar);
var booleanVar = true;
console.log(stringVar + booleanVar);
console.log(stringVar + null);
console.log(stringVar + undefined);
console.log(null + undefined);
