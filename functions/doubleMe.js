// doubleMe.js
// execute in browser

function doubleMe(aNumber) {
    return aNumber * 2;
}

doubleMe;       // show the function
doubleMe();     // call the function
doubleMe(3);
doubleMe(3, 4);

// create a copy of the function - *not* an alias
var f1 = doubleMe;
f1(3);
