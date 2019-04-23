// nested-calls.js
// load all the functions in a browser at once

//-------------------------------------- functions
function hey(you) {
    alert('hey! ' + you);
    console.log('hey ' + you);
}

function beAlert(aPerson) {
    hey(aPerson);
    console.log('beAlert ' + aPerson);
}

function makeStuffHappenTo(who) {
    hey(who);
    beAlert(who);
    console.log('makeStuffHappenTo ' + who);
}

//--------------------------------------- tests
// test each line in the browser

hey('Doug');
beAlert('Doug');
makeStuffHappenTo('Doug');
