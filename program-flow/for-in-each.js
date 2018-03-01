// for-in-each.js

// best choice for indexed and associative values
console.log('------------------------------------for-in loop')
var a = [1,2,3,4,5,6,7,8]
a.name =  'integers';
for (key in a){
    console.log(key, '=', a[key]);
}

// good choice for terse indexed values
console.log('------------------------------------functional')
a.forEach(key => {
    console.log(key, '=', a[key]);
});
console.log('------------------------------------functional, full args')
a.forEach((key, i, array) => {
    console.log('#' + i, key, '=', a[key]);
    console.log(array);
});