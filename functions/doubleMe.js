// doubleMe.js
// console only version

function doubleMe(aNumber) {
    return aNumber * 2;
}

doubleMe;  // shows the function
doubleMe();
doubleMe(3);
doubleMe(3, 4);
var f1 = doubleMe;
f1(3);
