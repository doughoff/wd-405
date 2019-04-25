// use on centriq.com
var result1 = document.getElementsByClassName('menu-item');
var result2 = document.querySelector('.menu-item');
var result3 = document.querySelectorAll('.menu-item');
var result4 = document.querySelectorAll('.menu-item a');
var result5 = document.querySelector('#gf_5');
var result6 = document.querySelectorAll('h1, h2, h3');
var result7 = document.querySelectorAll('input[value][type= "checkbox"]:not([value=""])');

console.log("getElementsByClassName('menu-item')", result1);
console.log("querySelector('.menu-item')", result2);
console.log("querySelectorAll('.menu-item')", result3);
console.log("querySelectorAll('.menu-item a')", result4);
console.log("querySelector('#gf_5')", result5);
console.log("querySelectorAll('h1, h2, h3')", result6);
console.log("querySelectorAll('input[value][type=\"checkbox\"]:not([value=\"\"])')", result7);
