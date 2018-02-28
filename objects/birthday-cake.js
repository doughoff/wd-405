// birthday-cake.js

// you can start with an empty object
var cake = {};
cake.layers = 3;
cake.flavor = 'chocolate';

// create other objects using object initialization
var frosting = { flavor: 'chocolate fudge', depthInInches: 1 };
var candles = { number: 20, isLit: true, sparkle: function () { } };
// overwrite the function stub
candles.sparkle = function () {
    if (this.isLit) {       // "this" means the object before the function name i.e. candles
        console.log('I\'m sparkling.');
    } else {
        console.log('not sparkling');
    }
}

// add parts to the cake
cake.frosting = frosting;  // same names but different refs
cake.candles = candles;

// test
console.log(cake);
cake.candles.sparkle();


