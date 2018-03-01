// change-menu-values.js
// centriq.com

// Spanish is preferred language or Chrome is displayed in Spanish
if (navigator.languages[0] === 'es' || navigator.language === 'es') {

//init
    var spanishLinknames =
        ['Sobre nosotros', 'Contratar TI', 'eventos',
            'blog', 'Contáctenos'];

    var menuLinks = document.querySelectorAll('nav a');
    // we want to change the innerHTML of each item
    // we should have five links

    for (key in menuLinks) {
        menuLinks[key].innerHTML = spanishLinknames[key];
    }
}