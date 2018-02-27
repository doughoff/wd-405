// guard-values.js

// function is not modifiable
// best way is to check data in function
function sendData(data) {
    // if(!data) {return;}
    console.log("Sent data", data);
    // here's where we send the data...
}

var inputFromForm1;
var inputFromForm2 = "";
var inputFromForm3 = "Doug";

// guard against sending nothing
// sendData(inputFromForm1);  // do not send
// sendData(inputFromForm2);  // do not send
// sendData(inputFromForm3);  // send

// first way
if (inputFromForm1 === true) {
    sendData(inputFromForm1);
}
// second way
if (inputFromForm1) {
    sendData(inputFromForm1);
}
// third way
inputFromForm1 && sendData(inputFromForm1);
inputFromForm2 && sendData(inputFromForm2);
inputFromForm3 && sendData(inputFromForm3);

//guard.jsfunction 
sendData(data){
    if (!data) { console.log("No data sent"); }
    else { console.log("Sent data:  " + data); }
}
