// click-to-hide.js

// click causes element to hide
// click does nothing else

// write event handler
function hideElement(event){
    event.stopPropagation();
    event.preventDefault();
    event.target.style.display = 'none';
}
// select element to use event handler on and bind
var element = document.querySelector('body');
element.onclick = hideElement;

