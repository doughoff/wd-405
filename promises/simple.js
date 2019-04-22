// promises
// something will be done
// can either be kept (with output) or broken (with reason why and confirmation).
// may not be any response at all

// Use promises whenever you are using async or blocking code.
// resolve maps to then and reject maps to catch for all practical purposes.
// Make sure to write both .catch and .then methods for all the promises.
// If something needs to be done in both the cases use .finally
// We only get one shot at mutating each promise.
// We can add multiple handlers to a single promise.
// The return type of all the methods in Promise object whether they are static methods or prototype methods is again a Promise
// In Promise.all the order of the promises are maintained in values variable irrespective of which promise was first resolved.

// https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1

var keepsHisWord;
keepsHisWord = true;
promise1 = new Promise(function(resolve, reject) {
  if (keepsHisWord) {
    resolve("The man likes to keep his word");
  } else {
    reject("The man doesnt want to keep his word");
  }
});
console.log(promise1);

promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({
        message: "The man likes to keep his word",
        code: "aManKeepsHisWord"
      });
    }, 10 * 1000);
  });
  console.log(promise2);

  keepsHisWord = false;
promise3 = new Promise(function(resolve, reject) {
  if (keepsHisWord) {
    resolve("The man likes to keep his word");
  } else {
    reject("The man doesn't want to keep his word");
  }
});
console.log(promise3);