// nested-calls.js

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
hey('Doug');
beAlert('Doug');
makeStuffHappenTo('Doug');
