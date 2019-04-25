// image-replacement.js
// ssa.gov
var card = document.querySelectorAll('img')[14];
var dog = 'http://www.iconarchive.com/download/i107326/google/noto-emoji-animals-nature/22215-dog.ico';

// test changing one icon to a dog
card.src = dog;
// change all the images to that dog
for (key in document.images) {
    document.images[key].src = dog;
}
