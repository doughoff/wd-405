// default-values.js
function multiply(a,b,c){
    a = a || 0;
    b = b || 1;
    c = c || 1;
    return a * b * c;
}

console.log(multiply()); // returns 0
console.log(multiply(2)); // returns 2
console.log(multiply(2,3)); // returns 6
console.log(multiply(2,3,4)); // returns 24