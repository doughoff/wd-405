// change-menu-values.js
// centriq.com

// select container with orange background
// header.header-global sets rgba(253, 147, 27, 0.78)
// or hsla(32, 98%, 55%, 0.78)
var header = document.querySelector('header');

// set the container's background color to another value
// header.style.backgroundColor = 'hsla(212, 98%, 55%, 0.38)';

// set the container's background color based on how much has scrolled off
// window.scrollY in pixels
function changeHue(event) {
    var slowDownRate = .08;
    var hue = (32 + (scrollY * slowDownRate)) % 360;
    header.style.backgroundColor = 'hsla(' + hue +
        ', 98%, 55%, 0.50)';
}
document.onscroll = changeHue;