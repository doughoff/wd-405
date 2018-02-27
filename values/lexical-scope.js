// lexical-scope.js

var i = 5;
{ var k = 5; }
console.log(i + k);

// are values copied or associated by reference?
var y = 0;
k = y;

// requires ES6 for block scope keyword of let
let i = 5;
{ let k = 5; }
console.log(i + k);