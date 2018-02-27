// return.js

function showMyName(){
    // log a value while executing
    console.log('My name is Doug.');
    // send output to caller
    return false;
  }
// execute without using return value
// function turns into value and ourput is not used
  showMyName();

  // execute and log return value
  console.log(showMyName());