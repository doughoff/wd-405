// log-coords.js

function showEvent(e) {
    console.log('x y = ', e.x, e.y, e.target.tagName, 
    'class = ' + e.target.className, 
    'id = ' + e.target.id);
    return false;
}

var html = document.querySelector('html');
html.onclick = showEvent;
// html.onmouseover = showEvent;

// create a button with id = 'google'
var google = document.querySelector('#google');

function takeMeToGoogle() {
    window.location = 'http://google.com';
}
google.onclick = takeMeToGoogle;
