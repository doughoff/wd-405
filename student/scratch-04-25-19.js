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


// get the text of the document body
document.querySelector('body').textContent

// set the text of some element
var newHTML = 'This is <b>NEW</b> text.';
document.querySelector('body').innerHTML = newHTML;

// remove a node/element
// centriq.com
var child = document.querySelector('h1');
console.log('removing the H1 that says', child.innerText);
var parent = child.parentNode;
parent.removeChild(child);


// create a node
var h1 = document.createElement('h1');
h1.innerHTML = "My <b>new</b> headline";
h1.className = 'big-bold';              // fake CSS name
h1.id = 'js-h1';

// clone a node - better
var nodeToClone = document.querySelector('h1');
var clonedH1 = nodeToClone.cloneNode(true);
clonedH1.innerHTML = "My <b>new</b> headline";
clonedH1.id = 'js-h1';

// place the cloned node after the original h1
nodeToClone.insertAdjacentElement('afterend', clonedH1);

// move to before the original h1
// insert moves items already in the DOM
nodeToClone.insertAdjacentElement('beforebegin', clonedH1);

// move header to bottom of page
// centriq.com
var header = document.querySelector('header');
header.style.position = 'relative';
var body = document.querySelector('body');
body.insertAdjacentElement('beforeend', header);