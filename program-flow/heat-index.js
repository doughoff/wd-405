// https://xkcd.com/2026/
// measure the temperature
var readline = require('readline'),
  rl = readline.createInterface(process.stdin, process.stdout),
  prefix = 'TEMP> ';
  
var itDoesNotLookHotEnough = true;
var temperature = 72;

while (itDoesNotLookHotEnough) {
    temperature += 2;
    // does it look hot enough?
    console.log("Heat index is now " + temperature + " degrees.")
    console.log("Does it look hot enough? (y/n)")
    var response = readline();
    if (!itDoesNotLookHotEnough) { return; }
}