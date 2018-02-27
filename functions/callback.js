// callback.js

function getMyName(){
    return "Doug";
}

// function takes a callback function as last argument
function printFunctionOutput(functionName){
    // do stuff first
    console.log("Before the callback.");
    console.log(functionName());
    console.log("After the callback");
}

// call function with a function name
getMyName && printFunctionOutput(getMyName);