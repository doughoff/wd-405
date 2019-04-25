// scratch 04-25-19
// MSN.com
// count the images
document.images.length

// hide all the images
var images = document.images;
// for-in loop has an error but sorta works
// for (key in images){
//     images[key].style.display = 'none';
// }

// using for loop
var images = document.images;
for (var index = 0; index < images.length; index++) {
     var image = images[index];
     image.style.display = 'none';
}

// turn images back on
var images = document.images;
for (var index = 0; index < images.length; index++) {
     var image = images[index];
     image.style.display = 'block';
}

// put border on divs
var divs = document.querySelectorAll('div');
for (var index = 0; index < divs.length; index++) {
    var div = divs[index];
    div.style.border = '3px dotted red';
}
// or using the for-in loop
var divs = document.querySelectorAll('div');
for (var eachKey in divs) {
    var div = divs[eachKey]
    div['style'] = 'border: 5px fuchsia dotted';
}
