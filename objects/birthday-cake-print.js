// birthday-cake-print.js
var cake = {
    layers: 3,
    flavor: 'chocolate',
    frosting: {
        flavor: 'chocolate fudge',
        depthInInches: 1
    },
    candles: {
        number: 20,
        isLit: true,
        sparkle: function () {
            console.log('I\'m' + (this.isLit ? '' : ' not ') + 'sparkling.');
        }
    }
};

// show all properties of cake
// if a value is an object, show those properties
function printProperties(o, name) {
    console.log('----------------------------- properties of', name);
    for (key in o) {
        if (typeof o[key] === 'object') {
            printProperties(o[key], name + '.' + key);  // recursion
        } else if (typeof o[key] === 'function') {
            console.log(key + '()');
        } else {
            console.log(key, ':', o[key])
        }
    }
}
printProperties(cake, 'cake');