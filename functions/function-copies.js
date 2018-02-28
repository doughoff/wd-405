// function-copies.js

function doFunction1() {
    console.info('Returning from function1');
    return "function1";
}

var f2 = doFunction1;
f2();
