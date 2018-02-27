// conversions.js

var float = 1.11111;
var int = float | 0;
var rounded = (float + .5) | 0
console.log('float was', float);
console.log('int becomes', int);
console.log('rounded becomes', rounded);

var stringAsInt = +'123';
var intAsString = '' + 123;
console.log('stringAsInt becomes', stringAsInt, typeof (stringAsInt));
console.log('intAsString becomes', intAsString, typeof (intAsString));
