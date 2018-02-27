// doubleMe.js

function doubleMe(aNumber) {
    return aNumber * 2;
}

doubleMe;  // shows the function
doubleMe();
doubleMe(3);
doubleMe(3, 4);

// create a copy of the function - *not* an alias
var f1 = doubleMe;
f1(3);
