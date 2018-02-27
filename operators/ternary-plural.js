// ternary-plural.js
// handle plural
var items = 0;
// var items = 1;
// var items = 2;

console.log(items + " item" + ((items === 1) ? "" : "s"));  
// or
var outputString = items;
outputString += " item"; 
outputString += (items === 1) ? "" : "s";
console.log(outputString);