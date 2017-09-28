// string-array.js

var s = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt fuga expedita aspernatur dolorum? Dolor cupiditate maxime, pariatur, nisi provident ut delectus inventore culpa illum nesciunt tenetur tempora minus temporibus asperiores';
var frequency = [];

for (key in s) {
    frequency[s[key].toLowerCase()] = 0;
}

for (key in s) {
    frequency[s[key].toLowerCase()]++;
}

console.log(frequency);