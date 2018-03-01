// move-sections.js

var heroHome = document.querySelector('#hero-home');
var whatIsCentriq = document.querySelector('#what-is-centriq');
var contactUs = document.querySelector('#contact-us');
var eventsAndBlog = document.querySelector('#events-and-blog');

var main = document.querySelector('main');

// move sections around using insert commands
main.appendChild(heroHome);
whatIsCentriq.insertBefore(heroHome, undefined);
