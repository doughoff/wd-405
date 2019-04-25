// disable-links.js
// use on any page with links

function disableClicks(e) {
    e.preventDefault();
    console.log(e.target || e.srcElement);
}
for (eachLink in document.links) {
    document.links[eachLink].onclick = disableClicks;
}

